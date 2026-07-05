import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ModelCard from '../components/ModelCard.jsx'
import { models, categories, formatPrice } from '../data/models.js'

export default function Models() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [compareIds, setCompareIds] = useState([])
  const [showCompare, setShowCompare] = useState(false)

  const filtered = useMemo(() => {
    return models.filter((m) => {
      const matchesCategory = category === 'All' || m.category === category
      const matchesQuery = `${m.name} ${m.variant}`.toLowerCase().includes(query.toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [query, category])

  const toggleCompare = (id) => {
    setCompareIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : prev.length < 3 ? [...prev, id] : prev
    )
  }

  const compareModels = models.filter((m) => compareIds.includes(m.id))
  const specKeys = compareModels.length
    ? Object.keys(compareModels[0].specs)
    : []

  return (
    <>
      <SEO
        title="Models"
        description="Browse the full Tunwal electric scooter lineup at E-Bike Store Bidasar — Alfa Pro, Lithino Pro, Storm XL, Roma N and more. Filter, search, and compare models."
      />

      <section className="pb-24 pt-32 sm:pt-40">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Full Lineup"
            title="Find Your Tunwal Model"
            description="Search by name or filter by category. Select up to 3 models to compare specs side-by-side."
          />

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-xs">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search models…"
                className="w-full rounded-full border border-border bg-surface py-3 pl-11 pr-4 text-sm text-white outline-none focus:border-accent"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                    category === c
                      ? 'border-accent bg-accent/15 text-accent-soft'
                      : 'border-border text-muted hover:text-white'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="mt-16 text-center text-sm text-muted">
              No models match "{query}". Try a different search or category.
            </p>
          ) : (
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((m, i) => (
                <ModelCard
                  key={m.id}
                  model={m}
                  index={i}
                  onCompareToggle={toggleCompare}
                  compareChecked={compareIds.includes(m.id)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Sticky compare bar */}
      <AnimatePresence>
        {compareIds.length > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-surface/95 backdrop-blur-lg"
          >
            <div className="container-px mx-auto flex max-w-7xl items-center justify-between gap-4 py-4">
              <p className="text-sm text-white">
                {compareIds.length} model{compareIds.length > 1 ? 's' : ''} selected
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setCompareIds([])}
                  className="text-sm text-muted hover:text-white"
                >
                  Clear
                </button>
                <button
                  onClick={() => setShowCompare(true)}
                  disabled={compareIds.length < 2}
                  className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-40"
                >
                  Compare Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Compare modal */}
      <AnimatePresence>
        {showCompare && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-bg/80 p-4 backdrop-blur-sm"
            onClick={() => setShowCompare(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] w-full max-w-4xl overflow-auto rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-bold text-white">Compare Models</h3>
                <button onClick={() => setShowCompare(false)} className="text-muted hover:text-white">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[500px] border-collapse text-sm">
                  <thead>
                    <tr>
                      <th className="border-b border-border py-3 text-left text-xs uppercase tracking-wide text-muted">Spec</th>
                      {compareModels.map((m) => (
                        <th key={m.id} className="border-b border-border py-3 text-left">
                          <p className="font-display font-bold text-white">{m.name}</p>
                          <p className="text-xs font-normal text-muted">{m.variant}</p>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-border py-3 text-muted">Price</td>
                      {compareModels.map((m) => (
                        <td key={m.id} className="dash-readout border-b border-border py-3 font-semibold text-accent-soft">
                          {formatPrice(m.price)}
                        </td>
                      ))}
                    </tr>
                    {specKeys.map((key) => (
                      <tr key={key}>
                        <td className="border-b border-border py-3 capitalize text-muted">
                          {key.replace(/([A-Z])/g, ' $1')}
                        </td>
                        {compareModels.map((m) => (
                          <td key={m.id} className="border-b border-border py-3 text-white">
                            {m.specs[key]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
