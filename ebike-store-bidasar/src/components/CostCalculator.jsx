import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

// Assumptions, shown transparently to the rider:
const PETROL_PRICE_PER_LITRE = 106 // ₹, Rajasthan average
const PETROL_MILEAGE_KMPL = 45 // typical 100–110cc petrol scooter
const EV_UNITS_PER_KM = 0.9 / 60 // ~0.9 unit per 60km charge (from Tunwal spec sheets)
const ELECTRICITY_COST_PER_UNIT = 8 // ₹ per unit, average domestic tariff

export default function CostCalculator() {
  const [dailyKm, setDailyKm] = useState(45)

  const { petrolCost, evCost, monthlySavings } = useMemo(() => {
    const petrolCost = (dailyKm / PETROL_MILEAGE_KMPL) * PETROL_PRICE_PER_LITRE
    const evCost = dailyKm * EV_UNITS_PER_KM * ELECTRICITY_COST_PER_UNIT
    return {
      petrolCost: Math.round(petrolCost),
      evCost: Math.round(evCost),
      monthlySavings: Math.round((petrolCost - evCost) * 30),
    }
  }, [dailyKm])

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 shadow-card sm:p-8">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold uppercase tracking-wide text-muted">
          Daily Usage
        </label>
        <span className="dash-readout text-sm font-semibold text-accent-soft">{dailyKm} KM</span>
      </div>
      <input
        type="range"
        min={15}
        max={120}
        step={5}
        value={dailyKm}
        onChange={(e) => setDailyKm(Number(e.target.value))}
        className="mt-3 w-full accent-accent"
      />

      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-elevated p-5">
          <p className="text-xs text-muted">Petrol Scooter / day</p>
          <motion.p
            key={petrolCost}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            className="dash-readout mt-2 text-2xl font-bold text-white sm:text-3xl"
          >
            ₹{petrolCost}
          </motion.p>
        </div>
        <div className="rounded-xl bg-accent/10 p-5 ring-1 ring-accent/30">
          <p className="text-xs text-accent-soft">Tunwal EV / day</p>
          <motion.p
            key={evCost}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            className="dash-readout glow-text mt-2 text-2xl font-bold text-accent-soft sm:text-3xl"
          >
            ₹{evCost}
          </motion.p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between rounded-xl border border-accent/30 bg-accent/5 px-5 py-4">
        <span className="text-sm text-white">Estimated monthly savings</span>
        <span className="dash-readout text-xl font-bold text-accent-soft">
          ₹{monthlySavings.toLocaleString('en-IN')}
        </span>
      </div>
      <p className="mt-3 text-[11px] leading-relaxed text-muted">
        *Estimates based on ₹{PETROL_PRICE_PER_LITRE}/L petrol, {PETROL_MILEAGE_KMPL} km/L average
        mileage, and ₹{ELECTRICITY_COST_PER_UNIT}/unit electricity. Actual savings vary by model and
        usage.
      </p>
    </div>
  )
}
