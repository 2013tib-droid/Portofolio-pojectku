import { useCallback, useEffect, useMemo, useState } from 'react'
import profile from './data/profile.js'
import rawProjects from './data/projects.js'
import { useLang, readStored, writeStored } from './i18n.jsx'
import { getYouTubeId, youTubeThumbnail } from './utils/youtube.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import FilterBar from './components/FilterBar.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import ProjectModal from './components/ProjectModal.jsx'
import Footer from './components/Footer.jsx'

// Lengkapi tiap project dengan info turunan (punya live? video? screenshot?).
const projects = rawProjects.map((p) => {
  const screenshots = p.screenshots ?? []
  const videoId = getYouTubeId(p.youtube)
  return {
    ...p,
    tech: p.tech ?? [],
    screenshots,
    meta: {
      hasLive: Boolean(p.liveUrl),
      hasVideo: Boolean(videoId),
      hasShots: screenshots.length > 0,
      videoId,
      thumbnail: screenshots[0] || (videoId ? youTubeThumbnail(videoId) : null),
    },
  }
})

const matchesFilter = {
  all: () => true,
  live: (p) => p.meta.hasLive,
  video: (p) => p.meta.hasVideo,
  shots: (p) => !p.meta.hasLive && !p.meta.hasVideo && p.meta.hasShots,
}

function initialTheme() {
  const saved = readStored('theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

// Link share: https://situs-kamu.com/#nama-project langsung membuka popup project itu.
function idFromHash() {
  const id = decodeURIComponent(window.location.hash.slice(1))
  return projects.some((p) => p.id === id) ? id : null
}

export default function App() {
  const { t, pick } = useLang()
  const [theme, setTheme] = useState(initialTheme)
  const [filter, setFilter] = useState('all')
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(() => {
    const id = idFromHash()
    return id ? { id, tab: null } : null
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    writeStored('theme', theme)
  }, [theme])

  useEffect(() => {
    const onHash = () => {
      const id = idFromHash()
      setOpen((cur) => (id ? (cur?.id === id ? cur : { id, tab: null }) : null))
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const openProject = useCallback((id, tab = null) => {
    setOpen({ id, tab })
    history.replaceState(null, '', `#${id}`)
  }, [])

  const closeProject = useCallback(() => {
    setOpen(null)
    history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
  }, [])

  const counts = useMemo(
    () => Object.fromEntries(Object.entries(matchesFilter).map(([k, fn]) => [k, projects.filter(fn).length])),
    [],
  )

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects.filter((p) => {
      if (!matchesFilter[filter](p)) return false
      if (!q) return true
      const haystack = [p.title, pick(p.summary), pick(p.category), ...p.tech].join(' ').toLowerCase()
      return haystack.includes(q)
    })
  }, [filter, query, pick])

  const current = open && projects.find((p) => p.id === open.id)

  return (
    <>
      <Header name={profile.name} theme={theme} onToggleTheme={() => setTheme((v) => (v === 'dark' ? 'light' : 'dark'))} />
      <main>
        <Hero profile={profile} stats={{ total: projects.length, live: counts.live, video: counts.video }} />

        <section className="projects" id="projects">
          <div className="container">
            <FilterBar filter={filter} onFilter={setFilter} counts={counts} query={query} onQuery={setQuery} />
            <p className="result-info" aria-live="polite">
              {t.showing(visible.length, projects.length)}
            </p>

            {visible.length > 0 ? (
              <div className="grid">
                {visible.map((p) => (
                  <ProjectCard key={p.id} project={p} onOpen={openProject} />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <p>{t.noResults}</p>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => {
                    setFilter('all')
                    setQuery('')
                  }}
                >
                  {t.resetFilter}
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer profile={profile} />

      {current && <ProjectModal key={current.id} project={current} initialTab={open.tab} onClose={closeProject} />}
    </>
  )
}
