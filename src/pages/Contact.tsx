import { FormEvent, useState } from 'react'
import { img } from '../data'
import { Section } from '../components/Section'

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
}

export function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('')

  const handleChange = (field: keyof typeof initialForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
    if (status) setStatus('')
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { firstName, lastName, email, subject, message } = form
    if (!firstName || !lastName || !email || !subject || !message) {
      setStatus('Please fill in all fields before sending.')
      return
    }

    const body = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      '',
      'Message:',
      message,
    ].join('\n')

    window.location.href = `mailto:delizioso@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setStatus('Your email app is opening. Please send the message from there.')
    setForm(initialForm)
  }

  return (
    <>
      <Section>
        <h1 className="title text-center">Contact us</h1>
        <p className="mx-auto mt-6 max-w-lg text-center text-sm leading-7">We love hearing from our customers. Feel free to share your experience or ask any questions you may have.</p>
        <form onSubmit={handleSubmit} className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          <input className="field" placeholder="First name" value={form.firstName} onChange={e => handleChange('firstName', e.target.value)} required />
          <input className="field" placeholder="Last name" value={form.lastName} onChange={e => handleChange('lastName', e.target.value)} required />
          <input className="field" type="email" placeholder="Email address" value={form.email} onChange={e => handleChange('email', e.target.value)} required />
          <input className="field" placeholder="Subject" value={form.subject} onChange={e => handleChange('subject', e.target.value)} required />
          <textarea className="field h-44 resize-none sm:col-span-2" placeholder="Message" value={form.message} onChange={e => handleChange('message', e.target.value)} required />
          {status && <p className="sm:col-span-2 text-center text-sm text-orange">{status}</p>}
          <button type="submit" className="btn-o mx-auto mt-4 !rounded-xl !px-24 sm:col-span-2">Submit</button>
        </form>
      </Section>
      <div className="relative h-72 bg-[#E5EEF3] dark:bg-night2 md:h-96">
        <iframe title="Map" className="h-full w-full opacity-80 dark:opacity-60" src="https://www.openstreetmap.org/export/embed.html?bbox=-73.93,40.82,-73.88,40.86&layer=mapnik" />
        <div className="absolute left-1/2 top-1/2 flex w-[90%] max-w-sm -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-xl bg-white p-3 text-xs shadow-lg dark:bg-night">
          <img src={img('restaurant,exterior', 80, 80)} alt="" className="h-14 w-14 rounded-lg object-cover" />
          <div className="flex-1"><p className="font-semibold">Delizioso Restaurant</p><p className="opacity-70">Bronx, NY 10463, Amerika Serikat</p></div>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-brown text-white">➤</span></div>
      </div>
    </>
  )
}
