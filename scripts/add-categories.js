#!/usr/bin/env node
/**
 * Merge new categories into data/content.js without touching it by hand.
 *
 * Usage:  node scripts/add-categories.js <path-to-categories.json>
 *
 * The JSON file must contain an array of category objects with the same
 * shape as data/content.js entries:
 *   [{ "id", "name", "nameCN", "description", "items": [
 *        { "id", "english", "chinese", "pronunciation", "example", "category" } ] }]
 *
 * - Refuses to merge if any category id already exists.
 * - Preserves the existing file's indentation and line-ending style.
 * - Idempotent-ish: run validate-data.js afterwards to double check.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const CONTENT = path.join(ROOT, 'data', 'content.js');

if (process.argv.length < 3) {
  console.error('Usage: node scripts/add-categories.js <categories.json>');
  process.exit(1);
}

const newCatsPath = path.resolve(process.argv[2]);
const newCats = JSON.parse(fs.readFileSync(newCatsPath, 'utf8'));
if (!Array.isArray(newCats) || newCats.length === 0) {
  console.error('Input must be a non-empty array of categories.');
  process.exit(1);
}

let src = fs.readFileSync(CONTENT, 'utf8');
const eol = src.includes('\r\n') ? '\r\n' : '\n';

// Detect existing category ids via the module export trick.
const vm = require('vm');
const sb = {};
vm.createContext(sb);
vm.runInContext(src + ';globalThis.__d=computerEnglishData;', sb, { filename: 'content.js' });
const existing = new Set(sb.__d.categories.map(c => c.id));

for (const cat of newCats) {
  if (existing.has(cat.id)) {
    console.error(`Category id "${cat.id}" already exists; aborting without changes.`);
    process.exit(1);
  }
}

// Insertion point: the closing of the categories array before `};`.
const marker = eol + '  ]' + eol + '};';
const idx = src.lastIndexOf(marker);
if (idx === -1) {
  console.error('Could not find the end of the categories array; aborting.');
  process.exit(1);
}

const before = src.slice(0, idx);           // ends with the last category's "}"
const after = src.slice(idx);               // starts with eol + "  ]" + eol + "};"

const catsJs = newCats.map(cat => {
  // JSON.stringify with 2-space indent, then indent the whole block by 4
  // so it matches the existing nesting of the categories array.
  return '    ' + JSON.stringify(cat, null, 2).split('\n').join(eol + '    ');
}).join(',' + eol);

const out = before + ',' + eol + catsJs + after;
fs.writeFileSync(CONTENT, out);

console.log(`Merged ${newCats.length} new categories into data/content.js:`);
newCats.forEach(c => console.log(`  + ${c.id} (${c.items.length} items)`));
