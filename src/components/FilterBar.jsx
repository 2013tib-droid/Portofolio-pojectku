import { useLang } from '../i18n.jsx'
import Icon from './Icon.jsx'

export default function FilterBar({ filter, onFilter, counts, query, onQuery }) {
  const { t } = useLang()

  const options = [
    { key: 'all', label: t.filterAll },
    { key: 'live', label: t.filterLive, icon: 'globe' },
    { key: 'video', label: t.filterVideo, icon: 'play' },
    { key: 'shots', label: t.filterShots, icon: 'image' },
  ].filter((opt) => opt.key === 'all' || opt.key === filter || counts[opt.key] > 0)
  // Filter yang hasilnya 0 disembunyikan supaya pengunjung tidak mengeklik pilihan kosong.
  // Begitu ada project dengan video/screenshot saja, tombolnya muncul sendiri.

  return (
    <div className="filter-bar">
      <div className="chips" role="group" aria-label="Filter">
        {options.map((opt) => (
          <button
            key={opt.key}
            type="button"
            className={`chip ${filter === opt.key ? 'active' : ''}`}
            aria-pressed={filter === opt.key}
            onClick={() => onFilter(opt.key)}
          >
            {opt.icon && <Icon name={opt.icon} size={14} />}
            {opt.label}
            <span className="chip-count">{counts[opt.key]}</span>
          </button>
        ))}
      </div>
      <label className="search">
        <Icon name="search" size={16} />
        <input
          type="search"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Escape' && query && (e.preventDefault(), onQuery(''))}
          placeholder={t.searchPlaceholder}
          aria-label={t.searchPlaceholder}
          enterKeyHint="search"
          autoComplete="off"
          spellCheck={false}
        />
        {query && (
          <button type="button" className="search-clear" onClick={() => onQuery('')} aria-label={t.clearSearch}>
            <Icon name="close" size={14} />
          </button>
        )}
      </label>
    </div>
  )
}
