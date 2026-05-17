"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CaretDown } from "@phosphor-icons/react"

const faqs = [
  {
    question: "How much do your accounting services cost?",
    answer: "We offer transparent fixed-fee pricing so you know exactly what you&apos;ll pay. Our fees depend on your business size and the services you need. Contact us for a free, no-obligation quote tailored to your requirements.",
  },
  {
    question: "Do I need to visit your office, or can we work remotely?",
    answer: "We offer both options! Many clients prefer the convenience of working remotely using secure cloud software and video calls. However, we&apos;re always happy to meet in person at our Stoke-on-Trent office if you prefer.",
  },
  {
    question: "When is the deadline for self-assessment tax returns?",
    answer: "The deadline for online self-assessment tax returns is 31 January following the end of the tax year. For paper returns, it&apos;s 31 October. We recommend starting early to ensure you have time to gather all necessary documents and maximise your deductions.",
  },
  {
    question: "Can you help with HMRC investigations?",
    answer: "Yes, we have extensive experience supporting clients through HMRC enquiries and investigations. We&apos;ll handle all communications with HMRC on your behalf and work to resolve any issues as quickly as possible.",
  },
  {
    question: "What cloud accounting software do you support?",
    answer: "We work with all major cloud accounting platforms including Xero, QuickBooks, FreeAgent, and Sage. We can help you choose the best software for your business and provide training to get you started.",
  },
  {
    question: "How quickly can you respond to my queries?",
    answer: "We pride ourselves on our responsiveness. Most queries are answered within 24 hours during business days. For urgent matters, we&apos;re just a phone call away.",
  },
]

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-medium text-foreground pr-8">{question}</span>
        <CaretDown
          weight="bold"
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-muted-foreground leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 lg:py-28 bg-background" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">
            FAQs
          </p>
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, 
            don&apos;t hesitate to contact us.
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-t border-border"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
