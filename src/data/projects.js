// ============================================================
//  DAFTAR PROJECT
//  Untuk menambah project, salin satu blok { ... } lalu ubah isinya.
//
//  Field:
//    id           : kode unik, huruf kecil & tanda minus (dipakai di link share, mis. #kasir-online)
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
//                   lalu tulis '/screenshots/nama-file.png'. Boleh kosong [].
//
//  Badge "Live", "Video", dan "Screenshot" di kartu muncul OTOMATIS
//  berdasarkan field mana yang diisi.
//
//  CATATAN: semua project di bawah ini hanya CONTOH. Link video memakai
//  video publik (Big Buck Bunny) sebagai placeholder — ganti dengan video kamu.
// ============================================================

const projects = [
  {
    id: 'kasir-online',
    title: 'Kasir Online',
    year: 2026,
    category: { id: 'Aplikasi Web', en: 'Web App' },
    summary: {
      id: 'Aplikasi kasir (POS) untuk UMKM: catat penjualan, kelola stok, dan cetak struk.',
      en: 'Point-of-sale app for small businesses: record sales, manage stock, and print receipts.',
    },
    details: {
      id: 'Dibuat untuk membantu warung dan toko kecil beralih dari pencatatan manual. Fitur utama: transaksi cepat dengan pencarian barang, laporan penjualan harian/bulanan, notifikasi stok menipis, dan multi-user (kasir & pemilik).',
      en: 'Built to help small shops move away from manual bookkeeping. Key features: fast checkout with product search, daily/monthly sales reports, low-stock alerts, and multiple user roles (cashier & owner).',
    },
    role: { id: 'Sendirian, dari frontend sampai database', en: 'Built solo, from frontend to database' },
    result: { id: 'Dipakai 3 toko kelontong setiap hari sejak Maret 2026', en: 'Used daily by 3 grocery shops since March 2026' },
    tech: ['React', 'Node.js', 'Express', 'MySQL'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/username/kasir-online',
    youtube: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
    screenshots: ['/screenshots/kasir-1.svg', '/screenshots/kasir-2.svg', '/screenshots/kasir-3.svg'],
  },
  {
    id: 'toko-batik',
    title: 'Landing Page Toko Batik',
    year: 2026,
    category: { id: 'Website', en: 'Website' },
    summary: {
      id: 'Landing page responsif untuk brand batik lokal, lengkap dengan katalog dan tombol order via WhatsApp.',
      en: 'Responsive landing page for a local batik brand, with a catalog and order-via-WhatsApp button.',
    },
    details: {
      id: 'Fokus pada tampilan yang cepat di HP karena mayoritas pembeli datang dari Instagram. Skor Lighthouse 95+ untuk performa.',
      en: 'Optimised for mobile because most buyers arrive from Instagram. Scores 95+ on Lighthouse performance.',
    },
    role: { id: 'Desain dan kode', en: 'Design and code' },
    result: { id: 'Skor Lighthouse 95+ di HP; order masuk lewat WhatsApp', en: '95+ Lighthouse score on mobile; orders arrive via WhatsApp' },
    tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
    liveUrl: 'https://example.com',
    repoUrl: '',
    youtube: '',
    screenshots: ['/screenshots/batik-1.svg', '/screenshots/batik-2.svg'],
  },
  {
    id: 'absensi-mobile',
    title: 'Absensi Mobile',
    year: 2025,
    category: { id: 'Aplikasi Mobile', en: 'Mobile App' },
    summary: {
      id: 'Aplikasi absensi karyawan berbasis lokasi (GPS) dan swafoto.',
      en: 'Employee attendance app using GPS location and selfies.',
    },
    details: {
      id: 'Karyawan hanya bisa absen jika berada di radius kantor. Admin bisa melihat rekap kehadiran dan mengekspor ke Excel. Aplikasi ini dipakai internal sehingga tidak ada versi web publik. Lihat video demonya.',
      en: 'Employees can only check in within the office radius. Admins can view attendance summaries and export to Excel. Used internally, so there is no public web version. Watch the demo video instead.',
    },
    role: { id: 'Aplikasi Flutter dan setup Firebase', en: 'Flutter app and Firebase setup' },
    result: { id: 'Menggantikan absen kertas untuk 40 karyawan', en: 'Replaced paper attendance for 40 employees' },
    tech: ['Flutter', 'Firebase', 'Google Maps API'],
    liveUrl: '',
    repoUrl: '',
    youtube: 'https://youtu.be/aqz-KE-bpKQ',
    screenshots: ['/screenshots/absensi-1.svg', '/screenshots/absensi-2.svg'],
  },
  {
    id: 'dashboard-iot',
    title: 'Dashboard Monitoring IoT',
    year: 2025,
    category: { id: 'Dashboard', en: 'Dashboard' },
    summary: {
      id: 'Dashboard real-time untuk memantau suhu & kelembapan greenhouse dari sensor ESP32.',
      en: 'Real-time dashboard monitoring greenhouse temperature & humidity from ESP32 sensors.',
    },
    details: {
      id: 'Project tugas akhir. Data sensor dikirim lewat MQTT dan ditampilkan dalam grafik. Server sudah tidak aktif, jadi hanya tersedia screenshot.',
      en: 'Final-year project. Sensor data is sent over MQTT and plotted live. The server is no longer running, so only screenshots are available.',
    },
    role: { id: 'Tugas akhir, dikerjakan sendiri', en: 'Final year project, built solo' },
    result: { id: 'Membaca 4 sensor secara langsung tiap 5 detik', en: 'Reads 4 sensors live every 5 seconds' },
    tech: ['Vue.js', 'MQTT', 'ESP32', 'Chart.js'],
    liveUrl: '',
    repoUrl: 'https://github.com/username/dashboard-iot',
    youtube: '',
    screenshots: ['/screenshots/iot-1.svg', '/screenshots/iot-2.svg'],
  },
  {
    id: 'sistem-perpustakaan',
    title: 'Sistem Perpustakaan',
    year: 2024,
    category: { id: 'Aplikasi Web', en: 'Web App' },
    summary: {
      id: 'Sistem peminjaman buku sekolah dengan scan barcode dan pengingat jatuh tempo.',
      en: 'School library lending system with barcode scanning and due-date reminders.',
    },
    details: {
      id: 'Petugas cukup scan barcode kartu siswa dan buku untuk mencatat peminjaman. Denda dihitung otomatis.',
      en: 'Librarians just scan the student card and book barcode to record a loan. Late fees are calculated automatically.',
    },
    role: { id: 'Backend Laravel dan halaman petugas', en: 'Laravel backend and librarian screens' },
    result: { id: 'Satu peminjaman dicatat dalam dua kali scan', en: 'Each loan is recorded in two scans' },
    tech: ['Laravel', 'MySQL', 'Bootstrap'],
    liveUrl: 'https://example.com',
    repoUrl: '',
    youtube: '',
    screenshots: ['/screenshots/perpus-1.svg'],
  },
  {
    id: 'bot-pengingat',
    title: 'Bot Pengingat WhatsApp',
    year: 2024,
    category: { id: 'Otomasi', en: 'Automation' },
    summary: {
      id: 'Bot yang mengirim pengingat jadwal & tagihan otomatis lewat WhatsApp.',
      en: 'A bot that sends schedule & bill reminders automatically via WhatsApp.',
    },
    details: {
      id: 'Tidak punya tampilan web, jadi cara terbaik melihatnya adalah lewat video demo. Kalau screenshot kosong, thumbnail kartu otomatis diambil dari YouTube.',
      en: 'It has no web interface, so the demo video is the best way to see it. With no screenshots, the card thumbnail is taken from YouTube automatically.',
    },
    role: { id: 'Dikerjakan sendiri', en: 'Built solo' },
    result: { id: 'Mengirim pengingat tagihan tanpa dikirim manual', en: 'Sends bill reminders with no manual sending' },
    tech: ['Node.js', 'Baileys', 'Cron'],
    liveUrl: '',
    repoUrl: '',
    youtube: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
    screenshots: [],
  },
]

export default projects
