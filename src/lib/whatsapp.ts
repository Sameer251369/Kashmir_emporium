export const BUSINESS = {
  name: "Kashmir Emporium",
  proprietor: "Zaid Mahajan",
  phoneDisplay: "+91 88841 72713",
  phoneE164: "+918884172713",
  whatsappNumber: "918884172713",
  city: "MG Road, Bengaluru",
  region: "Karnataka, India",
  address:
    "Building No. 46, 1st Floor, Kashmir Emporium, No. 102, Mahatma Gandhi Rd, next to Cauvery Emporium, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Kashmir%20Emporium%2C%20No.%20102%2C%20Mahatma%20Gandhi%20Rd%2C%20Bengaluru%2C%20Karnataka%20560001",
  responseTime: "Usually within a few hours",
  tagline: "Handwoven pashmina, kani jamawar and hand-knotted carpets from Srinagar.",
} as const;

/** Builds a wa.me deep link with a pre-drafted message. */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  general: `Hello ${BUSINESS.name}, I found your website and would like to know more about your collection.`,
  carpets: `Hello ${BUSINESS.name}, I'm interested in your hand-knotted Kashmiri carpets. Could you share available designs, sizes and prices?`,
  shawls: `Hello ${BUSINESS.name}, I'm interested in your pashmina shawls. Could you share available pieces and prices?`,
  wholesale: `Hello ${BUSINESS.name}, I'd like to discuss wholesale / bulk orders.`,
  collection: (title: string) =>
    `Hello ${BUSINESS.name}, I'm interested in your ${title}. Could you share photos, sizes and prices?`,
  piece: (ref: string) =>
    `Hello ${BUSINESS.name}, I'd like details and pricing for the piece shown on your website (ref: ${ref}).`,
} as const;

export type EnquiryDraft = {
  intent: "retail" | "wholesale";
  name: string;
  country: string;
  phone: string;
  interest: string;
  message: string;
};

/** Formats the enquiry form into a single readable WhatsApp message. */
export function formatEnquiry(draft: EnquiryDraft): string {
  const lines = [
    `Hello ${BUSINESS.name},`,
    "",
    `Enquiry type: ${draft.intent === "wholesale" ? "Wholesale / Bulk" : "Retail"}`,
    `Name: ${draft.name}`,
    draft.country ? `Country: ${draft.country}` : "",
    draft.phone ? `Phone: ${draft.phone}` : "",
    draft.interest ? `Interested in: ${draft.interest}` : "",
    "",
    draft.message,
  ];
  return lines.filter((line) => line !== "").join("\n");
}
