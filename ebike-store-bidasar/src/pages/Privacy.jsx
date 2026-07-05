import LegalLayout from '../components/LegalLayout.jsx'
import { business } from '../data/business.js'

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" updated="July 2026">
      <p>
        E-Bike Store Bidasar ("we", "us", "our") respects your privacy. This policy explains
        what information we collect through this website and how we use it.
      </p>

      <h3 className="pt-2 font-display text-base font-bold text-white">Information We Collect</h3>
      <p>
        When you submit an enquiry or test ride booking form, we collect your name, phone
        number, preferred location, and model of interest. This information is sent directly
        to our WhatsApp number and is not stored on any external server by this website.
      </p>

      <h3 className="pt-2 font-display text-base font-bold text-white">How We Use Your Information</h3>
      <p>
        We use the details you submit solely to respond to your enquiry, confirm test ride
        bookings, and provide information about our products and finance options. We do not
        sell or share your personal information with third parties for marketing purposes.
      </p>

      <h3 className="pt-2 font-display text-base font-bold text-white">Third-Party Services</h3>
      <p>
        This site links to WhatsApp and Google Maps to help you contact or locate us. These
        third-party services have their own privacy policies which govern any data you share
        with them directly.
      </p>

      <h3 className="pt-2 font-display text-base font-bold text-white">Contact Us</h3>
      <p>
        For questions about this policy or your data, contact us at{' '}
        <a href={business.emailLink} className="text-accent-soft">{business.email}</a> or call{' '}
        {business.phoneDisplay}.
      </p>
    </LegalLayout>
  )
}
