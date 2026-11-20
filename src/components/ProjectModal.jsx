import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n.jsx'
import { isYouTubeShort, youTubeEmbedUrl } from '../utils/youtube.js'
import Icon from './Icon.jsx'

export default function ProjectModal({ project, initialTab, onClose }) {
  const { t, pick } = useLang()
  const dialogRef = useRef(null)
  const { hasLive, hasVideo, hasShots, videoId } = project.meta

  const [tab, setTab] = useState(() => {
    if (initialTab === 'video' && hasVideo) return 'video'
    if (initialTab === 'shots' && hasShots) return 'shots'
    return hasVideo ? 'video' : 'shots'
  })
  const [index, setIndex] = useState(0)
  const total = project.screenshots.length

  // Buka <dialog> secara modal (fokus terkunci di dalam & Esc menutup).
  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog && !dialog.open) dialog.showModal()
    return () => dialog?.open && dialog.close()
  }, [])

  // Navigasi screenshot dengan tombol panah kiri/kanan.
  useEffect(() => {
    if (tab !== 'shots' || total < 2) return
    const onKey = (e) => {
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % total)
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + total) % total)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [tab, total])

  const go = (step) => setIndex((i) => (i + step + total) % total)
  const vertical = isYouTubeShort(project.youtube)

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      aria-labelledby="modal-title"
      onCancel={(e) => {
        e.preventDefault()
        onClose()
      }}
      onClick={(e) => {
        // Klik di area gelap (di luar panel) menutup popup.
        if (e.target === dialogRef.current) onClose()
      }}
    >
      <div className="modal-panel">
        <header className="modal-header">
          <div>
            <p className="card-meta">
              {pick(project.category)} · {project.year}
            </p>
            <h2 id="modal-title" className="modal-title">
              {project.title}
            </h2>
          </div>
          <button type="button" className="icon-btn" onClick={onClose} aria-label={t.close} autoFocus>
            <Icon name="close" />
          </button>
        </header>

        {hasVideo && hasShots && (
          <div className="tabs" role="tablist">
            <button type="button" role="tab" aria-selected={tab === 'video'} className={tab === 'video' ? 'active' : ''} onClick={() => setTab('video')}>
              <Icon name="play" size={14} /> {t.tabVideo}
            </button>
            <button type="button" role="tab" aria-selected={tab === 'shots'} className={tab === 'shots' ? 'active' : ''} onClick={() => setTab('shots')}>
              <Icon name="image" size={14} /> {t.tabShots} ({total})
            </button>
          </div>
        )}

        <div className="modal-media">
          {tab === 'video' && hasVideo && (
            <div className={`video-frame ${vertical ? 'vertical' : ''}`}>
              <iframe
                src={youTubeEmbedUrl(videoId)}
                title={`${project.title} — video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          )}

          {tab === 'shots' && hasShots && (
            <div className="gallery">
              <div className="gallery-main">
                <img src={project.screenshots[index]} alt={`${project.title} — ${t.shotOf(index + 1, total)}`} />
                {total > 1 && (
                  <>
                    <button type="button" className="gallery-nav prev" onClick={() => go(-1)} aria-label={t.prev}>
                      <Icon name="left" />
                    </button>
                    <button type="button" className="gallery-nav next" onClick={() => go(1)} aria-label={t.next}>
                      <Icon name="right" />
                    </button>
                    <span className="gallery-count">
                      {index + 1} / {total}
                    </span>
                  </>
                )}
              </div>
              {total > 1 && (
                <div className="gallery-thumbs">
                  {project.screenshots.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      className={i === index ? 'active' : ''}
                      onClick={() => setIndex(i)}
                      aria-label={t.shotOf(i + 1, total)}
                      aria-current={i === index}
                    >
                      <img src={src} alt="" loading="lazy" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {!hasVideo && !hasShots && <p className="empty">{t.noMedia}</p>}
        </div>

        <div className="modal-body">
          {(hasLive || project.repoUrl) && (
            <div className="modal-actions">
              {hasLive && (
                <a className="btn btn-primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Icon name="external" size={16} /> {t.openSite}
                </a>
              )}
              {project.repoUrl && (
                <a className="btn btn-ghost" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <Icon name="code" size={16} /> {t.sourceCode}
                </a>
              )}
            </div>
          )}
          <p className="modal-text">{pick(project.details) || pick(project.summary)}</p>
          <h3 className="modal-subtitle">{t.techUsed}</h3>
          <ul className="tags">
            {project.tech.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </dialog>
  )
}
