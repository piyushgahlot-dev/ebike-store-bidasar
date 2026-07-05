import { Link } from 'react-router-dom'
import { Zap, Instagram, MapPin, Phone, Mail } from 'lucide-react'
import { business } from '../data/business.js'

const menuLinks = [
  { to: '/models', label: 'Models' },
  { to: '/finance', label: 'Finance' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

const legalLinks = [
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms of Service' },
  { to: '/disclaimer', label: 'Disclaimer' },
  { to: '/cookie-policy', label: 'Cookie Policy' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-px mx-auto max-w-7xl py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent">
                <Zap className="h-5 w-5" fill="currentColor" />
              </span>
              <span className="font-display text-[15px] font-bold text-white">
                E-BIKE STORE <span className="text-accent">BIDASAR</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Authorized Tunwal E-Motors dealer serving Bidasar, Dunkar, and surrounding areas.
            </p>
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-accent hover:text-accent"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white">Explore</h4>
            <ul className="mt-4 space-y-3">
              {menuLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white">Visit Us</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-accent" />
                <a href={business.mapsLink} target="_blank" rel="noreferrer" className="hover:text-white">
                  {business.address.full}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href={business.callLink} className="hover:text-white">
                  {business.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href={business.emailLink} className="hover:text-white break-all">
                  {business.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white">Showroom Hours</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>{business.hours.weekday}</li>
              <li>{business.hours.sunday}</li>
            </ul>
            <h4 className="mt-6 font-display text-sm font-semibold text-white">Legal</h4>
            <ul className="mt-3 space-y-2">
              {legalLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <p>Authorized Tunwal E-Motors Dealer · Bidasar, Rajasthan</p>
        </div>
      </div>
    </footer>
  )
}
