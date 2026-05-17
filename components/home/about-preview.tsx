"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "@phosphor-icons/react"

export function AboutPreview() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="aspect-[4/3] bg-muted overflow-hidden">
                <img 
                  src="/images/about-team.png" 
                  alt="Choudhary & Co. accounting team collaborating in modern Stoke-on-Trent boardroom" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating Quote Card */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 max-w-xs hidden lg:block">
                <p className="text-sm leading-relaxed italic">
                  &quot;We believe every business deserves a dedicated accountant who truly understands their needs.&quot;
                </p>
                <p className="mt-3 text-xs text-primary-foreground/80">
                  — The Choudhary & Co. Team
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">
              About Us
            </p>
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-foreground mb-6">
              Local Roots, Professional Excellence
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Our firm has grown to become one of Stoke-on-Trent&apos;s most trusted accounting firms. 
                We&apos;ve built our reputation on providing exceptional, personalised service to local businesses 
                across Staffordshire.
              </p>
              <p>
                Our team of qualified accountants combines traditional expertise with modern 
                technology to deliver efficient, accurate, and forward-thinking financial services. 
                We&apos;re proud to be part of the Stoke-on-Trent business community.
              </p>
            </div>



            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4 group"
            >
              Learn More About Us
              <ArrowRight weight="bold" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
