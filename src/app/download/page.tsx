'use client';
import { useEffect, useState } from 'react';
import { canDownloadPDF } from '@/lib/subscription';

export default function Page(){
  const [allowed,setAllowed]=useState(null);
  useEffect(()=>{
    const ok = canDownloadPDF();
    setAllowed(ok);
    if(!ok) setTimeout(()=> window.location.href='/payment',1200);
  },[]);
  if(allowed===null) return <p>Carregando...</p>;
  if(!allowed) return <p>Plano não ativo. Redirecionando para pagamento...</p>;
  return (<div style={{maxWidth:640, margin:'40px auto', padding:20}}>
    <h2>Download</h2>
    <a href="/files/sample.pdf" download>Baixar PDF</a>
  </div>);
}
