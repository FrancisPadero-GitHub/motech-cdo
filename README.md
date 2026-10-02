# 🚗 Motech CDO — Landing Page & Appointment Booking Platform

Modern, high-performance landing page and online service booking platform for **Motech Cagayan de Oro (CDO)**, built with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion.

---

## 🌟 Overview

**Motech CDO** provides vehicle owners in Cagayan de Oro with a seamless digital experience to discover auto repair services, compare preventative maintenance packages, locate the branch, and instantly book service appointments.

---

## ✨ Key Features

- 📅 **Interactive Booking Modal**: Step-by-step appointment scheduling with service selection, date picker, vehicle info input, and instant confirmation (featuring celebratory confetti).
- 🧰 **Comprehensive Service Showcase**: Categorized automotive services including PMS (Preventative Maintenance Service), engine diagnostics, brake care, battery replacement, and aircon servicing.
- 📦 **Tiered Maintenance Packages**: Clear package comparisons with transparent pricing and feature breakdowns.
- 📍 **Location & Branch Contact**: Integrated branch details, operating hours, direct click-to-call buttons, and interactive map directions.
- 💬 **Social Proof & Reviews**: Customer ratings, real client testimonials, and trust badges.
- 🌗 **Dark / Light Mode**: Dynamic theme toggle supported by `next-themes` with tailored color palettes.
- 📱 **Responsive & Mobile-First**: Adaptive design with quick-action floating bars for effortless mobile browsing.
- ✨ **Smooth Animations**: High-fps page transitions and scroll physics powered by Lenis and Framer Motion.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/), [`tw-animate-css`](https://github.com/jamiebuilds/tw-animate-css) |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/) primitives |
| **Icons** | [Lucide React](https://lucide.dev/), [HugeIcons](https://hugeicons.com/) |
| **Animations & FX** | [Framer Motion](https://www.framer.com/motion/), [Lenis Scroll](https://lenis.darkroom.engineering/), [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) |
| **Theme Management** | [`next-themes`](https://github.com/pacocoursey/next-themes) |
| **Code Quality** | ESLint 9, Prettier, TypeScript `noEmit` |

---

## 📂 Project Structure

```text
motech-cdo/
├── app/
│   ├── favicon.ico
│   ├── globals.css         # Tailwind v4 directives & theme tokens
│   ├── layout.tsx          # Root layout with font setup & theme provider
│   └── page.tsx            # Main landing page composition
├── components/
│   ├── landing/            # Feature presentational components
│   │   ├── booking-dialog.tsx           # Appointment booking modal
│   │   ├── faq-section.tsx              # Accordion FAQ
│   │   ├── floating-quick-actions.tsx   # Mobile floating bar
│   │   ├── footer.tsx                   # Page footer & links
│   │   ├── hero-section.tsx             # Hero banner & primary CTAs
│   │   ├── location-contact-section.tsx # Branch map & contact form
│   │   ├── navbar.tsx                   # Top navigation bar & theme toggle
│   │   ├── packages-section.tsx         # Maintenance tiers
│   │   ├── quick-contact-bar.tsx        # Branch info strip
│   │   ├── reviews-section.tsx          # Customer reviews
│   │   ├── services-section.tsx         # Auto repair catalog
│   │   ├── types.ts                     # Landing page type definitions
│   │   ├── why-choose-us.tsx            # Value propositions
│   │   └── workflow-process.tsx         # Service steps
│   ├── ui/                 # Atomic shadcn/ui components
│   └── theme-provider.tsx  # Next-themes wrapper
├── hooks/                  # Custom React hooks
├── lib/                    # Shared utilities & class merging (`cn`)
├── public/                 # Static assets & images
├── eslint.config.mjs       # ESLint 9 flat configuration
├── next.config.ts          # Next.js config
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v20.0.0` or higher
- **Package Manager**: `pnpm` (recommended) or `npm` / `yarn`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/FrancisPadero/motech-cdo.git
   cd motech-cdo
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📜 Available Scripts

In the project directory, you can run:

- `pnpm dev` — Starts Next.js in development mode with HMR.
- `pnpm build` — Builds the optimized production application.
- `pnpm start` — Starts the Next.js production server.
- `pnpm lint` — Runs ESLint checks across the codebase.
- `pnpm typecheck` — Runs TypeScript type checking without emitting files.
- `pnpm format` — Formats files using Prettier.

---

## 🛡️ Code Quality & Conventions

- **Strict TypeScript**: Explicit interfaces, no untyped `any`.
- **Modular Components**: Clean separation of presentational landing sections under `components/landing/`.
- **Formatting & Linting**: ESLint flat config (`eslint.config.mjs`) and Prettier rules enforced for consistent code style.

