// ============================================================================
// BUSINESS CONFIG — single source of truth
// Every real-world detail (contact info, hours, links) lives here.
// Update ONE place and it reflects across the entire site.
// ============================================================================

export const business = {
  name: 'E-Bike Store Bidasar',
  legalOwner: 'Mohit Gahlot',
  tagline: 'Authorized Tunwal E-Motors Dealer',
  brandSold: 'Tunwal E-Motors',

  address: {
    line1: 'Main Rd, Near Balaji Marble',
    line2: 'Dunkar, Bidasar',
    state: 'Rajasthan',
    pincode: '331501',
    full: 'Main Rd, Near Balaji Marble, Dunkar, Bidasar, Rajasthan – 331501',
  },

  mapsLink: 'https://maps.app.goo.gl/dVwmoJgH6gTMbcDi9?g_st=aw',

  // Embeds the same pin without needing a Maps API key
  mapsEmbedSrc:
    'https://maps.google.com/maps?q=Main%20Rd%2C%20Near%20Balaji%20Marble%2C%20Dunkar%2C%20Bidasar%2C%20Rajasthan%20331501&t=&z=15&ie=UTF8&iwloc=&output=embed',

  phone: '7851103150',
  phoneDisplay: '+91 78511 03150',
  whatsapp: '7851103150',
  email: 'gahlotmohit89@gmail.com',

  hours: {
    weekday: 'Mon – Sat: 8:00 AM – 10:00 PM',
    sunday: 'Sunday: Closed',
  },

  social: {
    instagram: 'https://www.instagram.com/e.bike_store_',
  },

  financePartner: 'Bajaj Finance',

  // Founded year used across About / history copy — update if incorrect
  foundedYear: new Date().getFullYear() - 2,

  // ---- Derived helpers -----------------------------------------------
  get whatsappLink() {
    return `https://wa.me/91${this.whatsapp}`
  },
  whatsappLinkWithMessage(message) {
    return `https://wa.me/91${this.whatsapp}?text=${encodeURIComponent(message)}`
  },
  get callLink() {
    return `tel:+91${this.phone}`
  },
  get emailLink() {
    return `mailto:${this.email}`
  },
}

// TODO: Replace these with real asset files once you have them.
// Drop files into `src/assets/` and update the paths below —
// every component reads images from here, so this is the only place to change.
export const assets = {
  tunwalLogo: null, // TODO: add official Tunwal logo (e.g. '/src/assets/tunwal-logo.png')
  shieldLogo: null, // TODO: add client's custom shield logo
  showroomExterior: null, // TODO: add showroom exterior photo
  showroomInterior: null, // TODO: add showroom interior photo
}
