import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { models, formatPrice } from '../data/models.js'
import { business } from '../data/business.js'

const ASSUMED_RATE = 9.45 // annual %, indicative — matches typical Bajaj Finance EV rates

export default function EMICalculator() {
  const [modelId, setModelId] = useState(models[0].id)
  const [downPaymentPct, setDownPaymentPct] = useState(10)
  const [tenure, setTenure] = useState(12)

  const model = models.find((m) => m.id === modelId) ?? models[0]

  const { emi, loanAmount, downPaymentAmt, totalPayable } = useMemo(() => {
    const price = model.price || 70000
    const downPaymentAmt = Math.round((price * downPaymentPct) / 100)
    const loanAmount = price - downPaymentAmt
    const monthlyRate = ASSUMED_RATE / 12 / 100
    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1)
    return {
      emi: Math.round(emi),
      loanAmount,
      downPaymentAmt,
      totalPayable: Math.round(emi * tenure + downPaymentAmt),
    }
  }, [model, downPaymentPct, tenure])

  return (
    <div className="grid gap-8 rounded-2xl border border-border bg-surface p-6 shadow-card sm:p-8 lg:grid-cols-2">
      <div className="space-y-6">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-muted">
            Select Model
          </label>
          <select
            value={modelId}
            onChange={(e) => setModelId(e.target.value)}
            className="mt-2 w-full rounded-xl border border-border bg-elevated px-4 py-3 text-sm text-white outline-none focus:border-accent"
          >
            {models.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name} {m.variant} — {formatPrice(m.price)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold uppercase tracking-wide text-muted">
              Down Payment
            </label>
            <span className="dash-readout text-sm font-semibold text-accent-soft">{downPaymentPct}%</span>
          </div>
          <input
            type="range"
            min={0}
            max={50}
            step={5}
            value={downPaymentPct}
            onChange={(e) => setDownPaymentPct(Number(e.target.value))}
            className="mt-3 w-full accent-accent"
          />
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold uppercase tracking-wide text-muted">
              Loan Tenure
            </label>
            <span className="dash-readout text-sm font-semibold text-accent-soft">{tenure} months</span>
          </div>
          <input
            type="range"
            min={6}
            max={36}
            step={6}
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="mt-3 w-full accent-accent"
          />
        </div>

        <p className="text-xs leading-relaxed text-muted">
          *Indicative EMI at {ASSUMED_RATE}% p.a. via {business.financePartner}. Actual rate,
          eligibility, and tenure are subject to credit approval at the showroom.
        </p>
      </div>

      <div className="flex flex-col justify-center rounded-2xl bg-elevated p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">Estimated Monthly EMI</p>
        <motion.p
          key={emi}
          initial={{ opacity: 0.4, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="dash-readout glow-text mt-2 text-5xl font-bold text-accent-soft"
        >
          ₹{emi.toLocaleString('en-IN')}
          <span className="text-lg text-muted">/mo</span>
        </motion.p>

        <div className="mt-8 space-y-3 border-t border-border pt-6 text-sm">
          <div className="flex justify-between">
            <span className="text-muted">On-road price</span>
            <span className="dash-readout text-white">{formatPrice(model.price)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted">Down payment</span>
            <span className="dash-readout text-white">₹{downPaymentAmt.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted">Loan amount</span>
            <span className="dash-readout text-white">₹{loanAmount.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span className="text-white">Total payable</span>
            <span className="dash-readout text-accent-soft">₹{totalPayable.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
