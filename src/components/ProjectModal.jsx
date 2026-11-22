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
  const touchX = useRef(null)

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
      if (e.target.closest?.('[role="tab"], input, textarea')) return
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % total)
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + total) % total)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [tab, total])

  const go = (step) => setIndex((i) => (i + step + total) % total)

  // Geser (swipe) gambar di HP.
  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchX.current == null || total < 2) return
    const dx = e.changedTouches[0].clientX - touchX.current
    touchX.current = null
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1)
  }

  // Panah kiri/kanan di antara tab (pola tablist standar).
  const onTabKey = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const nextTab = tab === 'video' ? 'shots' : 'video'
      setTab(nextTab)
      e.currentTarget.parentElement.querySelector(`#tab-${nextTab}`)?.focus()
    }
  }
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
              <span>{pick(project.category)}</span>
              <span className="card-meta-sep" aria-hidden="true" />
              <span>{project.year}</span>
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
            <button
              type="button"
              role="tab"
              id="tab-video"
              aria-controls="modal-media"
              aria-selected={tab === 'video'}
              tabIndex={tab === 'video' ? 0 : -1}
              className={tab === 'video' ? 'active' : ''}
              onClick={() => setTab('video')}
              onKeyDown={onTabKey}
            >
              <Icon name="play" size={14} /> {t.tabVideo}
            </button>
            <button
              type="button"
              role="tab"
              id="tab-shots"
              aria-controls="modal-media"
              aria-selected={tab === 'shots'}
              tabIndex={tab === 'shots' ? 0 : -1}
              className={tab === 'shots' ? 'active' : ''}
              onClick={() => setTab('shots')}
              onKeyDown={onTabKey}
            >
              <Icon name="image" size={14} /> {t.tabShots} ({total})
            </button>
          </div>
        )}

        <div
          className="modal-media"
          id="modal-media"
          {...(hasVideo && hasShots ? { role: 'tabpanel', 'aria-labelledby': `tab-${tab}` } : {})}
        >
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
              <div className="gallery-main" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                <img
                  key={project.screenshots[index]}
                  className="gallery-img"
                  src={project.screenshots[index]}
                  alt={`${project.title} — ${t.shotOf(index + 1, total)}`}
                  decoding="async"
                />
                {total > 1 && (
                  <>
                    <button type="button" className="gallery-nav prev" onClick={() => go(-1)} aria-label={t.prev}>
                      <Icon name="left" />
                    </button>
                    <button type="button" className="gallery-nav next" onClick={() => go(1)} aria-label={t.next}>
                      <Icon name="right" />
                    </button>
                    <span className="gallery-count" aria-live="polite">
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
