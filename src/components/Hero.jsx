export default function Hero() {
  return (
    <section className="hero" id="top">
      <p className="hero__kicker reveal" style={{ '--d': '0ms' }}>
        Agencia de desarrollo automatizado
      </p>

      <h1 className="hero__brand reveal" style={{ '--d': '80ms' }}>
        Estratega
        <span className="hero__brand-line">Digital</span>
      </h1>

      <p className="hero__lead reveal" style={{ '--d': '160ms' }}>
        Construimos automatizaciones, integraciones y agentes que conectan
        tus herramientas y ejecutan el trabajo repetitivo — sin que tengas
        que operar cada paso a mano.
      </p>

      <div className="hero__actions reveal" style={{ '--d': '240ms' }}>
        <a className="btn btn--ink" href="#enfoque">
          Ver cómo trabajamos
        </a>
        <a className="btn btn--ghost" href="#contacto">
          Hablar con nosotros
        </a>
      </div>
    </section>
  )
}
