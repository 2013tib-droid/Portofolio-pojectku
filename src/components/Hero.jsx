import { useLang } from '../i18n.jsx'
import Icon from './Icon.jsx'

// `previews`: beberapa project yang punya screenshot, ditampilkan sebagai kolase di sisi kanan (desktop saja).
export default function Hero({ profile, previews = [], onOpen }) {
  const { t, pick } = useLang()
  const github = profile.links?.github

  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            {profile.name} · {pick(profile.role)}
          </p>
          <h1 className="hero-title">{pick(profile.headline)}</h1>
          <p className="hero-bio">{pick(profile.bio)}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary btn-lg">
              {t.ctaSee} <Icon name="arrowDown" size={16} className="icon-nudge-down" />
            </a>
            {github && (
              <a href={github} className="btn btn-ghost btn-lg" target="_blank" rel="noopener noreferrer">
                <Icon name="github" size={16} /> GitHub
              </a>
            )}
          </div>
        </div>

        {profile.photo ? (
          <img className="hero-photo" src={profile.photo} alt={profile.name} width="280" height="280" />
        ) : (
          previews.length > 0 && (
            <div className="hero-stack">
              {previews.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  className={`hero-shot hero-shot-${i + 1}`}
                  onClick={() => onOpen(p.id)}
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <span className="hero-shot-bar">
                    <i />
                    <i />
                    <i />
                    <span>{p.title}</span>
                  </span>
                  <img src={p.screenshots[0]} alt="" width="640" height="400" decoding="async" fetchPriority={i === 0 ? 'high' : 'auto'} />
                </button>
              ))}
            </div>
          )
        )}
      </div>
    </section>
  )
}
