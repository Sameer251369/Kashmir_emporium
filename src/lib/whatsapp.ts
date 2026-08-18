export const BUSINESS = {
  name: "Kashmir Emporium",
  proprietor: "Zaid Mahajan",
  phoneDisplay: "+91 88841 72713",
  phoneE164: "+918884172713",
  whatsappNumber: "918884172713",
  city: "Srinagar",
  region: "Kashmir, India",
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
