"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Calculator, 
  CurrencyGbp, 
  ChartLineUp, 
  BookOpen, 
  Receipt, 
  Briefcase,
  Buildings,
  FileText,
  ArrowRight
} from "@phosphor-icons/react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { CTABanner } from "@/components/cta-banner"

const services = [
  {
    id: "tax-returns",
    icon: Receipt,
    title: "Tax Returns",
    shortDesc: "Expert tax return preparation and filing",
    description: "Our qualified accountants handle all aspects of your tax return, from gathering documentation to filing with HMRC. We ensure you claim all eligible deductions while maintaining full compliance with current tax legislation.",
    features: [
      "Personal and business tax returns",
      "Capital gains tax calculations",
      "HMRC correspondence handling",
      "Tax planning advice",
      "Deadline management",
    ],
  },
  {
    id: "payroll",
    icon: CurrencyGbp,
    title: "Payroll Services",
    shortDesc: "Complete payroll management for your team",
    description: "Take the stress out of payroll with our comprehensive service. We handle everything from weekly and monthly payroll processing to RTI submissions and pension auto-enrolment compliance.",
    features: [
      "Weekly, fortnightly, or monthly payroll",
      "RTI submissions to HMRC",
      "Pension auto-enrolment",
      "Employee payslips",
      "P45, P60, and P11D preparation",
    ],
  },
  {
    id: "vat",
    icon: Calculator,
    title: "VAT Returns",
    shortDesc: "Accurate VAT calculations and submissions",
    description: "We prepare and submit your VAT returns on time, every time. Our team advises on the most suitable VAT scheme for your business and ensures you&apos;re maximising cash flow while staying compliant.",
    features: [
      "Quarterly VAT return preparation",
      "MTD for VAT compliance",
      "VAT scheme advice",
      "Partial exemption calculations",
      "EC sales list preparation",
    ],
  },
  {
    id: "bookkeeping",
    icon: BookOpen,
    title: "Bookkeeping",
    shortDesc: "Keep your finances in perfect order",
    description: "Accurate bookkeeping is the foundation of good business management. We maintain your financial records using cloud software, giving you real-time visibility of your business performance.",
    features: [
      "Bank reconciliation",
      "Sales and purchase ledger management",
      "Expense tracking and categorisation",
      "Cloud software setup and support",
      "Monthly management reports",
    ],
  },
  {
    id: "self-assessment",
    icon: FileText,
    title: "Self Assessment",
    shortDesc: "Hassle-free tax returns for individuals",
    description: "Whether you&apos;re a sole trader, landlord, or have multiple income sources, we make self-assessment simple. Our team ensures your return is accurate and filed on time, with all eligible reliefs claimed.",
    features: [
      "Sole trader tax returns",
      "Rental income reporting",
      "Dividend and investment income",
      "Foreign income declarations",
      "Payment on account calculations",
    ],
  },
  {
    id: "advisory",
    icon: ChartLineUp,
    title: "Business Advisory",
    shortDesc: "Strategic financial guidance for growth",
    description: "Beyond compliance, we act as your trusted business advisor. We help you understand your numbers, identify opportunities for improvement, and make informed decisions to grow your business.",
    features: [
      "Business planning and forecasting",
      "Cash flow management",
      "Profitability analysis",
      "Tax-efficient structuring",
      "Exit planning and succession",
    ],
  },
  {
    id: "formation",
    icon: Buildings,
    title: "Company Formation",
    shortDesc: "Start your limited company the right way",
    description: "Setting up a limited company involves more than just registering with Companies House. We guide you through the entire process and ensure your company is structured optimally from day one.",
    features: [
      "Company registration",
      "Share structure advice",
      "Director responsibilities briefing",
      "Bank account setup support",
      "PAYE and VAT registration",
    ],
  },
  {
    id: "statements",
    icon: Briefcase,
    title: "Financial Statements",
    shortDesc: "Compliant accounts prepared professionally",
    description: "We prepare annual accounts that meet statutory requirements while providing meaningful insights into your business performance. Our clear reports help stakeholders understand your financial position.",
    features: [
      "Statutory annual accounts",
      "Management accounts",
      "Companies House filing",
      "Director&apos;s report preparation",
      "Financial analysis and insights",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">
                Our Services
              </p>
              <h1 className="text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
                Tax Services for Small Businesses
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From bookkeeping to business advisory, we provide comprehensive accounting services 
                tailored to the needs of SMEs, sole traders, and local businesses in Stoke-on-Trent.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Detail List */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-14 h-14 bg-secondary mb-6 flex items-center justify-center">
                      <service.icon weight="duotone" className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-serif font-semibold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-foreground">
                          <div className="w-1.5 h-1.5 bg-accent flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition-colors group"
                    >
                      Get a Quote
                      <ArrowRight weight="bold" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Image */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="aspect-[4/3] bg-secondary overflow-hidden">
                      <img 
                        src={
                          service.id === "bookkeeping" || service.id === "payroll" || service.id === "vat" || service.id === "tax-returns"
                            ? "/images/bookkeeping-workspace.png"
                            : service.id === "self-assessment"
                            ? "/images/blog-self-assessment.png"
                            : service.id === "advisory"
                            ? "/images/business-advisory.png"
                            : "/images/hero-accounting.png"
                        } 
                        alt={`${service.title} services at Choudhary & Co.`} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing CTA */}
        <section className="py-16 bg-secondary border-y border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-2xl lg:text-3xl font-serif font-semibold text-foreground">
                Transparent Fixed-Fee Pricing
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                No hourly rates, no hidden costs. We provide clear, upfront pricing so you know exactly 
                what you&apos;ll pay. Contact us for a personalised quote based on your specific needs.
              </p>
            </motion.div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
