import { useMemo } from 'react'
import type { Translations } from '../i18n/translations'

interface HeroProps {
  t: Translations
  mousePosition: { x: number; y: number }
}

export function Hero({ t, mousePosition }: HeroProps) {
  const particles = useMemo(() =>
    [...Array(20)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 15}s`,
      duration: `${15 + Math.random() * 10}s`
    })), []
  )

  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="floating-elements">
        <div className="floating-element" style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }} />
        <div className="floating-element" style={{
          transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`
        }} />
        <div className="floating-element" style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * -0.01}px)`
        }} />
      </div>
      <div className="particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration
            }}
          />
        ))}
      </div>
      <div className="hero-content">
        <span className="hero-badge">{t.hero.badge}</span>
        <h1>
          {t.hero.titleStart}<span className="gradient-text">{t.hero.titleHighlight}</span><br />
          {t.hero.titleEnd}
        </h1>
        <p>{t.hero.description}</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">{t.hero.getStarted}</a>
          <a href="#services" className="btn btn-secondary">{t.hero.ourServices}</a>
        </div>
      </div>
    </section>
  )
}
