# Catatan Pengembangan Portofolio

Catatan keputusan dan perubahan yang sudah dibuat, supaya gampang dilanjutkan nanti.

## Keputusan awal

| Hal | Keputusan |
| --- | --- |
| Konsep | Satu halaman berisi kartu-kartu project. Tiap kartu menunjukkan apa yang tersedia: website live, video, dan/atau screenshot |
| Teknologi | React + Vite |
| Deploy | Uji coba dulu di GitHub Pages, kalau sudah oke baru ke Vercel (langkahnya ada di `README.md`) |
| Video | Di-host di YouTube (boleh Unlisted, opsi "Allow embedding" harus aktif), lalu diputar langsung di popup |
| Bahasa | Dua bahasa, Indonesia & Inggris, dengan tombol ganti ID/EN |
| Data | Sementara pakai 6 project contoh, nanti diganti dengan project asli |

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

### Tahap 3: Deploy uji coba ke GitHub Pages
- Workflow GitHub Actions untuk build & deploy ke `https://2013tib-droid.github.io/Portofolio-pojectku/`
- Path dasar (`base`) Vite bisa diatur lewat `BASE_PATH`; default `/` supaya Vercel tetap jalan tanpa diubah
- Path screenshot lokal otomatis diberi awalan base URL, jadi tetap muncul di sub-folder

## Yang masih perlu dikerjakan

- [ ] Isi data diri di `src/data/profile.js` (nama, bio, email, GitHub, LinkedIn)
- [ ] Ganti 6 project contoh di `src/data/projects.js` dengan project asli
- [ ] Taruh screenshot asli di `public/screenshots/`, lalu hapus gambar contoh (`*.svg`)
- [ ] Upload video demo ke YouTube dan masukkan link-nya (video sekarang masih placeholder Big Buck Bunny)
- [ ] Ganti link `https://example.com` dengan link website asli
- [ ] Aktifkan GitHub Pages (Source: GitHub Actions) & izinkan branch di environment `github-pages`
- [ ] Kalau sudah oke di GitHub Pages, deploy ke Vercel
- [ ] Cek pemutaran video YouTube langsung di browser (belum bisa dicek dari sandbox)

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
