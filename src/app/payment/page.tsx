'use client';
import { useState } from 'react';
import { activateSubscription } from '@/lib/subscription';
import { getCurrentUser } from '@/lib/auth';

export default function Page(){
  const [msg,setMsg]=useState('');
  async function pay(plan='monthly'){
    setMsg('Processando pagamento (simulado)...');
    const user = getCurrentUser();
    if(!user){
      setMsg('Faça login antes de pagar.');
      return;
    }
    const res = activateSubscription(plan, user.id);
    if(res.success){
      setMsg('Pagamento confirmado. Plano ativo.');
      setTimeout(()=> window.location.href = '/download',800);
    } else {
      setMsg('Erro ao ativar subscrição.');
    }
  }
  return (<div style={{maxWidth:640, margin:'40px auto', padding:20}}>
    <h2>Pagamento</h2>
    <p>Simule o pagamento do plano escolhido.</p>
    <button onClick={()=>pay('monthly')}>Pagar Plano Mensal (simulado)</button>
    <p>{msg}</p>
  </div>);
}
