"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import {
  AwardIcon,
  CoffeeIcon,
  CpuIcon,
  FileTextIcon,
  ShieldCheckIcon,
  ZapIcon,
} from "lucide-react"

const FEATURES = [
  {
    icon: AwardIcon,
    title: "Certified Master Technicians",
    description: "Our mechanics and auto electricians undergo rigorous technical training across Japanese, Korean, American, and European vehicle platforms.",
    tag: "CERTIFIED CREW",
  },
  {
    icon: CpuIcon,
    title: "Dealership-Grade Computer Scanners",
    description: "Equipped with state-of-the-art OBD-II diagnostic scanners (Autel, Launch) to pinpoint electrical glitches, check engine codes, and sensor issues with pin-point accuracy.",
    tag: "OBD-II SCANNERS",
  },
  {
    icon: ShieldCheckIcon,
    title: "100% Genuine Parts & Premium Fluids",
    description: "We strictly use authentic OEM filters, top-tier synthetic motor oils (Mobil, Motul, Shell, Castrol), and verified braking components for maximum reliability.",
    tag: "GENUINE FLUIDS",
  },
  {
    icon: FileTextIcon,
    title: "Transparent Written Quotations",
    description: "No hidden surprise charges. You receive an itemized estimate for parts and labor before any work begins, with old replaced parts returned for your verification.",
    tag: "HONEST ESTIMATES",
  },
  {
    icon: ZapIcon,
    title: "Swift Turnaround & Express Bays",
    description: "Routine PMS and oil changes are completed in 45-60 minutes so you get back on the road without wasting your valuable day.",
    tag: "EXPRESS BAYS",
  },
  {
    icon: CoffeeIcon,
    title: "Air-Conditioned Customer Lounge",
    description: "Relax in our comfortable guest lounge equipped with high-speed Wi-Fi, complimentary refreshments, cold AC, and panoramic view of the service bays.",
    tag: "GUEST LOUNGE",
  },
]

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-20 sm:py-24 bg-neutral-950 relative border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="accent" className="mb-3">
            <ShieldCheckIcon className="size-3 mr-1 text-primary" />
            STANDARDS & INTEGRITY
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Why Cagayan De Oro Trusts Motech
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
            Experience the difference of a modern, organized auto care center engineered around honesty, technical precision, and total customer comfort.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <Card
                key={idx}
                className="group border border-white/10 bg-neutral-900/90 hover:border-primary/50 transition-all duration-300 hover:shadow-xl p-6 sm:p-7 rounded-lg"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex size-11 items-center justify-center rounded-md bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="size-5" />
                  </div>
                  <span className="font-mono text-[10px] text-neutral-400 font-semibold tracking-wider uppercase border border-white/10 px-2 py-0.5 rounded-xs bg-neutral-950">
                    {feature.tag}
                  </span>
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            )
          })}
        </div>

        {/* Bottom Warranty Banner */}
        <div className="mt-12 rounded-lg border border-primary/40 bg-neutral-900/90 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-primary text-white shadow-lg border border-primary/50">
              <ShieldCheckIcon className="size-6" />
            </div>
            <div>
              <h4 className="font-heading text-lg sm:text-xl font-bold text-white">
                6-Month / 10,000 KM Service & Workmanship Warranty
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                Every repair completed at Motech CDO is backed by our official warranty coverage for parts and labor.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0 font-mono">
            <Badge variant="success" className="text-[10px]">
              ✓ WARRANTY BACKED
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
