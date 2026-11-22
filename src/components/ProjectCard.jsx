import { useState } from 'react'
import { useLang } from '../i18n.jsx'
import Icon from './Icon.jsx'

export default function ProjectCard({ project, onOpen, index = 0 }) {
  const { t, pick } = useLang()
  const { hasLive, hasVideo, hasShots, thumbnail } = project.meta
  const [imgFailed, setImgFailed] = useState(false)
  const showImage = thumbnail && !imgFailed

  return (
    <article className="card" style={{ '--i': index }}>
      {/* Gambar bisa diklik dengan mouse; untuk keyboard, judul sudah jadi tombol yang sama
          sehingga gambar dilewati (tidak ada dua tab stop untuk aksi yang sama). */}
      <button type="button" className="card-media" onClick={() => onOpen(project.id)} tabIndex={-1} aria-hidden="true">
        {showImage ? (
          <img src={thumbnail} alt="" loading="lazy" decoding="async" width="640" height="400" onError={() => setImgFailed(true)} />
        ) : (
          <span className="card-placeholder">
            <span className="card-placeholder-mark">{project.title.slice(0, 1)}</span>
            <span className="card-placeholder-label">{project.title}</span>
          </span>
        )}
        {hasVideo && (
          <span className="play-overlay">
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
          <span>{pick(project.category)}</span>
          <span className="card-meta-sep" aria-hidden="true" />
          <span>{project.year}</span>
        </p>
        <h3 className="card-title">
          <button type="button" onClick={() => onOpen(project.id)} aria-label={`${t.viewDetails}: ${project.title}`}>
            {project.title}
          </button>
        </h3>
        <p className="card-summary">{pick(project.summary)}</p>
        {project.result && (
          <p className="card-result">
            <Icon name="check" size={15} /> <span>{pick(project.result)}</span>
          </p>
        )}
        {project.role && (
          <p className="card-role">
            {t.myRole}: {pick(project.role)}
          </p>
        )}
        <ul className="tags" aria-label={t.techUsed}>
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
        ) : project.repoUrl ? (
          <a className="btn btn-ghost btn-sm" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            <Icon name="code" size={15} /> {t.sourceCode}
          </a>
        ) : null}
        <button type="button" className="btn btn-link btn-sm" onClick={() => onOpen(project.id)}>
          {t.viewDetails} <Icon name="right" size={14} className="icon-nudge" />
        </button>
      </div>
    </article>
  )
}
