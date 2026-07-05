import { motion } from 'framer-motion'
import { Star, BadgeCheck } from 'lucide-react'

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-card"
    >
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < testimonial.rating ? 'fill-accent text-accent' : 'text-border'}`}
          />
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-white/90">"{testimonial.quote}"</p>
      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <div>
          <p className="text-sm font-semibold text-white">{testimonial.name}</p>
          <p className="text-xs text-muted">{testimonial.location} · {testimonial.model}</p>
        </div>
        {testimonial.verified && (
          <span className="flex items-center gap-1 text-[11px] font-medium text-accent-soft">
            <BadgeCheck className="h-3.5 w-3.5" /> Verified
          </span>
        )}
      </div>
    </motion.div>
  )
}
