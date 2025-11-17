'use client';
import { useState } from 'react';
import { login } from '@/lib/auth';
export default function Page(){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [msg,setMsg]=useState('');
  async function submit(e){
    e.preventDefault();
    setMsg('Entrando...');
    const res = await login(email,password);
    if(res.success){
      setMsg('Logado com sucesso');
      window.location.href = '/';
    } else {
      setMsg(res.message || 'Erro');
    }
  }
  return (<div style={{maxWidth:520, margin:'40px auto', padding:20}}>
    <h2>Login</h2>
    <form onSubmit={submit}>
      <input required placeholder='email' value={email} onChange={e=>setEmail(e.target.value)} />
      <input required placeholder='senha' type='password' value={password} onChange={e=>setPassword(e.target.value)} />
      <button type='submit'>Entrar</button>
    </form>
    <p>{msg}</p>
    <p>Não tem conta? <a href='/auth/register'>Registrar</a></p>
  </div>);
}
