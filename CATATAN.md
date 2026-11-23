# Catatan Pengembangan Portofolio

Catatan keputusan dan perubahan yang sudah dibuat, supaya gampang dilanjutkan nanti.

## Keputusan awal

| Hal | Keputusan |
| --- | --- |
| Konsep | Satu halaman berisi kartu-kartu project. Tiap kartu menunjukkan apa yang tersedia: website live, video, dan/atau screenshot |
| Teknologi | React + Vite |
| Deploy | Uji coba dulu di GitHub Pages (sudah online), kalau sudah oke baru ke Vercel (langkahnya ada di `README.md`) |
| Video | Di-host di YouTube (boleh Unlisted, opsi "Allow embedding" harus aktif), lalu diputar langsung di popup |
| Bahasa | Dua bahasa, Indonesia & Inggris, dengan tombol ganti ID/EN |
| Data | 10 project asli dari repo GitHub publik (`belajar-primeng` sengaja tidak dimasukkan) |

## Yang sudah dibuat

### Tahap 1: Halaman portofolio
- Header dengan nama, menu, tombol bahasa ID/EN, dan tombol mode gelap/terang
- Bagian atas: nama, peran, bio (statistik dihapus di Tahap 4)
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

### Tahap 3: Deploy uji coba ke GitHub Pages
- Workflow GitHub Actions untuk build & deploy ke `https://2013tib-droid.github.io/Portofolio-pojectku/`
- Path dasar (`base`) Vite bisa diatur lewat `BASE_PATH`; default `/` supaya Vercel tetap jalan tanpa diubah
- Path screenshot lokal otomatis diberi awalan base URL, jadi tetap muncul di sub-folder
- **Status: sudah online** di https://2013tib-droid.github.io/Portofolio-pojectku/
- Setiap push ke branch `claude/web-dev-setup-ckqcdc` otomatis ter-deploy

#### Pengaturan GitHub yang sudah dilakukan
| Lokasi | Pengaturan |
| --- | --- |
| Settings → Pages → Source | **GitHub Actions** (tersimpan otomatis, tidak ada tombol Save; tombol Save di bawahnya hanya untuk Custom domain) |
| Settings → Environments → github-pages → Deployment branches | **Selected branches**: `claude/elegant-knuth-d8rmf3` dan `claude/web-dev-setup-ckqcdc` |

Jangan klik **Configure** di kartu Jekyll / Static HTML, karena workflow sudah ada sendiri (`.github/workflows/deploy-pages.yml`).

#### Masalah yang pernah muncul
| Error | Penyebab | Solusi |
| --- | --- | --- |
| Job `deploy` gagal: `Failed to create deployment (status: 404) ... Ensure GitHub Pages has been enabled` | GitHub Pages belum diaktifkan | Set Source ke GitHub Actions, lalu Actions → run → **Re-run failed jobs** |
| (Akan muncul kalau branch belum diizinkan) deploy ditolak oleh environment | Bawaannya hanya branch default yang boleh deploy | Tambahkan branch di Environments → github-pages |
| Peringatan `Node.js 20 is deprecated` dari `deploy-pages@v4` | Hanya peringatan | Tidak perlu diapa-apakan |

Kalau mau deploy dari branch lain, branch itu juga harus ditambahkan di Environments → github-pages, dan dimasukkan ke `on: push: branches` di workflow.

### Tahap 4: Kurangi kesan AI slop
- Hero: judul besar berisi apa yang dibuat dan untuk siapa; nama pindah ke baris kecil di atasnya
- Slot foto opsional (`photo` di `profile.js`, taruh file di `public/`)
- Kotak statistik dihapus karena mengulang angka di filter
- Project punya field `role` (peranku) dan `result` (hasil nyata), tampil di kartu dan popup
- Semua gradasi dihapus (glow hero, logo, placeholder kartu): **jangan pakai gradasi**, warna solid saja
- Em dash dihapus dari copy

## Yang masih perlu dikerjakan

- [ ] Isi nama, foto, email, dan LinkedIn di `src/data/profile.js` (GitHub sudah diisi)
- [x] Ganti project contoh dengan 10 project asli
- [x] Screenshot asli di `public/screenshots/` (contoh `*.svg` sudah dihapus)
- [ ] Cek `role` dan `result` tiap project sudah sesuai kenyataan
- [ ] Cek semua link live bisa dibuka. Link diambil dari README dan belum bisa dibuka dari sandbox
- [ ] Screenshot untuk Motion Studio, SoalSKD, dan Agensi (sekarang masih kotak huruf)
- [ ] Video demo YouTube (opsional, belum ada project yang punya video)
- [x] Aktifkan GitHub Pages (Source: GitHub Actions) & izinkan branch di environment `github-pages`
- [ ] Cek tampilan di https://2013tib-droid.github.io/Portofolio-pojectku/ (HP & laptop)
- [ ] Kalau sudah oke di GitHub Pages, deploy ke Vercel
- [ ] Cek pemutaran video YouTube langsung di browser (belum bisa dicek dari sandbox)

### Tahap 5: Project asli
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
| 20 Nov 2026 | Setup deploy uji coba ke GitHub Pages |
| 20 Nov 2026 | GitHub Pages diaktifkan, deploy pertama berhasil |
| 20 Nov 2026 | Hero dan kartu dibuat lebih konkret, statistik dan semua gradasi dihapus |
| 20 Nov 2026 | Data contoh diganti 10 project asli + screenshot asli |
| 20 Nov 2026 | Link Petualangan Pintar jadi petualanganpintar.com, link WartungKit ditambahkan |
