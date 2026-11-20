import { useState } from 'react'
import { useLang } from '../i18n.jsx'
import Icon from './Icon.jsx'

export default function ProjectCard({ project, onOpen }) {
  const { t, pick } = useLang()
  const { hasLive, hasVideo, hasShots, thumbnail } = project.meta
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <article className="card">
      <button type="button" className="card-media" onClick={() => onOpen(project.id)} aria-label={`${t.viewDetails}: ${project.title}`}>
        {thumbnail && !imgFailed ? (
          <img src={thumbnail} alt="" loading="lazy" onError={() => setImgFailed(true)} />
        ) : (
          <div className="card-placeholder" aria-hidden="true">
            {project.title.slice(0, 1)}
          </div>
        )}
        {hasVideo && (
          <span className="play-overlay" aria-hidden="true">
            <Icon name="play" size={22} />
          </span>
        )}
        <span className="badges">
          {hasLive && (
            <span className="badge badge-live">
              <span className="dot" /> {t.badgeLive}
            </span>
          )}
          {hasVideo && (
            <span className="badge badge-video">
              <Icon name="play" size={11} /> {t.badgeVideo}
            </span>
          )}
          {hasShots && (
            <span className="badge badge-shots">
              <Icon name="image" size={11} /> {project.screenshots.length}
            </span>
          )}
        </span>
      </button>

      <div className="card-body">
        <p className="card-meta">
          {pick(project.category)} · {project.year}
        </p>
        <h3 className="card-title">
          <button type="button" onClick={() => onOpen(project.id)}>
            {project.title}
          </button>
        </h3>
        <p className="card-summary">{pick(project.summary)}</p>
        <ul className="tags">
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className="card-actions">
        {hasLive ? (
          <a className="btn btn-primary btn-sm" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <Icon name="external" size={15} /> {t.openSite}
          </a>
        ) : hasVideo ? (
          <button type="button" className="btn btn-primary btn-sm" onClick={() => onOpen(project.id, 'video')}>
            <Icon name="play" size={15} /> {t.watchVideo}
          </button>
        ) : null}
        <button type="button" className="btn btn-ghost btn-sm" onClick={() => onOpen(project.id)}>
          {t.viewDetails}
        </button>
      </div>
    </article>
  )
}
