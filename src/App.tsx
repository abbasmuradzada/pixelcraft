import { useState, useEffect } from 'react'
import { useLanguage } from './hooks/useLanguage'
import { Navbar, Hero, Services, About, Contact, Footer } from './components'
import './App.css'

function App() {
  const { lang, setLang, t } = useLanguage()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <Navbar t={t} lang={lang} onLangChange={setLang} />
      <Hero t={t} mousePosition={mousePosition} />
      <Services t={t} />
      <About t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </>
  )
}

export default App
