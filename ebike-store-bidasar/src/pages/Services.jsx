import { motion } from 'framer-motion'
import { Wrench, BatteryCharging, ShieldCheck, Repeat, Truck, PhoneCall } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { business } from '../data/business.js'

const services = [
  {
    icon: Wrench,
    title: 'Sales & Test Rides',
    desc: 'Browse the full Tunwal lineup in person, take a free test ride, and get honest advice on which model fits your commute.',
  },
  {
    icon: BatteryCharging,
    title: 'Battery Health Checkups',
    desc: 'Periodic battery diagnostics to catch capacity loss early and keep your range where it should be.',
  },
  {
    icon: ShieldCheck,
    title: 'Warranty & Repairs',
    desc: 'In-house servicing for motor, controller, and battery issues, all handled under manufacturer warranty terms.',
  },
  {
    icon: Repeat,
    title: 'Exchange Assistance',
    desc: 'Bring your old two-wheeler for evaluation — we help you understand your exchange options toward a new Tunwal.',
  },
  {
    icon: Truck,
    title: 'Home Delivery',
    desc: 'Once your paperwork and finance are sorted, we can arrange delivery within Bidasar and nearby areas.',
  },
  {
    icon: PhoneCall,
    title: 'After-Sales Support',
    desc: "Questions after your purchase? Reach us directly on WhatsApp or call — we're a local team, not a call center.",
  },
]

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Sales, servicing, battery checkups, warranty support, and exchange assistance — all in-house at E-Bike Store Bidasar, the authorized Tunwal dealer in Dunkar."
      />

      <section className="pb-24 pt-32 sm:pt-40">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What We Do"
            title="Beyond the Sale"
            description="Owning an EV should be worry-free. Here's how we support you before and after you ride out of our showroom."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-accent/30 bg-accent/5 p-6 text-center sm:p-8">
            <p className="text-sm text-white sm:text-base">
              Need service or have a question about your scooter?
            </p>
            <a
              href={business.whatsappLinkWithMessage('Hi! I need help with servicing my Tunwal scooter.')}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
            >
              Message Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
