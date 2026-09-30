import { FormEvent, useState } from 'react'
import { go } from '../route'
import { CartLine } from './Order'

type CheckoutProps = { cart: CartLine[] }

export function Checkout({ cart }: CheckoutProps) {
  const [address, setAddress] = useState('1131 Ogden Ave, Bronx, NY 10452, United States')
  const [addressOpen, setAddressOpen] = useState(false)
  const [addressDraft, setAddressDraft] = useState(address)
  const [orderTime, setOrderTime] = useState('now')
  const [method, setMethod] = useState('delivery')
  const [payment, setPayment] = useState('cash')
  const [accepted, setAccepted] = useState(true)
  const [status, setStatus] = useState('')

  const subtotal = cart.reduce((total, line) => total + line.dish.price * line.qty, 0)
  const tax = subtotal ? 3.5 : 0
  const total = subtotal + tax

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!accepted) {
      setStatus('Please accept the Terms of use & Privacy Policy.')
      return
    }
    setStatus('Your order has been placed successfully.')
  }

  return (
    <section className="wrap py-12 md:py-16">
      <button onClick={() => go('order')} className="mb-5 grid h-9 w-9 place-items-center rounded-full bg-brown text-white" aria-label="Back to order">←</button>
      <h1 className="title text-center">Checkout</h1>
      <form onSubmit={submit} className="mx-auto mt-12 max-w-5xl space-y-10">
        <section>
          <h2 className="mb-5 text-lg font-semibold">Shipping address</h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="field flex items-center">{address}</div>
            <button type="button" onClick={() => { setAddressDraft(address); setAddressOpen(true) }} className="btn-g shrink-0 !rounded-xl">Change</button>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-lg font-semibold">Order data</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <input className="field" placeholder="First name" required />
            <input className="field" placeholder="Last name" required />
            <input className="field" placeholder="Phone number" type="tel" required />
            <input className="field" placeholder="Email address" type="email" required />
            <textarea className="field min-h-32 resize-y md:col-span-2" placeholder="Note" />
          </div>
        </section>

        <fieldset>
          <legend className="mb-5 text-lg font-semibold">Order time</legend>
          <div className="flex flex-wrap gap-8">
            {([['now', 'Order now'], ['later', 'Order later']] as const).map(([value, label]) => <label key={value} className="flex cursor-pointer items-center gap-3"><input type="radio" name="order-time" value={value} checked={orderTime === value} onChange={() => setOrderTime(value)} className="h-5 w-5 accent-leaf" />{label}</label>)}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-5 text-lg font-semibold">Order method</legend>
          <div className="flex flex-wrap gap-8">
            {([['delivery', 'Delivery'], ['takeaway', 'Take a way']] as const).map(([value, label]) => <label key={value} className="flex cursor-pointer items-center gap-3"><input type="radio" name="method" value={value} checked={method === value} onChange={() => setMethod(value)} className="h-5 w-5 accent-leaf" />{label}</label>)}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-5 text-lg font-semibold">Payment method</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            {([['cash', 'Cash On Delivery'], ['virtual', 'BCA Virtual Account'], ['card', 'Credit Card'], ['bank', 'Transfer Bank']] as const).map(([value, label]) => <label key={value} className="flex cursor-pointer items-center gap-3 rounded-xl bg-field px-5 py-4"><input type="radio" name="payment" value={value} checked={payment === value} onChange={() => setPayment(value)} className="h-5 w-5 accent-leaf" />{label}</label>)}
          </div>
        </fieldset>

        <label className="flex items-start gap-3 text-sm"><input type="checkbox" checked={accepted} onChange={event => setAccepted(event.target.checked)} className="mt-1 h-5 w-5 accent-brown" />Choose to indicate that you have read and agree to our Terms of use & Privacy Policy.</label>
        {status && <p className="text-center text-sm text-orange">{status}</p>}
        <div className="flex flex-col items-center gap-3"><p className="text-sm">Total: <strong className="text-orange">${total.toFixed(2)}</strong></p><button type="submit" className="btn-o w-full max-w-xs !rounded-xl">Order now</button></div>
      </form>

      {addressOpen && <div className="fixed inset-0 z-50 grid place-items-center bg-brown/60 p-4"><div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl dark:bg-night2"><div className="flex items-center justify-between"><h2 className="text-xl font-semibold">Shipping address</h2><button type="button" onClick={() => setAddressOpen(false)} className="text-2xl" aria-label="Close">×</button></div><div className="mt-5 flex gap-3"><input className="field" value={addressDraft} onChange={event => setAddressDraft(event.target.value)} placeholder="Please type your address" /><button type="button" onClick={() => setAddress(addressDraft.trim() || address)} className="btn-g shrink-0 !rounded-xl">Search</button></div><button type="button" onClick={() => setAddress('Current location')} className="mt-3 text-sm text-red-500">Use your current location</button><div className="mt-5 grid min-h-56 place-items-center rounded-xl bg-[#d7e3d0] p-6 text-center text-sm text-brown"><div className="rounded-xl bg-white p-4 shadow"><strong>Selected address</strong><p className="mt-1">{addressDraft || 'Choose an address above'}</p></div></div><button type="button" onClick={() => setAddressOpen(false)} className="btn-o mt-5 w-full !rounded-xl">Confirmation</button></div></div>}
    </section>
  )
}