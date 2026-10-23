import {useState,useEffect} from 'react';import {NavLink,Link,useLocation} from 'react-router-dom';import Logo from './Logo.jsx';
const links=[['/','Home'],['/practice','Practice'],['/mock-exams','Mock exams'],['/explore','Coding challenges'],['/about','About']];
export default function Header(){const [open,setOpen]=useState(false);const {pathname}=useLocation();
useEffect(()=>setOpen(false),[pathname]);
useEffect(()=>{if(!open)return;const k=e=>e.key==='Escape'&&setOpen(false);document.addEventListener('keydown',k);return()=>document.removeEventListener('keydown',k)},[open]);
return(<header className="hdr"><div className="wrap"><Link to="/" className="logo"><Logo/>Dkoder</Link>
<nav className="nav" aria-label="Main">{links.map(([to,l])=><NavLink key={to} to={to} end={to==='/'}>{l}</NavLink>)}</nav>
<button className="burger" aria-expanded={open} aria-controls="mnav" onClick={()=>setOpen(o=>!o)}>{open?'Close':'Menu'}</button></div>
{open&&<nav id="mnav" className="mnav" aria-label="Mobile">{links.map(([to,l])=><NavLink key={to} to={to} end={to==='/'}>{l}</NavLink>)}</nav>}</header>)}
