import {useState,useEffect,useMemo} from 'react';import {useSearchParams} from 'react-router-dom';import {tracks,questions} from '../data/questions.js';
export default function Practice(){const [sp,setSp]=useSearchParams();const track=tracks.some(t=>t.id===sp.get('track'))?sp.get('track'):'aptitude';
const qs=useMemo(()=>questions.filter(x=>x.track===track),[track]);
const [i,setI]=useState(0);const [pick,setPick]=useState({});const [done,setDone]=useState({});
useEffect(()=>{document.title='MCQ practice | Dkoder'},[]);
const reset=()=>{setI(0);setPick({});setDone({})};const change=id=>{setSp({track:id});reset()};
const q=qs[i];const sub=done[q.id];const score=qs.filter(x=>done[x.id]&&pick[x.id]===x.a).length;const all=qs.every(x=>done[x.id]);
return(<section className="section"><div className="wrap"><h1 className="page-title">MCQ practice</h1>
<p className="note">Sample questions written for this prototype, not official exam material. Scores are not saved.</p>
<div className="tabs" role="group" aria-label="Practice track">{tracks.map(t=><button key={t.id} className={`btn ${t.id===track?'on':'ghost'}`} aria-pressed={t.id===track} onClick={()=>change(t.id)}>{t.name}</button>)}</div>
<div className="bar-wrap" role="progressbar" aria-valuemin="0" aria-valuemax={qs.length} aria-valuenow={Object.keys(done).length} aria-label="Questions answered"><div className="bar-fill" style={{width:`${Object.keys(done).length/qs.length*100}%`}}/></div>
{all?<div className="card"><h2>Score: {score} of {qs.length}</h2><p>Review any question with Previous, or start again.</p><button className="btn on" onClick={reset}>Restart</button></div>:null}
<fieldset className="q card"><legend>Question {i+1} of {qs.length}</legend><p><strong>{q.q}</strong></p>
{q.o.map((o,k)=>{const st=sub?(k===q.a?'right':pick[q.id]===k?'wrong':''):'';return(<label key={k} className={`opt ${st}`}><input type="radio" name={q.id} disabled={sub} checked={pick[q.id]===k} onChange={()=>setPick(p=>({...p,[q.id]:k}))}/>{o}{sub&&k===q.a?' (correct)':''}{sub&&st==='wrong'?' (your answer)':''}</label>)})}
{sub&&<p className="note" role="status">{pick[q.id]===q.a?'Correct. ':'Not quite. '}{q.why}</p>}
<div className="cta" style={{opacity:1,animation:'none'}}><button className="btn ghost" disabled={i===0} onClick={()=>setI(i-1)}>Previous</button>
{!sub&&<button className="btn on" disabled={pick[q.id]===undefined} onClick={()=>setDone(d=>({...d,[q.id]:true}))}>Submit answer</button>}
<button className="btn" disabled={i===qs.length-1} onClick={()=>setI(i+1)}>Next</button></div></fieldset></div></section>)}
