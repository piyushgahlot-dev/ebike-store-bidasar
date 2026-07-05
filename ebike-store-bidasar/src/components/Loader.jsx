import { Zap } from 'lucide-react'

export default function Loader() {
  return (
    <div className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-3">
      <span className="flex h-12 w-12 animate-pulseSoft items-center justify-center rounded-xl bg-accent/15 text-accent">
        <Zap className="h-6 w-6" fill="currentColor" />
      </span>
      <p className="text-sm text-muted">Loading…</p>
    </div>
  )
}
