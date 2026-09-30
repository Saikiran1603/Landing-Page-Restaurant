import { useState } from 'react'
import { categories, chefs, Dish, dishes, img, lorem } from '../data'
import { Confetti } from '../components/Confetti'
import { DishCard } from '../components/DishCard'
import { Pills } from '../components/Pills'
import { Ringed } from '../components/Ringed'
import { Section } from '../components/Section'
import { go } from '../route'

type Add = (d: Dish) => void

export function Home({ add }: { add: Add }) {
  const [cat, setCat] = useState(categories[0])
  const list = dishes.filter(d => cat === categories[0] || d.cat === cat)
  return (<>
    <Section className="!py-10 md:!py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <span className="rounded-full bg-peach px-5 py-1.5 text-xs text-orange dark:bg-orange/20">Restaurant</span>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-tight md:text-7xl">Italian<br />Cuisine</h1>
          <p className="mt-6 max-w-md text-sm leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales senectus dictum arcu sit tristique donec eget.</p>
          <div className="mt-10 flex gap-4"><button onClick={() => go('order')} className="btn-o !px-10">Order now</button><button onClick={() => go('reservation')} className="btn-g !px-10">Reservation</button></div>
        </div>
        <img src={img('spaghetti,plate', 600, 600)} alt="Spaghetti" className="dish-img mx-auto aspect-square w-full max-w-md" />
      </div>
    </Section>
    <Section className="bg-mint dark:bg-night2">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <img src={img('salad,bowl', 600, 600)} alt="Salad" className="dish-img mx-auto aspect-square w-full max-w-md" />
        <div><h2 className="title !text-4xl md:!text-6xl">Welcome to <span className="block text-orange">delizioso</span></h2>
          <p className="mt-8 max-w-md text-sm leading-7">{lorem}</p>
          <button onClick={() => go('menu')} className="btn-o mt-10 !px-8">See our menu</button></div>
      </div>
    </Section>
    <Section>
      <h2 className="title text-center">Our popular menu</h2>
      <div className="mt-10"><Pills items={categories} value={cat} onChange={setCat} /></div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{list.map(d => <DishCard key={d.id} d={d} onAdd={add} />)}</div>
    </Section>
    <Reserve />
    <Chefs />
    <Testimonials />
    <OpenBanner />
  </>)
}

function Reserve() {
  return (
    <Section className="bg-cream dark:bg-night2/60">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <Ringed src={img('food,table,dishes', 600, 600)} alt="Table full of dishes" className="mx-auto w-full max-w-md" />
        <div><h2 className="title !text-4xl md:!text-6xl">Let's reserve <span className="block text-orange">a table</span></h2>
          <p className="mt-8 max-w-md text-sm leading-7">{lorem}</p>
          <button onClick={() => go('reservation')} className="btn-o mt-10 !px-8">Reservation</button></div>
      </div>
    </Section>
  )
}

function Chefs() {
  return (
    <Section>
      <h2 className="title text-center">Our greatest chef</h2>
      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        {chefs.map(c => (
          <div key={c.name} className="text-center">
            <div className={`aspect-[4/5] overflow-hidden rounded-[32px] ${c.bg}`}><img src={c.img} alt={c.name} loading="lazy" className="h-full w-full object-cover" /></div>
            <p className="mt-5 font-semibold">{c.name}</p><p className="mt-2 text-sm opacity-60">{c.role}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center"><button className="btn-o !px-9">View all</button></div>
    </Section>
  )
}

function Testimonials() {
  const faces = [1, 2, 3, 4, 5].map(i => img(`face,portrait,${i}`, 120, 120))
  const [i, setI] = useState(2)
  return (
    <Section className="relative overflow-hidden bg-field dark:bg-night2/60">
      <Confetti />
      <h2 className="title relative text-center">Our customers say</h2>
      <div className="relative mx-auto mt-10 max-w-xl text-center">
        <img src={faces[i]} alt="Starla Virgoun" className="mx-auto h-32 w-32 rounded-full object-cover md:h-40 md:w-40" />
        <p className="mt-6 font-semibold">Starla Virgoun</p><p className="text-xs opacity-70">Financial advisor</p>
        <p className="mt-6 text-sm leading-7"><span className="mr-2 font-serif text-2xl align-top">“</span>{lorem}<span className="ml-2 font-serif text-2xl align-bottom">”</span></p>
        <div className="mt-8 flex items-center justify-center gap-3">
          {faces.map((f, k) => <button key={k} onClick={() => setI(k)} aria-label={`Testimonial ${k + 1}`} className={`rounded-full ${k === i ? 'p-1.5 ring-4 ring-orange/50' : 'opacity-70'}`}><img src={f} alt="" className={`rounded-full object-cover ${k === i ? 'h-14 w-14' : 'h-10 w-10'}`} /></button>)}
        </div>
      </div>
    </Section>
  )
}

function OpenBanner() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-[60px] bg-black px-6 py-14 text-center text-white sm:rounded-[90px]">
        <img src={img('ramen,noodles', 1000, 400)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="relative">
          <h2 className="font-serif text-3xl font-bold md:text-5xl">we are open from</h2>
          <p className="mt-4 text-xl font-semibold md:text-2xl">Monday-Sunday</p>
          <p className="mt-4 text-xs leading-6">Launch : Mon-Sun : 11:00am–02:00pm<br />Dinner : sunday : 04:00pm–08:00pm<br />04:00pm–09:00pm</p>
          <div className="mt-8 flex justify-center gap-3"><button onClick={() => go('order')} className="btn-o">Order now</button><button onClick={() => go('reservation')} className="btn bg-field !text-brown">Reservation</button></div>
        </div>
      </div>
    </Section>
  )
}
