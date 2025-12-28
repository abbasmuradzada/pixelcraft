import { useState, type FormEvent } from 'react'
import type { Translations } from '../i18n/translations'

interface ContactProps {
  t: Translations
}

export function Contact({ t }: ContactProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>{t.contact.title}</h2>
        <p>{t.contact.subtitle}</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" placeholder={t.contact.namePlaceholder} required />
          </div>
          <div className="form-group">
            <input type="email" placeholder={t.contact.emailPlaceholder} required />
          </div>
          <div className="form-group">
            <textarea placeholder={t.contact.messagePlaceholder} required />
          </div>
          <button type="submit" className="submit-btn">
            {isSubmitted ? t.contact.sent : t.contact.send}
          </button>
        </form>
      </div>
    </section>
  )
}
