import { ReactNode } from 'react'
import { Logo } from '../components/Logo'

export const Modal = ({ children, onClose }: { children: ReactNode; onClose: () => void }) => (
  <div className="fixed inset-0 z-40 grid place-items-center overflow-y-auto bg-black/60 p-4" role="dialog" aria-modal="true">
    <div className="relative my-6 w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl dark:bg-night sm:p-8">
      <button onClick={onClose} aria-label="Close" className="absolute -top-3 left-1/2 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full bg-white text-brown shadow">✕</button>
      <div className="mb-5 flex items-center justify-between"><Logo />
        <div className="flex gap-2"><button className="btn-o !px-4 !py-1.5 !text-xs">Sign in</button><button className="btn-g !px-4 !py-1.5 !text-xs">Sign up</button></div></div>
      {children}
    </div>
  </div>
)

export const Detail = ({
  title = 'Reservation detail',
  date = 'Select date',
  time = 'Select time',
  partySize = '2 people',
}: {
  title?: string
  date?: string
  time?: string
  partySize?: string
}) => (
  <div className="rounded-xl bg-field p-4 text-xs leading-8 dark:bg-night2">
    <p className="text-sm font-semibold">{title}</p>
    <div>📅 {date}</div>
    <div>🕓 {time}</div>
    <div>👤 {partySize} (Standard seating)</div>
  </div>
)
