"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function TermsPage() {
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
                Terms of Service
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
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using our services, you agree to be bound by these Terms of Service and all 
                  applicable laws and regulations. If you do not agree with any of these terms, you are prohibited 
                  from using or accessing our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">Our Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Choudhary & Co. Accountants provides professional accounting, tax, and advisory services. 
                  All services are provided subject to our engagement letter and professional standards.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">Client Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Clients are responsible for providing accurate and complete information. We rely on the 
                  information you provide to perform our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about these Terms of Service, please contact us at info@choudharyco.co.uk 
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
