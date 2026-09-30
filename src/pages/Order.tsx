import { useState } from 'react'
import { categories, Dish, dishes } from '../data'
import { DishCard } from '../components/DishCard'
import { Pills } from '../components/Pills'
import { Section } from '../components/Section'
import { go } from '../route'

type Add = (d: Dish) => void
export type CartLine = { dish: Dish; qty: number }

export function Order({ add, cart, setQty }: { add: Add; cart: CartLine[]; setQty: (id: number, q: number) => void }) {
  const [cat, setCat] = useState(categories[0])
  const [page, setPage] = useState(1)
  const [code, setCode] = useState('FREETOEAT')
  const sub = cart.reduce((s, l) => s + l.dish.price * l.qty, 0)
  const tax = sub ? 3.5 : 0, voucher = sub && code === 'FREETOEAT' ? 5 : 0
  const list = dishes.filter(d => cat === categories[0] || d.cat === cat)
  const pageSize = 6
  const pageCount = Math.max(1, Math.ceil(list.length / pageSize))
  const visible = list.slice((page - 1) * pageSize, page * pageSize)
  const changeCategory = (next: string) => { setCat(next); setPage(1) }
  return (
    <Section>
      <h1 className="title text-center">Menu</h1>
      <div className="mt-10"><Pills items={categories} value={cat} onChange={changeCategory} /></div>
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div><h2 className="mb-6 inline-block border-b-2 border-orange pb-1 text-sm font-bold">{cat === categories[0] ? 'All Dishes' : cat.toUpperCase()}</h2>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{visible.map((d, i) => {
            const line = cart.find(l => l.dish.id === d.id)
            return <DishCard key={d.id} d={d} onAdd={add} active={i === 0} qty={line?.qty ?? 0} />
          })}</div>
          <div className="mt-10 flex items-center justify-center gap-3">
            <button onClick={() => setPage(current => Math.max(1, current - 1))} disabled={page === 1} className="grid h-9 w-9 place-items-center rounded-lg bg-brown text-white disabled:cursor-not-allowed disabled:opacity-40 dark:bg-orange" aria-label="Previous">‹</button>
            {Array.from({ length: pageCount }, (_, index) => index + 1).map(number => <button key={number} onClick={() => setPage(number)} aria-current={page === number ? 'page' : undefined} className={`grid h-9 w-9 place-items-center rounded-lg text-xs ${page === number ? 'bg-orange text-white' : 'bg-peach text-orange dark:bg-night2'}`}>{number}</button>)}
            <button onClick={() => setPage(current => Math.min(pageCount, current + 1))} disabled={page === pageCount} className="grid h-9 w-9 place-items-center rounded-lg bg-brown text-white disabled:cursor-not-allowed disabled:opacity-40 dark:bg-orange" aria-label="Next">›</button>
          </div>
        </div>
        <aside className="h-fit rounded-3xl bg-white p-5 shadow-[0_10px_40px_-12px_rgba(0,0,0,.2)] dark:bg-night2 lg:sticky lg:top-24">
          <div className="rounded-2xl bg-plum py-4 text-center text-lg font-semibold text-white">Order list</div>
          {cart.length === 0 && <p className="py-8 text-center text-sm opacity-60">Your order list is empty. Add a dish from the menu.</p>}
          <ul className="mt-4 space-y-4">{cart.map(({ dish, qty }) => (
            <li key={dish.id} className="flex items-center gap-3"><img src={dish.img} alt="" className="h-14 w-14 rounded-full object-cover" />
              <div className="flex-1 text-xs"><p className="font-semibold">{dish.name}</p>
                <div className="mt-1 flex items-center gap-2"><button onClick={() => setQty(dish.id, qty - 1)} className="h-5 w-5 rounded border" aria-label="Decrease">−</button>{qty}<button onClick={() => setQty(dish.id, qty + 1)} className="h-5 w-5 rounded border" aria-label="Increase">+</button></div></div>
              <div className="text-right text-xs font-semibold text-orange">${(dish.price * qty).toFixed(2)}<button onClick={() => setQty(dish.id, 0)} className="block text-red-500" aria-label="Remove">🗑</button></div></li>))}</ul>
          <p className="mt-6 text-xs font-semibold">Voucher Code</p>
          <div className="mt-2 flex gap-2"><input value={code} onChange={e => setCode(e.target.value)} className="field !py-2.5 text-center text-blue-600" /><button className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-sky-500 text-white">+</button></div>
          <dl className="mt-5 space-y-2 border-t pt-4 text-xs">{([['Subtotal', sub], ['Tax fee', tax], ['Voucher', voucher]] as [string, number][]).map(([k, v]) => <div key={k} className="flex justify-between"><dt className="font-semibold">{k}</dt><dd className="font-semibold text-orange">${v.toFixed(2)}</dd></div>)}</dl>
          <button onClick={() => go('checkout')} className="btn-o mt-5 w-full !rounded-xl">Order Now · ${Math.max(sub + tax - voucher, 0).toFixed(2)}</button>
        </aside>
      </div>
    </Section>
  )
}
