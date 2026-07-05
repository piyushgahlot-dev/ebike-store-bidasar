import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Zap, ShieldCheck, BatteryCharging, Wallet } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ModelCard from '../components/ModelCard.jsx'
import CostCalculator from '../components/CostCalculator.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'
import { models } from '../data/models.js'
import { testimonials } from '../data/testimonials.js'
import { business } from '../data/business.js'
import heroImage from '../assets/roma-n.png'

const highlights = [
  { icon: BatteryCharging, label: 'Up to 110 km range', sub: 'across the Tunwal lineup' },
  { icon: Wallet, label: '0% down payment*', sub: `via ${business.financePartner}` },
  { icon: ShieldCheck, label: 'Authorized dealer', sub: 'genuine parts & service' },
]

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Authorized Tunwal E-Motors dealership in Bidasar, Rajasthan. Explore Alfa Pro, Storm XL, Roma N & more. Book a free test ride today."
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-grid-fade pb-20 pt-32 sm:pt-40">
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-accent/20 blur-[100px]" />
        <div className="container-px relative mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-soft">
                <Zap className="h-3.5 w-3.5" fill="currentColor" /> Authorized Tunwal E-Motors Dealer
              </span>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Bidasar's Home for <span className="text-accent">Electric</span> Rides
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                From the everyday Alfa Pro to the premium Roma N — find the Tunwal electric
                scooter built for how you actually ride, with easy finance and genuine
                after-sales service right here in Dunkar.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={business.whatsappLinkWithMessage('Hi! I want to book a test ride.')}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-accent px-7 py-3.5 text-center text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
                >
                  Book a Free Test Ride
                </a>
                <Link
                  to="/models"
                  className="rounded-full border border-border px-7 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:border-accent"
                >
                  Explore Models
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-4">
                {highlights.map((h, i) => (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  >
                    <h.icon className="h-5 w-5 text-accent" />
                    <p className="mt-2 font-display text-sm font-bold text-white sm:text-base">{h.label}</p>
                    <p className="text-xs text-muted">{h.sub}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
              className="relative flex items-center justify-center"
            >
              <div className="absolute h-64 w-64 rounded-full bg-accent/20 blur-3xl sm:h-80 sm:w-80" />
              <div className="relative flex h-80 w-full max-w-md animate-float items-center justify-center rounded-3xl border border-border bg-elevated/60 p-6 backdrop-blur">
                <img
                  src={heroImage}
                  alt="Tunwal Roma N electric scooter"
                  className="h-full w-full object-contain"
                />
                <span className="absolute bottom-5 left-5 right-5 rounded-xl bg-bg/70 p-4 backdrop-blur">
                  <span className="dash-readout block text-2xl font-bold text-accent-soft">₹85,000</span>
                  <span className="text-xs text-muted">starting price · Roma N</span>
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MODELS PREVIEW */}
      <section className="py-20 sm:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Our Lineup"
              title="Power-Packed Electric Models"
              description="Eight Tunwal scooters, one dealership. Compare range, price, and features to find your fit."
            />
            <Link
              to="/models"
              className="flex items-center gap-1 text-sm font-semibold text-accent-soft transition-colors hover:text-white"
            >
              View all models <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {models.slice(0, 4).map((m, i) => (
              <ModelCard key={m.id} model={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* COST CALCULATOR */}
      <section className="py-20 sm:py-28">
        <div className="container-px mx-auto max-w-5xl">
          <SectionHeading
            align="center"
            eyebrow="Do the Math"
            title="Switch to Electric, Maximize Savings"
            description="Move the slider to your daily commute distance and see how much a Tunwal scooter saves you over petrol."
          />
          <div className="mt-10">
            <CostCalculator />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 sm:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            align="center"
            eyebrow="Happy Riders"
            title="500+ Happy Customers in Bidasar"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container-px mx-auto max-w-5xl">
          <div className="rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/15 via-surface to-surface p-10 text-center sm:p-16">
            <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Ready to ride electric?
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted sm:text-base">
              Visit our Dunkar showroom or book a free test ride — our team will help you pick
              the right Tunwal model for your commute.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={business.whatsappLinkWithMessage('Hi! I want to book a test ride.')}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
              >
                Book Test Ride on WhatsApp
              </a>
              <a
                href={business.mapsLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-accent"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
