import SEO from './SEO.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function LegalLayout({ title, updated, children }) {
  return (
    <>
      <SEO title={title} description={`${title} for E-Bike Store Bidasar.`} />
      <section className="pb-24 pt-32 sm:pt-40">
        <div className="container-px mx-auto max-w-3xl">
          <SectionHeading eyebrow={`Updated ${updated}`} title={title} />
          <div className="prose-legal mt-8 space-y-5 text-sm leading-relaxed text-white/80">
            {children}
          </div>
        </div>
      </section>
    </>
  )
}
