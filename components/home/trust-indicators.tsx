"use client"

import { motion } from "framer-motion"
import { Buildings, Handshake, CurrencyGbp, Users } from "@phosphor-icons/react"

const indicators = [
  {
    icon: Buildings,
    value: "Local",
    label: "Accountants",
    description: "Serving Stoke-on-Trent & Staffordshire",
  },
  {
    icon: Users,
    value: "500+",
    label: "Happy Clients",
    description: "Local businesses trust us",
  },
  {
    icon: CurrencyGbp,
    value: "Fixed",
    label: "Fee Pricing",
    description: "No hidden costs or surprises",
  },
  {
    icon: Handshake,
    value: "100%",
    label: "Personal Service",
    description: "Direct access to your accountant",
  },
]

export function TrustIndicators() {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-secondary mx-auto mb-4 flex items-center justify-center">
                <item.icon weight="duotone" className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl lg:text-3xl font-serif font-bold text-primary mb-1">
                {item.value}
              </div>
              <div className="font-medium text-foreground mb-1">{item.label}</div>
              <div className="text-sm text-muted-foreground">{item.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
