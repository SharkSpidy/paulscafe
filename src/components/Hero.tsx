import { useEffect, useState } from 'react'
import BrassSeal from './BrassSeal'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Trigger the load-in sequence a beat after mount so the page
    // doesn't flash straight to its final state.
    const t = setTimeout(() => setMounted(true), 150)
    return () => clearTimeout(t)
  }, [])

  const stage = (delay: string) =>
    `transition-all duration-[1400ms] ease-out ${delay} ${
      mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-espresso-950 px-6 text-center"
    >
      {/* Ambient vignette + grain, no imagery required */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(198,161,91,0.08),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-grain" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-espresso-950" />
      <div className="pointer-events-none absolute inset-x-0 top-1/2 z-0 mx-auto h-[70vh] max-w-5xl -translate-y-1/2 overflow-hidden rounded-[2rem] border border-brass/10 opacity-20">
        <img src="/assets/images/IMG6.png" alt="" className="h-full w-full object-cover" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className={`mb-8 ${stage('delay-100')}`}>
          <img
            src="/assets/images/logo.jpg"
            alt="Paul's Cafe and Burger Joint logo"
            className="mx-auto h-20 w-20 rounded-full border border-brass/30 object-cover shadow-lg shadow-black/20"
          />
        </div>

        <p className={`mb-5 text-xs font-body font-light uppercase tracking-widest2 text-brass/80 ${stage('delay-200')}`}>
          Kalamassery &middot; Burgers, coffee &amp; late-night comfort
        </p>

        <h1
          className={`font-display text-6xl font-medium leading-[1.05] text-cream sm:text-7xl md:text-8xl ${stage(
            'delay-300',
          )}`}
        >
          Paul&rsquo;s Cafe &amp; Burger Joint
        </h1>

        <p
          className={`mt-6 max-w-xl font-body text-sm font-light uppercase tracking-[0.25em] text-cream/60 sm:text-base ${stage(
            'delay-500',
          )}`}
        >
          Smash burgers, slow-brewed coffee, and easygoing evenings on HMT Road
        </p>

        <div className={`mt-12 ${stage('delay-700')}`}>
          <a
            href="#menu"
            className="group relative inline-flex items-center gap-3 border border-brass/70 px-9 py-4 font-body text-xs font-medium uppercase tracking-widest2 text-brass transition-colors duration-500 hover:bg-brass hover:text-espresso-950"
          >
            See the Grill &amp; Coffee Menu
            <span className="transition-transform duration-500 group-hover:translate-x-1">&rarr;</span>
          </a>
        </div>
      </div>

      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 text-brass/40 ${stage('delay-[900ms]')}`}
        aria-hidden="true"
      >
        <div className="h-14 w-px bg-gradient-to-b from-brass/60 to-transparent" />
      </div>
    </section>
  )
}
