import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-espresso-950">
      <a
        href="#menu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-brass focus:px-4 focus:py-2 focus:text-espresso-950"
      >
        Skip to menu
      </a>

      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Footer />
    </div>
  )
}
