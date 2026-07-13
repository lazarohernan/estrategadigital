export default function Product() {
  return (
    <section className="section product" id="producto">
      <div className="product__frame">
        <p className="section__label">Producto</p>
        <h2 className="product__name">Orvit</h2>
        <p className="product__dek">
          El SaaS de Estratega Digital. Un estudio con agentes para planear,
          crear y operar campañas — conectado a tus plataformas, sin
          cambiar de herramienta cada hora.
        </p>
        <div className="product__links">
          <a
            className="btn btn--ink"
            href="https://orvit.ai"
            target="_blank"
            rel="noreferrer"
          >
            Ir a orvit.ai
          </a>
        </div>
      </div>
    </section>
  )
}
