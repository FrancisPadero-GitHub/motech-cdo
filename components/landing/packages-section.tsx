"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { BookingDialog } from "./booking-dialog"
import type { MaintenancePackage } from "./types"
import {
  CalendarDaysIcon,
  CheckCircle2Icon,
  CrownIcon,
  FlameIcon,
  SparklesIcon,
} from "lucide-react"

const PACKAGES_DATA: MaintenancePackage[] = [
  {
    id: "bronze",
    name: "Standard PMS Care",
    tier: "Standard",
    price: "₱1,999",
    badge: "ESSENTIAL ROUTINE",
    description: "Ideal for regular 5,000 km oil change intervals and basic vehicle safety assurance.",
    recommendedFor: "Sedans, Hatchbacks & Regular Commuters",
    features: [
      "Engine Oil Change (Semi-Synthetic or High-Grade Mineral)",
      "OEM-Grade Oil Filter Replacement",
      "Free 25-Point Complete Safety Inspection",
      "Tire Pressure & Tread Wear Audit",
      "Coolant, Brake & Steering Fluid Level Top-Up",
      "Air Filter & Cabin Filter Blow-Cleaning",
      "Battery Terminal & Voltage Health Check",
    ],
  },
  {
    id: "silver",
    name: "Comprehensive Care + OBD Scan",
    tier: "Recommended",
    price: "₱3,499",
    badge: "TOP CDO SELECTION",
    popular: true,
    description: "Our premier package combining 100% fully synthetic oil with full electronic ECU scanning.",
    recommendedFor: "SUVs, MPVs, Daily Drivers & High-Mileage Vehicles",
    features: [
      "100% Fully Synthetic Premium Motor Oil",
      "OEM-Grade High-Efficiency Oil Filter",
      "Full Computerized OBD-II ECU Diagnostic Scan",
      "Brake Caliper Servicing & Pad Cleaning (Front & Rear)",
      "Throttle Body & MAF Sensor Inspection & Cleaning",
      "Spark Plug / Glow Plug Health Check",
      "Complete 35-Point Digital Vehicle Inspection Report",
      "All Fluid Top-ups & Underchassis Visual Inspection",
    ],
  },
  {
    id: "gold",
    name: "Master Drivetrain & PMS Overhaul",
    tier: "Master Care",
    price: "₱5,999",
    badge: "TOTAL PROTECTION",
    description: "The ultimate bumper-to-bumper maintenance package for maximum reliability, comfort and performance.",
    recommendedFor: "Pickups, 4x4s, Vans & Long-Distance Travelers",
    features: [
      "100% Fully Synthetic Motor Oil + High-Capacity Filter",
      "3D Computerized 4-Wheel Laser Alignment & Balancing",
      "Full OBD-II ECU Diagnostic Health Scan & Reset",
      "Complete 4-Wheel Brake Caliper Lubrication & Pad Service",
      "Aircon High/Low Pressure Test & Antibacterial Mist",
      "Engine Degreasing & Engine Bay Detail Clean",
      "Radiator Coolant Flush & Fresh Coolant Fill",
      "Comprehensive Underchassis Bushing & Suspension Audit",
      "6-Month / 10,000 KM Service Warranty",
    ],
  },
]

export function PackagesSection() {
  const [selectedPackage, setSelectedPackage] = React.useState<string | undefined>(undefined)
  const [isDialogOpen, setIsDialogOpen] = React.useState(false)

  const handleSelectPackage = (pkgName: string) => {
    setSelectedPackage(`Maintenance Package: ${pkgName}`)
    setIsDialogOpen(true)
  }

  return (
    <section id="packages" className="py-20 sm:py-24 bg-neutral-900/60 relative overflow-hidden border-b border-white/10 tech-grid">
      {/* Subtle Glow Accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="accent" className="mb-3">
            <SparklesIcon className="size-3 mr-1 text-primary" />
            SCHEDULED MAINTENANCE TIERS
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Curated Maintenance Packages
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
            Choose the preventive maintenance package tailored to your vehicle&apos;s mileage and driving conditions in Northern Mindanao. Upfront pricing with zero hidden charges.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES_DATA.map((pkg) => (
            <Card
              key={pkg.id}
              className={`relative flex flex-col justify-between rounded-lg transition-all duration-300 ${
                pkg.popular
                  ? "border-2 border-primary bg-neutral-900 shadow-2xl shadow-primary/20 lg:-translate-y-2"
                  : "border border-white/10 bg-neutral-900/80 hover:border-white/20"
              }`}
            >
              {/* Top Tag Ribbon (Faceted Geometric Tag) */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-sm bg-primary text-white px-3.5 py-1 text-[11px] font-mono font-bold shadow-lg uppercase tracking-wider border border-primary/50">
                    <FlameIcon className="size-3.5" />
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div>
                <CardHeader className="p-6 sm:p-8 pb-4">
                  {!pkg.popular && pkg.badge && (
                    <Badge variant="outline" className="w-fit mb-2 text-[10px]">
                      {pkg.badge}
                    </Badge>
                  )}
                  <CardTitle className="text-2xl font-bold text-white">
                    {pkg.name}
                  </CardTitle>
                  <CardDescription className="mt-1 text-xs sm:text-sm text-neutral-400">
                    {pkg.description}
                  </CardDescription>

                  {/* Pricing Display */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                        STARTING AT
                      </span>
                      <span className="font-heading text-4xl font-extrabold text-white">
                        {pkg.price}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-neutral-400 block mt-1">
                      Includes labor + genuine fluids + safety check
                    </span>
                  </div>
                </CardHeader>

                {/* Features List */}
                <CardContent className="p-6 sm:p-8 pt-0">
                  <div className="rounded-md bg-neutral-950/80 p-3 mb-6 border border-white/10">
                    <span className="font-mono text-xs font-semibold text-neutral-300 flex items-center gap-1.5">
                      <CrownIcon className="size-3.5 text-primary" />
                      FIT: <span className="text-neutral-400 font-sans font-normal">{pkg.recommendedFor}</span>
                    </span>
                  </div>

                  <div className="space-y-3">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-300 block">
                      PACKAGE INCLUDES:
                    </span>
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                        <CheckCircle2Icon className="size-3.5 text-primary shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </div>

              {/* Action Button */}
              <div className="p-6 sm:p-8 pt-0 mt-4">
                <Button
                  onClick={() => handleSelectPackage(pkg.name)}
                  variant={pkg.popular ? "default" : "outline"}
                  size="lg"
                  className={`w-full rounded-md font-mono text-xs uppercase tracking-wider font-bold py-5 ${
                    pkg.popular
                      ? "bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/25 border border-primary/50"
                      : "border-white/15 bg-neutral-950/80 hover:bg-primary hover:text-white hover:border-primary text-neutral-200"
                  }`}
                >
                  <CalendarDaysIcon className="size-3.5 mr-2" />
                  Select {pkg.tier}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Reusable Booking Dialog */}
        <BookingDialog
          defaultService={selectedPackage}
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
        />
      </div>
    </section>
  )
}
