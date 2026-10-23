import {Link} from 'react-router-dom';import {useEffect} from 'react';
export default function NotFound(){useEffect(()=>{document.title='Page not found | Dkoder'},[]);
return(<section className="section"><div className="wrap"><h1>404</h1><p>That page is not part of this prototype. Head back to a page that is.</p><Link className="btn on" to="/">Go to home</Link></div></section>)}
