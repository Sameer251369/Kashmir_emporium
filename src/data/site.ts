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
    title: "Pure Pashmina Shawls",
    description:
      "Hand-spun Changthangi cashmere, woven on wooden looms and finished with a soft, weightless drape.",
    image: "/shawls/shawl-02.jpeg",
    imageAlt: "Plain hand-made pashmina shawl with embroidered border, Kashmir Emporium showroom",
    whatsappMessage: WA_MESSAGES.collection("pure pashmina shawls"),
  },
  {
    title: "Kani Jamawar",
    description:
      "Woven thread by thread with wooden kani spools — a single shawl can take an artisan over a year.",
    image: "/shawls/shawl-07.jpeg",
    imageAlt: "Kani jamawar shawl with dense woven paisley motifs draped on a stand",
    whatsappMessage: WA_MESSAGES.collection("kani jamawar shawls"),
  },
  {
    title: "Sozni Hand Embroidery",
    description:
      "Needle-fine sozni work in floral and paisley jaals, embroidered entirely by hand in Srinagar.",
    image: "/shawls/shawl-11.jpeg",
    imageAlt: "Navy pashmina shawl covered in fine sozni hand embroidery",
    whatsappMessage: WA_MESSAGES.collection("sozni hand-embroidered shawls"),
  },
  {
    title: "Hand-Knotted Silk Carpets",
    description:
      "Museum-grade silk-on-silk carpets, knotted on vertical looms with 400–900 knots per square inch.",
    image:
      "https://images.unsplash.com/photo-1588421874990-1fe162747f9b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxoYW5kJTIwa25vdHRlZCUyMG9yaWVudGFsJTIwc2lsayUyMGNhcnBldCUyMHdpdGglMjBpbnRyaWNhdGUlMjBmbG9yYWwlMjBtZWRhbGxpb24lMjBwYXR0ZXJuJTIwZGFyayUyMG1vb2R5JTIwbGlnaHRpbmd8ZW58MHx8fHwxNzg2OTg4ODIwfDA&ixlib=rb-4.1.0&q=85&w=1200",
    imageAlt:
      "Hand-knotted oriental silk carpet with floral medallion pattern, photo by Ashkan Forouzani on Unsplash",
    whatsappMessage: WA_MESSAGES.carpets,
  },
  {
    title: "Rugs, Namda & Gabba",
    description:
      "Felted namda and chain-stitch gabba rugs in bold Kashmiri folk motifs, made for floors that get used.",
    image:
      "https://images.unsplash.com/photo-1693332559291-380f10cd2253?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxwZXJzaWFuJTIwa2FzaG1pcmklMjBydWclMjBkZXRhaWwlMjB0ZXh0dXJlJTIwcmljaCUyMHJlZCUyMGFuZCUyMGdvbGQlMjBwYXR0ZXJuJTIwdG9wJTIwdmlld3xlbnwwfHx8fDE3ODY5ODg4Mjd8MA&ixlib=rb-4.1.0&q=85&w=1200",
    imageAlt: "Red Kashmiri rug with dense geometric pattern, photo by SAJAD FI on Unsplash",
    whatsappMessage: WA_MESSAGES.collection("Kashmiri rugs, namda and gabba"),
  },
  {
    title: "Stoles & Scarves",
    description:
      "Lighter everyday pieces in cashmere, silk blends and fine wool — the easiest first purchase.",
    image: "/shawls/shawl-06.jpeg",
    imageAlt: "Flat lay of plain pashmina stoles in mustard, maroon, indigo and natural shades",
    whatsappMessage: WA_MESSAGES.collection("stoles and scarves"),
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
