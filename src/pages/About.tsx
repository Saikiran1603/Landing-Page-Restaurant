import { img, lorem } from '../data'
import { Ringed } from '../components/Ringed'
import { Section } from '../components/Section'

export function About() {
  const p = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  return (
    <Section>
      <div className="grid items-center gap-10 md:grid-cols-2">
        <Ringed src={img('chef,kitchen', 500, 500)} alt="Chef cooking" className="mx-auto w-full max-w-sm" />
        <div><h1 className="title">Our <span className="text-brown dark:text-cream">restaurant</span></h1><p className="mt-6 text-sm leading-7">{p} {p}</p></div>
      </div>
      <div className="mt-16 grid items-center gap-10 md:grid-cols-2">
        <p className="order-2 text-sm leading-7 md:order-1">{p} {p}</p>
        <Ringed src={img('restaurant,food,menu', 500, 500)} alt="Dishes" className="order-1 mx-auto w-full max-w-sm md:order-2" />
      </div>
      <div className="mt-16 grid items-center gap-10 md:grid-cols-[1fr_1.4fr]">
        <img src={img('chef,man,portrait', 500, 600)} alt="Ismail Marzuki" className="mx-auto w-full max-w-xs rounded-[28px] object-cover" />
        <div><h2 className="title"><span className="text-orange">Owner</span> & Executive Chef</h2>
          <p className="mt-4 font-semibold">Ismail Marzuki</p><p className="mt-4 text-sm italic leading-7 text-orange"><span className="mr-1 font-serif text-2xl not-italic">“</span>{lorem}</p></div>
      </div>
    </Section>
  )
}
