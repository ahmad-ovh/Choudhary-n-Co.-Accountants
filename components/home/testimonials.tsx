"use client"

import { motion } from "framer-motion"
import { Star, Quotes } from "@phosphor-icons/react"

const testimonials = [
  {
    name: "Local Business Owner",
    company: "Stoke-on-Trent SME",
    text: "[Testimonial Placeholder: A positive review from a local small business detailing how Choudhary & Co. provided excellent accounting services.]",
    rating: 5,
  },
  {
    name: "Sole Trader",
    company: "Staffordshire",
    text: "[Testimonial Placeholder: Feedback from a self-employed professional praising the easy tax return process and fixed-fee pricing.]",
    rating: 5,
  },
  {
    name: "Company Director",
    company: "Local Retailer",
    text: "[Testimonial Placeholder: Review highlighting the reliable bookkeeping and proactive business advice provided by the team.]",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">
            Client Testimonials
          </p>
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what local businesses have to say about 
            working with Choudhary & Co.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card p-8 border border-border"
            >
              <Quotes weight="fill" className="w-10 h-10 text-primary/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} weight="fill" className="w-4 h-4 text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="border-t border-border pt-4">
                <div className="font-medium text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Review Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card border border-border">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} weight="fill" className="w-5 h-5 text-accent" />
              ))}
            </div>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Highly Rated</strong> on Google Reviews
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
