import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { business } from '../data/business.js'
import { models } from '../data/models.js'

const locations = ['Bidasar', 'Dunkar', 'Sardarshahar', 'Ratangarh', 'Other']

export default function TestRideForm({ heading = 'Book a Test Ride' }) {
  const [form, setForm] = useState({ name: '', phone: '', location: locations[0], model: models[0].name })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim() || form.name.trim().length < 2) errs.name = 'Please enter your full name'
    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) errs.phone = 'Enter a valid 10-digit mobile number'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    const message = `Hi, I'd like to book a test ride.\nName: ${form.name}\nPhone: +91${form.phone}\nLocation: ${form.location}\nInterested Model: ${form.model}`
    window.open(business.whatsappLinkWithMessage(message), '_blank')
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', phone: '', location: locations[0], model: models[0].name })
    }, 3500)
  }

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 shadow-card sm:p-8">
      <h3 className="font-display text-xl font-bold text-white">{heading}</h3>
      <p className="mt-1 text-sm text-muted">We'll confirm your slot over WhatsApp within minutes.</p>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="mt-8 flex flex-col items-center gap-3 rounded-xl bg-elevated py-10 text-center"
          >
            <CheckCircle2 className="h-12 w-12 text-accent-soft" />
            <p className="font-display text-lg font-semibold text-white">Enquiry sent!</p>
            <p className="max-w-xs text-sm text-muted">
              We've opened WhatsApp with your details pre-filled — just hit send there to confirm.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-6 space-y-4"
            noValidate
          >
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-muted">
                Full Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="mt-2 w-full rounded-xl border border-border bg-elevated px-4 py-3 text-sm text-white outline-none focus:border-accent"
              />
              <AnimatePresence>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-1.5 text-xs text-red-400"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-muted">
                Phone Number
              </label>
              <div className="mt-2 flex overflow-hidden rounded-xl border border-border bg-elevated focus-within:border-accent">
                <span className="flex items-center px-4 text-sm text-muted">+91</span>
                <input
                  type="tel"
                  maxLength={10}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, '') })}
                  placeholder="98765 43210"
                  className="w-full bg-transparent py-3 pr-4 text-sm text-white outline-none"
                />
              </div>
              <AnimatePresence>
                {errors.phone && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-1.5 text-xs text-red-400"
                  >
                    {errors.phone}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-muted">
                Location
              </label>
              <select
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                className="mt-2 w-full rounded-xl border border-border bg-elevated px-4 py-3 text-sm text-white outline-none focus:border-accent"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-muted">
                Interested Model
              </label>
              <select
                value={form.model}
                onChange={(e) => setForm({ ...form, model: e.target.value })}
                className="mt-2 w-full rounded-xl border border-border bg-elevated px-4 py-3 text-sm text-white outline-none focus:border-accent"
              >
                {models.map((m) => (
                  <option key={m.id} value={`${m.name} ${m.variant}`}>{m.name} {m.variant}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-accent py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02]"
            >
              Send Enquiry via WhatsApp
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
