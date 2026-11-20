#!/usr/bin/env node
/**
 * Data integrity validator for data/content.js.
 *
 * Exits non-zero if any check fails so CI can block bad commits.
 * Checks:
 *   1. computerEnglishData exists and categories is a non-empty array
 *   2. Every category has id / name / nameCN / items
 *   3. Every item has id / english / chinese / pronunciation / example
 *   4. All item ids are globally unique
 *   5. Category ids are unique
 *   6. Optional insight fields (imagery / scenarios / codeContext /
 *      wordFamily) have the right shape when present
 *   7. Every file referenced by index.html (script/link) exists on disk
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const CONTENT = path.join(ROOT, 'data', 'content.js');
const INDEX = path.join(ROOT, 'index.html');

let failed = 0;
function error(msg) {
  console.error('  ✗ ' + msg);
  failed++;
}
function ok(msg) {
  console.log('  ✓ ' + msg);
}

console.log('Loading ' + path.relative(ROOT, CONTENT) + ' ...');
const sandbox = {};
vm.createContext(sandbox);
// Top-level `const` is block-scoped in the vm script and never attached to
// the context object, so we explicitly export it after evaluation.
vm.runInContext(
  fs.readFileSync(CONTENT, 'utf8') + '\n;globalThis.__data = computerEnglishData;',
  sandbox,
  { filename: 'content.js' }
);

const data = sandbox.__data;

if (!data) { console.error('FATAL: computerEnglishData is not defined'); process.exit(1); }
if (!Array.isArray(data.categories) || data.categories.length === 0) {
  console.error('FATAL: data.categories must be a non-empty array');
  process.exit(1);
}

const categoryIds = new Set();
const seenIds = new Set();
let itemCount = 0;
let insightCount = 0;

for (const cat of data.categories) {
  if (!cat.id || typeof cat.id !== 'string') error(`category missing id: ${JSON.stringify(cat).slice(0, 80)}`);
  if (!cat.name) error(`category ${cat.id}: missing name`);
  if (!cat.nameCN) error(`category ${cat.id}: missing nameCN`);
  if (!Array.isArray(cat.items) || cat.items.length === 0) error(`category ${cat.id}: items must be a non-empty array`);
  if (categoryIds.has(cat.id)) error(`duplicate category id: ${cat.id}`);
  categoryIds.add(cat.id);

  for (const item of (cat.items || [])) {
    itemCount++;
    for (const field of ['id', 'english', 'chinese', 'pronunciation', 'example']) {
      if (!item[field] || typeof item[field] !== 'string') {
        error(`item in ${cat.id} missing ${field}: ${JSON.stringify(item).slice(0, 80)}`);
      }
    }
    if (seenIds.has(item.id)) error(`duplicate item id: ${item.id} (in ${cat.id})`);
    seenIds.add(item.id);

    // Optional programmer-context fields. They are intentionally optional so
    // the other ~2000 entries stay valid, but must be well-formed when used.
    if (item.imagery !== undefined &&
        (typeof item.imagery !== 'string' || !item.imagery.trim())) {
      error(`item ${item.id}: imagery must be a non-empty string`);
    }
    if (item.scenarios !== undefined) {
      if (!Array.isArray(item.scenarios) || item.scenarios.length === 0) {
        error(`item ${item.id}: scenarios must be a non-empty array`);
      } else {
        item.scenarios.forEach((s, idx) => {
          if (!s || typeof s !== 'object' ||
              typeof s.name !== 'string' || !s.name.trim() ||
              typeof s.text !== 'string' || !s.text.trim()) {
            error(`item ${item.id}: scenarios[${idx}] needs non-empty name and text`);
          }
        });
      }
    }
    if (item.codeContext !== undefined &&
        (typeof item.codeContext !== 'string' || !item.codeContext.trim())) {
      error(`item ${item.id}: codeContext must be a non-empty string`);
    }
    if (item.wordFamily !== undefined) {
      if (!Array.isArray(item.wordFamily) || item.wordFamily.length === 0 ||
          item.wordFamily.some(w => typeof w !== 'string' || !w.trim())) {
        error(`item ${item.id}: wordFamily must be a non-empty array of strings`);
      }
    }
    if ((typeof item.imagery === 'string' && item.imagery.trim()) ||
        (Array.isArray(item.scenarios) && item.scenarios.length > 0)) {
      insightCount++;
    }
  }
}

ok(`${data.categories.length} categories, ${itemCount} items`);
ok(`${insightCount} items with imagery / scenario insights`);
if (categoryIds.size === data.categories.length) ok('category ids unique');
if (seenIds.size === itemCount) ok('item ids globally unique');

// --- Asset references in index.html exist on disk ---
const html = fs.readFileSync(INDEX, 'utf8');
const refs = [...html.matchAll(/(?:src|href)="(?!https?:|\/\/|#|mailto:)([^"]+)"/g)].map(m => m[1]);
for (const ref of refs) {
  const p = path.join(ROOT, ref.replace(/^\.\//, ''));
  if (!fs.existsSync(p)) error(`index.html references missing file: ${ref}`);
  else ok(`asset exists: ${ref}`);
}

if (failed > 0) {
  console.error(`\nFAILED with ${failed} error(s)`);
  process.exit(1);
}
console.log('\nAll data integrity checks passed.');
