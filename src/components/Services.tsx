import type { Translations } from '../i18n/translations'

interface ServicesProps {
  t: Translations
}

export function Services({ t }: ServicesProps) {
  return (
    <section id="services" className="services">
      <div className="section-header">
        <h2>{t.services.title}</h2>
        <p>{t.services.subtitle}</p>
      </div>
      <div className="services-grid">
        {t.services.items.map((service, index) => (
          <div
            key={index}
            className="service-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
