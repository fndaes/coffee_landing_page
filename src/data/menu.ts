export type MenuCategory = "Kopi" | "Manual Brew" | "Camilan";
export type MenuFilter = "Semua" | MenuCategory;

export type MenuItem = {
  id: string;
  name: string;
  category: MenuCategory;
  notes: string;
  price: string;
  image: string;
  imageAlt: string;
  badge?: string;
};

export const menuFilters: MenuFilter[] = [
  "Semua",
  "Kopi",
  "Manual Brew",
  "Camilan",
];

export const menuItems: MenuItem[] = [
  {
    id: "aren-latte",
    name: "Aren Latte",
    category: "Kopi",
    notes: "Espresso, susu segar, gula aren cair",
    // PLACEHOLDER: harga contoh, ganti dengan harga resmi.
    price: "Rp 25.000",
    image: "/images/menu-aren-latte.jpg",
    imageAlt: "Aren latte dengan lapisan gula aren di gelas kaca",
    badge: "Favorit",
  },
  {
    id: "classic-espresso",
    name: "Classic Espresso",
    category: "Kopi",
    notes: "Dobel shot, body tebal, crema pekat",
    price: "Rp 20.000",
    image: "/images/menu-espresso.jpg",
    imageAlt: "Espresso shot dalam cangkir kecil",
  },
  {
    id: "manual-brew-puntang",
    name: "Manual Brew Puntang",
    category: "Manual Brew",
    notes: "V60 · floral, jeruk manis, teh hitam",
    price: "Rp 32.000",
    image: "/images/menu-puntang.jpg",
    imageAlt: "Manual brew V60 yang sedang diseduh",
    badge: "Single Origin",
  },
  {
    id: "lembang-coffee",
    name: "Lembang Coffee",
    category: "Kopi",
    notes: "Kopi susu Lembang, manis yang seimbang",
    price: "Rp 27.000",
    image: "/images/menu-lembang.jpg",
    imageAlt: "Kopi susu dalam cangkir di atas meja kayu",
  },
  {
    id: "pisang-goreng",
    name: "Pisang Goreng",
    category: "Camilan",
    notes: "Pisang raja goreng, keju parut, madu",
    price: "Rp 18.000",
    image: "/images/menu-pisang.jpg",
    imageAlt: "Pisang goreng hangat sebagai camilan pendamping kopi",
  },
  {
    id: "roti-bakar",
    name: "Roti Bakar",
    category: "Camilan",
    notes: "Roti bakar srikaya, mentega, taburan gula",
    price: "Rp 17.000",
    image: "/images/menu-roti.jpg",
    imageAlt: "Roti bakar dengan olesan srikaya dan mentega",
  },
];
