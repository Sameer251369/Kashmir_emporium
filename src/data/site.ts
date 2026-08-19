import { WA_MESSAGES } from "@/lib/whatsapp";

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#top" },
  { label: "Heritage", href: "#heritage" },
  { label: "Collections", href: "#collections" },
  { label: "Carpets", href: "#carpets" },
  { label: "Gallery", href: "#gallery" },
];

/** Photographs shot inside the Srinagar showroom (client supplied). */
export const SHAWL_PHOTOS = Array.from({ length: 19 }, (_, index) => {
  const n = String(index + 1).padStart(2, "0");
  return {
    id: `KE-${n}`,
    src: `/shawls/shawl-${n}.jpeg`,
    alt: `Handwoven Kashmiri shawl ${n} photographed inside the Kashmir Emporium showroom in Srinagar`,
  };
});

export type Collection = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  whatsappMessage: string;
};

export const COLLECTIONS: Collection[] = [
  {
    title: "Plain Stoles & Shawls",
    description:
      "Soft, versatile stoles and shawls in refined plain weaves, selected for an effortless everyday drape.",
    image: "/products/plain-stole-shawl.jpeg",
    imageAlt: "Plain cream shawl with an embroidered orange border",
    whatsappMessage: WA_MESSAGES.collection("plain stoles and shawls"),
  },
  {
    title: "Sozni Embroidered Shawls",
    description:
      "Machine and hand-made shawls with intricate sozni-inspired embroidery, from quiet borders to detailed motifs.",
    image: "/shawls/shawl-11.jpeg",
    imageAlt: "Sozni embroidered navy pashmina shawl",
    whatsappMessage: WA_MESSAGES.collection("sozni embroidered shawls"),
  },
  {
    title: "Machine & Hand-Made Shawls",
    description:
      "Richly patterned shawls that bring together dependable machine finishing and the character of hand embroidery.",
    image: "/products/machine-handmade-shawl.jpeg",
    imageAlt: "Dark blue and maroon shawl with an embroidered paisley border",
    whatsappMessage: WA_MESSAGES.collection("machine and hand-made shawls"),
  },
  {
    title: "Kani Jamawar Shawls",
    description:
      "Woven thread by thread with traditional kani spools, creating the dense, storied patterns of a Kashmir jamawar.",
    image: "/shawls/shawl-07.jpeg",
    imageAlt: "Kani jamawar shawl with dense woven paisley motifs",
    whatsappMessage: WA_MESSAGES.collection("kani jamawar shawls"),
  },
  {
    title: "Kashmir Silk Carpets",
    description:
      "Hand-made, hand-knotted Kashmir silk carpets crafted on vertical looms with lasting detail and depth.",
    image:
      "https://images.unsplash.com/photo-1588421874990-1fe162747f9b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxoYW5kJTIwa25vdHRlZCUyMG9yaWVudGFsJTIwc2lsayUyMGNhcnBldCUyMHdpdGglMjBmbG9yYWwlMjBtZWRhbGxpb24lMjBwYXR0ZXJuJTIwZGFyayUyMG1vb2R5JTIwbGlnaHRpbmd8ZW58MHx8fHwxNzg2OTg4ODIwfDA&ixlib=rb-4.1.0&q=85&w=1200",
    imageAlt: "Hand-knotted oriental silk carpet with floral medallion pattern",
    whatsappMessage: WA_MESSAGES.carpets,
  },
];

export const STATS = [
  { value: 3, suffix: "", label: "Generations of weavers" },
  { value: 1200, suffix: "+", label: "Pieces in the showroom" },
  { value: 20, suffix: "+", label: "Countries shipped to" },
  { value: 100, suffix: "%", label: "Handmade in Kashmir" },
];

export const CARPET_SPECS = [
  { label: "Knot density", value: "400 – 900 knots / sq. inch" },
  { label: "Materials", value: "Mulberry silk, silk-on-cotton, fine wool" },
  { label: "Sizes", value: "2×3 ft up to 9×12 ft & custom" },
  { label: "Lead time", value: "In stock, or 6 – 14 months bespoke" },
];

export const CRAFT_STEPS = [
  {
    step: "01",
    title: "Sorting the fibre",
    body: "Raw Changthangi cashmere from the Ladakh highlands is cleaned and de-haired by hand until only the finest under-fleece remains.",
  },
  {
    step: "02",
    title: "Hand-spinning on the yinder",
    body: "Women spin the fibre into a whisper-thin yarn on a traditional wooden yinder — a thickness no machine reproduces without breaking it.",
  },
  {
    step: "03",
    title: "Weaving on the loom",
    body: "Two weavers work a single wooden loom. A plain pashmina takes days; a kani jamawar woven from a coded talim can take more than a year.",
  },
  {
    step: "04",
    title: "Sozni & knotting",
    body: "Embroiderers add sozni needlework motif by motif, while carpet artisans tie each knot by hand against the talim chant.",
  },
  {
    step: "05",
    title: "Washing & finishing",
    body: "Pieces are washed in cold spring water, sun-dried, pressed and inspected before they are numbered for the showroom.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "I asked for a sozni shawl in a specific indigo. Zaid sent nine videos the same evening and the piece arrived in Dubai in four days.",
    author: "Nadia R.",
    location: "Dubai, UAE",
  },
  {
    quote:
      "We bought a 6×9 silk carpet for our hallway. Two years of shoes and sunlight later, it still looks like the day it was unrolled.",
    author: "Marcus H.",
    location: "Munich, Germany",
  },
  {
    quote:
      "Straight answers on grade, weave and price over WhatsApp — no showroom pressure. That's why we came back for three more shawls.",
    author: "Aarti & Vikram S.",
    location: "Bengaluru, India",
  },
  {
    quote:
      "The kani jamawar is now my mother's wedding gift to my sister. The talim detail is unlike anything we saw in Delhi stores.",
    author: "Sana M.",
    location: "London, UK",
  },
  {
    quote:
      "Ordered six stoles for a hotel gifting programme. Consistent quality across the batch and honest wholesale pricing.",
    author: "Rohit K.",
    location: "Procurement, Jaipur",
  },
];

export const INTEREST_OPTIONS = [
  "Pashmina shawls",
  "Kani jamawar",
  "Sozni embroidery",
  "Hand-knotted carpets",
  "Rugs, namda & gabba",
  "Stoles & scarves",
  "Wholesale / bulk order",
  "Something else",
];
