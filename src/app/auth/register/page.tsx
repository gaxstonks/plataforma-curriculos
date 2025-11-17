'use client'
import { useState } from 'react'
import { createAccount } from '@/lib/auth'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [msg, setMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setMsg('Registrando...')
    try {
      const res = await createAccount({ email, password, name })
      if (res && res.success) {
        setMsg('Registrado com sucesso')
        window.location.href = '/'
      } else {
        setMsg(res?.message || 'Erro no registro')
      }
    } catch (err) {
      setMsg('Erro ao conectar')
    }
  }

  return (
    <div style={{maxWidth:520, margin:'40px auto', padding:20}}>
      <h2>Registrar</h2>
      <form onSubmit={handleSubmit}>
        <div style={{marginBottom:8}}>
          <input placeholder='nome' value={name} onChange={e=>setName(e.target.value)} required />
        </div>
        <div style={{marginBottom:8}}>
          <input placeholder='email' value={email} onChange={e=>setEmail(e.target.value)} required />
        </div>
        <div style={{marginBottom:12}}>
          <input type='password' placeholder='senha' value={password} onChange={e=>setPassword(e.target.value)} required />
        </div>
        <button type='submit'>Registrar</button>
      </form>
      <p style={{marginTop:12}}>{msg}</p>
      <p style={{fontSize:13}}>Já tem conta? <a href='/auth/login'>Entrar</a></p>
    </div>
  )
}
