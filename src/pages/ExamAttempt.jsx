import {useState,useEffect,useRef,useCallback} from 'react';import {useParams,useNavigate,Navigate} from 'react-router-dom';import {getExam} from '../data/exams.js';import {questions} from '../data/questions.js';import {findOpen,saveProgress,submitAttempt} from '../services/attempts.js';
const fmt=s=>`${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;
export default function ExamAttempt(){const {examId}=useParams();const nav=useNavigate();const e=getExam(examId);const [att,setAtt]=useState(()=>e?findOpen(examId):null);
const [i,setI]=useState(0);const [ask,setAsk]=useState(false);const [left,setLeft]=useState(()=>att?Math.max(0,Math.ceil((att.deadline-Date.now())/1000)):0);const sent=useRef(false);
const finish=useCallback(()=>{if(sent.current||!att)return;sent.current=true;const r=submitAttempt(att.id);nav(`/mock-exams/${examId}/results/${r.id}`,{replace:true})},[att,examId,nav]);
useEffect(()=>{if(!att)return;const tick=()=>{const s=Math.max(0,Math.ceil((att.deadline-Date.now())/1000));setLeft(s);if(s<=0)finish()};tick();const id=setInterval(tick,1000);return()=>clearInterval(id)},[att,finish]);
useEffect(()=>{document.title='Exam in progress | Dkoder'},[]);
if(!e||!att)return <Navigate to={`/mock-exams/${examId}`} replace/>;
const qs=e.questionIds.map(id=>questions.find(q=>q.id===id));const q=qs[i];
const upd=p=>{const n=saveProgress({...att,...p});setAtt(n)};
const pick=k=>upd({answers:{...att.answers,[q.id]:k}});const clear=()=>{const a={...att.answers};delete a[q.id];upd({answers:a})};
const mark=()=>upd({marked:att.marked.includes(q.id)?att.marked.filter(x=>x!==q.id):[...att.marked,q.id]});
const answered=Object.keys(att.answers).length;
return(<section className="section"><div className="wrap"><div className="exam-top"><h1 className="page-title" style={{margin:0,fontSize:'1.6rem'}}>{e.title}</h1><p className={`timer ${left<60?'low':''}`} role="timer" aria-label="Time remaining">{fmt(left)} left</p></div>
<div className="bar-wrap" role="progressbar" aria-valuemin="0" aria-valuemax={qs.length} aria-valuenow={answered} aria-label="Questions answered"><div className="bar-fill" style={{width:`${answered/qs.length*100}%`}}/></div>
<div className="exam-grid"><fieldset className="q card"><legend>Question {i+1} of {qs.length}</legend><p><strong>{q.q}</strong></p>
{q.o.map((o,k)=><label key={k} className="opt"><input type="radio" name={q.id} checked={att.answers[q.id]===k} onChange={()=>pick(k)}/>{o}</label>)}
<div className="cta" style={{opacity:1,animation:'none'}}><button className="btn ghost" disabled={i===0} onClick={()=>setI(i-1)}>Previous</button><button className="btn" disabled={i===qs.length-1} onClick={()=>setI(i+1)}>Next</button>
<button className="btn ghost" disabled={att.answers[q.id]===undefined} onClick={clear}>Clear response</button><button className="btn ghost" aria-pressed={att.marked.includes(q.id)} onClick={mark}>{att.marked.includes(q.id)?'Unmark review':'Mark for review'}</button></div></fieldset>
<aside className="card" aria-label="Question palette"><h2 style={{fontSize:'1.2rem'}}>Questions</h2><div className="pal">{qs.map((x,k)=>{const a=att.answers[x.id]!==undefined,m=att.marked.includes(x.id);return <button key={x.id} className={`pb ${a?'ans':''} ${m?'mk':''} ${k===i?'cur':''}`} aria-current={k===i} aria-label={`Question ${k+1}, ${a?'answered':'unanswered'}${m?', marked for review':''}`} onClick={()=>setI(k)}>{k+1}{m?'*':''}</button>})}</div>
<p><small>Filled: answered. Asterisk: marked for review.</small></p>
{ask?<div role="alertdialog" aria-labelledby="cf" className="note"><p id="cf">Submit now? {qs.length-answered} unanswered. You cannot change answers afterwards.</p><button className="btn on" onClick={finish}>Yes, submit</button> <button className="btn ghost" onClick={()=>setAsk(false)}>Keep working</button></div>:<button className="btn on" onClick={()=>setAsk(true)}>Submit exam</button>}</aside></div></div></section>)}
