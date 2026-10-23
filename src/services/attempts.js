import {load,save} from './storage.js';import {exams} from '../data/exams.js';import {questions} from '../data/questions.js';import {scoreAttempt} from '../utils/scoring.js';
// Demo only: attempts live in this browser and are not tamper-proof.
const valid=a=>a&&typeof a.id==='string'&&typeof a.examId==='string'&&Number.isFinite(a.deadline)&&a.answers&&typeof a.answers==='object'&&Array.isArray(a.marked);
const all=()=>{const v=load('attempts',[]);return Array.isArray(v)?v.filter(valid):[]};
const put=a=>save('attempts',[...all().filter(x=>x.id!==a.id),a]);
export const listAttempts=()=>all().sort((x,y)=>y.startedAt-x.startedAt);
export const getAttempt=id=>all().find(a=>a.id===id)||null;
export const findOpen=examId=>all().find(a=>a.examId===examId&&!a.submittedAt)||null;
export function startAttempt(examId){const e=exams.find(x=>x.id===examId);if(!e)return null;const open=findOpen(examId);if(open)return open;
const now=Date.now(),a={id:'at'+now.toString(36),examId,startedAt:now,deadline:now+e.minutes*60000,answers:{},marked:[],submittedAt:null,result:null};put(a);return a}
export const saveProgress=a=>{if(!a.submittedAt)put(a);return a};
export function submitAttempt(id){const a=getAttempt(id);if(!a)return null;if(a.submittedAt)return a; // duplicate submits return the stored result
const e=exams.find(x=>x.id===a.examId),qs=e.questionIds.map(i=>questions.find(q=>q.id===i)),t=Math.min(Date.now(),a.deadline);
const done={...a,submittedAt:t,result:scoreAttempt(e,qs,a.answers)};put(done);return done}
