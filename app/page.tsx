import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { Hero } from "@/components/home/hero"
import { TrustIndicators } from "@/components/home/trust-indicators"
import { ServicesGrid } from "@/components/home/services-grid"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { AboutPreview } from "@/components/home/about-preview"
import { Testimonials } from "@/components/home/testimonials"
import { FAQ } from "@/components/home/faq"
import { CTABanner } from "@/components/cta-banner"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustIndicators />
        <ServicesGrid />
        <WhyChooseUs />
        <AboutPreview />
        <Testimonials />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
