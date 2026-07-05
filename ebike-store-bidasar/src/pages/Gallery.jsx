import { motion } from 'framer-motion'
import SEO from '../components/SEO.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { galleryImages } from '../data/gallery.js'

export default function Gallery() {
  return (
    <>
      <SEO
        title="Gallery"
        description="Photos from E-Bike Store Bidasar — customer deliveries, our showroom, and the Tunwal electric scooter family in Bidasar, Rajasthan."
      />

      <section className="pb-24 pt-32 sm:pt-40">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            align="center"
            eyebrow="Our Community"
            title="Our Proud Tunwal Family"
            description="Real handovers, real customers — every delivery is a small celebration at our showroom."
          />

          <div className="mt-4 -mx-5 flex gap-4 overflow-x-auto px-5 pb-4 sm:hidden">
            {galleryImages.map((img) => (
              <div key={img.id} className="relative h-56 w-44 shrink-0 overflow-hidden rounded-xl border border-border">
                <img src={img.src} alt={img.caption} className="h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>

          <div className="mt-4 hidden columns-2 gap-4 sm:columns-3 sm:block lg:columns-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="group relative mb-4 overflow-hidden rounded-xl border border-border break-inside-avoid"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                  <p className="p-4 text-xs text-white">{img.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
