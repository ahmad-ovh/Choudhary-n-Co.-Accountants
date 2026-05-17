"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, LinkedinLogo, Envelope } from "@phosphor-icons/react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { CTABanner } from "@/components/cta-banner"

const team = [
  {
    name: "[Senior Partner Name]",
    role: "Principal Accountant",
    bio: "ACCA qualified with extensive experience providing personalised accounting services to local businesses.",
    credentials: "ACCA, AAT Licensed",
  },
  {
    name: "[Tax Specialist Name]",
    role: "Senior Accountant",
    bio: "Specialising in corporate tax and business advisory, helping numerous businesses optimise their tax position.",
    credentials: "AAT, ATT",
  },
  {
    name: "[Cloud Accounting Expert]",
    role: "Cloud Specialist",
    bio: "Helping clients transition to cloud accounting and maintaining their day-to-day finances with modern tools.",
    credentials: "Xero Certified, QuickBooks ProAdvisor",
  },
]

const values = [
  {
    title: "Integrity",
    description: "We operate with complete transparency and honesty in everything we do.",
  },
  {
    title: "Excellence",
    description: "We strive for the highest standards in our work and client service.",
  },
  {
    title: "Personal Touch",
    description: "Every client receives dedicated attention from qualified professionals.",
  },
  {
    title: "Community",
    description: "We&apos;re proud to be part of the Stoke-on-Trent business community.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">
                  About Us
                </p>
                <h1 className="text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
                  Local Accounting Experts in Stoke-on-Trent
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Choudhary & Co. is the trusted accounting partner 
                  for businesses across Staffordshire. We combine professional expertise with 
                  personalised service to help our clients succeed.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our team of qualified accountants understands the challenges local businesses face. 
                  We&apos;re not just number crunchers – we&apos;re your partners in financial success.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/3] bg-muted overflow-hidden">
                  <img 
                    src="/images/office-reception.png" 
                    alt="Choudhary & Co. Accountants professional office reception interior in Stoke-on-Trent" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary-foreground/60 uppercase tracking-wide text-sm mb-4">
                Our Mission
              </p>
              <p className="text-2xl lg:text-3xl font-serif leading-relaxed">
                &quot;To empower local businesses with expert financial guidance, transparent pricing, 
                and the personalised service they deserve – helping them thrive in today&apos;s economy.&quot;
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">
                Our Values
              </p>
              <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-foreground mb-4">
                What We Stand For
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-6 bg-secondary"
                >
                  <h3 className="font-semibold text-foreground text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">
                Our Team
              </p>
              <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-foreground mb-4">
                Meet Your Accountants
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our team of qualified professionals brings diverse expertise to serve all your 
                accounting needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card border border-border p-6"
                >
                  {/* Avatar Placeholder */}
                  <div className="w-20 h-20 bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-primary font-serif font-bold text-xl">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm text-primary mb-2">{member.role}</p>
                    <p className="text-xs text-muted-foreground mb-4">{member.credentials}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <a
                        href="#"
                        className="w-8 h-8 border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <LinkedinLogo weight="fill" className="w-4 h-4 text-muted-foreground" />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Envelope weight="fill" className="w-4 h-4 text-muted-foreground" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>



        {/* Local Community */}
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
                Proud to Serve Stoke-on-Trent
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We&apos;re more than just accountants – we&apos;re active members of our community. 
                We support local charities, sponsor community events, and are always happy to 
                provide guidance to new businesses starting their journey.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4 group pt-4"
              >
                Get in Touch
                <ArrowRight weight="bold" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
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
