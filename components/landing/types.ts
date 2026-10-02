export interface ServiceItem {
  id: string
  title: string
  category: "pms" | "diagnostics" | "brakes" | "aircon" | "tires" | "engine"
  shortDesc: string
  fullDesc: string
  priceStarting: string
  duration: string
  image: string
  highlights: string[]
  popular?: boolean
}

export interface MaintenancePackage {
  id: string
  name: string
  tier: "Standard" | "Recommended" | "Master Care"
  price: string
  badge?: string
  description: string
  features: string[]
  recommendedFor: string
  popular?: boolean
}

export interface TestimonialItem {
  id: string
  name: string
  vehicle: string
  location: string
  rating: number
  comment: string
  service: string
  avatarInitials: string
}

export interface FAQItem {
  question: string
  answer: string
  category?: string
}

export const BUSINESS_INFO = {
  name: "Motech CDO",
  tagline: "Your Complete Auto Care Center in Cagayan De Oro",
  address: "B18, L5, PUEBLO, Cagayan De Oro City, Misamis Oriental",
  city: "Cagayan De Oro City",
  province: "Misamis Oriental",
  phone: "0953-564-4211",
  phoneClean: "09535644211",
  viber: "0967-218-5745",
  viberClean: "639672185745",
  email: "motechcdo@gmail.com",
  facebookUrl: "https://www.facebook.com/motechcdo/",
  googleMapsUrl: "https://maps.google.com/?q=B18+L5+Pueblo+de+Oro+Cagayan+De+Oro+City+Misamis+Oriental",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.886071477484!2d124.6215357758778!3d8.455486591584857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff8d9258aa410d%3A0xc3b83984e7a89d4!2sPueblo%20de%20Oro%2C%20Cagayan%20de%20Oro%2C%20Misamis%20Oriental!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph",
  openingHours: {
    weekdays: "8:00 AM – 5:00 PM",
    saturday: "8:00 AM – 5:00 PM",
    sunday: "Closed (Emergency Assistance via Phone/Viber)",
  },
}
