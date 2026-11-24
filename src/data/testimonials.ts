export type Testimonial = {
  id: string;
  quote: string;
  role: string;
};

// PLACEHOLDER: kutipan komunitas tanpa atribusi nama. Ganti dengan kutipan
// yang sudah diverifikasi sebelum publikasi.
export const testimonials: Testimonial[] = [
  {
    id: "mahasiswa",
    quote:
      "Tempat yang pas untuk menyelesaikan tugas tanpa terburu-buru. Kopinya konsisten, dan suasana sore di sini susah dicari di tempat lain.",
    role: "Mahasiswa",
  },
  {
    id: "remote-worker",
    quote:
      "Wi-Fi kencang, colokan di mana-mana, dan staf yang paham bedanya kerja fokus dan ngobrol santai. Sudah jadi kantor kedua.",
    role: "Remote Worker",
  },
  {
    id: "komunitas",
    quote:
      "Ruangan yang ramah untuk komunitas. Kami sering mengadakan sesi cupping kecil di sini dan selalu merasa diterima.",
    role: "Komunitas Kopi Lokal",
  },
];
