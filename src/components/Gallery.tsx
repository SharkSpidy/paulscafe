import { useReveal } from '../hooks/useReveal'

interface GalleryImage {
  src: string
  alt: string
}

const images: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=800&q=80',
    alt: 'Moody interior of Paul\u2019s Cafe with warm low lighting',
  },
  {
    src: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80',
    alt: 'Roasted coffee beans in close detail',
  },
  {
    src: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
    alt: 'Freshly baked pastry on a dark plate',
  },
  {
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
    alt: 'Espresso shot pulling into a glass cup',
  },
  {
    src: 'https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&w=800&q=80',
    alt: 'Cafe counter and seating in low, ambient light',
  },
  {
    src: 'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?auto=format&fit=crop&w=800&q=80',
    alt: 'Latte art in a ceramic cup',
  },
]

export default function Gallery() {
  const headerRef = useReveal<HTMLDivElement>()

  return (
    <section id="gallery" className="relative bg-espresso-950 px-6 py-28 sm:py-36">
      <div ref={headerRef} className="reveal mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-3 font-body text-xs font-medium uppercase tracking-widest2 text-brass/70">
          The Room
        </p>
        <h2 className="font-display text-4xl font-medium text-cream sm:text-5xl">
          Good Food, Great Vibes
        </h2>
        <div className="mx-auto mt-6 h-px w-16 bg-brass/50" />
      </div>

      <div className="mx-auto max-w-6xl columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {images.map((image, i) => (
          <GalleryTile key={image.src} image={image} tall={i % 3 === 1} />
        ))}
      </div>
    </section>
  )
}

function GalleryTile({ image, tall }: { image: GalleryImage; tall: boolean }) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className="reveal group relative break-inside-avoid overflow-hidden border border-transparent hover:border-brass/60"
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
          tall ? 'aspect-[3/4]' : 'aspect-[4/3]'
        }`}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
    </div>
  )
}
