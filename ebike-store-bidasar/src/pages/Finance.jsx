import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import EMICalculator from '../components/EMICalculator.jsx'
import { business } from '../data/business.js'

const checklist = [
  'Low / 0% down payment options*',
  'Instant loan approval in-showroom',
  'EMI plans starting from ₹1,999/month',
  'Flexible tenure from 6 to 36 months',
]

export default function Finance() {
  return (
    <>
      <SEO
        title="Finance"
        description={`Easy EMI options for Tunwal electric scooters via ${business.financePartner}. Use our EMI calculator to estimate your monthly payment at E-Bike Store Bidasar.`}
      />

      <section className="pb-24 pt-32 sm:pt-40">
        <div className="container-px mx-auto max-w-5xl">
          <SectionHeading
            align="center"
            eyebrow="Easy Finance"
            title="Own a Tunwal Without the Upfront Burden"
            description={`We've partnered with ${business.financePartner} to make owning an electric scooter simple and affordable.`}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {checklist.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm text-white/90">{item}</span>
              </div>
            ))}
          </motion.div>

          <div className="mt-6 flex flex-wrap items-center gap-3 rounded-xl border border-border bg-surface px-5 py-4">
            <span className="text-xs uppercase tracking-wide text-muted">Finance Partner</span>
            <span className="rounded-full bg-elevated px-4 py-1.5 text-sm font-semibold text-white">
              {business.financePartner}
            </span>
          </div>

          <div className="mt-14">
            <h3 className="font-display text-xl font-bold text-white">EMI Calculator</h3>
            <p className="mt-2 text-sm text-muted">
              Pick a model, adjust down payment and tenure, and see your estimated monthly EMI instantly.
            </p>
            <div className="mt-6">
              <EMICalculator />
            </div>
          </div>

          <p className="mt-8 text-xs leading-relaxed text-muted">
            *Down payment, interest rate, and approval are subject to {business.financePartner}'s
            credit policy and your eligibility. Figures shown are indicative estimates only and
            do not constitute a loan offer. Visit our showroom with valid ID and income proof to
            apply.
          </p>
        </div>
      </section>
    </>
  )
}
