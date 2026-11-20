// Ambil ID video dari berbagai format link YouTube:
//   https://www.youtube.com/watch?v=ID
//   https://youtu.be/ID
//   https://www.youtube.com/shorts/ID
//   https://www.youtube.com/embed/ID
//   atau langsung ID-nya (11 karakter)
export function getYouTubeId(input) {
  if (!input) return null
  const value = input.trim()
  if (/^[\w-]{11}$/.test(value)) return value

  try {
    const url = new URL(value)
    const host = url.hostname.replace(/^www\.|^m\./, '')
    if (host === 'youtu.be') return url.pathname.slice(1, 12) || null
    if (host.endsWith('youtube.com') || host.endsWith('youtube-nocookie.com')) {
      const v = url.searchParams.get('v')
      if (v) return v
      const match = url.pathname.match(/\/(?:shorts|embed|live|v)\/([\w-]{11})/)
      if (match) return match[1]
    }
  } catch {
    // bukan URL yang valid
  }
  return null
}

export function isYouTubeShort(input) {
  return typeof input === 'string' && input.includes('/shorts/')
}

export function youTubeEmbedUrl(id) {
  return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`
}

export function youTubeThumbnail(id) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
}
