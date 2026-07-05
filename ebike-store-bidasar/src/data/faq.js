export const faqs = [
  {
    id: 'f1',
    category: 'Buying',
    question: 'Do I need a driving license to ride a Tunwal electric scooter?',
    answer:
      'Most Tunwal models, including the Alfa Pro, Alfa Lite, Mini Lithino, Storm XL, and Roma N, have a top speed of 25 km/h and fall under the non-RTO / low-speed EV category in India — meaning no driving license or registration is required. Always confirm the exact variant with our team, since higher-speed variants may have different rules.',
  },
  {
    id: 'f2',
    category: 'Warranty',
    question: 'What warranty comes with a Tunwal scooter?',
    answer:
      'Tunwal scooters come with a standard manufacturer warranty covering the motor and controller. Battery warranty terms vary by battery type (lead-acid vs lithium-ion). Visit our showroom or ask our team for the exact warranty card applicable to your chosen model.',
  },
  {
    id: 'f3',
    category: 'Charging',
    question: 'How long does it take to fully charge the battery?',
    answer:
      'Charging time depends on the battery type: lead-acid batteries typically take 6–8 hours, while lithium-ion variants charge faster, in around 4–5 hours. All models support standard 220V home charging with auto cut-off, so there\'s no need for special charging infrastructure.',
  },
  {
    id: 'f4',
    category: 'Charging',
    question: 'Can I charge the scooter at home?',
    answer:
      'Yes. Every Tunwal model is designed to charge from a regular household 220V socket — no separate charging station is needed. Charging typically uses around 1–1.5 units of electricity per full charge.',
  },
  {
    id: 'f5',
    category: 'Finance',
    question: 'What finance options are available?',
    answer:
      'We offer easy EMI plans through Bajaj Finance, with options for low or zero down payment depending on eligibility. Use the EMI Calculator on our Finance page for an estimate, or visit the showroom for the exact plan and paperwork required.',
  },
  {
    id: 'f6',
    category: 'Service',
    question: 'Where can I get my Tunwal scooter serviced?',
    answer:
      'Bring your scooter directly to E-Bike Store Bidasar in Dunkar. As an authorized Tunwal dealer, we handle routine service, battery checkups, and warranty claims in-house.',
  },
  {
    id: 'f7',
    category: 'Buying',
    question: 'Can I book a test ride before buying?',
    answer:
      'Absolutely — we encourage it. Use the "Book a Test Ride" form on our website or message us directly on WhatsApp with your preferred model and time, and we\'ll arrange it at our Dunkar showroom.',
  },
  {
    id: 'f8',
    category: 'Buying',
    question: 'Is an exchange or buyback available on my old vehicle?',
    answer:
      'We evaluate exchange options on a case-by-case basis. Bring your existing vehicle to the showroom, or send us a photo and details over WhatsApp, and our team will let you know what\'s possible.',
  },
]

export const faqCategories = ['All', ...new Set(faqs.map((f) => f.category))]
