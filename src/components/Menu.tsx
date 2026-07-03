import { useReveal } from '../hooks/useReveal'

interface MenuItem {
  lot: string
  name: string
  description: string
  price: string
  image: string
}

const items: MenuItem[] = [
  {
    lot: 'No. 01',
    name: 'Estate Single-Origin Pour Over',
    description:
      'A rotating micro-lot, hand-poured to order. Bright, layered, and left unsweetened to let the origin speak — notes shift with the season\u2019s harvest.',
    price: '\u20b9320',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
  },
  {
    lot: 'No. 02',
    name: 'Brass & Barrel Espresso',
    description:
      'Our house blend, dark-roasted low and slow, pulled through a restored lever machine for a syrupy body and a long, cocoa-toned finish.',
    price: '\u20b9220',
    image:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
  },
  {
    lot: 'No. 03',
    name: 'Cardamom Cortado',
    description:
      'Espresso and warm milk in equal measure, tempered with a whisper of Kerala green cardamom \u2014 a quiet nod to the coast this cafe calls home.',
    price: '\u20b9280',
    image:
      'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?auto=format&fit=crop&w=900&q=80',
  },
  {
    lot: 'No. 04',
    name: 'Burnt-Butter Croissant',
    description:
      'Laminated in-house across three days, finished with a brush of burnt butter for a shatteringly crisp crust and a deep, nutty crumb.',
    price: '\u20b9180',
    image:
      'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80',
  },
  {
    lot: 'No. 05',
    name: 'Dark Chocolate & Sea Salt Tart',
    description:
      'A short, buttery shell holding a dense 70% ganache, finished tableside with a pinch of flaked salt to sharpen every note.',
    price: '\u20b9340',
    image:
      'https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=900&q=80',
  },
]

export default function Menu() {
  const headerRef = useReveal<HTMLDivElement>()

  return (
    <section id="menu" className="relative bg-espresso-900 px-6 py-28 sm:py-36">
      <div ref={headerRef} className="reveal mx-auto mb-20 max-w-2xl text-center">
        <p className="mb-3 font-body text-xs font-medium uppercase tracking-widest2 text-brass/70">
          The Menu
        </p>
        <h2 className="font-display text-4xl font-medium text-cream sm:text-5xl">
          Smash Burgers &amp; Fresh Brews
        </h2>
        <div className="mx-auto mt-6 h-px w-16 bg-brass/50" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col divide-y divide-brass/15">
        {items.map((item) => (
          <MenuRow key={item.lot} item={item} />
        ))}
      </div>
    </section>
  )
}

function MenuRow({ item }: { item: MenuItem }) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className="reveal grid grid-cols-1 items-center gap-6 py-10 sm:grid-cols-[120px_1fr_auto]"
    >
      <div className="order-1 h-24 w-24 shrink-0 overflow-hidden rounded-full border border-brass/30 sm:order-none sm:h-[120px] sm:w-[120px]">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover grayscale-[15%] transition duration-700 hover:grayscale-0 hover:scale-110"
        />
      </div>

      <div className="order-3 sm:order-none">
        <span className="mb-2 block font-body text-[11px] font-medium uppercase tracking-widest2 text-brass/60">
          {item.lot}
        </span>
        <h3 className="font-display text-2xl font-medium text-cream sm:text-3xl">{item.name}</h3>
        <p className="mt-2 max-w-md font-body text-sm font-light leading-relaxed text-cream/60">
          {item.description}
        </p>
      </div>

      <div className="order-2 font-display text-xl text-brass sm:order-none sm:text-right">
        {item.price}
      </div>
    </div>
  )
}
