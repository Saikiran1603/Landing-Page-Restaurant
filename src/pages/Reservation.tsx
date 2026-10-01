import { useState } from 'react'
import { img, lorem } from '../data'
import { Ringed } from '../components/Ringed'
import { Detail, Modal } from './ReservationModal'

const dateOptions = ['Tuesday, 12 November 2026', 'Friday, 15 November 2026', 'Saturday, 23 November 2026']
const timeOptions = ['6:00 PM', '7:30 PM', '8:30 PM', '9:00 PM']
const partyOptions = ['2 people', '4 people', '6 people', '8 people']

export function Reservation() {
  const [step, setStep] = useState<'form' | 'details' | 'done' | 'cancel'>('form')
  const [reservation, setReservation] = useState({
    date: dateOptions[0],
    time: timeOptions[0],
    partySize: partyOptions[0],
  })

  const sel = (label: string, value: string, options: string[], onChange: (value: string) => void) => (
    <div className="relative">
      <select className="field appearance-none" value={value} onChange={e => onChange(e.target.value)}>
        <option value="" disabled>{label}</option>
        {options.map(option => <option key={option} value={option}>{option}</option>)}
      </select>
      <span className="pointer-events-none absolute right-4 top-3.5 text-xs">⌄</span>
    </div>
  )

  return (
    <>
      <section className="py-10 md:py-16"><div className="wrap grid items-center gap-10 md:grid-cols-2">
        <Ringed src={img('restaurant,table,glass', 600, 600)} alt="Restaurant table" className="mx-auto w-full max-w-md" />
        <div className="max-w-md"><h1 className="title">Book a table</h1>
          <div className="mt-8 space-y-4">
            {sel('Date', reservation.date, dateOptions, value => setReservation(prev => ({ ...prev, date: value })))}
            {sel('Time', reservation.time, timeOptions, value => setReservation(prev => ({ ...prev, time: value })))}
            {sel('Party size', reservation.partySize, partyOptions, value => setReservation(prev => ({ ...prev, partySize: value })))}
            <button onClick={() => setStep('details')} className="btn-o w-full !rounded-xl !py-4">Book now</button>
          </div>
        </div>
      </div></section>
      {step === 'details' && <Modal onClose={() => setStep('form')}>
        <h2 className="text-center font-serif text-3xl font-bold">Reservation</h2>
        <p className="mt-4 rounded-lg bg-skybanner p-3 text-xs text-sky-900 dark:bg-sky-900/70 dark:text-sky-100">Due to limited availability, we can hold this table for you for <b>5:00 minutes</b></p>
        <div className="mt-5 grid gap-5 sm:grid-cols-[1.4fr_1fr]">
          <div className="space-y-3"><p className="text-sm font-semibold">Reservation details</p>
            <input className="field" placeholder="First name" /><input className="field" placeholder="Last name" /><input className="field" placeholder="Phone number" /><input className="field" placeholder="Email address" />
            {sel('Select an occasion (optional)', '', ['Birthday', 'Anniversary', 'Business dinner', 'Casual dinner'], () => undefined)}
            <textarea className="field h-28 resize-none" placeholder="Add a special request" />
            <label className="flex gap-2 text-xs"><input type="checkbox" className="accent-orange" />Sign me up to receive dining offers and news from this restaurant by email.</label></div>
          <div className="space-y-4"><Detail date={reservation.date} time={reservation.time} partySize={reservation.partySize} /><div><p className="text-sm font-semibold">Restaurant Informations</p><p className="mt-2 text-xs leading-6 opacity-80">{lorem}</p></div></div>
        </div>
        <button onClick={() => setStep('done')} className="btn-o mt-6 w-full !rounded-xl !py-4">Confirm reservation</button>
      </Modal>}
      {step === 'done' && <Modal onClose={() => setStep('form')}>
        <div className="-mx-6 -mt-2 mb-5 rounded-lg bg-confirmgreen px-6 py-5 text-white sm:-mx-8 sm:px-8"><h2 className="text-xl font-semibold">Reservation has been confirmed</h2><p className="mt-2 text-xs">📧 The confirmation result has been sent to your email<br />🔖 Booking ID : #123456</p></div>
        <div className="grid items-center gap-5 sm:grid-cols-[auto_1fr_auto]"><Ringed src={img('restaurant,table', 200, 200)} alt="" className="w-24" /><Detail date={reservation.date} time={reservation.time} partySize={reservation.partySize} />
          <div className="flex gap-3 sm:flex-col"><button className="flex-1 rounded-lg bg-sky-100 px-6 py-2.5 text-sm font-medium text-sky-800">Modify ✎</button><button onClick={() => setStep('cancel')} className="flex-1 rounded-lg bg-red-100 px-6 py-2.5 text-sm font-medium text-red-600">Cancel ✕</button></div></div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">{sel('Select an occasion (optional)', '', ['Birthday', 'Anniversary', 'Business dinner', 'Casual dinner'], () => undefined)}<div><p className="text-sm font-semibold">Restaurant Informations</p><p className="mt-2 text-xs leading-6 opacity-80">{lorem}</p></div></div>
      </Modal>}
      {step === 'cancel' && <Modal onClose={() => setStep('form')}>
        <div className="-mx-6 -mt-2 mb-5 bg-orange px-6 py-5 text-white sm:-mx-8 sm:px-8"><h2 className="text-2xl font-semibold">Are you sure you want to cancel the reservation?</h2><p className="mt-2 text-xs">🔖 Booking ID : #123456</p></div>
        <div className="grid items-center gap-5 sm:grid-cols-[auto_1fr]"><Ringed src={img('restaurant,table', 200, 200)} alt="" className="w-24" /><Detail date={reservation.date} time={reservation.time} partySize={reservation.partySize} /></div>
        <button onClick={() => setStep('form')} className="btn mt-6 w-full !rounded-xl !bg-cancelred !py-4">Cancel reservation</button>
      </Modal>}
    </>
  )
}
