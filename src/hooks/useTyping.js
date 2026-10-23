import {useState,useEffect} from 'react';
export default function useTyping(text,speed=38){const reduce=typeof matchMedia==='function'&&matchMedia('(prefers-reduced-motion: reduce)').matches;const [n,setN]=useState(reduce?text.length:0);
useEffect(()=>{if(reduce)return;const id=setInterval(()=>setN(v=>{if(v>=text.length){clearInterval(id);return v}return v+1}),speed);return()=>clearInterval(id)},[text,speed,reduce]);return text.slice(0,n)}
