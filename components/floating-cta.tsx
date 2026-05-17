"use client"

import Link from "next/link"
import { Phone } from "@phosphor-icons/react"

export function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 lg:hidden">
      {/* Phone Button */}
      <a
        href="tel:+441782839163"
        className="w-14 h-14 bg-accent text-accent-foreground flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        aria-label="Call us"
      >
        <Phone weight="fill" className="w-6 h-6" />
      </a>
      {/* Book Consultation */}
      <Link
        href="/contact"
        className="bg-primary text-primary-foreground px-4 py-3 text-sm font-medium shadow-lg text-center"
      >
        Book Now
      </Link>
    </div>
  )
}
