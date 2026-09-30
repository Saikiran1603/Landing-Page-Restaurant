import { Dish } from '../data'
import { Stars } from './Stars'

export function DishCard({ d, onAdd, active = false, qty = 0 }: { d: Dish; onAdd: (d: Dish) => void; active?: boolean; qty?: number }) {
  return (
    <div className={`flex flex-col items-center rounded-[36px] p-6 text-center ${active ? 'bg-orange text-white' : 'bg-cream dark:bg-night2'}`}>
      <div className="relative">
        <img src={d.img} alt={d.name} loading="lazy" className="dish-img h-36 w-36 sm:h-40 sm:w-40" />
        {qty > 0 && <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-white text-[11px] font-bold text-orange shadow">{qty}x</span>}
      </div>
      <h3 className="mt-5 font-semibold">{d.name}</h3>
      <Stars />
      <p className="mt-3 line-clamp-3 text-[11px] leading-5 opacity-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.</p>
      <div className="mt-5 flex w-full items-center justify-between">
        <span className="font-bold">${d.price.toFixed(2)}</span>
        <button onClick={() => onAdd(d)} className={`rounded-full px-5 py-2 text-xs font-semibold ${active ? 'bg-white text-orange' : 'bg-orange text-white'}`}>Order now</button>
      </div>
    </div>
  )
}
