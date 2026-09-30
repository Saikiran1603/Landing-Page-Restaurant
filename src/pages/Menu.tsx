import { useState } from 'react'
import { categories, Dish, dishes } from '../data'
import { DishCard } from '../components/DishCard'
import { Pills } from '../components/Pills'
import { Section } from '../components/Section'

type Add = (d: Dish) => void

export function MenuPage({ add }: { add: Add }) {
  const [cat, setCat] = useState(categories[0])
  const [page, setPage] = useState(1)
  const list = dishes.filter(d => cat === categories[0] || d.cat === cat)
  const pageSize = 6
  const pageCount = Math.max(1, Math.ceil(list.length / pageSize))
  const visible = list.slice((page - 1) * pageSize, page * pageSize)
  const changeCategory = (next: string) => { setCat(next); setPage(1) }
  return (
    <Section>
      <h1 className="title text-center">Menu</h1>
      <div className="mt-10"><Pills items={categories} value={cat} onChange={changeCategory} /></div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{visible.map(d => <DishCard key={d.id} d={d} onAdd={add} />)}</div>
      <div className="mt-12 flex items-center justify-center gap-3">
        <button onClick={() => setPage(current => Math.max(1, current - 1))} disabled={page === 1} className="grid h-9 w-9 place-items-center rounded-lg bg-brown text-white disabled:cursor-not-allowed disabled:opacity-40 dark:bg-orange" aria-label="Previous">‹</button>
        {Array.from({ length: pageCount }, (_, index) => index + 1).map(number => <button key={number} onClick={() => setPage(number)} aria-current={page === number ? 'page' : undefined} className={`grid h-9 w-9 place-items-center rounded-lg text-xs ${page === number ? 'bg-orange text-white' : 'bg-peach text-orange dark:bg-night2'}`}>{number}</button>)}
        <button onClick={() => setPage(current => Math.min(pageCount, current + 1))} disabled={page === pageCount} className="grid h-9 w-9 place-items-center rounded-lg bg-brown text-white disabled:cursor-not-allowed disabled:opacity-40 dark:bg-orange" aria-label="Next">›</button>
      </div>
    </Section>
  )
}
