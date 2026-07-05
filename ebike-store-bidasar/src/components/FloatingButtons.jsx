import { useState } from 'react'
import { Phone } from 'lucide-react'
import { business } from '../data/business.js'

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12.04 2c-5.523 0-10 4.477-10 10 0 1.76.457 3.416 1.257 4.855L2 22l5.28-1.284A9.958 9.958 0 0012.04 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.16a8.13 8.13 0 01-4.146-1.135l-.297-.176-3.09.752.78-3.058-.194-.313a8.14 8.14 0 01-1.253-4.35c0-4.508 3.673-8.18 8.2-8.18 4.526 0 8.199 3.672 8.199 8.18 0 4.507-3.673 8.28-8.199 8.28z"/>
    </svg>
  )
}

export default function FloatingButtons() {
  const [showTip, setShowTip] = useState(false)

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      <a
        href={business.callLink}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-elevated text-white shadow-card ring-1 ring-border transition-transform hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="h-5 w-5" />
      </a>

      <div
        className="relative"
        onMouseEnter={() => setShowTip(true)}
        onMouseLeave={() => setShowTip(false)}
      >
        {showTip && (
          <span className="absolute right-16 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-elevated px-3 py-1.5 text-xs font-medium text-white shadow-card sm:block">
            Chat with us
          </span>
        )}
        <a
          href={business.whatsappLinkWithMessage('Hi! I want to know more about Tunwal electric scooters.')}
          target="_blank"
          rel="noreferrer"
          className="flex h-14 w-14 animate-pulseSoft items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_8px_30px_-6px_rgba(37,211,102,0.6)] transition-transform hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon className="h-7 w-7" />
        </a>
      </div>
    </div>
  )
}
