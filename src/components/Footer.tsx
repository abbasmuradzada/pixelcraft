import type { Translations } from '../i18n/translations'

interface FooterProps {
  t: Translations
}

export function Footer({ t }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">PixelCraft Studio</div>
        <p>{t.footer.rights}</p>
      </div>
    </footer>
  )
}
