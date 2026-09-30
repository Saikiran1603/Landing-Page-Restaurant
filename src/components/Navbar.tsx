import { useState } from 'react'
import { go, Route } from '../route'
import { Logo } from './Logo'

const links: [string, Route][] = [
  ['Home', 'home'], ['Menu', 'menu'], ['About us', 'about'],
  ['Order online', 'order'], ['Reservation', 'reservation'], ['Contact us', 'contact'],
]

export function Navbar({ route, cart, dark, toggle }: { route: Route; cart: number; dark: boolean; toggle: () => void }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur dark:bg-night/95">
      <div className="wrap flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 text-xs lg:flex">
          {links.map(([l, r]) => (
            <button key={r} onClick={() => go(r)} className={`transition hover:text-orange ${route === r ? 'text-orange' : ''}`}>{l}</button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={toggle} aria-label="Toggle dark mode" className="grid h-9 w-9 place-items-center rounded-full bg-field text-base dark:bg-night2">{dark ? '☀️' : '🌙'}</button>
          <button onClick={() => go('order')} aria-label="Cart" className="relative grid h-9 w-9 place-items-center">
            🛒<span className="absolute right-0 top-0 grid h-4 w-4 place-items-center rounded-full bg-red-500 text-[9px] text-white">{cart}</span>
          </button>
          <button onClick={() => go('login')} className="btn hidden !bg-transparent !px-4 !py-2 !text-brown ring-1 ring-brown/20 dark:!text-cream dark:ring-white/20 sm:inline-flex">Log in</button>
          <button onClick={() => go('signup')} className="btn-g hidden !px-6 !py-2 sm:inline-flex">Sign up</button>
          <button onClick={() => setOpen(!open)} className="grid h-9 w-9 place-items-center text-xl lg:hidden" aria-label="Menu">{open ? '✕' : '☰'}</button>
        </div>
      </div>
      {open && (
        <nav className="wrap flex flex-col gap-1 pb-4 lg:hidden">
          {[...links, ['Log in', 'login'] as [string, Route], ['Sign up', 'signup'] as [string, Route]].map(([l, r]) => (
            <button key={r} onClick={() => { go(r); setOpen(false) }} className={`rounded-lg px-3 py-2 text-left text-sm ${route === r ? 'bg-peach text-orange dark:bg-night2' : ''}`}>{l}</button>
          ))}
        </nav>
      )}
    </header>
  )
}
