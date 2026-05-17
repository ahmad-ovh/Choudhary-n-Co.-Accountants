"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowLeft, ArrowRight, LinkedinLogo, FacebookLogo, Envelope } from "@phosphor-icons/react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { CTABanner } from "@/components/cta-banner"

export default function BlogPostPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Article Header */}
        <section className="py-16 lg:py-20 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft weight="bold" className="w-4 h-4" />
                Back to Blog
              </Link>

              <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 inline-block mb-4">
                Self Assessment
              </span>

              <h1 className="text-3xl lg:text-4xl font-serif font-semibold text-foreground mb-6 text-balance">
                Self-Assessment Tax Return Deadlines: What You Need to Know for 2024/25
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar weight="fill" className="w-4 h-4" />
                  15 January 2024
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock weight="fill" className="w-4 h-4" />
                  5 min read
                </span>
                <span>By Choudhary & Co. Team</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg max-w-none"
            >
              {/* Featured Image */}
              <div className="aspect-[16/9] bg-secondary overflow-hidden mb-8 not-prose">
                <img 
                  src="/images/blog-self-assessment.png" 
                  alt="Self-Assessment Tax Return documents and laptop on office desk" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-6 text-foreground">
                <p className="text-lg leading-relaxed">
                  Missing your self-assessment tax return deadline can result in automatic penalties from HMRC, 
                  starting at £100 for being just one day late. As we approach the key deadlines for the 2024/25 
                  tax year, it&apos;s essential to understand what&apos;s required and when.
                </p>

                <h2 className="text-2xl font-serif font-semibold text-foreground mt-8 mb-4">
                  Key Deadlines to Remember
                </h2>

                <p className="leading-relaxed">
                  The self-assessment tax year runs from 6 April to 5 April the following year. For the 2023/24 
                  tax year, here are the crucial dates you need to know:
                </p>

                <ul className="space-y-3 my-6">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent flex-shrink-0 mt-2.5" />
                    <span><strong>31 October 2024:</strong> Paper tax return deadline</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent flex-shrink-0 mt-2.5" />
                    <span><strong>31 January 2025:</strong> Online tax return deadline and payment due date</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent flex-shrink-0 mt-2.5" />
                    <span><strong>31 July 2025:</strong> Second payment on account due date</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-serif font-semibold text-foreground mt-8 mb-4">
                  What Happens If You Miss the Deadline?
                </h2>

                <p className="leading-relaxed">
                  HMRC takes deadlines seriously, and the penalty structure is designed to encourage timely filing:
                </p>

                <div className="bg-secondary p-6 my-6">
                  <ul className="space-y-2">
                    <li><strong>1 day late:</strong> £100 automatic penalty</li>
                    <li><strong>3 months late:</strong> £10 daily penalty (up to 90 days = £900)</li>
                    <li><strong>6 months late:</strong> Additional £300 or 5% of tax due (whichever is greater)</li>
                    <li><strong>12 months late:</strong> Another £300 or 5% of tax due</li>
                  </ul>
                </div>

                <p className="leading-relaxed">
                  In addition to filing penalties, late payment of tax attracts interest charges that compound daily. 
                  The current interest rate is 7.75%, making it more expensive than ever to pay late.
                </p>

                <h2 className="text-2xl font-serif font-semibold text-foreground mt-8 mb-4">
                  How to Avoid Late Filing
                </h2>

                <p className="leading-relaxed">
                  The best way to avoid penalties is to start early. We recommend beginning your tax return 
                  preparation as soon as the new tax year starts in April. This gives you plenty of time to:
                </p>

                <ul className="space-y-3 my-6">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent flex-shrink-0 mt-2.5" />
                    <span>Gather all necessary documents (P60s, bank statements, receipts)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent flex-shrink-0 mt-2.5" />
                    <span>Identify any missing information and request it</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent flex-shrink-0 mt-2.5" />
                    <span>Review your expenses and claim all eligible deductions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent flex-shrink-0 mt-2.5" />
                    <span>Plan for any tax payments due</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-serif font-semibold text-foreground mt-8 mb-4">
                  How We Can Help
                </h2>

                <p className="leading-relaxed">
                  At Choudhary & Co., we specialise in taking the stress out of self-assessment. Our team handles 
                  everything from gathering your information to filing your return and advising on payment dates. 
                  With our fixed-fee pricing, you&apos;ll know exactly what you&apos;ll pay with no surprises.
                </p>

                <p className="leading-relaxed">
                  Don&apos;t leave it until the last minute. Contact us today to discuss your self-assessment needs 
                  and ensure you meet all your deadlines.
                </p>
              </div>

              {/* Author Box */}
              <div className="border-t border-b border-border py-8 mt-12 not-prose">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary/10 flex-shrink-0 flex items-center justify-center">
                    <span className="text-primary font-serif font-bold text-xl">RC</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Choudhary & Co. Team</h3>
                    <p className="text-sm text-primary mb-2">Local Accounting Experts</p>
                    <p className="text-sm text-muted-foreground">
                      Our team of dedicated accountants is here to provide expert financial advice and support 
                      for businesses across Staffordshire.
                    </p>
                  </div>
                </div>
              </div>

              {/* Share */}
              <div className="flex items-center justify-between pt-8 not-prose">
                <span className="text-sm font-medium text-foreground">Share this article:</span>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <LinkedinLogo weight="fill" className="w-5 h-5 text-muted-foreground" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <FacebookLogo weight="fill" className="w-5 h-5 text-muted-foreground" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                    aria-label="Share via Email"
                  >
                    <Envelope weight="fill" className="w-5 h-5 text-muted-foreground" />
                  </a>
                </div>
              </div>
            </motion.article>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-8">
              Related Articles
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "10 Tax-Deductible Expenses Every Small Business Should Claim",
                  category: "Small Business",
                  date: "8 January 2024",
                },
                {
                  title: "Making Tax Digital: What It Means for Your Business",
                  category: "Tax",
                  date: "5 December 2023",
                },
                {
                  title: "Year-End Tax Planning Tips for Small Businesses",
                  category: "Tax Planning",
                  date: "15 November 2023",
                },
              ].map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link href="/blog" className="block group">
                    <article className="bg-card border border-border p-6">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 inline-block mb-3">
                        {post.category}
                      </span>
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4 group"
              >
                View All Articles
                <ArrowRight weight="bold" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
