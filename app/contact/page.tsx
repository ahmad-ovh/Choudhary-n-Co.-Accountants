"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, Envelope, MapPin, Clock, WhatsappLogo, CaretDown } from "@phosphor-icons/react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"

const services = [
  "Tax Returns",
  "Payroll Services",
  "VAT Returns",
  "Bookkeeping",
  "Self Assessment",
  "Business Advisory",
  "Company Formation",
  "Financial Statements",
  "Other",
]

const faqs = [
  {
    question: "What should I bring to my first consultation?",
    answer: "For your first consultation, please bring any existing financial records, previous tax returns (if applicable), bank statements, and details of your business or income sources. Don&apos;t worry if you&apos;re not sure – we can guide you through what we need.",
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes! We offer a free, no-obligation initial consultation to discuss your needs and explain how we can help. This typically lasts 30-45 minutes and can be conducted in person, via phone, or by video call.",
  },
  {
    question: "How do your fixed fees work?",
    answer: "We provide a clear quote upfront based on your specific requirements. This fee covers all routine work – there are no hidden charges or surprise bills. If additional work is needed, we&apos;ll always discuss and agree the cost with you first.",
  },
  {
    question: "Can you work with my existing accounting software?",
    answer: "Absolutely. We work with all major accounting platforms including Xero, QuickBooks, FreeAgent, and Sage. We can also help you migrate to cloud software if you&apos;re still using spreadsheets or paper records.",
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
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-medium text-foreground pr-8 text-sm">{question}</span>
        <CaretDown
          weight="bold"
          className={`w-4 h-4 text-primary flex-shrink-0 transition-transform duration-200 ${
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
            <p className="pb-4 text-sm text-muted-foreground leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ContactPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission would be handled here
    console.log("Form submitted:", formData)
    alert("Thank you for your enquiry. We will be in touch within 24 hours.")
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">
                Contact Us
              </p>
              <h1 className="text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ready to take the next step? Contact us today for a free consultation. 
                We&apos;re here to help with all your accounting needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2"
              >
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
                  Book Your Free Consultation
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                        placeholder="07xxx xxxxxx"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company Name (Optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                        placeholder="Your Company Ltd"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service Required *
                    </label>
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      How Can We Help? *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your accounting needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto bg-primary text-primary-foreground px-8 py-3.5 font-medium hover:bg-primary/90 transition-colors"
                  >
                    Request Free Consultation
                  </button>
                </form>
              </motion.div>

              {/* Contact Info Sidebar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Click to Call */}
                <div className="bg-primary p-6 text-primary-foreground">
                  <h3 className="font-semibold text-lg mb-4">Prefer to Talk?</h3>
                  <a
                    href="tel:+441782839163"
                    className="inline-flex items-center gap-3 text-2xl font-serif font-bold mb-2"
                  >
                    <Phone weight="fill" className="w-6 h-6" />
                    01782 839163
                  </a>
                  <p className="text-primary-foreground/80 text-sm">
                    Call us now for immediate assistance
                  </p>
                </div>

                {/* Contact Details */}
                <div className="bg-secondary p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin weight="fill" className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Our Office</h4>
                      <p className="text-sm text-muted-foreground">
                        81 High Street<br />
                        Stoke-on-Trent<br />
                        Staffordshire<br />
                        ST6 5TA
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Envelope weight="fill" className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Email</h4>
                      <a
                        href="mailto:info@choudharyco.co.uk"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@choudharyco.co.uk
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock weight="fill" className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Opening Hours</h4>
                      <p className="text-sm text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:30 PM<br />
                        Saturday: By appointment<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/441782839163"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full border border-border p-4 hover:bg-secondary transition-colors"
                >
                  <WhatsappLogo weight="fill" className="w-6 h-6 text-[#25D366]" />
                  <span className="font-medium text-foreground">Message us on WhatsApp</span>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="h-96 bg-secondary">
          <iframe 
            src="https://maps.google.com/maps?q=81%20High%20Street,%20Stoke-on-Trent,%20Staffordshire,%20ST6%205TA&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Choudhary & Co. Accountants Location"
          />
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-28 bg-background" id="faq">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Common Questions
              </h2>
            </motion.div>

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
                  isOpen={openFAQ === index}
                  onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
                />
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
