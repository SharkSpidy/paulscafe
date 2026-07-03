import { useReveal } from '../hooks/useReveal'
import BrassSeal from './BrassSeal'

export default function About() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="about" className="relative bg-espresso-950 px-6 py-28 sm:py-36">
      <div ref={ref} className="reveal mx-auto max-w-3xl text-center">
        <BrassSeal className="mx-auto mb-8 h-10 w-10 text-brass/60" />

        <h2 className="font-display text-4xl font-medium text-cream sm:text-5xl">
          A Good Burger, A Better Coffee, A Warm Seat
        </h2>

        <div className="mx-auto my-8 h-px w-16 bg-brass/50" />

        <p className="font-body text-base font-light leading-relaxed text-cream/70 sm:text-lg">
          Paul&rsquo;s Cafe &amp; Burger Joint is where the city slows down for a bit: the grill is hot,
          the coffee is poured with care, and every plate is built for comfort. We serve juicy smash
          burgers, crisp fries, and house-made sauces alongside smooth espresso, creamy lattes, and
          fresh brews that feel just right at breakfast, lunch, or late evening.
        </p>

        <p className="mt-6 font-display text-xl italic text-brass/80">
          Burgers on the griddle. Coffee in the cup. Good times at the table.
        </p>
      </div>
    </section>
  )
}
