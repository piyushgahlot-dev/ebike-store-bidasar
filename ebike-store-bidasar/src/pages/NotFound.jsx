import { Link } from 'react-router-dom'
import { Zap } from 'lucide-react'
import SEO from '../components/SEO.jsx'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." />
      <section className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
        <Zap className="h-12 w-12 text-accent/40" />
        <p className="dash-readout mt-6 text-6xl font-bold text-white">404</p>
        <h1 className="mt-3 font-display text-xl font-bold text-white">
          This page took a wrong turn.
        </h1>
        <p className="mt-2 max-w-sm text-sm text-muted">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link
          to="/"
          className="mt-8 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
        >
          Back to Home
        </Link>
      </section>
    </>
  )
}
