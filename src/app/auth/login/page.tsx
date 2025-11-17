'use client'
import { useState } from 'react'
import { login } from '@/lib/auth'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setMsg('Entrando...')
    try {
      const res = await login(email, password)
      if (res && res.success) {
        setMsg('Logado com sucesso')
        // redirect to home
        window.location.href = '/'
      } else {
        setMsg(res?.message || 'Credenciais inválidas')
      }
    } catch (err) {
      setMsg('Erro ao conectar')
    }
  }

  return (
    <div style={{maxWidth:520, margin:'40px auto', padding:20}}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{marginBottom:8}}>
          <input placeholder='email' value={email} onChange={e=>setEmail(e.target.value)} required />
        </div>
        <div style={{marginBottom:12}}>
          <input type='password' placeholder='senha' value={password} onChange={e=>setPassword(e.target.value)} required />
        </div>
        <button type='submit'>Entrar</button>
      </form>
      <p style={{marginTop:12}}>{msg}</p>
      <p style={{fontSize:13}}>Ainda não tem conta? <a href='/auth/register'>Registrar</a></p>
    </div>
  )
}
