"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">
                Last updated: January 2024
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none space-y-8 text-foreground">
              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Choudhary & Co. Accountants (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                  you visit our website or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect information about you in a variety of ways including:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Personal data such as name, email address, and phone number when you contact us</li>
                  <li>Financial information required to provide our accounting services</li>
                  <li>Usage data about how you interact with our website</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use the information we collect to provide our accounting services, communicate with you, 
                  improve our website, and comply with legal obligations. We will never sell your personal 
                  information to third parties.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at info@choudharyco.co.uk 
                  or call 01782 839163.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
