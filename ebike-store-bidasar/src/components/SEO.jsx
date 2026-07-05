import { useEffect } from 'react'

/**
 * Lightweight per-page SEO setter — no extra dependency needed.
 * Usage: <SEO title="Models" description="..." />
 */
export default function SEO({ title, description }) {
  useEffect(() => {
    if (title) document.title = `${title} | E-Bike Store Bidasar`
    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
    window.scrollTo({ top: 0, behavior: 'instant' in window.scrollTo ? 'instant' : 'auto' })
  }, [title, description])

  return null
}
