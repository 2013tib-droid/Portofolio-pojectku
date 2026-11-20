import { useLang } from '../i18n.jsx'
import Icon from './Icon.jsx'

export default function Footer({ profile }) {
  const { t } = useLang()
  const { email, github, linkedin, instagram } = profile.links

  const links = [
    email && { href: `mailto:${email}`, icon: 'mail', label: email },
    github && { href: github, icon: 'github', label: 'GitHub' },
    linkedin && { href: linkedin, icon: 'linkedin', label: 'LinkedIn' },
    instagram && { href: instagram, icon: 'instagram', label: 'Instagram' },
  ].filter(Boolean)

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <h2 className="section-title">{t.contactTitle}</h2>
        <p className="muted">{t.contactText}</p>
        <ul className="contact-links">
          {links.map((link) => (
            <li key={link.icon}>
              <a
                href={link.href}
                className="btn btn-ghost"
                {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <Icon name={link.icon} size={16} /> {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="footer-note">
          © {new Date().getFullYear()} {profile.name} · {t.madeWith}
        </p>
      </div>
    </footer>
  )
}
