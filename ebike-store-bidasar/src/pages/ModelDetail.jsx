import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Zap, Check } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import TestRideForm from '../components/TestRideForm.jsx'
import { getModelBySlug, formatPrice } from '../data/models.js'
import { business } from '../data/business.js'

export default function ModelDetail() {
  const { slug } = useParams()
  const model = getModelBySlug(slug)

  if (!model) return <Navigate to="/models" replace />

  return (
    <>
      <SEO
        title={`${model.name} ${model.variant}`}
        description={`${model.name} ${model.variant} — ${model.heroTagline} Starting at ${formatPrice(model.price)}. Book a test ride at E-Bike Store Bidasar.`}
      />

      <section className="pb-24 pt-32 sm:pt-40">
        <div className="container-px mx-auto max-w-6xl">
          <Link
            to="/models"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back to models
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative flex h-72 items-center justify-center overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-elevated to-bg sm:h-96"
            >
              {model.image ? (
                <img
                  src={model.image}
                  alt={`${model.name} ${model.variant}`}
                  loading="lazy"
                  className="h-full w-full object-contain p-6"
                />
              ) : (
                <Zap className="h-24 w-24 text-accent/30" />
              )}
              {model.badge && (
                <span className="absolute left-6 top-6 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-soft">
                  {model.badge}
                </span>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
                {model.name} <span className="text-muted">{model.variant}</span>
              </h1>
              <p className="mt-3 text-base text-muted">{model.heroTagline}</p>
              <p className="dash-readout mt-6 text-4xl font-bold text-accent-soft">
                {formatPrice(model.price)}
              </p>
              <p className="mt-6 text-sm leading-relaxed text-white/85">{model.description}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={business.whatsappLinkWithMessage(
                    `Hi! I'm interested in the ${model.name} ${model.variant}. Can I book a test ride?`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
                >
                  Book Test Ride
                </a>
                <a
                  href={business.callLink}
                  className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent"
                >
                  Call Showroom
                </a>
              </div>
            </motion.div>
          </div>

          {/* Specs + Features */}
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-display text-lg font-bold text-white">Specifications</h3>
              <dl className="mt-5 divide-y divide-border">
                {Object.entries(model.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-3 text-sm">
                    <dt className="capitalize text-muted">{key.replace(/([A-Z])/g, ' $1')}</dt>
                    <dd className="text-right font-medium text-white">{value}</dd>
                  </div>
                ))}
              </dl>
              {!model.specsVerified && (
                <p className="mt-4 text-[11px] leading-relaxed text-muted">
                  * Specs compiled from Tunwal's official listings and public retail sources.
                  Please confirm exact figures with our showroom team before purchase.
                </p>
              )}
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-display text-lg font-bold text-white">Key Features</h3>
              <ul className="mt-5 space-y-3">
                {model.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white/90">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 max-w-xl">
            <TestRideForm heading={`Book a Test Ride — ${model.name}`} />
          </div>
        </div>
      </section>
    </>
  )
}
