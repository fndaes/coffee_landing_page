export type Promotion = {
  discount: string;
  label: string;
  description: string;
  terms: string[];
  note: string;
  ticket: {
    kicker: string;
    discount: string;
    off: string;
    requirement: string;
    schedule: string;
    footer: string;
  };
};

// PLACEHOLDER: syarat dan jam promo mengikuti brief "10% OFF for students
// during selected weekday hours". Sesuaikan detailnya dengan kebijakan kedai.
export const promotion: Promotion = {
  discount: "10% OFF",
  label: "Student Weekday",
  description:
    "Untuk pelajar dan mahasiswa yang butuh tempat fokus di hari kerja. Tunjukkan kartu identitasmu di kasir dan nikmati potongan harga.",
  terms: [
    "Berlaku Senin–Jumat pada jam promo yang ditentukan.",
    "Berlaku untuk pelajar dan mahasiswa dengan kartu aktif.",
    "Berlaku untuk menu minuman dan camilan pilihan.",
    "Tidak dapat digabung dengan promo lain.",
  ],
  note: "Jam promo dapat berubah — tanyakan via WhatsApp.",
  ticket: {
    kicker: "Student Weekday",
    discount: "10%",
    off: "OFF",
    requirement: "Tunjukkan kartu pelajar / mahasiswa",
    schedule: "Senin – Jumat · jam tertentu",
    footer: "Roast & Root — Cimahi",
  },
};
