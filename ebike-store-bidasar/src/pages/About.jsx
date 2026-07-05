import { motion } from 'framer-motion'
import { ShieldCheck, MapPin, Users, Wrench } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { business } from '../data/business.js'
import showroomExterior from '../assets/showroom-exterior.jpg'
import showroomInterior1 from '../assets/showroom-interior-1.jpg'
import showroomInterior2 from '../assets/showroom-interior-2.jpg'

const stats = [
  { icon: Users, label: '500+', sub: 'Riders switched to electric' },
  { icon: MapPin, label: `${business.foundedYear}`, sub: 'Serving Bidasar since' },
  { icon: Wrench, label: 'In-house', sub: 'Sales, service & support' },
  { icon: ShieldCheck, label: 'Authorized', sub: 'Tunwal E-Motors dealer' },
]

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="E-Bike Store Bidasar is an authorized Tunwal E-Motors dealership in Dunkar, Bidasar — run by Mohit Gahlot, serving the local community with genuine electric scooters and finance options."
      />

      <section className="pb-24 pt-32 sm:pt-40">
        <div className="container-px mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Our Story"
            title="Bringing Electric Mobility to Bidasar"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8 space-y-5 text-base leading-relaxed text-white/85"
          >
            <p>
              E-Bike Store Bidasar opened its doors in {business.foundedYear} with a simple idea:
              make electric mobility genuinely accessible for families and daily commuters in
              Dunkar, Bidasar, and the surrounding villages. What started as a small showroom
              on Main Road has since helped hundreds of local riders move away from rising
              petrol costs and into reliable, low-maintenance electric scooters.
            </p>
            <p>
              As an <strong className="text-white">authorized Tunwal E-Motors dealer</strong>,
              we sell only genuine vehicles backed by manufacturer warranty — never grey-market
              imports or unauthorized reconditioned units. Every scooter that leaves our showroom
              is inspected, registered where required, and backed by in-house servicing.
            </p>
            <p>
              Under the leadership of owner <strong className="text-white">Mohit Gahlot</strong>,
              our small team focuses on straightforward pricing, honest advice on which model
              actually fits your commute, and after-sales support that doesn't disappear once
              the sale is done. Whether you're commuting to work, running a small business, or
              buying your family's first electric vehicle — we're here for the long run.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.sub}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-surface p-5 text-center"
              >
                <s.icon className="mx-auto h-6 w-6 text-accent" />
                <p className="dash-readout mt-3 text-2xl font-bold text-white">{s.label}</p>
                <p className="mt-1 text-xs text-muted">{s.sub}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="font-display text-lg font-bold text-white">Our Showroom</h3>
            <p className="mt-2 text-sm text-muted">{business.address.full}</p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-2xl border border-border sm:col-span-2"
              >
                <img
                  src={showroomExterior}
                  alt="E-Bike Store Bidasar showroom exterior"
                  loading="lazy"
                  className="h-56 w-full object-cover sm:h-72"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="overflow-hidden rounded-2xl border border-border"
              >
                <img
                  src={showroomInterior1}
                  alt="E-Bike Store Bidasar showroom interior"
                  loading="lazy"
                  className="h-56 w-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="overflow-hidden rounded-2xl border border-border"
              >
                <img
                  src={showroomInterior2}
                  alt="E-Bike Store Bidasar showroom floor with Tunwal models"
                  loading="lazy"
                  className="h-56 w-full object-cover"
                />
              </motion.div>
            </div>

            <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Showroom location"
                src={business.mapsEmbedSrc}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
