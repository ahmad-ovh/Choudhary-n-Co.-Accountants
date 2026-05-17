"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Phone } from "@phosphor-icons/react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-secondary pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-accent font-medium tracking-wide uppercase text-sm">
                Local Accounting Experts in Stoke-on-Trent
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight text-balance">
                Trusted Accountants for Your Business Success
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Professional, personalised accounting services for SMEs, sole traders, and local businesses. 
                Fixed-fee pricing with no hidden costs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 font-medium hover:bg-primary/90 transition-colors group"
              >
                Book Free Consultation
                <ArrowRight weight="bold" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+441782839163"
                className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-6 py-3.5 font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Phone weight="fill" className="w-4 h-4" />
                Call 01782 839163
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">AAT</span>
                </div>
                <span className="text-xs text-muted-foreground">Licensed<br />Accountant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">ACCA</span>
                </div>
                <span className="text-xs text-muted-foreground">Certified<br />Member</span>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-muted overflow-hidden">
              <img 
                src="/images/hero-accounting.png" 
                alt="Business consultation at Choudhary & Co. Accountants office in Stoke-on-Trent" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 shadow-lg border border-border hidden lg:block">
              <div className="text-3xl font-serif font-bold text-primary">Local</div>
              <div className="text-sm text-muted-foreground">Experts</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
