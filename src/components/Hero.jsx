import { useLang } from '../i18n.jsx'
import Icon from './Icon.jsx'

export default function Hero({ profile }) {
  const { t, pick } = useLang()

  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-name">
            {profile.name} · {pick(profile.role)}
          </p>
          <h1 className="hero-title">{pick(profile.headline)}</h1>
          <p className="hero-bio">{pick(profile.bio)}</p>

          <a href="#projects" className="btn btn-primary">
            {t.ctaSee} <Icon name="arrowDown" size={16} />
          </a>
        </div>

        {profile.photo && <img className="hero-photo" src={profile.photo} alt={profile.name} width="280" height="280" />}
      </div>
    </section>
  )
}
