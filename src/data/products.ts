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

/* ─── All Products ────────────────────────────────────────────── */

export const allProducts: Product[] = [
  // ── Women ──────────────────────────────────────────────────
  {
    id: "w1",
    name: "Gilded Orchid Anarkali",
    price: 45500,
    category: "Women",
    image: "/cat-luxurypret",
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Hand-embroidered organza anarkali with intricate zardozi work and delicate pearl detailing. A timeless piece for festive celebrations.",
    isNew: true,
  },
  {
    id: "w2",
    name: "Ivory Bloom Kurta Set",
    price: 28900,
    category: "Women",
    image: "/cat-readytowear",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Elegant ivory cotton silk kurta paired with palazzo pants and chiffon dupatta. Perfect for intimate gatherings.",
  },
  {
    id: "w3",
    name: "Moonlight Gharara Set",
    price: 52000,
    category: "Women",
    image: "/cat-luxurypret",
    sizes: ["XS", "S", "M", "L"],
    description:
      "Ethereal net gharara set with silver threadwork and crystal embellishments. A modern heirloom.",
    isNew: true,
  },
  {
    id: "w4",
    name: "Celestial Gold Dupatta",
    price: 15800,
    category: "Women",
    image: "/cat-unstitched",
    sizes: ["Standard"],
    description:
      "Pure organza dupatta with hand-applied gold leaf work and sequin borders. An heirloom piece.",
  },
  {
    id: "w5",
    name: "Rose Garden Sharara",
    price: 38500,
    category: "Women",
    image: "/cat-readytowear",
    sizes: ["S", "M", "L"],
    description:
      "Chiffon sharara set with delicate rose embroidery and mirror work accents. Ideal for summer festivities.",
    isNew: true,
  },
  {
    id: "w6",
    name: "Velvet Midnight Gown",
    price: 62000,
    category: "Women",
    image: "/cat-luxurypret",
    sizes: ["XS", "S", "M", "L"],
    description:
      "Floor-length velvet gown with hand-sewn crystal embellishments along the neckline and sleeves.",
    isSale: true,
    originalPrice: 78000,
  },
  {
    id: "w7",
    name: "Pastel Dream Anarkali",
    price: 34000,
    category: "Women",
    image: "/cat-unstitched",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Soft pastel organza anarkali with minimal threadwork. Perfect balance of elegance and simplicity.",
  },
  {
    id: "w8",
    name: "Emerald Festive Lehenga",
    price: 89000,
    category: "Women",
    image: "/cat-luxurypret",
    sizes: ["XS", "S", "M", "L"],
    description:
      "Regal emerald green lehenga with hand-embroidered motifs in gold and silver threads. A wedding showstopper.",
    isNew: true,
  },

  // ── Men ────────────────────────────────────────────────────
  {
    id: "m1",
    name: "Royal Heritage Sherwani",
    price: 67000,
    category: "Men",
    image: "/hero-2",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Regal raw silk sherwani with hand-embroidered motifs in gold thread. Crafted for the modern groom.",
    isNew: true,
  },
  {
    id: "m2",
    name: "Regal Embroidered Waistcoat",
    price: 35000,
    category: "Men",
    image: "/hero-2",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Silk brocade waistcoat with traditional needlework and antique gold buttons.",
    isSale: true,
    originalPrice: 42000,
  },
  {
    id: "m3",
    name: "Onyx Nehru Jacket",
    price: 28000,
    category: "Men",
    image: "/hero-2",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Structured black Nehru jacket in premium suiting fabric with satin lapels. Effortless sophistication.",
  },
  {
    id: "m4",
    name: "Ivory Kurta Shalwar",
    price: 19500,
    category: "Men",
    image: "/cat-readytowear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Crisp ivory cotton kurta with embroidered neckline paired with draping shalwar.",
    isNew: true,
  },
  {
    id: "m5",
    name: "Midnight Bundi Set",
    price: 45000,
    category: "Men",
    image: "/hero-2",
    sizes: ["M", "L", "XL"],
    description:
      "Deep midnight blue bundi set with gold piping and hand-stitched buttons. Festive essential.",
  },
  {
    id: "m6",
    name: "Classic Linen Kurta",
    price: 12500,
    category: "Men",
    image: "/cat-readytowear",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Breathable pure linen kurta in neutral tones. Perfect for everyday elegance.",
  },

  // ── Fragrances ─────────────────────────────────────────────
  {
    id: "f1",
    name: "Amber Oud Eau de Parfum",
    price: 12500,
    category: "Fragrances",
    image: "/cat-fragrances",
    sizes: ["50ml", "100ml"],
    description:
      "A rich and opulent fragrance blending warm amber, precious oud, and hints of saffron rose.",
  },
  {
    id: "f2",
    name: "Oud Rose Parfum",
    price: 14500,
    category: "Fragrances",
    image: "/cat-fragrances",
    sizes: ["50ml", "100ml"],
    description:
      "A captivating blend of Bulgarian rose and smoky oud. Timeless and unforgettable.",
    isNew: true,
  },
  {
    id: "f3",
    name: "Saffron Musk Intense",
    price: 16000,
    category: "Fragrances",
    image: "/cat-fragrances",
    sizes: ["50ml", "100ml"],
    description:
      "Bold saffron opening that settles into a warm musk base. An intoxicating evening scent.",
  },
  {
    id: "f4",
    name: "Jasmine Noir EDP",
    price: 11800,
    category: "Fragrances",
    image: "/cat-fragrances",
    sizes: ["30ml", "50ml", "100ml"],
    description:
      "Night-blooming jasmine and dark vanilla create a mysterious and alluring fragrance.",
    isNew: true,
  },
  {
    id: "f5",
    name: "Cedar & Vetiver Cologne",
    price: 9500,
    category: "Fragrances",
    image: "/cat-fragrances",
    sizes: ["50ml", "100ml"],
    description:
      "Fresh cedar and earthy vetiver paired with citrus top notes. A refined daytime companion.",
  },
  {
    id: "f6",
    name: "Royal Attar Collection",
    price: 22000,
    category: "Fragrances",
    image: "/cat-fragrances",
    sizes: ["12ml", "25ml"],
    description:
      "Traditional concentrated attar in a crystal bottle. Pure essential oils with no alcohol.",
    isSale: true,
    originalPrice: 28000,
  },

  // ── Accessories ────────────────────────────────────────────
  {
    id: "a1",
    name: "Heritage Leather Tote",
    price: 22000,
    category: "Accessories",
    image: "/cat-accessories",
    sizes: ["One Size"],
    description:
      "Hand-stitched premium leather tote with gold hardware and suede interior lining.",
  },
  {
    id: "a2",
    name: "Artisan Crossbody Bag",
    price: 18500,
    category: "Accessories",
    image: "/cat-accessories",
    sizes: ["One Size"],
    description:
      "Hand-crafted leather crossbody with gold chain strap.",
    isNew: true,
  },
  {
    id: "a3",
    name: "Heritage Cap",
    price: 4500,
    category: "Accessories",
    image: "/cat-denim",
    sizes: ["S/M", "L/XL"],
    description:
      "Premium cotton twill cap with embroidered logo.",
  },
  {
    id: "a4",
    name: "Silk Pocket Square Set",
    price: 6800,
    category: "Accessories",
    image: "/cat-accessories",
    sizes: ["One Size"],
    description:
      "Set of three hand-rolled pure silk pocket squares in jewel tones.",
    isNew: true,
  },
  {
    id: "a5",
    name: "Gold Cufflink Collection",
    price: 15000,
    category: "Accessories",
    image: "/cat-accessories",
    sizes: ["One Size"],
    description:
      "18K gold-plated cufflinks with engraved monogram. Presented in a velvet box.",
  },
  {
    id: "a6",
    name: "Woven Leather Belt",
    price: 8900,
    category: "Accessories",
    image: "/cat-accessories",
    sizes: ["30", "32", "34", "36", "38"],
    description:
      "Hand-woven Italian leather belt with an antique brass buckle.",
    isSale: true,
    originalPrice: 12000,
  },

  // ── Denim ──────────────────────────────────────────────────
  {
    id: "d1",
    name: "Selvedge Straight Fit",
    price: 14500,
    category: "Denim",
    image: "/denim-section",
    sizes: ["28", "30", "32", "34", "36"],
    description:
      "Premium selvedge denim from Japanese mills. Raw indigo with clean finish.",
    isNew: true,
  },
  {
    id: "d2",
    name: "Washed Slim Taper",
    price: 11800,
    category: "Denim",
    image: "/cat-denim",
    sizes: ["28", "30", "32", "34", "36"],
    description:
      "Mid-wash slim-taper jeans with subtle whiskering. Comfortable stretch denim.",
  },
  {
    id: "d3",
    name: "Indigo Trucker Jacket",
    price: 16500,
    category: "Denim",
    image: "/denim-section",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Classic trucker silhouette in raw indigo denim with copper rivets.",
    isNew: true,
  },
  {
    id: "d4",
    name: "Heritage Denim Shirt",
    price: 9200,
    category: "Denim",
    image: "/cat-denim",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Soft chambray denim shirt with western-style snap buttons.",
  },
  {
    id: "d5",
    name: "Wide-Leg Vintage Jean",
    price: 13500,
    category: "Denim",
    image: "/denim-section",
    sizes: ["28", "30", "32", "34"],
    description:
      "Vintage-inspired wide-leg cut in heavyweight denim. Statement piece for any wardrobe.",
    isSale: true,
    originalPrice: 17000,
  },
  {
    id: "d6",
    name: "Black Selvedge Skinny",
    price: 12800,
    category: "Denim",
    image: "/cat-denim",
    sizes: ["28", "30", "32", "34", "36"],
    description:
      "Jet black selvedge denim in a modern skinny fit. Clean and versatile.",
  },
];

/* ─── Featured products for the homepage (subset) ─────────── */

export const featuredProducts: Product[] = allProducts.filter((p) =>
  ["w1", "w2", "m1", "f1", "w4", "a1", "m2", "w3"].includes(p.id)
);

/* ─── Accessory products for the homepage section ─────────── */

export const accessoryProducts: Product[] = allProducts.filter(
  (p) => p.category === "Accessories"
).slice(0, 3);

/* ─── Helper: get products by category slug ───────────────── */

const categoryMap: Record<string, string> = {
  women: "Women",
  men: "Men",
  fragrances: "Fragrances",
  accessories: "Accessories",
  denim: "Denim",
};

export const getProductsByCategory = (slug: string): Product[] => {
  if (slug === "sale") {
    return allProducts.filter((p) => p.isSale);
  }
  const cat = categoryMap[slug];
  if (!cat) return [];
  return allProducts.filter((p) => p.category === cat);
};

export const getCategoryTitle = (slug: string): string => {
  if (slug === "sale") return "Sale";
  return categoryMap[slug] || slug;
};

export const getCategoryImage = (slug: string): string => {
  const map: Record<string, string> = {
    women: "/cat-luxurypret",
    men: "/hero-2",
    fragrances: "/cat-fragrances",
    accessories: "/cat-accessories",
    denim: "/denim-section",
    sale: "/showstopper",
  };
  return map[slug] || "/showstopper";
};

/* ─── Nav Links ───────────────────────────────────────────── */

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Women", href: "/women" },
  { label: "Men", href: "/men" },
  { label: "Fragrances", href: "/fragrances" },
  { label: "Accessories", href: "/accessories" },
  { label: "Denim", href: "/denim" },
  { label: "Sale", href: "/sale" },
];
