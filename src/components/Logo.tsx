import { go } from '../route'

export const Logo = ({ light = false }: { light?: boolean }) => (
  <button onClick={() => go('home')} className="flex items-center gap-2 font-bold" aria-label="Delizioso home">
    <span className="grid h-10 w-10 place-items-center rounded-full bg-orange text-lg text-white">D</span>
    <span className={`text-sm ${light ? 'text-white' : ''}`}>Delizi<span className="text-orange">oso</span></span>
  </button>
)
