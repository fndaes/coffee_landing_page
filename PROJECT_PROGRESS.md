# PROJECT PROGRESS — Roast & Root

Terakhir diperbarui: 24 November 2026

## 1. Ringkasan Status Proyek

- **Brand:** Roast & Root (*Good Coffee. Good Company.*) — Cimahi, Jawa Barat
- **Stack:** React 19, TypeScript 5.9, Vite 7, Tailwind CSS v4, Framer Motion 14, Lucide React
- **Status Build:** `npm run build` (`tsc --noEmit && vite build`) **LULUS** tanpa error

## 2. Fitur Selesai

- **Struktur Halaman Lengkap (9 Bagian):**
  1. `Navbar` & `MobileMenu` (sticky header, drawer mobile dengan focus trap, Escape handler, dan body scroll lock)
  2. `Hero` (headline editorial, CTA menu & WhatsApp, highlight 3 kolom, image frame, dan marquee)
  3. `About` (cerita roastery, 3 langkah proses Pilih–Sangrai–Seduh, tag single origin, sticky visual frame)
  4. `SignatureMenu` (filter kategori interaktif `Semua`, `Kopi`, `Manual Brew`, `Camilan`, `aria-live`, sticky preview card desktop, daftar menu 6 item)
  5. `Facilities` (grid 4 fasilitas: High-Speed Wi-Fi, Power Outlet, Meeting Space, Parking Area)
  6. `Promotion` (promo 10% OFF Student Weekday dengan tampilan kupon editorial & CTA WhatsApp)
  7. `LocationContact` (informasi alamat, jam operasional, CTA WhatsApp & Google Maps, embed peta Cimahi)
  8. `Testimonials` (3 kutipan komunitas tanpa nama fiktif)
  9. `Footer` (navigasi, jam buka, kontak, tombol kembali ke atas)
- **Infrastruktur & Kualitas:**
  - Pemisahan data terstruktur di `src/data/` (`site.ts`, `navigation.ts`, `menu.ts`, `facilities.ts`, `promotion.ts`, `testimonials.ts`).
  - Metadata SEO, Open Graph, Twitter Card, dan JSON-LD `CafeOrCoffeeShop` di `index.html`.
  - Aset foto lokal tersedia di `public/images/`.

## 3. Perbaikan Bug yang Sudah Dikerjakan

1. **Perbaikan `position: sticky` yang terblokir `overflow-hidden`:**
   - Mengubah `overflow-x: hidden` pada `body` (`src/index.css`) menjadi `overflow-x: clip`.
   - Mengubah `overflow-hidden` menjadi `overflow-x-clip` pada section `About` (`src/components/sections/About.tsx`), `SignatureMenu` (`src/components/sections/SignatureMenu.tsx`), dan `Facilities` (`src/components/sections/Facilities.tsx`) agar elemen `sticky top-32` tetap berfungsi normal di desktop.
2. **Dukungan `prefers-reduced-motion` Global & Interaksi Preview Menu:**
   - Membungkus `App` dengan `<MotionConfig reducedMotion="user">` di `src/App.tsx`.
   - Menambahkan `onClick` serta indikator visual border aktif pada baris menu di `src/components/sections/SignatureMenu.tsx`.

## 4. Tertunda / Menunggu Data Resmi Pemilik Kedai

Data berikut sengaja menggunakan placeholder sesuai aturan `AGENTS.md.txt` dan siap diperbarui di `src/data/`:
- Nomor WhatsApp resmi (`src/data/site.ts`)
- Akun & URL Instagram resmi (`src/data/site.ts`)
- Alamat lengkap kedai & koordinat Google Maps spesifik (`src/data/site.ts`)
- Jam operasional final & jam promo Student Weekday (`src/data/site.ts`, `src/data/promotion.ts`)
- Harga menu final (`src/data/menu.ts`)
- Testimoni pelanggan terverifikasi (`src/data/testimonials.ts`)
- URL kanonikal produksi di `index.html`

## 5. Prioritas Pekerjaan Berikutnya

1. **Verifikasi visual & responsif langsung di browser** (desktop, tablet, mobile) via `npm run dev` atau `npm run preview`.
2. **Finalisasi data bisnis resmi** pada `src/data/*` dan `index.html` saat informasi dari pemilik kedai tersedia.
3. **Optimasi aset gambar** (konversi/kompresi ke WebP/ukuran responsif jika diperlukan sebelum deploy produksi).
