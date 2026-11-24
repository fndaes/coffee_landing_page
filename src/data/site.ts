export const site = {
  name: "Roast & Root",
  tagline: "Good Coffee. Good Company.",
  city: "Cimahi",
  region: "Jawa Barat",

  // PLACEHOLDER: ganti dengan nomor WhatsApp resmi (format internasional tanpa "+").
  whatsappNumber: "6289654625098",
  whatsappMessage:
    "Halo Roast & Root! Saya ingin bertanya tentang menu, jam buka, dan reservasi.",

  // PLACEHOLDER: ganti dengan akun Instagram resmi.
  instagramHandle: "@roastandroot",
  instagramUrl: "https://www.instagram.com/",

  // PLACEHOLDER: alamat lengkap belum tersedia dari brief.
  address: "Alamat lengkap menyusul",
  addressDetail: "Cimahi, Jawa Barat",

  // PLACEHOLDER: jam operasional contoh, mudah diganti di satu tempat.
  hours: [
    { label: "Senin – Kamis", value: "08.00 – 22.00" },
    { label: "Jumat – Sabtu", value: "08.00 – 23.00" },
    { label: "Minggu", value: "09.00 – 21.00" },
  ],
  hoursNote:
    "Jam operasional dapat berubah. Konfirmasi via WhatsApp sebelum berkunjung.",

  maps: {
    // Peta area Cimahi — bukan alamat fiktif.
    embed: "https://www.google.com/maps?q=Cimahi,+Jawa+Barat&z=14&output=embed",
    link: "https://www.google.com/maps/search/?api=1&query=Cimahi%2C+Jawa+Barat",
    label: "Cimahi, Jawa Barat",
  },
} as const;
