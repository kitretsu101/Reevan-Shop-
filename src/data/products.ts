export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  sizes: string[];
  description: string;
  isNew?: boolean;
  isSale?: boolean;
  originalPrice?: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export const categories: Category[] = [
  { id: "unstitched", name: "Unstitched", image: "/cat-unstitched" },
  { id: "ready-to-wear", name: "Ready to Wear", image: "/cat-readytowear" },
  { id: "luxury-pret", name: "Luxury Prêt", image: "/cat-luxurypret" },
  { id: "fragrances", name: "Fragrances", image: "/cat-fragrances" },
  { id: "accessories", name: "Accessories", image: "/cat-accessories" },
  { id: "denim", name: "Denim", image: "/cat-denim" },
];

export const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Gilded Orchid Anarkali",
    price: 45500,
    category: "Luxury Prêt",
    image: "/cat-luxurypret",
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Hand-embroidered organza anarkali with intricate zardozi work and delicate pearl detailing. A timeless piece for festive celebrations.",
    isNew: true,
  },
  {
    id: "2",
    name: "Ivory Bloom Kurta Set",
    price: 28900,
    category: "Ready to Wear",
    image: "/cat-readytowear",
    sizes: ["S", "M", "L", "XL"],
    description: "Elegant ivory cotton silk kurta paired with palazzo pants and chiffon dupatta. Perfect for intimate gatherings.",
  },
  {
    id: "3",
    name: "Royal Heritage Sherwani",
    price: 67000,
    category: "Men",
    image: "/hero-2",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Regal raw silk sherwani with hand-embroidered motifs in gold thread. Crafted for the modern groom.",
    isNew: true,
  },
  {
    id: "4",
    name: "Amber Oud Eau de Parfum",
    price: 12500,
    category: "Fragrances",
    image: "/cat-fragrances",
    sizes: ["50ml", "100ml"],
    description: "A rich and opulent fragrance blending warm amber, precious oud, and hints of saffron rose.",
  },
  {
    id: "5",
    name: "Celestial Gold Dupatta",
    price: 15800,
    category: "Unstitched",
    image: "/cat-unstitched",
    sizes: ["Standard"],
    description: "Pure organza dupatta with hand-applied gold leaf work and sequin borders. An heirloom piece.",
  },
  {
    id: "6",
    name: "Heritage Leather Tote",
    price: 22000,
    category: "Accessories",
    image: "/cat-accessories",
    sizes: ["One Size"],
    description: "Hand-stitched premium leather tote with gold hardware and suede interior lining.",
  },
  {
    id: "7",
    name: "Regal Embroidered Waistcoat",
    price: 35000,
    category: "Men",
    image: "/hero-2",
    sizes: ["S", "M", "L", "XL"],
    description: "Silk brocade waistcoat with traditional needlework and antique gold buttons.",
    isSale: true,
    originalPrice: 42000,
  },
  {
    id: "8",
    name: "Moonlight Gharara Set",
    price: 52000,
    category: "Luxury Prêt",
    image: "/cat-luxurypret",
    sizes: ["XS", "S", "M", "L"],
    description: "Ethereal net gharara set with silver threadwork and crystal embellishments. A modern heirloom.",
    isNew: true,
  },
];

export const accessoryProducts: Product[] = [
  {
    id: "a1",
    name: "Artisan Crossbody Bag",
    price: 18500,
    category: "Bags",
    image: "/cat-accessories",
    sizes: ["One Size"],
    description: "Hand-crafted leather crossbody with gold chain strap.",
  },
  {
    id: "a2",
    name: "Heritage Cap",
    price: 4500,
    category: "Caps",
    image: "/cat-denim",
    sizes: ["S/M", "L/XL"],
    description: "Premium cotton twill cap with embroidered logo.",
  },
  {
    id: "a3",
    name: "Oud Rose Parfum",
    price: 14500,
    category: "Perfumes",
    image: "/cat-fragrances",
    sizes: ["50ml", "100ml"],
    description: "A captivating blend of Bulgarian rose and smoky oud.",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Women", href: "#" },
  { label: "Men", href: "#" },
  { label: "Fragrances", href: "#" },
  { label: "Accessories", href: "#" },
  { label: "Denim", href: "#" },
  { label: "Sale", href: "#" },
];
