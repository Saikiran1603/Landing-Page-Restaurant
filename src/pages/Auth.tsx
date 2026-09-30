import { ChangeEvent, FormEvent, ReactNode, useState } from 'react'
import { img } from '../data'
import { go } from '../route'

const Label = ({ children }: { children: ReactNode }) => <p className="mb-2 text-xs font-medium">{children}</p>

type UserRecord = { name?: string; email: string; password: string }

const USERS_KEY = 'delizioso-users'
const CURRENT_USER_KEY = 'delizioso-current-user'

const readUsers = (): UserRecord[] => {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) ?? '[]')
  } catch {
    return []
  }
}

const saveUsers = (users: UserRecord[]) => localStorage.setItem(USERS_KEY, JSON.stringify(users))

export function Auth({ mode }: { mode: 'login' | 'signup' }) {
  const signup = mode === 'signup'
  const sideImage = 'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?auto=format&fit=crop&w=900&h=1200&q=80'
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [status, setStatus] = useState('')

  const updateField = (field: 'name' | 'email' | 'password', e: ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }))
    if (status) setStatus('')
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const email = form.email.trim().toLowerCase()
    const password = form.password.trim()

    if (!email || !password || (signup && !form.name.trim())) {
      setStatus(signup ? 'Please fill in your name, email, and password.' : 'Please enter your email and password.')
      return
    }

    if (signup) {
      const users = readUsers()
      const match = users.find(u => u.email === email)

      if (match) {
        setStatus('An account with this email already exists.')
        return
      }

      const nextUsers = [...users, { name: form.name.trim(), email, password }]
      saveUsers(nextUsers)
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({ name: form.name.trim(), email }))
      setStatus('Account created successfully.')
      setForm({ name: '', email: '', password: '' })
      setTimeout(() => go('home'), 600)
      return
    }

    const users = readUsers()
    const user = users.find(u => u.email === email && u.password === password)

    if (!user) {
      setStatus('Invalid email or password.')
      return
    }

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({ name: user.name ?? 'Guest', email: user.email }))
    setStatus('Login successful.')
    setForm({ name: '', email: '', password: '' })
    setTimeout(() => go('home'), 600)
  }

  return (
    <div className="grid min-h-[calc(100vh-5rem)] md:grid-cols-2">
      <div className="flex flex-col justify-center px-6 py-12 sm:px-16 lg:px-24">
        <form onSubmit={handleSubmit} className="mx-auto w-full max-w-sm">
          <h1 className="text-3xl font-bold">{signup ? 'Sign up' : 'Login'}</h1>
          <p className="mt-3 text-xs">{signup ? 'Already have an account?' : "Don't have an account?"} <button type="button" onClick={() => go(signup ? 'login' : 'signup')} className="text-sky-500">{signup ? 'Log in' : 'Sign up'}</button></p>
          <div className="mt-8 space-y-5">
            {signup && <div><Label>Full name</Label><input className="field" placeholder="Full name" value={form.name} onChange={e => updateField('name', e)} /></div>}
            <div><Label>Email address</Label><input className="field" type="email" placeholder="Email address" value={form.email} onChange={e => updateField('email', e)} /></div>
            <div><Label>Password</Label><input className="field" type="password" placeholder="Password" value={form.password} onChange={e => updateField('password', e)} /></div>
          </div>
          {status && <p className="mt-4 text-center text-sm text-orange">{status}</p>}
          <div className="mt-6 flex items-center justify-between text-xs"><label className="flex items-center gap-2"><input type="checkbox" className="accent-orange" />Remember me</label><a href="#" className="hover:text-orange">Forget Password?</a></div>
          <button type="submit" className="btn-o mt-6 w-full !rounded-lg">{signup ? 'Sign up' : 'Log in'}</button>
          <button type="button" className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border py-3 text-xs dark:border-white/20"><b className="text-blue-500">G</b>{signup ? 'Sign up' : 'Log in'} with google</button>
        </form>
        <p className="mt-10 text-center text-xs opacity-50">Copyright © 2022 Delizioso</p>
      </div>
      <img src={sideImage} alt={signup ? 'Sign up illustration' : 'Login illustration'} className="h-64 w-full object-cover md:h-full" />
    </div>
  )
}
