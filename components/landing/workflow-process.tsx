"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import {
  CarIcon,
  CheckCircle2Icon,
  ClipboardCheckIcon,
  FileSpreadsheetIcon,
  KeyRoundIcon,
  WrenchIcon,
} from "lucide-react"

const STEPS = [
  {
    number: "01",
    icon: CarIcon,
    title: "Vehicle Check-In & Safety Scan",
    description: "Your car enters our reception bay where a technician performs an initial 25-point visual and computerized health inspection.",
  },
  {
    number: "02",
    icon: FileSpreadsheetIcon,
    title: "Itemized Estimate & Approval",
    description: "We discuss our diagnostic findings with you and present a crystal-clear estimate detailing parts and labor before turning a single bolt.",
  },
  {
    number: "03",
    icon: WrenchIcon,
    title: "Precision Mechanical Execution",
    description: "Certified technicians perform the approved PMS, part replacement, or repairs using calibrated tools, OEM parts, and torque specs.",
  },
  {
    number: "04",
    icon: KeyRoundIcon,
    title: "Road Test & Clean Release",
    description: "Final quality audit and test drive ensure peak performance. Your car is cleaned, warranty documentation stamped, and keys returned.",
  },
]

export function WorkflowProcessSection() {
  return (
    <section id="process" className="py-20 sm:py-24 bg-neutral-900/60 relative border-b border-white/10 tech-grid">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="accent" className="mb-3">
            <ClipboardCheckIcon className="size-3 mr-1 text-primary" />
            STANDARDIZED REPAIR PROTOCOL
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            How Your Service Works
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
            Four simple, transparent steps from the moment you roll into our Pueblo bay to the moment you drive away with complete confidence.
          </p>
        </div>

        {/* 4-Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={idx}
                className="relative flex flex-col justify-between rounded-lg border border-white/10 bg-neutral-900/90 p-6 sm:p-7 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl group"
              >
                <div>
                  {/* Step Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-primary/50 group-hover:text-primary transition-colors">
                      {step.number}
                    </span>
                    <div className="flex size-11 items-center justify-center rounded-md bg-neutral-950 border border-white/10 group-hover:bg-primary/20 text-neutral-200 group-hover:text-primary transition-all">
                      <Icon className="size-5" />
                    </div>
                  </div>

                  <h3 className="font-heading text-base sm:text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 font-mono text-[11px] text-primary font-semibold uppercase">
                  <CheckCircle2Icon className="size-3.5" />
                  <span>QC AUDITED</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
