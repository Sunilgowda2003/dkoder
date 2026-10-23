import {useParams,Link} from 'react-router-dom';import {useEffect} from 'react';import {challenges} from '../data/challenges.js';import useSaved from '../hooks/useSaved.js';import NotFound from './NotFound.jsx';
export default function Challenge(){const {id}=useParams();const c=challenges.find(x=>x.id===id);const [saved,toggle]=useSaved();
useEffect(()=>{document.title=(c?c.title:'Not found')+' | Dkoder'},[c]);if(!c)return <NotFound/>;
const on=saved.includes(c.id);
return(<section className="section"><div className="wrap"><Link to="/explore">Back to all challenges</Link><h1 className="page-title" style={{marginTop:'1rem'}}>{c.title}</h1>
<span className="tag">{c.difficulty}</span><span className="tag">{c.tech}</span><span className="tag">{c.minutes} min</span><p style={{marginTop:'1rem'}}>{c.summary}</p>
<p className="note">Demo data. There is no editor or test runner yet, so this page describes the task only.</p>
<button className={`btn ${on?'on':''}`} aria-pressed={on} onClick={()=>toggle(c.id)}>{on?'Saved':'Save challenge'}</button></div></section>)}
