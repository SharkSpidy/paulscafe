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
    name: 'Turkish Pumpkin',
    description:
      'A pumpkin dessert in Turkish cuisine.It is made by cooking peeled and cut pumpkin in a syrup made out of water, cinnamon, cardamom, vanilla and bay leaves, essentially candying it. .',
    price: '₹XXX',
    image: '/assets/images/IMG2.png',
  },
  {
    lot: 'No. 02',
    name: 'Creamy Chicken With Butter Rice',
    description:
      'Crisp bacon, caramelized onions, and smoky BBQ glaze bring a rich finish to every layer of this crowd-pleaser.',
    price: '₹XXX',
    image: '/assets/images/IMG3.png',
  },
  {
    lot: 'No. 03',
    name: 'Beef Bourguignon',
    description:
      'Beef bourguignon or bœuf bourguignon, also called beef Burgundy, and bœuf à la Bourguignonne, is a French stew of beef braised in red wine.',
    price: '₹XXX',
    image: '/assets/images/IMG4.png',
  },
  {
    lot: 'No. 04',
    name: 'Mango Falooda',
    description:
      'Mango falooda is a rich, summery variation of the classic Indian dessert. It layers sweet basil seeds, cornstarch vermicelli (falooda sev), fresh mango pulp, and chilled milk.',
    price: '₹XXX',
    image: '/assets/images/IMG5.png',
  },
  {
    lot: 'No. 05',
    name: 'Honey Garlic Bean Beef',
    description:
      'Beans expertly paired with savory beef strips, generously sprinkled with sesame seeds. This dish offers a balanced profile of fresh beans and rich protein.',
    price: '₹XXX',
    image: '/assets/images/IMG7.png',
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
