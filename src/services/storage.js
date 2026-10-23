const P='dkoder:v1:';
export const load=(k,fb)=>{try{const v=localStorage.getItem(P+k);return v===null?fb:JSON.parse(v)}catch{return fb}};
export const save=(k,v)=>{try{localStorage.setItem(P+k,JSON.stringify(v))}catch{/* storage unavailable: state stays in memory */}};
