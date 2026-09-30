import { Logo } from './Logo'

const FooterCol = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h4 className="mb-4 text-sm font-semibold text-orange">{title}</h4>
    <ul className="space-y-2 text-xs text-white/90">{items.map(i => <li key={i}>{i}</li>)}</ul>
  </div>
)

export function Footer() {
  return (
    <footer className="bg-[#2E1D0A] py-14 text-white dark:bg-black/40">
      <div className="wrap grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
        <div className="max-w-xs">
          <Logo light />
          <p className="mt-5 text-xs leading-6">Viverra gravida morbi egestas facilisis tortor netus non duis tempor.</p>
          <div className="mt-5 flex gap-3">{['𝕏', '◎', 'f'].map(s => <span key={s} className="grid h-9 w-9 place-items-center rounded-full bg-white text-sm font-bold text-brown">{s}</span>)}</div>
        </div>
        <FooterCol title="Page" items={['Home', 'Menu', 'Order online', 'Catering', 'Reservation']} />
        <FooterCol title="Information" items={['About us', 'Testimonial', 'Event']} />
        <div>
          <h4 className="mb-4 text-sm font-semibold text-orange">Get in touch</h4>
          <p className="text-xs leading-6">3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat</p>
          <p className="mt-3 text-xs">delizioso@gmail.com</p>
          <p className="mt-3 text-xs">+123 4567 8901</p>
        </div>
      </div>
      <p className="wrap mt-12 text-center text-xs">Copyright © 2022 Delizioso</p>
    </footer>
  )
}
