# Portofolio Project

Halaman portofolio untuk memamerkan project-project yang pernah aku buat. Setiap project tampil sebagai kartu, dan pengunjung bisa:

- 🌐 **Buka website-nya** kalau project sudah online (badge **Live**)
- ▶️ **Tonton video demo** langsung di halaman (popup YouTube, badge **Video**)
- 🖼️ **Lihat galeri screenshot** (bisa digeser, badge jumlah gambar)

Fitur lain: filter (Semua / Website live / Ada video / Screenshot saja), pencarian berdasarkan nama atau teknologi, dua bahasa (ID/EN), mode gelap/terang, tampilan responsif untuk HP, dan link share per project (mis. `https://situs-kamu.com/#kasir-online` langsung membuka popup project itu).

Dibuat dengan **React + Vite**.

## Menjalankan di komputer

```bash
npm install
npm run dev       # buka http://localhost:5173
npm run build     # hasil build ada di folder dist/
```

## Mengganti isi dengan project kamu

Semua isi ada di dua file. Kamu tidak perlu mengubah kode lain.

| File | Isi |
| --- | --- |
| `src/data/profile.js` | Nama, peran, bio, dan link kontak |
| `src/data/projects.js` | Daftar project |

Contoh satu project:

```js
{
  id: 'kasir-online',                  // unik, huruf kecil & tanda minus
  title: 'Kasir Online',
  year: 2026,
  category: { id: 'Aplikasi Web', en: 'Web App' },
  summary:  { id: 'Deskripsi singkat…', en: 'Short description…' },
  details:  { id: 'Deskripsi lengkap…', en: 'Full description…' },  // opsional
  tech: ['React', 'Node.js'],
  liveUrl: 'https://kasir-online.vercel.app',   // '' kalau tidak ada website
  repoUrl: 'https://github.com/kamu/kasir',     // '' kalau private
  youtube: 'https://youtu.be/XXXXXXXXXXX',      // '' kalau tidak ada video
  screenshots: ['/screenshots/kasir-1.png', '/screenshots/kasir-2.png'],
}
```

Badge Live, Video, dan Screenshot muncul otomatis sesuai field yang diisi.

### Screenshot

Taruh gambar di `public/screenshots/`, lalu tulis path-nya di `screenshots` (diawali `/screenshots/...`).
Tips: pakai rasio sekitar 16:10 (mis. 1280×800) supaya rapi di kartu, dan kompres dulu (format `.webp` atau `.jpg`) supaya halaman tetap cepat.
Gambar pertama dipakai sebagai thumbnail kartu. Kalau tidak ada screenshot tapi ada video, thumbnail diambil otomatis dari YouTube.

### Video YouTube

Upload video ke YouTube (boleh **Unlisted** supaya tidak muncul di pencarian YouTube, tapi tetap bisa diputar di portofolio). Pastikan opsi **"Allow embedding"** aktif. Format link yang didukung: `youtube.com/watch?v=…`, `youtu.be/…`, `youtube.com/shorts/…` (video vertikal otomatis ditampilkan tegak).

> Screenshot di `public/screenshots/*.webp` diambil dari tampilan asli tiap project. Ganti kalau tampilannya berubah.

## Deploy

### Vercel
1. Push repo ini ke GitHub.
2. Masuk ke [vercel.com](https://vercel.com) → **Add New… → Project** → pilih repo ini.
3. Vercel otomatis mendeteksi Vite (Build Command `npm run build`, Output `dist`). Klik **Deploy**.

### Netlify
1. Masuk ke [netlify.com](https://netlify.com) → **Add new site → Import an existing project** → pilih repo ini.
2. Build command: `npm run build`, Publish directory: `dist`. Klik **Deploy**.

Setiap kali kamu push perubahan (mis. menambah project), situs akan ter-update otomatis.

## Struktur folder

```
public/screenshots/     gambar screenshot project
src/data/               ← isi portofolio (profil & project)
src/components/         komponen tampilan (kartu, popup, filter, dll)
src/i18n.jsx            teks antarmuka dalam bahasa Indonesia & Inggris
src/styles.css          warna & tampilan (ubah warna utama di --accent)
```
