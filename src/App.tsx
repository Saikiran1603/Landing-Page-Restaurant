import { useEffect, useState } from 'react'
import { Dish } from './data'
import { About } from './pages/About'
import { Auth } from './pages/Auth'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { MenuPage } from './pages/Menu'
import { CartLine, Order } from './pages/Order'
import { Checkout } from './pages/Checkout'
import { Reservation } from './pages/Reservation'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Route } from './route'

const read = (): Route => (window.location.hash.slice(1) || 'home') as Route

export default function App() {
  const [route, setRoute] = useState<Route>(read)
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  const [cart, setCart] = useState<CartLine[]>([])

  useEffect(() => { const f = () => setRoute(read()); window.addEventListener('hashchange', f); return () => window.removeEventListener('hashchange', f) }, [])
  const toggle = () => { const n = !dark; setDark(n); document.documentElement.classList.toggle('dark', n); localStorage.theme = n ? 'dark' : 'light' }
  const add = (d: Dish) => setCart(c => c.some(l => l.dish.id === d.id) ? c.map(l => l.dish.id === d.id ? { ...l, qty: l.qty + 1 } : l) : [...c, { dish: d, qty: 1 }])
  const setQty = (id: number, q: number) => setCart(c => c.map(l => l.dish.id === id ? { ...l, qty: q } : l).filter(l => l.qty > 0))
  const count = cart.reduce((s, l) => s + l.qty, 0)
  const visibleRoute = route

  const page = {
    home: <Home add={add} />, menu: <MenuPage add={add} />, about: <About />, reservation: <Reservation />, contact: <Contact />,
    order: <Order add={add} cart={cart} setQty={setQty} />, checkout: <Checkout cart={cart} onOrderSuccess={() => setCart([])} />, login: <Auth mode="login" />, signup: <Auth mode="signup" />,
  }[visibleRoute] ?? <Home add={add} />

  return (<><Navbar route={visibleRoute} cart={count} dark={dark} toggle={toggle} /><main>{page}</main>{visibleRoute !== 'login' && visibleRoute !== 'signup' && <Footer />}</>)
}
