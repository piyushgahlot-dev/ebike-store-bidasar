import LegalLayout from '../components/LegalLayout.jsx'
import { business } from '../data/business.js'

export default function Terms() {
  return (
    <LegalLayout title="Terms of Service" updated="July 2026">
      <p>
        By using this website, you agree to the following terms. Please read them carefully.
      </p>

      <h3 className="pt-2 font-display text-base font-bold text-white">Product Information</h3>
      <p>
        Prices, specifications, and availability shown on this website are indicative and
        subject to change without prior notice. Please confirm final pricing, on-road charges,
        and specifications with our showroom team ({business.address.full}) before making a
        purchase decision.
      </p>

      <h3 className="pt-2 font-display text-base font-bold text-white">EMI & Finance Estimates</h3>
      <p>
        The EMI calculator and finance information on this website are illustrative estimates
        only and do not constitute a loan offer or guarantee of approval. Actual interest
        rates, tenure, and eligibility are determined solely by our finance partner,{' '}
        {business.financePartner}, at the time of application.
      </p>

      <h3 className="pt-2 font-display text-base font-bold text-white">Test Ride Bookings</h3>
      <p>
        Test ride requests submitted via this website are enquiries, not confirmed bookings,
        until acknowledged by our team over WhatsApp or phone.
      </p>

      <h3 className="pt-2 font-display text-base font-bold text-white">Limitation of Liability</h3>
      <p>
        We make reasonable efforts to keep information on this site accurate, but we are not
        liable for any decisions made solely on the basis of content published here without
        independent confirmation from our showroom.
      </p>
    </LegalLayout>
  )
}
