// ============================================================
//  DAFTAR PROJECT
//  Untuk menambah project, salin satu blok { ... } lalu ubah isinya.
//
//  Field:
//    id           : kode unik, huruf kecil & tanda minus (dipakai di link share, mis. #wartungkit)
//    title        : nama project
//    year         : tahun pembuatan
//    category     : { id, en } — jenis project
//    summary      : { id, en } — deskripsi singkat (tampil di kartu)
//    details      : { id, en } — deskripsi lengkap (tampil di popup detail). Opsional.
//    role         : { id, en } — bagian yang KAMU kerjakan (mis. 'Solo, frontend sampai deploy'). Opsional.
//    result       : { id, en } — hasil nyata yang bisa dicek: pengguna, angka, waktu. Opsional,
//                   tapi inilah yang paling meyakinkan pengunjung. Jangan mengarang angka.
//    tech         : daftar teknologi yang dipakai
//    liveUrl      : link website yang bisa dibuka.    Kosongkan '' kalau tidak ada.
//    repoUrl      : link source code (GitHub, dll).   Kosongkan '' kalau tidak ada / private.
//    youtube      : link video YouTube (link biasa, youtu.be, atau shorts juga bisa).
//                   Kosongkan '' kalau tidak ada video.
//    screenshots  : daftar gambar. Taruh file di folder public/screenshots/
//                   lalu tulis '/screenshots/nama-file.webp'. Boleh kosong [].
//
//  Badge "Live", "Video", dan "Screenshot" di kartu muncul OTOMATIS
//  berdasarkan field mana yang diisi.
//
//  Isi di bawah diambil dari README tiap repo (20 Nov 2026). Angka di field
//  `result` diambil dari README atau dari tampilan halamannya pada tanggal itu.
// ============================================================

const GH = 'https://github.com/2013tib-droid'

const projects = [
  {
    id: 'petualangan-pintar',
    title: 'Petualangan Pintar',
    year: 2026,
    category: { id: 'Game Edukasi', en: 'Educational Game' },
    summary: {
      id: 'Platform mini-game edukasi berbahasa Indonesia untuk anak Playgroup, TK, dan SD, dibuat untuk HP Android dan tablet.',
      en: 'Indonesian-language educational mini-games for preschool and primary school kids, built for Android phones and tablets.',
    },
    details: {
      id: 'Game dikelompokkan per jenjang (Playgroup & TK, SD Kelas 1 & 2, menyusul SD Kelas 3 & 4) dan dinarasikan suara, tanpa iklan. Akses dijual per kelompok: orang tua membeli kode aktivasi, lalu login dengan email atau akun Google. Kode diperiksa Cloud Function, satu akun maksimal 3 perangkat, dan akses dicek ulang setiap game dibuka. Game baru cukup ditulis sebagai file config untuk engine game yang sudah ada.',
      en: 'Games are grouped by school level (Preschool & Kindergarten, Grades 1–2, with Grades 3–4 on the way), fully narrated and ad-free. Access is sold per group: parents buy an activation code and sign in with email or Google. Codes are validated by a Cloud Function, each account is limited to 3 devices, and access is re-checked every time a game launches. New games are written as config files for an existing game engine.',
    },
    role: { id: 'Dikerjakan sendiri: portal, sistem akses, dan engine game', en: 'Built solo: portal, access system, and game engine' },
    tech: ['React', 'TypeScript', 'Vite', 'Firebase', 'Cloud Functions'],
    liveUrl: 'https://petualanganpintar.com/',
    repoUrl: `${GH}/Game-Edukasi-Anak`,
    youtube: '',
    screenshots: ['/screenshots/petualangan-pintar-1.webp'],
  },
  {
    id: 'sruput-kopi',
    title: 'Sruput Kopi: Ringkas Pagi',
    year: 2026,
    category: { id: 'Otomasi Data', en: 'Data Automation' },
    summary: {
      id: 'Halaman berita pagi yang terbit sendiri tiap 05:00 WIB: berita makro dan mikro Indonesia 24 jam terakhir, tanpa duplikat, cukup dibaca lima menit.',
      en: 'A morning news page that publishes itself at 05:00 WIB: Indonesian macro and micro news from the last 24 hours, de-duplicated, readable in five minutes.',
    },
    details: {
      id: 'Pipeline Python di GitHub Actions mengambil berita dari ratusan sumber, menggabungkan berita yang sama, lalu mengurutkannya menurut berapa banyak media yang meliput. Penilai dampak memberi skor 0–3 dengan aturan lokal (tanpa API berbayar): yang tertinggi masuk blok "Penting Pagi Ini", yang 0 dibuang. Edisi lama tersimpan dan bisa dibuka lewat kalender arsip.',
      en: 'A Python pipeline on GitHub Actions pulls news from hundreds of sources, merges duplicate stories, and ranks them by how many outlets covered them. An impact scorer rates each story 0–3 with local rules (no paid API): the top ones go to "Important This Morning", zeros are dropped. Past editions are kept and browsable through an archive calendar.',
    },
    result: {
      id: 'Edisi 20 Nov 2026: 1.771 artikel dari 265 sumber diringkas jadi 60 peristiwa',
      en: '20 Nov 2026 edition: 1,771 articles from 265 sources condensed into 60 stories',
    },
    tech: ['Python', 'GitHub Actions', 'Vercel'],
    liveUrl: 'https://sruput-kopi.vercel.app/',
    repoUrl: `${GH}/Scraping`,
    youtube: '',
    screenshots: ['/screenshots/sruput-kopi-1.webp'],
  },
  {
    id: 'screening-saham',
    title: 'Screening Saham IDX',
    year: 2026,
    category: { id: 'Dashboard', en: 'Dashboard' },
    summary: {
      id: 'Screener saham Bursa Efek Indonesia dengan data gratis dari Yahoo Finance. Dashboard-nya diperbarui otomatis tiap malam.',
      en: 'An Indonesia Stock Exchange screener using free Yahoo Finance data, with a dashboard that updates itself every night.',
    },
    details: {
      id: 'Saringan swing, value, pertumbuhan, dan trend template, plus rencana entri SMC dan ringkasan broker. Klik satu baris untuk melihat panel rincian emiten: skor, valuasi, red flag, teknikal, dan ringkasan laporan keuangan. Ada indikator IHSG terhadap MA50 sebagai aturan kapan menahan posisi baru, dan halaman uji winrate untuk mengecek hasil saringan di masa lalu.',
      en: 'Swing, value, growth, and trend-template filters, plus SMC entry plans and broker summaries. Click a row for a detail panel: scores, valuation, red flags, technicals, and a financial statement summary. An IHSG-vs-MA50 bar tells when to hold off on new positions, and a win-rate page back-tests past picks.',
    },
    result: {
      id: 'Memantau 402 saham IDX, update otomatis setiap malam lewat GitHub Actions',
      en: 'Tracks 402 IDX stocks, updated automatically every night via GitHub Actions',
    },
    tech: ['Python', 'yfinance', 'JavaScript', 'GitHub Actions', 'GitHub Pages'],
    liveUrl: 'https://2013tib-droid.github.io/Screening-Saham/',
    repoUrl: `${GH}/Screening-Saham`,
    youtube: '',
    screenshots: ['/screenshots/screening-saham-1.webp'],
  },
  {
    id: 'us-market',
    title: 'US Market Screener',
    year: 2026,
    category: { id: 'Dashboard', en: 'Dashboard' },
    summary: {
      id: 'Sistem analisa dan screening saham Amerika: enam faktor, data laporan keuangan dari SEC, dan pembelian orang dalam dari Form 4.',
      en: 'A US stock analysis and screening system: six factors, financial data from the SEC, and insider buying from Form 4 filings.',
    },
    details: {
      id: 'Saudara dari Screening Saham IDX, tapi dengan pendekatan berbeda karena pasarnya berbeda. Mencakup konstituen S&P 500/400/600 dan Nasdaq-100 dengan faktor Value, Quality, Momentum, Low-Vol, Growth, dan Smart money, ditambah Piotroski F-score, Altman Z, dan red flag dari laporan keuangan. Klik baris di dashboard untuk panel detail emiten. Ini alat bantu riset, belum memberi rekomendasi beli/jual.',
      en: 'A sibling of the IDX screener, with a different approach for a different market. Covers S&P 500/400/600 and Nasdaq-100 constituents with Value, Quality, Momentum, Low-Vol, Growth, and Smart money factors, plus Piotroski F-score, Altman Z, and red flags from financial statements. Click any row for a stock detail panel. It is a research aid and does not give buy/sell calls yet.',
    },
    result: {
      id: 'Memantau 1.517 emiten, diperbarui otomatis setiap malam hari bursa',
      en: 'Tracks 1,517 stocks, updated automatically every trading night',
    },
    tech: ['Python', 'SEC EDGAR', 'JavaScript', 'GitHub Actions', 'GitHub Pages'],
    liveUrl: 'https://2013tib-droid.github.io/US-MARKET/',
    repoUrl: `${GH}/US-MARKET`,
    youtube: '',
    screenshots: ['/screenshots/us-market-1.webp'],
  },
  {
    id: 'xauusd',
    title: 'XAUUSD M15 Backtester',
    year: 2026,
    category: { id: 'Alat Trading', en: 'Trading Tool' },
    summary: {
      id: 'Trading plan, backtester, dan briefing pra-entry untuk gold di timeframe 15 menit. Backtest jalan langsung di browser.',
      en: 'Trading plan, backtester, and pre-entry briefing for gold on the 15-minute chart. Back-tests run right in the browser.',
    },
    details: {
      id: 'Taruh CSV M15 dari MetaTrader 5, pilih zona waktu server broker, lalu tiga strategi dijalankan sekaligus: kurva equity, performa per sesi, daftar trade, dan verdikt LOLOS/BELUM LOLOS. Data tidak diunggah ke mana pun karena semuanya dihitung di browser. Versi web dan CLI Python memakai perhitungan yang sama dan dicek oleh uji paritas di CI. Tidak ada bot dan tidak terhubung ke broker.',
      en: 'Drop in an M15 CSV from MetaTrader 5, pick the broker server time zone, and three strategies run at once: equity curve, per-session performance, trade list, and a PASS/NOT YET verdict. Nothing is uploaded; everything is computed in the browser. The web and Python CLI versions share one calculation, enforced by a parity test in CI. No bot, no broker connection.',
    },
    result: {
      id: '529 trade dari 9 kombinasi harus cocok field per field antara versi web dan Python, atau deploy ditolak',
      en: '529 trades across 9 combinations must match field by field between the web and Python versions, or the deploy is blocked',
    },
    tech: ['Python', 'JavaScript', 'GitHub Actions', 'GitHub Pages'],
    liveUrl: 'https://2013tib-droid.github.io/Xauusd/',
    repoUrl: `${GH}/Xauusd`,
    youtube: '',
    screenshots: ['/screenshots/xauusd-1.webp', '/screenshots/xauusd-2.webp'],
  },
  {
    id: 'wartungkit',
    title: 'WartungKit',
    year: 2026,
    category: { id: 'Aplikasi Web', en: 'Web App' },
    summary: {
      id: 'Dashboard penjualan dan arus kas untuk warung camilan kantor. Bisa dipakai offline dan tersinkron antara HP dan laptop.',
      en: 'Sales and cash-flow dashboard for an office snack stall. Works offline and syncs between phone and laptop.',
    },
    details: {
      id: 'Catat modal, belanja mingguan dari Shopee (stok dan modal per pcs dihitung otomatis termasuk ongkir dan voucher), dan penjualan harian dengan sekali ketuk per produk. Dashboard menampilkan omzet, laba kotor dan bersih, saldo kas, nilai stok, produk terlaris, dan saran restock. Data tersimpan di perangkat dan tersinkron ke Upstash Redis lewat Vercel begitu online.',
      en: 'Record capital, weekly Shopee restocks (stock and unit cost are calculated automatically, including shipping and vouchers), and daily sales with one tap per product. The dashboard shows revenue, gross and net profit, cash balance, stock value, best sellers, and restock suggestions. Data is stored on the device and syncs to Upstash Redis via Vercel when online.',
    },
    tech: ['JavaScript', 'PWA', 'Vercel', 'Upstash Redis'],
    liveUrl: 'https://wartungkit.vercel.app/',
    repoUrl: `${GH}/wartungkit`,
    youtube: '',
    screenshots: ['/screenshots/wartungkit-1.webp'],
  },
  {
    id: 'sedekah-subuh',
    title: 'Sedekah Subuh',
    year: 2026,
    category: { id: 'Alat Konten', en: 'Content Tool' },
    summary: {
      id: 'Web perencana konten Instagram dan Threads untuk @wadahqris.id: jadwal harian, kalender triptych, dan prompt siap salin.',
      en: 'Instagram and Threads content planner for @wadahqris.id: a daily schedule, a triptych calendar, and copy-ready prompts.',
    },
    details: {
      id: 'Tab Hari Ini menunjukkan apa yang harus diposting hari itu. Tab Kalender berisi 30 triptych dengan tombol salin prompt gambar (Gemini), prompt teks (ChatGPT), caption, Reels, dan utas Threads. Tab Potong memotong satu gambar jadi 3 post 1080×1440 langsung di perangkat. Isinya dibaca dari satu file Markdown, jadi cukup edit file itu dan situs ter-deploy ulang otomatis.',
      en: 'The Today tab shows what to post that day. The Calendar tab holds 30 triptychs with copy buttons for image prompts (Gemini), text prompts (ChatGPT), captions, Reels, and Threads posts. The Crop tab splits one image into three 1080×1440 posts on the device. Everything is read from a single Markdown file, so editing that file redeploys the site automatically.',
    },
    result: { id: 'Kalender 30 triptych siap pakai untuk jadwal Senin–Rabu–Jumat', en: 'A ready-to-use calendar of 30 triptychs for a Mon–Wed–Fri schedule' },
    tech: ['JavaScript', 'Markdown', 'Python', 'GitHub Actions', 'GitHub Pages'],
    liveUrl: 'https://2013tib-droid.github.io/Sedekahsubuh/',
    repoUrl: `${GH}/Sedekahsubuh`,
    youtube: '',
    screenshots: ['/screenshots/sedekah-subuh-1.webp', '/screenshots/sedekah-subuh-2.webp'],
  },
  {
    id: 'motion-studio',
    title: 'Motion Studio',
    year: 2026,
    category: { id: 'Video Otomatis', en: 'Programmatic Video' },
    summary: {
      id: 'Design system animasi untuk video promosi produk dan konten media sosial. Video baru cukup ditulis sebagai file config.',
      en: 'An animation design system for product promo videos and social content. A new video is just a config file.',
    },
    details: {
      id: 'Dibangun di atas Remotion. Tema, suara narator, transisi, subtitle, dan penutup diatur sekali per seri, lalu tiap video cukup berisi teks dan urutan scene. Tersedia enam tema, format 9:16, 16:9, 1:1, dan 4:5, template untuk peluncuran aplikasi, promo SaaS, edukasi, dan konten harian, plus narasi suara dari Azure. Dipakai untuk video promo project lain, misalnya Petualangan Pintar dan SoalSKD.',
      en: 'Built on Remotion. Theme, narrator voice, transitions, subtitles, and outro are set once per series; each video only holds its text and scene order. Six themes, 9:16, 16:9, 1:1 and 4:5 formats, templates for app launches, SaaS promos, education, and daily content, plus Azure voice narration. Used for promo videos of other projects such as Petualangan Pintar and SoalSKD.',
    },
    tech: ['React', 'TypeScript', 'Remotion', 'Azure TTS'],
    liveUrl: '',
    repoUrl: `${GH}/Video-remotion`,
    youtube: '',
    screenshots: [],
  },
  {
    id: 'soal-skd',
    title: 'SoalSKD',
    year: 2026,
    category: { id: 'Edukasi', en: 'Education' },
    summary: {
      id: 'Bank soal SKD untuk latihan USM PKN STAN: soal orisinal buatan LLM, analisis biaya token, pembuat ebook PDF, dan aplikasi try out.',
      en: 'An SKD question bank for the PKN STAN entrance exam: original LLM-written questions, token cost analysis, a PDF ebook builder, and a practice-test app.',
    },
    details: {
      id: 'Dimulai dari analisis berapa biaya membuat bank soal dengan LLM, lalu berkembang jadi perkakas lengkap: soal TWK, TIU, dan TKP dengan kunci, bobot, dan pembahasan dalam format JSON; pembuat ebook PDF dari bank soal; estimator token offline; dan aplikasi try out berbasis Next.js yang masih dikembangkan. Soal disusun orisinal mengacu kisi-kisi SKD, bukan hasil scraping.',
      en: 'It began as an analysis of what an LLM-generated question bank would cost, then grew into a full toolkit: TWK, TIU, and TKP questions with answer keys, weights, and explanations in JSON; a PDF ebook builder; an offline token estimator; and a Next.js practice-test app still in development. Questions are original, based on the official SKD outline, not scraped.',
    },
    result: {
      id: 'Satu paket SKD penuh (110 soal) cukup sekitar 23.500 token output, $0,12–0,62 per paket',
      en: 'One full SKD set (110 questions) takes about 23,500 output tokens, $0.12–0.62 per set',
    },
    tech: ['Next.js', 'Firebase', 'Node.js', 'Python'],
    liveUrl: '',
    repoUrl: `${GH}/SoalSKD`,
    youtube: '',
    screenshots: [],
  },
  {
    id: 'agensi',
    title: 'Agensi',
    year: 2026,
    category: { id: 'Developer Tools', en: 'Developer Tools' },
    summary: {
      id: 'Gudang skill UI/UX untuk Claude Code, dikemas sebagai plugin marketplace yang bisa dipasang di proyek mana pun.',
      en: 'A library of UI/UX skills for Claude Code, packaged as a plugin marketplace you can install in any project.',
    },
    details: {
      id: 'Berisi gaya desain pribadi (landing page, dashboard, Figma) ditambah skill hasil kurasi dari belasan repo open source. Ada perintah siap pakai untuk membuat landing page, merapikan tampilan, dan mengecek UI otomatis dengan Playwright di lebar HP dan desktop setiap kali file UI berubah. Setiap plugin menyimpan lisensi dan sumber aslinya.',
      en: 'Holds a personal design style (landing pages, dashboards, Figma) plus skills curated from over a dozen open source repos. Includes ready commands to build landing pages, polish UI, and automatically check layouts with Playwright at phone and desktop widths whenever a UI file changes. Each plugin keeps its original license and source.',
    },
    result: { id: '14 plugin dan 66 skill UI/UX (per 6 Nov 2026)', en: '14 plugins and 66 UI/UX skills (as of 6 Nov 2026)' },
    tech: ['Claude Code', 'Markdown', 'Bash', 'Playwright'],
    liveUrl: '',
    repoUrl: `${GH}/Agensi`,
    youtube: '',
    screenshots: [],
  },
]

export default projects
