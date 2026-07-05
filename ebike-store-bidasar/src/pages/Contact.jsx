import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import TestRideForm from '../components/TestRideForm.jsx'
import { business } from '../data/business.js'
import showroomExterior from '../assets/showroom-exterior.jpg'

const infoCards = [
  { icon: MapPin, label: 'Address', value: business.address.full, href: business.mapsLink },
  { icon: Phone, label: 'Phone', value: business.phoneDisplay, href: business.callLink },
  { icon: Mail, label: 'Email', value: business.email, href: business.emailLink },
  { icon: Clock, label: 'Hours', value: `${business.hours.weekday} · ${business.hours.sunday}` },
]

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Visit E-Bike Store Bidasar in Dunkar, Bidasar, or reach us by phone, WhatsApp, or email. Book a test ride today."
      />

      <section className="pb-24 pt-32 sm:pt-40">
        <div className="container-px mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Visit Our Showroom"
            description="We're open six days a week in Dunkar, Bidasar — drop by, call, or message us on WhatsApp."
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {infoCards.map((c, i) => (
                  <motion.div
                    key={c.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="rounded-2xl border border-border bg-surface p-5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                        <c.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-wide text-muted">{c.label}</p>
                        {c.href ? (
                          <a href={c.href} target="_blank" rel="noreferrer" className="mt-1 block text-sm font-medium text-white hover:text-accent-soft">
                            {c.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm font-medium text-white">{c.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-border">
                <img
                  src={showroomExterior}
                  alt="E-Bike Store Bidasar showroom exterior"
                  loading="lazy"
                  className="h-48 w-full object-cover"
                />
              </div>

              <div className="mt-4 aspect-video w-full overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="Showroom map"
                  src={business.mapsEmbedSrc}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="lg:col-span-3">
              <TestRideForm heading="Send Us an Enquiry" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
