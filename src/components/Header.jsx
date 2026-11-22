import { useEffect, useState } from 'react'
import { useLang } from '../i18n.jsx'
import Icon from './Icon.jsx'

export default function Header({ name, theme, onToggleTheme }) {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#top" className="brand">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name">{name}</span>
        </a>
        <nav className="header-nav" aria-label="Menu">
          <a href="#projects" className="nav-link">
            {t.navProjects}
          </a>
          <a href="#contact" className="nav-link">
            {t.navContact}
          </a>
          <div className="lang-switch" role="group" aria-label={t.switchLang}>
            {['id', 'en'].map((code) => (
              <button
                key={code}
                type="button"
                className={lang === code ? 'active' : ''}
                aria-pressed={lang === code}
                onClick={() => setLang(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <button type="button" className="icon-btn" onClick={onToggleTheme} aria-label={t.switchTheme} title={t.switchTheme}>
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
        </nav>
      </div>
    </header>
  )
}
