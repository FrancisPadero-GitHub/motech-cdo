"use client"

import * as React from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookingDialog } from "./booking-dialog"
import { BUSINESS_INFO } from "./types"
import {
  CalendarDaysIcon,
  CheckCircle2Icon,
  ChevronRightIcon,
  CpuIcon,
  GaugeIcon,
  MapPinIcon,
  MessageCircleIcon,
  PhoneCallIcon,
  ShieldCheckIcon,
  WrenchIcon,
} from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-neutral-950 text-white pt-10 pb-20 tech-grid border-b border-white/10">
      {/* Background Hero Image with Dark Automotive Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_workshop.jpg"
          alt="Motech Auto Care CDO Workshop"
          fill
          priority
          className="object-cover object-center opacity-25 filter contrast-125 saturate-50"
        />
        {/* Dark Vignettes & Carbon Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/85 to-neutral-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent" />
        {/* Subtle Ambient Red Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/15 blur-[150px] rounded-full pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, subhead, CTA */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            {/* Technical HUD telemetry indicator */}
            <div className="inline-flex flex-wrap items-center gap-2.5 rounded-md border border-white/15 bg-neutral-900/90 px-3.5 py-1.5 backdrop-blur-md shadow-2xl border-l-2 border-l-primary font-mono text-xs">
              <span className="size-2 bg-emerald-400 rounded-xs animate-pulse" />
              <span className="text-neutral-200 font-semibold tracking-wider uppercase">
                PUEBLO DE ORO • CDO
              </span>
              <span className="text-neutral-600">/</span>
              <span className="text-primary font-medium tracking-wide">
                COMPLETE AUTO CARE & DIAGNOSTICS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              Precision Auto Repair, PMS & Diagnostics in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-primary to-orange-400">
                Cagayan De Oro.
              </span>
            </h1>

            {/* Subhead */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
              Dealership-grade computerized diagnostics, expert synthetic oil change (PMS), brake overhauls, and aircon care — engineered around transparent quotes, genuine OEM fluids, and certified technicians in Pueblo, CDO.
            </p>

            {/* Technical Specs checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-neutral-300 pt-1 font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2Icon className="size-3.5 text-primary shrink-0" />
                <span>FREE 25-PT INSPECTION</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2Icon className="size-3.5 text-primary shrink-0" />
                <span>100% GENUINE OILS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2Icon className="size-3.5 text-primary shrink-0" />
                <span>OBD-II ECU SCANNING</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2Icon className="size-3.5 text-primary shrink-0" />
                <span>ITEMIZED ESTIMATES</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2Icon className="size-3.5 text-primary shrink-0" />
                <span>PARTS & LABOR WARRANTY</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2Icon className="size-3.5 text-primary shrink-0" />
                <span>AIRCON GUEST LOUNGE</span>
              </div>
            </div>

            {/* CTA Buttons with Industrial Styling */}
            <div className="flex flex-wrap items-center gap-3 pt-3 w-full sm:w-auto">
              <BookingDialog>
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-md font-mono text-xs uppercase tracking-wider font-bold px-6 py-6 shadow-xl shadow-primary/25 bg-primary hover:bg-primary/90 text-white border border-primary/50 transition-all hover:translate-y-[-1px]"
                >
                  <CalendarDaysIcon className="size-4 mr-2" />
                  Book Service Slot
                </Button>
              </BookingDialog>

              <a
                href={`https://viber.click/${BUSINESS_INFO.viberClean}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-[#7360f2]/90 hover:bg-[#7360f2] text-white px-5 py-3 font-mono text-xs uppercase tracking-wider font-semibold transition-all backdrop-blur-sm border border-white/15"
              >
                <MessageCircleIcon className="size-4" />
                Viber: {BUSINESS_INFO.viber}
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-neutral-900 hover:bg-neutral-800 text-white px-4 py-3 font-mono text-xs uppercase tracking-wider font-medium transition-all border border-white/15"
              >
                <PhoneCallIcon className="size-3.5 text-primary" />
                Call {BUSINESS_INFO.phone}
              </a>
            </div>

            {/* Social & Location Quick Meta */}
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-neutral-400">
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <span>FB: /motechcdo</span>
                <ChevronRightIcon className="size-3" />
              </a>
              <span>/</span>
              <a
                href="#location"
                className="hover:text-white transition-colors flex items-center gap-1 text-neutral-300"
              >
                <MapPinIcon className="size-3 text-primary" />
                <span>B18 L5 Pueblo de Oro</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-tech Telemetry HUD Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg border border-white/15 bg-neutral-900/90 p-6 sm:p-7 backdrop-blur-xl shadow-2xl">
              {/* Corner industrial markers */}
              <div className="absolute top-2 left-2 size-2 border-t border-l border-primary/80" />
              <div className="absolute top-2 right-2 size-2 border-t border-r border-primary/80" />
              <div className="absolute bottom-2 left-2 size-2 border-b border-l border-primary/80" />
              <div className="absolute bottom-2 right-2 size-2 border-b border-r border-primary/80" />

              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-md bg-primary/20 text-primary border border-primary/30">
                    <WrenchIcon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-base">
                      Service Center Status
                    </h3>
                    <p className="font-mono text-[11px] text-neutral-400">
                      PUEBLO DE ORO BRANCH
                    </p>
                  </div>
                </div>
                <Badge variant="success" className="text-[10px]">
                  ● BAYS ACTIVE
                </Badge>
              </div>

              {/* Telemetry Services List */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 rounded-md bg-neutral-950/70 p-3.5 border border-white/10 hover:border-primary/40 transition-colors">
                  <div className="p-2 rounded-md bg-primary/20 text-primary shrink-0 mt-0.5">
                    <GaugeIcon className="size-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-sm text-white">
                        Complete PMS Packages
                      </h4>
                      <span className="font-mono text-xs font-bold text-primary">
                        FROM ₱1,499
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Fully Synthetic Oil + OEM Filter + 25-Point Safety Check
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-md bg-neutral-950/70 p-3.5 border border-white/10 hover:border-primary/40 transition-colors">
                  <div className="p-2 rounded-md bg-orange-500/20 text-orange-400 shrink-0 mt-0.5">
                    <CpuIcon className="size-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-sm text-white">
                        Computerized OBD-II Scan
                      </h4>
                      <span className="font-mono text-xs font-bold text-orange-400">
                        DIAGNOSTICS
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Check engine, ABS, transmission & sensor troubleshooting
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-md bg-neutral-950/70 p-3.5 border border-white/10 hover:border-primary/40 transition-colors">
                  <div className="p-2 rounded-md bg-blue-500/20 text-blue-400 shrink-0 mt-0.5">
                    <ShieldCheckIcon className="size-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-sm text-white">
                        Aircon & Underchassis
                      </h4>
                      <span className="font-mono text-xs font-bold text-blue-400">
                        EXPERT CARE
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Freon recharge, evaporator clean, brakes & 3D wheel alignment
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="space-y-3">
                <BookingDialog>
                  <Button className="w-full rounded-md bg-primary hover:bg-primary/90 text-white font-mono text-xs uppercase tracking-wider font-bold py-5 border border-primary/50">
                    Request Fast Estimate / Slot
                  </Button>
                </BookingDialog>

                <div className="flex items-center justify-between font-mono text-[11px] text-neutral-400 pt-1">
                  <span>LOC: PUEBLO DE ORO</span>
                  <span className="text-neutral-200">
                    TEL: {BUSINESS_INFO.phone}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Metrics Strip */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center font-mono">
          <div className="border-r border-white/10 last:border-r-0">
            <div className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              15,000+
            </div>
            <p className="text-[11px] uppercase tracking-wider text-neutral-400 mt-1">
              Vehicles Serviced in CDO
            </p>
          </div>
          <div className="border-r border-white/10 last:border-r-0">
            <div className="font-heading text-2xl sm:text-3xl font-extrabold text-primary">
              4.9 / 5.0
            </div>
            <p className="text-[11px] uppercase tracking-wider text-neutral-400 mt-1">
              Verified Client Rating
            </p>
          </div>
          <div className="border-r border-white/10 last:border-r-0">
            <div className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              25-POINT
            </div>
            <p className="text-[11px] uppercase tracking-wider text-neutral-400 mt-1">
              Standard Safety Check
            </p>
          </div>
          <div>
            <div className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              100% OEM
            </div>
            <p className="text-[11px] uppercase tracking-wider text-neutral-400 mt-1">
              Genuine Fluids & Filters
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
