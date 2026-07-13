import SiteNav from './components/SiteNav'
import Hero from './components/Hero'
import Focus from './components/Focus'
import Product from './components/Product'
import Contact from './components/Contact'
import SiteFooter from './components/SiteFooter'

function App() {
  return (
    <div className="page">
      <div className="atmosphere" aria-hidden="true">
        <div className="atmosphere__wash" />
        <div className="atmosphere__grain" />
      </div>

      <SiteNav />

      <main>
        <Hero />
        <Focus />
        <Product />
        <Contact />
      </main>

      <SiteFooter />
    </div>
  )
}

export default App
