"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight } from "@phosphor-icons/react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { CTABanner } from "@/components/cta-banner"

const blogPosts = [
  {
    slug: "self-assessment-deadlines-2024",
    title: "Self-Assessment Tax Return Deadlines: What You Need to Know for 2024/25",
    excerpt: "Missing your self-assessment deadline can result in penalties. Here&apos;s everything you need to know about key dates and how to avoid late filing penalties.",
    category: "Self Assessment",
    date: "15 January 2024",
    readTime: "5 min read",
  },
  {
    slug: "small-business-expenses",
    title: "10 Tax-Deductible Expenses Every Small Business Should Claim",
    excerpt: "Are you claiming all the expenses you&apos;re entitled to? Many small business owners miss out on legitimate deductions. Here are 10 you shouldn&apos;t overlook.",
    category: "Small Business",
    date: "8 January 2024",
    readTime: "7 min read",
  },
  {
    slug: "vat-registration-guide",
    title: "Complete Guide to VAT Registration: When and How to Register",
    excerpt: "Understanding VAT registration can be confusing. This guide explains the threshold, voluntary registration benefits, and step-by-step registration process.",
    category: "VAT",
    date: "20 December 2023",
    readTime: "8 min read",
  },
  {
    slug: "cloud-accounting-benefits",
    title: "5 Benefits of Moving to Cloud Accounting Software",
    excerpt: "Still using spreadsheets? Discover how cloud accounting software like Xero and QuickBooks can save you time and give you real-time financial visibility.",
    category: "Bookkeeping",
    date: "12 December 2023",
    readTime: "4 min read",
  },
  {
    slug: "making-tax-digital",
    title: "Making Tax Digital: What It Means for Your Business",
    excerpt: "MTD is changing how businesses manage their tax affairs. Learn about the requirements, deadlines, and what you need to do to stay compliant.",
    category: "Tax",
    date: "5 December 2023",
    readTime: "6 min read",
  },
  {
    slug: "sole-trader-vs-limited-company",
    title: "Sole Trader vs Limited Company: Which Structure Is Right for You?",
    excerpt: "Choosing between operating as a sole trader or limited company is a key decision. We break down the pros, cons, and tax implications of each.",
    category: "Business Advisory",
    date: "28 November 2023",
    readTime: "9 min read",
  },
  {
    slug: "year-end-tax-planning",
    title: "Year-End Tax Planning Tips for Small Businesses",
    excerpt: "The tax year end is approaching. Here are practical steps you can take now to minimise your tax liability and start the new year in good shape.",
    category: "Tax Planning",
    date: "15 November 2023",
    readTime: "6 min read",
  },
  {
    slug: "pension-contributions-guide",
    title: "Pension Contributions: A Tax-Efficient Way to Save for Retirement",
    excerpt: "Pension contributions offer significant tax benefits for both individuals and business owners. Learn how to maximise your tax relief through smart pension planning.",
    category: "Tax",
    date: "1 November 2023",
    readTime: "5 min read",
  },
]

const categories = [
  "All",
  "Tax",
  "Small Business",
  "VAT",
  "Bookkeeping",
  "Self Assessment",
  "Business Advisory",
]

export default function BlogPage() {
  const featuredPost = blogPosts[0]
  const otherPosts = blogPosts.slice(1)

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
                Blog & Resources
              </p>
              <h1 className="text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
                Accounting Insights & Advice
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Practical tips, news, and guidance to help you manage your finances and grow your business. 
                Written by our team of qualified accountants.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    category === "All"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground hover:bg-primary/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href={`/blog/${featuredPost.slug}`} className="block group">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Image */}
                  <div className="aspect-[16/10] bg-secondary overflow-hidden">
                    <img 
                      src="/images/blog-self-assessment.png" 
                      alt="Featured article: Self-Assessment Tax Return Deadlines" 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1">
                        {featuredPost.category}
                      </span>
                      <span className="text-xs text-muted-foreground">Featured</span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar weight="fill" className="w-4 h-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock weight="fill" className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:underline underline-offset-4">
                      Read Article
                      <ArrowRight weight="bold" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 lg:py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-serif font-semibold text-foreground">
                Latest Articles
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link href={`/blog/${post.slug}`} className="block h-full group">
                    <article className="bg-card border border-border h-full flex flex-col">
                      {/* Image */}
                      <div className="aspect-[16/9] bg-muted overflow-hidden">
                        <img 
                          src={
                            post.category === "Bookkeeping" || post.category === "Small Business"
                              ? "/images/bookkeeping-workspace.png"
                              : post.category === "Self Assessment" || post.category === "Tax" || post.category === "Tax Planning"
                              ? "/images/blog-self-assessment.png"
                              : "/images/business-advisory.png"
                          } 
                          alt={post.title} 
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 w-fit mb-3">
                          {post.category}
                        </span>
                        <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto">
                          <span className="flex items-center gap-1">
                            <Calendar weight="fill" className="w-3.5 h-3.5" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock weight="fill" className="w-3.5 h-3.5" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center mt-12"
            >
              <button className="border border-primary text-primary px-8 py-3 font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                Load More Articles
              </button>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-background border-y border-border">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-serif font-semibold text-foreground">
                Stay Informed
              </h2>
              <p className="text-muted-foreground">
                Subscribe to our newsletter for the latest tax tips, deadlines, and accounting advice 
                delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-muted-foreground">
                We respect your privacy. Unsubscribe at any time.
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
