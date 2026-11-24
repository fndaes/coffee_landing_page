export type FacilityIcon = "wifi" | "outlet" | "meeting" | "parking";

export type Facility = {
  id: string;
  index: string;
  title: string;
  description: string;
  icon: FacilityIcon;
};

export const facilities: Facility[] = [
  {
    id: "wifi",
    index: "01",
    title: "High-Speed Wi-Fi",
    description:
      "Koneksi stabil untuk kerja, kelas daring, dan rapat kecil tanpa buffering.",
    icon: "wifi",
  },
  {
    id: "outlet",
    index: "02",
    title: "Power Outlet",
    description:
      "Stop kontak di hampir setiap meja, jadi baterai low bukan alasan pulang.",
    icon: "outlet",
  },
  {
    id: "meeting-space",
    index: "03",
    title: "Meeting Space",
    description:
      "Meja panjang untuk diskusi tim, belajar kelompok, dan pertemuan komunitas.",
    icon: "meeting",
  },
  {
    id: "parking",
    index: "04",
    title: "Parking Area",
    description:
      "Area parkir motor dan mobil yang mudah diakses dari jalan utama.",
    icon: "parking",
  },
];
