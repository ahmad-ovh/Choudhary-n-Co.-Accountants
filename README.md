# Choudhary & Co. Accountants — Website Demo

A refined, conversion-focused, and SEO-optimized website prototype for **Choudhary & Co. Accountants**, a local accounting firm based in Stoke-on-Trent, Staffordshire. 

This website has been carefully transitioned from a generic wireframe into a highly realistic, professional business showcase utilizing only verified business details and adhering to a strict corporate design system.

---

## 📋 Verified Business Information
All content and location references across the site are aligned strictly with the official business registration data:
*   **Business Name:** Choudhary & Co. Accountants
*   **Address:** 81 High Street, Stoke-on-Trent, Staffordshire, ST6 5TA
*   **Phone / Click-to-Call:** `01782 839163` (UK: `+44 1782 839163`)
*   **Core Positioning:** Local accounting, VAT, bookkeeping, and tax return expert serving SMEs, sole traders, and individuals in Stoke-on-Trent.

---

## 🎨 Global Design System & Constraints
To match the traditional yet modernized brand identity of a local accounting firm, the UI strictly enforces the following visual rules:
*   **Harmonious Color Palette:** Navy blue, neutral slate, and warm gold accents.
*   **Strict Exclusions:** 
    *   ❌ No purple accents or gradients
    *   ❌ No fintech-dashboard or "neon startup" aesthetics
    *   ❌ No glassmorphism or heavy frosted blur
    *   ❌ No unrealistic AI-generated fantasy scenes
*   **Iconography:** Restructured completely using **Phosphor Icons** (no Lucide or custom SVGs) for a cohesive and high-end feel.
*   **Imagery:** Cohesive, premium, all-male UK business photography generated specifically for this brand. 
*   **SEO Phrasing:** Seamlessly integrated local keywords like *"Accountants in Stoke-on-Trent"*, *"Tax Returns Stoke-on-Trent"*, and *"MTD-compliant Bookkeeping"* into headers and metadata for organic local search visibility.

---

## 🚀 Tech Stack
*   **Framework:** Next.js 16 (App Router, Turbopack support)
*   **Styling:** Tailwind CSS (Vanilla CSS structure, zero utility-bloat)
*   **Animations:** Framer Motion (Subtle micro-interactions and transitions)
*   **Icons:** `@phosphor-icons/react`
*   **Asset Pipeline:** Custom, design-aware AI-generated assets placed locally under `public/images/`

---

## 📂 Project Structure
```bash
├── app/
│   ├── about/            # Team, local values, community involvement
│   ├── blog/             # dynamic editorial blog directory
│   │   └── [slug]/       # Individual article detail page
│   ├── contact/          # Custom consultation booking form with embedded interactive Google Map
│   ├── privacy/          # GDPR-compliant Privacy Policy
│   ├── services/         # Dynamic services page featuring dynamic image mapping
│   ├── terms/            # Professional Terms of Service
│   ├── layout.tsx        # Global SEO tags, nav, and footers
│   └── page.tsx          # Homepage containing trust-builders and services summary
├── components/
│   ├── ui/               # Modular design system items
│   ├── home/             # Homepage layout sections
│   ├── navbar.tsx        # Desktop & Mobile responsive navigation
│   └── footer.tsx        # SEO-optimized local links and embedded office location map
└── public/
    └── images/           # Brand-tailored high-res professional visual assets
```

---

## 🛠️ Local Development & Running

### Prerequisites
Make sure you have Node.js installed on your system.

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the live site.

### 3. Build for Production
To build the optimized production static bundles:
```bash
npm run build
```

---

## 📄 License & Content Integrity
This site is a professional prototype designed to maintain complete data integrity. It relies purely on generic, high-conversion placeholders for testimonials to ensure compliance and authenticity.
