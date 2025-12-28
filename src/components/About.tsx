import type { Translations } from '../i18n/translations'

interface AboutProps {
  t: Translations
}

export function About({ t }: AboutProps) {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>{t.about.title}</h2>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <div className="stats">
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">{t.about.stats.projects}</div>
            </div>
            <div className="stat">
              <div className="stat-number">30+</div>
              <div className="stat-label">{t.about.stats.clients}</div>
            </div>
            <div className="stat">
              <div className="stat-number">5+</div>
              <div className="stat-label">{t.about.stats.years}</div>
            </div>
          </div>
        </div>
        <div className="about-visual">
          <div className="code-window">
            <div className="code-header">
              <span className="code-dot" />
              <span className="code-dot" />
              <span className="code-dot" />
            </div>
            <div className="code-content">
              <div className="code-line">
                <span className="code-keyword">const</span>{' '}
                <span className="code-function">createSolution</span> = () =&gt; {'{'}
              </div>
              <div className="code-line">
                {'  '}<span className="code-keyword">return</span> {'{'}
              </div>
              <div className="code-line">
                {'    '}innovation: <span className="code-string">"endless"</span>,
              </div>
              <div className="code-line">
                {'    '}quality: <span className="code-string">"exceptional"</span>,
              </div>
              <div className="code-line">
                {'  }'};
              </div>
              <div className="code-line">{'}'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
