const pillars = [
  {
    title: 'Procesos que corren solos',
    body: 'Mapeamos el flujo, definimos reglas y lo dejamos ejecutándose: captación, publicación, seguimiento, alertas y operaciones entre sistemas.',
  },
  {
    title: 'Agentes conectados a tu stack',
    body: 'Desarrollamos agentes que leen contexto, toman decisiones acotadas y actúan sobre tus APIs, CRMs, ads y bases de datos — no chats sueltos.',
  },
  {
    title: 'Producto y proyectos a medida',
    body: 'Hacemos implementaciones específicas y también mantenemos Orvit, nuestro SaaS para operar marketing con agentes desde un solo lugar.',
  },
]

export default function Focus() {
  return (
    <section className="section focus" id="enfoque">
      <div className="section__intro">
        <p className="section__label">Enfoque</p>
        <h2 className="section__title">
          Automatización que se integra a tu operación
        </h2>
        <p className="section__dek">
          Trabajamos en la capa práctica: qué se dispara, qué se valida, qué
          se publica y qué se reporta. Sistemas estables, claros y listos
          para producción.
        </p>
      </div>

      <ol className="focus__list">
        {pillars.map((item, i) => (
          <li key={item.title} className="focus__item">
            <span className="focus__index" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="focus__title">{item.title}</h3>
              <p className="focus__body">{item.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
