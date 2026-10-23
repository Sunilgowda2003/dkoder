import {useState,useMemo,useEffect} from 'react';import {challenges} from '../data/challenges.js';import ChallengeCard from '../components/ChallengeCard.jsx';import useSaved from '../hooks/useSaved.js';import useReveal from '../hooks/useReveal.js';
const uniq=k=>['All',...new Set(challenges.map(c=>c[k]))];const order={Easy:0,Medium:1,Hard:2};
export default function Explore(){const [q,setQ]=useState('');const [d,setD]=useState('All');const [t,setT]=useState('All');const [s,setS]=useState('title');const [saved,toggle]=useSaved();
useEffect(()=>{document.title='Explore challenges | Dkoder'},[]);
const list=useMemo(()=>challenges.filter(c=>(d==='All'||c.difficulty===d)&&(t==='All'||c.tech===t)&&(c.title+c.summary+c.category).toLowerCase().includes(q.trim().toLowerCase()))
.sort((a,b)=>s==='title'?a.title.localeCompare(b.title):s==='time'?a.minutes-b.minutes:order[a.difficulty]-order[b.difficulty]),[q,d,t,s]);
useReveal(list.length+q+d+t+s);
return(<section className="section"><div className="wrap"><h1 className="page-title">Explore challenges</h1>
<p className="note">Demo data. Challenges cannot be run here because no code execution engine exists yet.</p>
<div className="tools"><label>Search<input type="search" value={q} onChange={e=>setQ(e.target.value)} placeholder="Try cache"/></label>
<label>Difficulty<select value={d} onChange={e=>setD(e.target.value)}>{uniq('difficulty').map(x=><option key={x}>{x}</option>)}</select></label>
<label>Technology<select value={t} onChange={e=>setT(e.target.value)}>{uniq('tech').map(x=><option key={x}>{x}</option>)}</select></label>
<label>Sort by<select value={s} onChange={e=>setS(e.target.value)}><option value="title">Title</option><option value="time">Shortest first</option><option value="difficulty">Easiest first</option></select></label></div>
<p aria-live="polite">{list.length} of {challenges.length} challenges, {saved.length} saved</p>
{list.length?<div className="grid">{list.map(c=><ChallengeCard key={c.id} c={c} saved={saved.includes(c.id)} onToggle={toggle}/>)}</div>:
<div className="empty"><h2>No challenges match</h2><p>Clear the search or set the filters back to All.</p><button className="btn" onClick={()=>{setQ('');setD('All');setT('All')}}>Clear filters</button></div>}</div></section>)}
