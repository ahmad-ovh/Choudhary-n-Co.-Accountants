"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Phone } from "@phosphor-icons/react"

export function CTABanner() {
  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-primary-foreground text-balance">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Book your free consultation today and discover how we can help your business thrive. 
            No obligation, no pressure — just honest advice from local experts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-6 py-3.5 font-medium hover:bg-primary-foreground/90 transition-colors group"
            >
              Book Free Consultation
              <ArrowRight weight="bold" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+441782839163"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 text-primary-foreground px-6 py-3.5 font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              <Phone weight="fill" className="w-4 h-4" />
              Call 01782 839163
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
