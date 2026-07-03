import BrassSeal from './BrassSeal'

export default function Footer() {
  return (
    <footer id="visit" className="relative border-t border-brass/15 bg-espresso-900 px-6 py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 text-center">
        <img
          src="/assets/images/logo.jpg"
          alt="Paul's Cafe and Burger Joint logo"
          className="h-16 w-16 rounded-full border border-brass/20 object-cover"
        />

        <div className="grid w-full max-w-3xl grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <p className="mb-3 font-body text-xs font-medium uppercase tracking-widest2 text-brass/70">
              Location
            </p>
            <p className="font-body text-sm font-light text-cream/70">
              HMT Road, Kalamassery
              <br />
              Ernakulam, Kerala
            </p>
          </div>

          <div>
            <p className="mb-3 font-body text-xs font-medium uppercase tracking-widest2 text-brass/70">
              Hours
            </p>
            <p className="font-body text-sm font-light text-cream/70">
              Mon &ndash; Fri: 8am &ndash; 10pm
              <br />
              Sat &ndash; Sun: 8am &ndash; 11pm
            </p>
          </div>

          <div>
            <p className="mb-3 font-body text-xs font-medium uppercase tracking-widest2 text-brass/70">
              Follow
            </p>
            <a
              href="https://instagram.com/paulscafe_kalamasserry"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm font-light text-cream/70 underline decoration-brass/40 underline-offset-4 transition-colors hover:text-brass"
            >
              @paulscafe_kalamasserry
            </a>
          </div>
        </div>

        <div className="h-px w-16 bg-brass/30" />

        <p className="font-body text-[11px] font-light uppercase tracking-widest2 text-cream/30">
          &copy; {new Date().getFullYear()} Paul&rsquo;s Cafe &amp; Burger Joint, Kalamassery. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
