import logo from '../assets/FullHorizontalBlanco.png'

export default function SiteNav() {
  return (
    <header className="site-nav">
      <a className="site-nav__brand" href="#top" aria-label="Estratega Digital">
        <img
          className="site-nav__logo"
          src={logo}
          alt="Estratega Digital"
        />
      </a>
      <nav className="site-nav__links" aria-label="Principal">
        <a href="#enfoque">Enfoque</a>
        <a href="#producto">Producto</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  )
}
