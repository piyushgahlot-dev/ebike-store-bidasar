import LegalLayout from '../components/LegalLayout.jsx'

export default function Disclaimer() {
  return (
    <LegalLayout title="Disclaimer" updated="July 2026">
      <p>
        E-Bike Store Bidasar is an authorized dealer of Tunwal E-Motors products. We are not
        the manufacturer, and this website is independently operated by the dealership.
      </p>

      <h3 className="pt-2 font-display text-base font-bold text-white">Specifications & Range</h3>
      <p>
        Range, top speed, charging time, and other specifications mentioned on this site are
        based on Tunwal's official listings and manufacturer claims. Real-world performance can
        vary depending on rider weight, road conditions, terrain, battery age, and riding style.
      </p>

      <h3 className="pt-2 font-display text-base font-bold text-white">Pricing</h3>
      <p>
        Prices listed are ex-showroom and subject to change based on manufacturer revisions,
        location, and applicable taxes or subsidies. On-road price, registration (where
        applicable), and insurance are additional.
      </p>

      <h3 className="pt-2 font-display text-base font-bold text-white">Images</h3>
      <p>
        Some images on this website are placeholders pending real product and showroom photos,
        and are used for illustrative purposes only. Actual vehicle color, design, and features
        may vary.
      </p>
    </LegalLayout>
  )
}
