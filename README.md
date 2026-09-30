# Portofolio Kemitraan & Sponsorship Atlet Pickleball (Ramsports x Ravy Sultan)

Website resmi portofolio atlet pickleball profesional yang dirancang khusus untuk mempresentasikan kemitraan (*sponsorship pitch*) kepada brand **Ramsports** (`@ramsportspickleball`).

Dilengkapi dashboard performa real-time, DUPR tracker, sinergi paddle, pemutar video cuplikan pertandingan, serta integrasi kontak WhatsApp.

---

## 🚀 Panduan Membuka & Mengedit di VS Code (Visual Studio Code)

Proyek ini menggunakan **React + TypeScript + Vite + Tailwind CSS**, standar modern yang sangat mudah diedit di VS Code.

### 1. Buka di VS Code
1. Buka aplikasi **VS Code**.
2. Pilih menu **File > Open Folder...** (atau tekan `Ctrl + K, Ctrl + O` di Windows).
3. Pilih folder proyek ini.

### 2. Instalasi Dependencies
Buka terminal terintegrasi di VS Code (`Ctrl + ~` atau menu **Terminal > New Terminal**), lalu jalankan perintah:
```bash
npm install
```

### 3. Menjalankan Website Secara Lokal
Untuk melihat website berjalan di browser dengan live reload:
```bash
npm run dev
```
Buka browser di alamat: **`http://localhost:3000`**

### 4. Build untuk Produksi
Jika ingin mengunggah ke hosting (Vercel, Netlify, Cloudflare Pages, atau cPanel):
```bash
npm run build
```
Hasil file web yang siap diunggah akan berada di dalam folder **`dist/`**.

---

## ✏️ Panduan Mengedit Konten & Data di VS Code

Semua data dan teks dibuat modular agar sangat mudah diubah tanpa merusak kode tampilan:

### A. Mengubah Data Atlet, DUPR, Medsos & Nomor WhatsApp
Buka file: **`src/data/athleteData.ts`**
- **Nama Atlet**: Ubah `name: 'Ravy Sultan'`
- **Nomor WhatsApp**: Ubah `whatsappNumber: '6281288992345'` (gunakan format kode negara tanpa tanda `+`)
- **Email**: Ubah `email: 'ravysultan9@gmail.com'`
- **Rating DUPR**: Ubah `duprDoubles` dan `duprSingles`
- **Win Rate & Statistik**: Ubah `INITIAL_PERFORMANCE_STATS`
- **Daftar Turnamen & Gelar**: Tambah atau edit item di array `TOURNAMENT_RECORDS`
- **Paket Kemitraan**: Ubah benefit atau harga di array `SPONSORSHIP_TIERS`

### B. Mengganti Foto & Video dengan File Asli Anda
Buka folder: **`public/assets/`**
Cukup salin dan timpa (*replace*) file-file Anda langsung ke folder ini dengan nama yang sama persis:
1. `foto in game.jpg`
2. `fotobeberapamedali.jpg`
3. `fotomenggunakanmedali.jpg`
4. `fotopaddlekamito.png`
5. `fotoprofil.jpg`
6. `juara2jakartapickleballchampionship.jpeg`
7. `juara2mensdoubleitb.jpg`
8. `juara2mensdoublekadispora.jpg`
9. `juara2menssingleunj.jpg`
10. `juara3jabodetabek.jpeg`
11. `juara3mensdoubleUI.jpg`
12. `my instagram.png`
13. `mytiktok.png`
14. `sertifjuara1kadispora.jpeg`
15. `videosatu.mp4`

*Tips: Website akan otomatis mendeteksi dan menampilkan foto baru Anda seketika!*

### C. Mengubah Tampilan & Warna
- **Warna Identitas Ramsports (Volt Lime `#D4FF00`)**: Diatur di `src/index.css` dan kelas Tailwind di komponen.
- **Komponen Tampilan**: Terletak di folder `src/components/`:
  - `Navbar.tsx` (Menu atas & logo brand)
  - `Hero.tsx` (Bagian pembuka & sorotan foto atlet)
  - `StatsDashboard.tsx` (Dashboard angka statistik & akurasi)
  - `TournamentsVault.tsx` (Kartu turnamen & bukti medali)
  - `RamsportSynergy.tsx` (Perbandingan paddle & kalkulator sponsor)
  - `VideoReel.tsx` (Pemutar video pertandingan)
  - `MediaGallery.tsx` (Galeri foto lengkap & analitik sosmed)
  - `ContactSection.tsx` (Tombol WhatsApp & formulir penawaran)

---

## 🛠️ Tech Stack
- **Framework**: React 19 + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Zip Compression**: JSZip
