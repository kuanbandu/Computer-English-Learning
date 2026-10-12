#!/usr/bin/env node
/**
 * Unit tests for js/core/srs.js (SM-2 spaced repetition).
 * Run: node scripts/test-srs.js  — exits non-zero on failure.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'js', 'core', 'srs.js'), 'utf8'), sandbox, { filename: 'srs.js' });
const SRS = sandbox.window.SRS;

let failed = 0;
function assert(cond, msg) {
  if (cond) console.log('  ✓ ' + msg);
  else { console.error('  ✗ ' + msg); failed++; }
}

console.log('SM-2 interval progression:');
let s;
s = SRS.review(undefined, SRS.RATING.GOOD);
assert(s.reps === 1 && s.interval === 1, 'first Good -> interval 1 day');
s = SRS.review(s, SRS.RATING.GOOD);
assert(s.reps === 2 && s.interval === 6, 'second Good -> interval 6 days');
s = SRS.review(s, SRS.RATING.GOOD);
assert(s.reps === 3 && s.interval > 6, `third Good -> interval grows (${s.interval} days)`);
const efBefore = s.ef;
s = SRS.review(s, SRS.RATING.EASY);
assert(s.ef >= efBefore, 'Easy does not decrease ef');
assert(s.interval > 10, `Easy boosts interval (${s.interval} days)`);

console.log('Lapse handling:');
s = SRS.review(s, SRS.RATING.FORGOT);
assert(s.reps === 0, 'Forgot resets reps to 0');
assert(s.lapses === 1, 'Forgot increments lapses');
const efBefore2 = s.ef;
const s2 = SRS.review(s, SRS.RATING.FORGOT);
assert(s2.ef <= efBefore2, 'repeated Forgot does not raise ef');
assert(SRS.MIN_EF >= 1.3, 'ef floor >= 1.3 (SM-2 spec)');
let s3 = s;
for (let i = 0; i < 50; i++) s3 = SRS.review(s3, SRS.RATING.FORGOT);
assert(s3.ef >= SRS.MIN_EF, `ef never drops below floor (${s3.ef})`);

console.log('Summarize:');
const stats = SRS.summarize({}, new Date());
assert(stats.due === 0 && stats.newCards === 0, 'empty map -> all zeros');
const map = { a: SRS.review(undefined, SRS.RATING.GOOD), b: SRS.review(undefined, SRS.RATING.FORGOT) };
map.a.interval = 21;
const stats2 = SRS.summarize(map, new Date());
assert(stats2.newCards >= 1, 'unreviewed item counted as new');

console.log('Prioritize:');
const order = SRS.prioritize(['a', 'b', 'c'], map, new Date());
assert(Array.isArray(order) && order.length === 3, 'prioritize returns all ids');

console.log('todayKey / DAY_MS:');
const k = SRS.todayKey(new Date('2026-10-12T15:30:00Z'));
const k2 = SRS.todayKey(new Date('2026-10-12T23:59:59Z'));
assert(k === k2, 'same UTC day -> same key');
assert(SRS.DAY_MS === 86400000, 'DAY_MS is one day in ms');

if (failed > 0) {
  console.error(`\n${failed} test(s) FAILED`);
  process.exit(1);
}
console.log('\nAll SRS tests passed.');
