import test from 'node:test';import assert from 'node:assert/strict';import {scoreAttempt} from '../src/utils/scoring.js';
const qs=[{id:'x',a:1},{id:'y',a:0},{id:'z',a:2}],ex={marks:{right:1,wrong:-0.25}};
test('counts, negative marking and accuracy',()=>{const r=scoreAttempt(ex,qs,{x:1,y:3});assert.deepEqual([r.correct,r.wrong,r.unanswered,r.score,r.accuracy],[1,1,1,0.75,50])});
test('empty attempt scores zero',()=>assert.equal(scoreAttempt(ex,qs,{}).score,0));
