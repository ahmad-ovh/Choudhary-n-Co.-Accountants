"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "@phosphor-icons/react"

const reasons = [
  {
    title: "Local Expertise",
    description: "Based in Stoke-on-Trent, we understand the local business landscape and regulations affecting your area.",
  },
  {
    title: "Fixed-Fee Pricing",
    description: "No hourly rates or hidden costs. Know exactly what you&apos;ll pay with our transparent fixed-fee structure.",
  },
  {
    title: "Personal Service",
    description: "Work directly with qualified accountants who know your business, not a revolving door of staff.",
  },
  {
    title: "Proactive Advice",
    description: "We don&apos;t just crunch numbers. We actively look for ways to save you money and grow your business.",
  },
  {
    title: "Quick Response",
    description: "Get answers when you need them. We pride ourselves on responding to queries within 24 hours.",
  },
  {
    title: "Cloud Accounting",
    description: "Access your accounts anytime with modern cloud software. We support Xero, QuickBooks, and FreeAgent.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">
              Why Choose Us
            </p>
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-foreground mb-6">
              Your Success Is Our Priority
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              At Choudhary & Co., we&apos;re more than just accountants. We&apos;re your trusted financial 
              partners committed to helping your business thrive. Here&apos;s what sets us apart from the rest.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex gap-3"
                >
                  <CheckCircle weight="fill" className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats/Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-card p-8 lg:p-12 border border-border">
              <div className="space-y-8">
                <div className="text-center p-6 border-b border-border">
                  <div className="text-3xl lg:text-5xl font-serif font-bold text-primary mb-2">High</div>
                  <div className="text-muted-foreground">Client Retention Rate</div>
                </div>
                <div className="text-center p-6 border-b border-border">
                  <div className="text-3xl lg:text-5xl font-serif font-bold text-primary mb-2">Fast</div>
                  <div className="text-muted-foreground">Response Time</div>
                </div>
                <div className="text-center p-6">
                  <div className="text-3xl lg:text-5xl font-serif font-bold text-primary mb-2">Local</div>
                  <div className="text-muted-foreground">Businesses Supported</div>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 top-4 left-4 right-4 bottom-4 bg-primary/5 -translate-x-8 translate-y-8 hidden lg:block" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
