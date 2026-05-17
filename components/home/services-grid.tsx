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
  FileText
} from "@phosphor-icons/react"

const services = [
  {
    icon: Receipt,
    title: "Tax Returns",
    description: "Expert preparation and filing of personal and business tax returns to ensure compliance and maximise deductions.",
    href: "/services#tax-returns",
  },
  {
    icon: CurrencyGbp,
    title: "Payroll Services",
    description: "Complete payroll management including RTI submissions, pension auto-enrolment, and employee payslips.",
    href: "/services#payroll",
  },
  {
    icon: Calculator,
    title: "VAT Returns",
    description: "Accurate VAT calculations, return preparation, and advice on the best VAT scheme for your business.",
    href: "/services#vat",
  },
  {
    icon: BookOpen,
    title: "Bookkeeping",
    description: "Regular bookkeeping services to keep your financial records accurate and up-to-date.",
    href: "/services#bookkeeping",
  },
  {
    icon: FileText,
    title: "Self Assessment",
    description: "Hassle-free self-assessment tax returns for sole traders, landlords, and individuals.",
    href: "/services#self-assessment",
  },
  {
    icon: ChartLineUp,
    title: "Business Advisory",
    description: "Strategic financial advice to help grow your business and improve profitability.",
    href: "/services#advisory",
  },
  {
    icon: Buildings,
    title: "Company Formation",
    description: "Complete company registration and setup services to get your limited company started.",
    href: "/services#formation",
  },
  {
    icon: Briefcase,
    title: "Financial Statements",
    description: "Preparation of annual accounts, financial statements, and reports for compliance and decision-making.",
    href: "/services#statements",
  },
]

export function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-background">
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
            Our Services
          </p>
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-foreground mb-4">
            Comprehensive Accounting Solutions
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From day-to-day bookkeeping to strategic business advice, we provide all the accounting 
            services your business needs to succeed.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                href={service.href}
                className="block h-full p-6 bg-card border border-border hover:border-primary/30 hover:shadow-sm transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-secondary mb-4 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <service.icon weight="duotone" className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
