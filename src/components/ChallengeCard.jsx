import {Link} from 'react-router-dom';
export default function ChallengeCard({c,saved,onToggle}){return(<article className="card rv"><div><span className="tag">{c.difficulty}</span><span className="tag">{c.tech}</span></div>
<h3><Link to={`/explore/${c.id}`}>{c.title}</Link></h3><p>{c.summary}</p><p><small>{c.category}, about {c.minutes} min</small></p>
<button className={`btn ${saved?'on':''}`} aria-pressed={saved} onClick={()=>onToggle(c.id)}>{saved?'Saved':'Save challenge'}</button></article>)}
