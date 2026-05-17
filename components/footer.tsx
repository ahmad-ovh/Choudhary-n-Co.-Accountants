import Link from "next/link"
import { Phone, Envelope, MapPin, Clock, LinkedinLogo, FacebookLogo } from "@phosphor-icons/react/dist/ssr"

const services = [
  { href: "/services#tax-returns", label: "Tax Returns" },
  { href: "/services#payroll", label: "Payroll Services" },
  { href: "/services#vat", label: "VAT Returns" },
  { href: "/services#bookkeeping", label: "Bookkeeping" },
  { href: "/services#self-assessment", label: "Self Assessment" },
  { href: "/services#advisory", label: "Business Advisory" },
]

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/blog", label: "Blog & Resources" },
  { href: "/contact", label: "Contact" },
  { href: "/contact#faq", label: "FAQs" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary-foreground flex items-center justify-center">
                  <span className="text-primary font-serif font-bold text-lg">C</span>
                </div>
                <div>
                  <span className="font-serif font-semibold text-lg">Choudhary & Co.</span>
                  <span className="block text-xs text-primary-foreground/70 tracking-wide uppercase">Accountants</span>
                </div>
              </div>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Trusted local accountants serving Stoke-on-Trent and surrounding areas. We provide professional, 
                personalised accounting services to help your business thrive.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinLogo weight="fill" className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
                aria-label="Facebook"
              >
                <FacebookLogo weight="fill" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin weight="fill" className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  81 High Street<br />
                  Stoke-on-Trent<br />
                  Staffordshire<br />
                  ST6 5TA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone weight="fill" className="w-5 h-5 flex-shrink-0" />
                <a
                  href="tel:+441782839163"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  01782 839163
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Envelope weight="fill" className="w-5 h-5 flex-shrink-0" />
                <a
                  href="mailto:info@choudharyco.co.uk"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  info@choudharyco.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock weight="fill" className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  Mon - Fri: 9:00 AM - 5:30 PM<br />
                  Sat: By appointment<br />
                  Sun: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="w-full h-64 bg-primary-foreground/10">
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
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Choudhary & Co. Accountants. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
