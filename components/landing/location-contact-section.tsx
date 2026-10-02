"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookingDialog } from "./booking-dialog"
import { BUSINESS_INFO } from "./types"
import {
  CalendarDaysIcon,
  CheckCircle2Icon,
  ClockIcon,
  CompassIcon,
  ExternalLinkIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
  NavigationIcon,
  PhoneCallIcon,
  Share2Icon,
} from "lucide-react"
import { FacebookIcon } from "./icons"

export function LocationContactSection() {
  const [copied, setCopied] = React.useState(false)

  const copyAddress = () => {
    void navigator.clipboard.writeText(BUSINESS_INFO.address)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="location" className="py-20 sm:py-24 bg-neutral-950 relative overflow-hidden border-b border-white/10 tech-grid">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="accent" className="mb-3">
            <MapPinIcon className="size-3 mr-1 text-primary" />
            PUEBLO DE ORO FACILITY COORDINATES
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Location & Direct Channels
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
            Conveniently located in Pueblo de Oro, Cagayan De Oro City. Accessible for motorists from Uptown CDO, Airport Road, Xavier Heights, and neighboring areas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards, Address, Operating Hours */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Primary Address Card */}
            <Card className="border border-white/15 bg-neutral-900/90 p-6 rounded-lg shadow-xl border-l-2 border-l-primary">
              <div className="flex items-start gap-3.5">
                <div className="flex size-11 items-center justify-center rounded-md bg-primary/20 text-primary border border-primary/30 shrink-0">
                  <MapPinIcon className="size-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider block">
                    PHYSICAL WORKSHOP LOCATION
                  </span>
                  <h3 className="font-heading font-bold text-lg text-white mt-0.5">
                    {BUSINESS_INFO.address}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1.5 font-mono">
                    Landmark: Pueblo de Oro Township, near Pueblo Golf & Country Club and SM City Uptown CDO.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4 font-mono text-xs">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={copyAddress}
                      className="rounded-md border-white/15 bg-neutral-950 text-neutral-200 text-xs font-semibold hover:bg-neutral-800"
                    >
                      {copied ? (
                        <>
                          <CheckCircle2Icon className="size-3.5 text-emerald-400 mr-1" />
                          COPIED TO CLIPBOARD
                        </>
                      ) : (
                        <>
                          <Share2Icon className="size-3.5 mr-1" />
                          COPY ADDRESS
                        </>
                      )}
                    </Button>

                    <a
                      href={BUSINESS_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-md bg-primary/20 text-primary hover:bg-primary/30 transition-colors border border-primary/40"
                    >
                      <NavigationIcon className="size-3" />
                      GOOGLE MAPS
                      <ExternalLinkIcon className="size-3 ml-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* Direct Contact Channels Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 font-mono">
              {/* Phone */}
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="group rounded-md border border-white/10 bg-neutral-900/90 p-4 hover:border-primary/50 transition-all hover:shadow-lg block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-md bg-red-500/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors border border-primary/20">
                    <PhoneCallIcon className="size-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">
                      DIRECT CALL
                    </span>
                    <span className="text-xs font-bold text-white">
                      {BUSINESS_INFO.phone}
                    </span>
                  </div>
                </div>
              </a>

              {/* Viber */}
              <a
                href={`https://viber.click/${BUSINESS_INFO.viberClean}`}
                target="_blank"
                rel="noreferrer"
                className="group rounded-md border border-white/10 bg-neutral-900/90 p-4 hover:border-[#7360f2]/50 transition-all hover:shadow-lg block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-md bg-[#7360f2]/15 text-[#9d8df8] group-hover:bg-[#7360f2] group-hover:text-white transition-colors border border-[#7360f2]/30">
                    <MessageCircleIcon className="size-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">
                      VIBER HOTLINE
                    </span>
                    <span className="text-xs font-bold text-white">
                      {BUSINESS_INFO.viber}
                    </span>
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="group rounded-md border border-white/10 bg-neutral-900/90 p-4 hover:border-primary/50 transition-all hover:shadow-lg block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-md bg-orange-500/10 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors border border-orange-500/20">
                    <MailIcon className="size-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">
                      EMAIL INQUIRIES
                    </span>
                    <span className="text-[11px] font-bold text-white truncate block">
                      {BUSINESS_INFO.email}
                    </span>
                  </div>
                </div>
              </a>

              {/* Facebook Page */}
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="group rounded-md border border-white/10 bg-neutral-900/90 p-4 hover:border-blue-500/50 transition-all hover:shadow-lg block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-md bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors border border-blue-500/20">
                    <FacebookIcon className="size-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">
                      FACEBOOK PAGE
                    </span>
                    <span className="text-xs font-bold text-white">
                      /motechcdo
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* Operating Hours Card */}
            <Card className="border border-white/10 bg-neutral-900/90 p-6 rounded-lg font-mono">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex size-9 items-center justify-center rounded-md bg-neutral-950 text-white border border-white/10">
                  <ClockIcon className="size-4 text-emerald-400" />
                </div>
                <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
                  Operational Schedule
                </h3>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-neutral-400 uppercase">Monday – Friday</span>
                  <span className="font-bold text-white">{BUSINESS_INFO.openingHours.weekdays}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-neutral-400 uppercase">Saturday</span>
                  <span className="font-bold text-white">{BUSINESS_INFO.openingHours.saturday}</span>
                </div>
                <div className="flex items-center justify-between pt-1 text-neutral-400">
                  <span className="uppercase">Sunday</span>
                  <span className="text-[11px] text-primary font-bold">EMERGENCY ASSISTANCE</span>
                </div>
              </div>
            </Card>

            {/* Quick Action Button */}
            <BookingDialog>
              <Button size="lg" className="w-full rounded-md bg-primary hover:bg-primary/90 text-white font-mono text-xs uppercase tracking-wider font-bold py-6 shadow-xl border border-primary/50">
                <CalendarDaysIcon className="size-4 mr-2" />
                Schedule Service Appointment
              </Button>
            </BookingDialog>
          </div>

          {/* Right Column: High-tech Map Card */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative w-full h-[460px] sm:h-[520px] rounded-lg overflow-hidden border border-white/15 bg-neutral-950 shadow-2xl">
              {/* Embedded Google Map iframe with dark contrast styling */}
              <iframe
                title="Motech CDO Pueblo Location Map"
                src={BUSINESS_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full invert-[92%] hue-rotate-180 contrast-[120%]"
              />

              {/* Floating Overlay Badge on Map (HUD style) */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs rounded-md bg-neutral-950/95 backdrop-blur-md p-4 border border-white/15 shadow-2xl font-mono">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-8 items-center justify-center rounded-sm bg-primary text-white font-bold text-xs border border-primary/40">
                    MO
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white">
                      MOTECH CDO
                    </h4>
                    <p className="text-[10px] text-neutral-400">
                      PUEBLO DE ORO BRANCH
                    </p>
                  </div>
                </div>
                <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5 text-[10px]">
                    <span className="size-1.5 bg-emerald-400 rounded-xs animate-pulse" />
                    OPEN TODAY
                  </span>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary font-bold hover:underline flex items-center gap-0.5 text-[11px]"
                  >
                    NAVIGATE <ExternalLinkIcon className="size-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Navigation helper */}
            <div className="rounded-md bg-neutral-900/90 p-4 border border-white/10 text-xs font-mono text-neutral-300 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <CompassIcon className="size-4 text-primary shrink-0" />
                <span>SEARCH <strong>&quot;MOTECH CDO&quot;</strong> OR <strong>&quot;PUEBLO DE ORO&quot;</strong> ON WAZE / GOOGLE MAPS</span>
              </span>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-primary font-bold hover:underline shrink-0 ml-2"
              >
                OPEN MAP
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
