# Catatan Pengembangan Portofolio

Catatan keputusan dan perubahan yang sudah dibuat, supaya gampang dilanjutkan nanti.

## Keputusan awal

| Hal | Keputusan |
| --- | --- |
| Konsep | Satu halaman berisi kartu-kartu project. Tiap kartu menunjukkan apa yang tersedia: website live, video, dan/atau screenshot |
| Teknologi | React + Vite |
| Deploy | Vercel atau Netlify (langkahnya ada di `README.md`) |
| Video | Di-host di YouTube (boleh Unlisted, opsi "Allow embedding" harus aktif), lalu diputar langsung di popup |
| Bahasa | Dua bahasa, Indonesia & Inggris, dengan tombol ganti ID/EN |
| Data | 10 project asli dari repo GitHub publik (`belajar-primeng` sengaja tidak dimasukkan) |

## Yang sudah dibuat

### Tahap 1: Halaman portofolio
- Header dengan nama, menu, tombol bahasa ID/EN, dan tombol mode gelap/terang
- Bagian atas: nama, peran, bio, dan statistik (jumlah project, yang bisa dicoba, yang ada videonya)
- Kartu project dengan badge otomatis:
  - **Live**: muncul kalau `liveUrl` diisi, ada tombol "Buka website"
  - **Video**: muncul kalau `youtube` diisi, ada tombol "Tonton video"
  - **Screenshot**: menunjukkan jumlah gambar
- Filter: Semua / Website live / Ada video / Screenshot saja
- Pencarian berdasarkan nama atau teknologi
- Popup detail: video YouTube, galeri screenshot (bisa digeser, juga pakai tombol panah keyboard), deskripsi lengkap, tech stack, link website & source code
- Link share per project, misalnya `situs-kamu.com/#kasir-online` langsung membuka popup project itu
- Kalau project tidak punya screenshot, thumbnail kartu diambil dari YouTube
- Tampilan responsif untuk HP
- Mode gelap/terang (pilihan pengunjung diingat di browser)

### Tahap 2: Tema kuning
- Warna utama diganti dari ungu menjadi **kuning** (`#facc15`)
- Tombol, filter aktif, angka statistik, dan garis stabilo di bawah nama berwarna kuning
- Bagian kontak di bawah jadi blok kuning penuh
- Logo & favicon jadi kuning
- Tulisan di atas warna kuning dibuat gelap supaya terbaca
- Mode terang pakai latar krem; teks kuning digelapkan jadi kuning tua (`#a16207`)
- Mode gelap pakai hitam yang sedikit hangat

## Yang masih perlu dikerjakan

- [ ] Isi data diri di `src/data/profile.js` (nama, bio, email, GitHub, LinkedIn)
- [x] Ganti project contoh dengan 10 project asli
- [x] Screenshot asli di `public/screenshots/` (contoh `*.svg` sudah dihapus)
- [ ] Isi nama, email, dan LinkedIn di `src/data/profile.js` (GitHub sudah diisi)
- [ ] Cek semua link live bisa dibuka. Link diambil dari README dan belum bisa dibuka dari sandbox
- [ ] Screenshot untuk Motion Studio, SoalSKD, dan Agensi (sekarang masih kotak huruf)
- [ ] Video demo YouTube (opsional, belum ada project yang punya video)
- [ ] Deploy ke Vercel atau Netlify
- [ ] Cek pemutaran video YouTube langsung di browser (belum bisa dicek dari sandbox)

### Tahap 3: Project asli
- 10 kartu dari repo publik: Petualangan Pintar, Sruput Kopi, Screening Saham IDX, US Market Screener, XAUUSD Backtester, WartungKit, Sedekah Subuh, Motion Studio, SoalSKD, Agensi
- Deskripsi, teknologi, dan angka hasil diambil dari README tiap repo dan dari tampilan halamannya pada 20 Nov 2026
- Screenshot diambil dari tampilan asli (dashboard dijalankan lokal dengan data di repo). Gambar Petualangan Pintar memakai og-image dari repo-nya
- Kalimat hero diganti supaya sesuai dengan project asli

## Lokasi file penting

| File | Fungsi |
| --- | --- |
| `src/data/profile.js` | Data diri & kontak |
| `src/data/projects.js` | Daftar project |
| `public/screenshots/` | Gambar screenshot |
| `src/styles.css` | Warna & tampilan. Warna utama ada di `--accent`, tingkat kuningnya bisa diubah di sini |
| `src/i18n.jsx` | Teks tombol/label dalam bahasa Indonesia & Inggris |
| `README.md` | Cara menjalankan, mengisi data, dan deploy |

## Riwayat

| Tanggal | Perubahan |
| --- | --- |
| 20 Nov 2026 | Halaman portofolio dibuat (React + Vite, dua bahasa, data contoh) |
| 20 Nov 2026 | Tema diganti jadi dominan kuning |
| 20 Nov 2026 | Data contoh diganti 10 project asli + screenshot asli |
| 20 Nov 2026 | Link Petualangan Pintar jadi petualanganpintar.com, link WartungKit ditambahkan |
