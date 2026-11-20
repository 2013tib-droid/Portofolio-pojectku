import { useLang } from '../i18n.jsx'
import Icon from './Icon.jsx'

export default function Hero({ profile, stats }) {
  const { t, pick } = useLang()

  return (
    <section className="hero" id="top">
      <div className="container">
        <p className="kicker">{t.heroKicker} · {pick(profile.role)}</p>
        <h1 className="hero-title">
          <span className="highlight">{profile.name}</span>
        </h1>
        <p className="hero-bio">{pick(profile.bio)}</p>

        <dl className="stats">
          <div className="stat">
            <dt>{t.statProjects}</dt>
            <dd>{stats.total}</dd>
          </div>
          <div className="stat">
            <dt>
              <Icon name="globe" size={14} /> {t.statLive}
            </dt>
            <dd>{stats.live}</dd>
          </div>
          <div className="stat">
            <dt>
              <Icon name="play" size={14} /> {t.statVideo}
            </dt>
            <dd>{stats.video}</dd>
          </div>
        </dl>

        <a href="#projects" className="btn btn-primary">
          {t.ctaSee} <Icon name="arrowDown" size={16} />
        </a>
      </div>
    </section>
  )
}
