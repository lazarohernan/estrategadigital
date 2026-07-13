export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div>
          <p className="site-footer__brand">Estratega Digital Agency</p>
          <p className="site-footer__note">
            Agencia de desarrollo automatizado: sistemas, agentes e
            integraciones para equipos que necesitan operar con menos trabajo
            manual.
          </p>
        </div>
        <div className="site-footer__meta">
          <a href="#enfoque">Enfoque</a>
          <a href="#producto">Producto</a>
          <a href="#contacto">Contacto</a>
          <a href="mailto:estrategadigital.agency@gmail.com">
            estrategadigital.agency@gmail.com
          </a>
        </div>
      </div>

      <p className="site-footer__copy">
        © {new Date().getFullYear()} Estratega Digital Agency. Todos los
        derechos reservados.
      </p>
    </footer>
  )
}
