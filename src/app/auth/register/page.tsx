'use client';
import { useState } from 'react';
import { createAccount } from '@/lib/auth';
export default function Page(){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [name,setName]=useState('');
  const [msg,setMsg]=useState('');
  async function submit(e){
    e.preventDefault();
    setMsg('Registrando...');
    const res = await createAccount({email,password,name});
    if(res.success){
      setMsg('Registrado com sucesso');
      window.location.href = '/';
    } else {
      setMsg(res.message || 'Erro');
    }
  }
  return (<div style={{maxWidth:520, margin:'40px auto', padding:20}}>
    <h2>Registrar</h2>
    <form onSubmit={submit}>
      <input required placeholder='nome' value={name} onChange={e=>setName(e.target.value)} />
      <input required placeholder='email' value={email} onChange={e=>setEmail(e.target.value)} />
      <input required placeholder='senha' type='password' value={password} onChange={e=>setPassword(e.target.value)} />
      <button type='submit'>Registrar</button>
    </form>
    <p>{msg}</p>
    <p>Já tem conta? <a href='/auth/login'>Entrar</a></p>
  </div>);
}
