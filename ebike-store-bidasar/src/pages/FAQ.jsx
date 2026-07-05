import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { faqs, faqCategories } from '../data/faq.js'

function FaqItem({ faq, index }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
      className="rounded-xl border border-border bg-surface"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-white sm:text-base">{faq.question}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-accent transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [category, setCategory] = useState('All')
  const filtered = faqs.filter((f) => category === 'All' || f.category === category)

  return (
    <>
      <SEO
        title="FAQ"
        description="Frequently asked questions about Tunwal electric scooters, finance, charging, warranty, and service at E-Bike Store Bidasar."
      />

      <section className="pb-24 pt-32 sm:pt-40">
        <div className="container-px mx-auto max-w-3xl">
          <SectionHeading
            align="center"
            eyebrow="Got Questions?"
            title="Frequently Asked Questions"
          />

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {faqCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                  category === c
                    ? 'border-accent bg-accent/15 text-accent-soft'
                    : 'border-border text-muted hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-8 space-y-3">
            {filtered.map((f, i) => (
              <FaqItem key={f.id} faq={f} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
