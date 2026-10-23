import {useEffect} from 'react';
export default function useReveal(dep){useEffect(()=>{document.documentElement.classList.add('js');const els=[...document.querySelectorAll('.rv:not(.in)')];
if(!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('in'));return}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});els.forEach(e=>io.observe(e));return()=>io.disconnect()},[dep])}
