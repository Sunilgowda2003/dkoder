import {useState,useEffect} from 'react';import {load,save} from '../services/storage.js';
export default function useSaved(){const [saved,setSaved]=useState(()=>load('saved',[]));useEffect(()=>save('saved',saved),[saved]);
const toggle=id=>setSaved(s=>s.includes(id)?s.filter(x=>x!==id):[...s,id]);return [saved,toggle]}
