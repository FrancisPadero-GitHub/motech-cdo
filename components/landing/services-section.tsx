"use client"

import * as React from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookingDialog } from "./booking-dialog"
import type { ServiceItem } from "./types"
import {
  CalendarDaysIcon,
  CheckCircle2Icon,
  ClockIcon,
  WrenchIcon,
} from "lucide-react"

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "pms",
    title: "Preventive Maintenance Schedule (PMS) & Oil Change",
    category: "pms",
    shortDesc: "Complete synthetic or semi-synthetic oil change with free 25-point bumper-to-bumper vehicle safety check.",
    fullDesc: "Regular maintenance keeps your engine running smoothly and prevents costly breakdowns. We use premium grade fully synthetic and mineral oils paired with OEM-grade oil filters.",
    priceStarting: "₱1,499",
    duration: "45 - 90 mins",
    image: "/images/service_oil_pms.jpg",
    highlights: [
      "Engine oil replacement (Synthetic / Semi-Synthetic / Mineral)",
      "OEM-grade oil filter change",
      "Free 25-point digital vehicle health inspection",
      "Fluid level checks & top-ups (coolant, brake, steering)",
      "Air filter & cabin filter inspection & cleaning",
    ],
    popular: true,
  },
  {
    id: "diagnostics",
    title: "Computerized Engine & Electrical Diagnostics",
    category: "diagnostics",
    shortDesc: "Advanced OBD-II digital computer scanning for check engine lights, transmission warnings, and sensor faults.",
    fullDesc: "Modern cars rely on complex computer sensors and ECU systems. Our dealership-level diagnostic scanners identify underlying trouble codes accurately so you never replace parts blindly.",
    priceStarting: "₱850",
    duration: "30 - 60 mins",
    image: "/images/car_diagnostics.jpg",
    highlights: [
      "Full system ECU electronic diagnostic scan",
      "Check engine, ABS, airbag, and transmission error code reading",
      "Live sensor data graphing and fuel trim analysis",
      "Trouble code clearing with post-repair verification",
      "Alternator, starter, and battery load testing",
    ],
    popular: true,
  },
  {
    id: "brakes",
    title: "Brake Service, Pads & Rotor Resurfacing",
    category: "brakes",
    shortDesc: "Precision brake caliper servicing, ceramic brake pad replacement, and disc rotor resurfacing for guaranteed stopping power.",
    fullDesc: "Never compromise on your stopping power on CDO roads. We service disc and drum brake assemblies, replace worn pads, bleed fluid, and resurface warped rotors to prevent vibration.",
    priceStarting: "₱950",
    duration: "1 - 2 hours",
    image: "/images/service_brakes.jpg",
    highlights: [
      "Front and rear brake pad replacement (Ceramic / Semi-metallic)",
      "Brake disc rotor inspection and precision lathe resurfacing",
      "Brake caliper pin cleaning and high-temp lubrication",
      "DOT 3 / DOT 4 brake fluid flush and system bleeding",
      "Handbrake / parking brake adjustment and testing",
    ],
    popular: true,
  },
  {
    id: "aircon",
    title: "Air Conditioning Cleaning & Freon Recharge",
    category: "aircon",
    shortDesc: "Keep cool in Mindanao's heat with full evaporator cleaning, leak testing, compressor care, and R134a/R1234yf freon recharge.",
    fullDesc: "Cagayan De Oro's tropical climate demands an efficient aircon system. We specialize in deep evaporator cleaning, cabin filter replacement, and system vacuuming to eliminate foul odors and restore ice-cold airflow.",
    priceStarting: "₱1,200",
    duration: "1 - 3 hours",
    image: "/images/service_aircon.jpg",
    highlights: [
      "No-dismantle / full-dismantle evaporator deep cleaning",
      "High-precision vacuum leak test and pressure diagnostics",
      "OEM R134a / R1234yf freon recharge and compressor oil replacement",
      "Cabin air filter replacement and AC antibacterial treatment",
      "Condenser coil wash and cooling fan motor inspection",
    ],
  },
  {
    id: "tires",
    title: "3D Computerized Wheel Alignment & Tire Care",
    category: "tires",
    shortDesc: "Laser-accurate 3D wheel alignment, dynamic wheel balancing, tire rotation, and suspension geometry tuning.",
    fullDesc: "Uneven tire wear and steering pulling waste fuel and shorten tire lifespan. Our laser 3D alignment system restores factory geometry for razor-sharp handling and maximum tire longevity.",
    priceStarting: "₱650",
    duration: "30 - 60 mins",
    image: "/images/service_wheel_align.jpg",
    highlights: [
      "High-precision 3D computerized 4-wheel alignment",
      "Dynamic high-speed wheel balancing with lead weights",
      "Tire rotation pattern execution for even tread wear",
      "Camber, caster, and toe adjustment to factory specs",
      "Tire pressure & tread depth safety audit",
    ],
  },
  {
    id: "engine",
    title: "Underchassis, Suspension & Engine Overhaul",
    category: "engine",
    shortDesc: "Complete steering, ball joint, tie rod, bushing, shock absorber replacement, and major engine rebuilds.",
    fullDesc: "From harsh clunks over potholes to major timing belt replacements and engine gasket renewals, our master mechanics restore ride comfort and powertrain reliability.",
    priceStarting: "Free Quote",
    duration: "Varies",
    image: "/images/hero_workshop.jpg",
    highlights: [
      "Shock absorber, strut mount, and spring replacement",
      "Bushing, control arm, stabilizer link, and ball joint repair",
      "Rack & pinion steering assembly repair and fluid service",
      "Timing belt / chain replacement and water pump renewal",
      "Top engine overhaul, head gasket renewal, and valve grinding",
    ],
  },
]

export function ServicesSection() {
  const [activeTab, setActiveTab] = React.useState<string>("all")
  const [selectedService, setSelectedService] = React.useState<string | undefined>(undefined)
  const [isDialogOpen, setIsDialogOpen] = React.useState(false)

  const filteredServices = React.useMemo(() => {
    if (activeTab === "all") return SERVICES_DATA
    return SERVICES_DATA.filter((s) => s.category === activeTab)
  }, [activeTab])

  const handleBookService = (serviceTitle: string) => {
    setSelectedService(serviceTitle)
    setIsDialogOpen(true)
  }

  return (
    <section id="services" className="py-20 sm:py-24 bg-neutral-950 relative border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="accent" className="mb-3">
            <WrenchIcon className="size-3 mr-1 text-primary" />
            AUTOMOTIVE SERVICE SUITE
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Precision Workshop Capabilities
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
            From routine preventive maintenance to computerized troubleshooting, Motech CDO delivers precision workmanship with transparent pricing and digital diagnostics.
          </p>

          {/* Technical Filter Bar (No rounded pills) */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 font-mono">
            {[
              { id: "all", label: "ALL SERVICES" },
              { id: "pms", label: "PMS & OIL" },
              { id: "diagnostics", label: "DIAGNOSTICS" },
              { id: "brakes", label: "BRAKES & ROTORS" },
              { id: "aircon", label: "AIR CONDITIONING" },
              { id: "tires", label: "WHEEL & TIRES" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-md px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all border ${
                  activeTab === tab.id
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/30"
                    : "bg-neutral-900 text-neutral-400 border-white/10 hover:border-white/25 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <Card
              key={service.id}
              className="group overflow-hidden border border-white/10 bg-neutral-900/90 hover:border-primary/60 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between rounded-lg"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-52 w-full overflow-hidden bg-neutral-950">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-90 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

                  {/* Technical HUD tags on image */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="rounded-sm bg-neutral-950/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-mono text-neutral-200 border border-white/15 flex items-center gap-1">
                      <ClockIcon className="size-3 text-primary" />
                      {service.duration}
                    </span>
                    {service.popular && (
                      <Badge variant="default" className="text-[10px]">
                        ★ POPULAR
                      </Badge>
                    )}
                  </div>

                  {/* Starting Price Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">
                        ESTIMATED STARTING AT
                      </span>
                      <span className="font-heading text-xl font-extrabold text-white">
                        {service.priceStarting}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 mb-4 line-clamp-2">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2 border-t border-white/10 pt-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
                      KEY INCLUSIONS:
                    </span>
                    {service.highlights.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2Icon className="size-3.5 text-primary shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <Button
                  onClick={() => handleBookService(service.title)}
                  variant="outline"
                  className="w-full rounded-md border-white/15 bg-neutral-950/80 hover:bg-primary hover:text-white hover:border-primary transition-all font-mono text-xs uppercase tracking-wider font-semibold py-2.5"
                >
                  <CalendarDaysIcon className="size-3.5 mr-1.5" />
                  Inquire / Book Slot
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Reusable controlled dialog */}
        <BookingDialog
          defaultService={selectedService}
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
        />
      </div>
    </section>
  )
}
