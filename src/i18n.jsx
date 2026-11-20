import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

// Teks antarmuka (tombol, label, dll) dalam dua bahasa.
export const strings = {
  id: {
    navProjects: 'Project',
    navContact: 'Kontak',
    heroKicker: 'Portofolio',
    statProjects: 'Project',
    statLive: 'Bisa dicoba',
    statVideo: 'Ada video',
    ctaSee: 'Lihat project',
    filterAll: 'Semua',
    filterLive: 'Website live',
    filterVideo: 'Ada video',
    filterShots: 'Screenshot saja',
    searchPlaceholder: 'Cari nama atau teknologi…',
    badgeLive: 'Live',
    badgeVideo: 'Video',
    badgeShots: 'Screenshot',
    openSite: 'Buka website',
    watchVideo: 'Tonton video',
    viewDetails: 'Lihat detail',
    sourceCode: 'Source code',
    tabVideo: 'Video',
    tabShots: 'Screenshot',
    techUsed: 'Teknologi',
    close: 'Tutup',
    prev: 'Sebelumnya',
    next: 'Berikutnya',
    noResults: 'Tidak ada project yang cocok.',
    resetFilter: 'Reset filter',
    noMedia: 'Belum ada screenshot atau video untuk project ini.',
    showing: (n, total) => `Menampilkan ${n} dari ${total} project`,
    contactTitle: 'Tertarik kerja sama?',
    contactText: 'Hubungi aku lewat salah satu kontak di bawah.',
    madeWith: 'Dibuat dengan React + Vite',
    switchLang: 'Ganti bahasa',
    switchTheme: 'Ganti tema',
    shotOf: (i, n) => `Screenshot ${i} dari ${n}`,
  },
  en: {
    navProjects: 'Projects',
    navContact: 'Contact',
    heroKicker: 'Portfolio',
    statProjects: 'Projects',
    statLive: 'Live to try',
    statVideo: 'With video',
    ctaSee: 'See projects',
    filterAll: 'All',
    filterLive: 'Live website',
    filterVideo: 'Has video',
    filterShots: 'Screenshots only',
    searchPlaceholder: 'Search by name or tech…',
    badgeLive: 'Live',
    badgeVideo: 'Video',
    badgeShots: 'Screenshots',
    openSite: 'Open website',
    watchVideo: 'Watch video',
    viewDetails: 'View details',
    sourceCode: 'Source code',
    tabVideo: 'Video',
    tabShots: 'Screenshots',
    techUsed: 'Tech stack',
    close: 'Close',
    prev: 'Previous',
    next: 'Next',
    noResults: 'No projects match your filter.',
    resetFilter: 'Reset filter',
    noMedia: 'No screenshots or video for this project yet.',
    showing: (n, total) => `Showing ${n} of ${total} projects`,
    contactTitle: 'Want to work together?',
    contactText: 'Reach me through any of the contacts below.',
    madeWith: 'Built with React + Vite',
    switchLang: 'Switch language',
    switchTheme: 'Switch theme',
    shotOf: (i, n) => `Screenshot ${i} of ${n}`,
  },
}

const LangContext = createContext(null)

function readStored(key) {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function writeStored(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch {
    // penyimpanan tidak tersedia (mode privat, dll) — abaikan
  }
}

function initialLang() {
  const saved = readStored('lang')
  if (saved === 'id' || saved === 'en') return saved
  const nav = typeof navigator !== 'undefined' ? navigator.language || '' : ''
  return nav.toLowerCase().startsWith('id') ? 'id' : 'en'
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    writeStored('lang', lang)
  }, [lang])

  const t = strings[lang]
  // Ambil teks dua bahasa { id, en }; kalau cuma string biasa, kembalikan apa adanya.
  const pick = useCallback(
    (value) => {
      if (value == null) return ''
      if (typeof value === 'string') return value
      return value[lang] ?? value.id ?? value.en ?? ''
    },
    [lang],
  )
  const ctx = useMemo(() => ({ lang, setLang, t, pick }), [lang, t, pick])

  return <LangContext.Provider value={ctx}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}

export { readStored, writeStored }
