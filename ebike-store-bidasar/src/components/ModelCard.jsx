import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Zap } from 'lucide-react'
import { formatPrice } from '../data/models.js'

export default function ModelCard({ model, index = 0, onCompareToggle, compareChecked }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-card"
    >
      <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-elevated to-bg">
        {model.image ? (
          <img
            src={model.image}
            alt={`${model.name} ${model.variant}`}
            loading="lazy"
            className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <Zap className="h-16 w-16 text-accent/30 transition-transform duration-500 group-hover:scale-110" />
        )}
        {model.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-accent/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent-soft">
            {model.badge}
          </span>
        )}
        {onCompareToggle && (
          <label className="absolute right-4 top-4 flex cursor-pointer items-center gap-1.5 rounded-full bg-bg/70 px-2.5 py-1 text-[11px] font-medium text-muted backdrop-blur">
            <input
              type="checkbox"
              checked={compareChecked}
              onChange={() => onCompareToggle(model.id)}
              className="h-3.5 w-3.5 accent-accent"
            />
            Compare
          </label>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold text-white">{model.name}</h3>
        <p className="text-sm text-muted">{model.variant}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-2">{model.heroTagline}</p>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-wide text-muted">Starting at</p>
            <p className="dash-readout text-xl font-semibold text-white">{formatPrice(model.price)}</p>
          </div>
          <Link
            to={`/models/${model.slug}`}
            className="flex items-center gap-1 text-sm font-semibold text-accent-soft transition-colors hover:text-white"
          >
            View Details
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
