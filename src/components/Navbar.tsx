import { useState, type MouseEvent } from 'react'
import type { Language, Translations } from '../i18n/translations'

interface NavbarProps {
  t: Translations
  lang: Language
  onLangChange: (lang: Language) => void
}

const langLabels: Record<Language, string> = {
  az: 'AZ',
  en: 'EN',
  ru: 'RU'
}

export function Navbar({ t, lang, onLangChange }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  const handleLangSelect = (e: MouseEvent, newLang: Language) => {
    e.stopPropagation()
    onLangChange(newLang)
    setLangDropdownOpen(false)
  }

  const handleDropdownToggle = (e: MouseEvent) => {
    e.stopPropagation()
    setLangDropdownOpen(!langDropdownOpen)
  }

  const handleHamburgerClick = (e: MouseEvent) => {
    e.stopPropagation()
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="logo" onClick={handleLogoClick}>PixelCraft Studio</div>

      {/* Desktop Navigation */}
      <ul className="nav-links desktop-nav">
        <li><a href="#services">{t.nav.services}</a></li>
        <li><a href="#about">{t.nav.about}</a></li>
        <li><a href="#contact">{t.nav.contact}</a></li>
      </ul>

      {/* Desktop Language Switcher */}
      <div className="lang-switcher desktop-lang">
        <button
          className={`lang-btn ${lang === 'az' ? 'active' : ''}`}
          onClick={() => onLangChange('az')}
        >
          AZ
        </button>
        <button
          className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
          onClick={() => onLangChange('en')}
        >
          EN
        </button>
        <button
          className={`lang-btn ${lang === 'ru' ? 'active' : ''}`}
          onClick={() => onLangChange('ru')}
        >
          RU
        </button>
      </div>

      {/* Mobile Controls */}
      <div className="mobile-controls">
        {/* Mobile Language Dropdown */}
        <div className="lang-dropdown">
          <button
            className="lang-dropdown-btn"
            onClick={handleDropdownToggle}
          >
            {langLabels[lang]}
            <span className={`dropdown-arrow ${langDropdownOpen ? 'open' : ''}`}>▼</span>
          </button>
          {langDropdownOpen && (
            <div className="lang-dropdown-menu">
              {(['az', 'en', 'ru'] as Language[]).map((l) => (
                <button
                  key={l}
                  className={`lang-dropdown-item ${lang === l ? 'active' : ''}`}
                  onClick={(e) => handleLangSelect(e, l)}
                >
                  {langLabels[l]}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Hamburger Menu */}
        <button
          className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
          onClick={handleHamburgerClick}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#services" onClick={handleNavClick}>{t.nav.services}</a>
        <a href="#about" onClick={handleNavClick}>{t.nav.about}</a>
        <a href="#contact" onClick={handleNavClick}>{t.nav.contact}</a>
      </div>
    </nav>
  )
}
