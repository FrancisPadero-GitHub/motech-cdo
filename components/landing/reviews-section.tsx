"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import type { TestimonialItem } from "./types"
import { CheckCircle2Icon, StarIcon } from "lucide-react"

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    name: "Engr. Marco Villanueva",
    vehicle: "Toyota Fortuner 2.8L Diesel",
    location: "Pueblo de Oro, CDO",
    rating: 5,
    service: "Comprehensive PMS & 3D Wheel Alignment",
    comment: "Best auto shop experience in Uptown CDO! Usually casa takes a whole day for PMS and charges double. Motech CDO finished my Fortuner in 1.5 hours, gave a clear itemized receipt, and the mechanics explained the brake wear levels clearly.",
    avatarInitials: "MV",
  },
  {
    id: "2",
    name: "Dr. Karen Mae Soriano",
    vehicle: "Honda Civic RS Turbo",
    location: "Xavier Heights, CDO",
    rating: 5,
    service: "Computerized Scan & Aircon Overhaul",
    comment: "My check engine light was driving me crazy and AC wasn't cooling properly in the heat. Their technician scanned it immediately, fixed a faulty O2 sensor, and cleaned the evaporator. Now my car runs super smooth and ice cold!",
    avatarInitials: "KS",
  },
  {
    id: "3",
    name: "Atty. Rafael Dimalanta",
    vehicle: "Ford Everest Titanium",
    location: "Macasandig, CDO",
    rating: 5,
    service: "Brake Rotor Resurfacing & Pad Replacement",
    comment: "Very professional crew. They didn't push unnecessary parts and actually showed me the caliper condition before proceeding. The lounge has cold AC and strong Wi-Fi so I got my remote work done while waiting.",
    avatarInitials: "RD",
  },
  {
    id: "4",
    name: "Joaquin 'Jack' Tan",
    vehicle: "Mitsubishi Montero Sport",
    location: "Nazareth, CDO",
    rating: 5,
    service: "Full Underchassis & Suspension Refresh",
    comment: "Eliminated that annoying knocking sound over rough asphalt. The suspension feels brand new again. Highly recommended to anyone in Cagayan De Oro looking for dealership-quality work at fair prices.",
    avatarInitials: "JT",
  },
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 sm:py-24 bg-neutral-950 relative border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="accent" className="mb-3">
            <StarIcon className="size-3 mr-1 fill-amber-400 text-amber-400" />
            CLIENT VERIFIED TELEMETRY
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Trusted by CDO Motorists
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
            Read real feedback from car owners across Cagayan De Oro who rely on Motech for their daily commuters, family SUVs, and fleets.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS.map((review) => (
            <Card
              key={review.id}
              className="border border-white/10 bg-neutral-900/90 p-6 sm:p-7 rounded-lg hover:border-primary/40 transition-all hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & verified badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className="size-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-xs border border-emerald-500/30 uppercase">
                    <CheckCircle2Icon className="size-3" />
                    VERIFIED CLIENT
                  </span>
                </div>

                {/* Comment quote */}
                <p className="text-xs sm:text-sm text-neutral-300 italic leading-relaxed mb-6">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author & Car Info */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-md bg-primary text-white font-mono font-bold text-xs border border-primary/50">
                    {review.avatarInitials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-white leading-tight">
                      {review.name}
                    </h4>
                    <p className="font-mono text-[11px] text-neutral-400 leading-tight">
                      {review.location}
                    </p>
                  </div>
                </div>

                <div className="text-right font-mono">
                  <span className="text-xs font-bold text-primary block">
                    {review.vehicle}
                  </span>
                  <span className="text-[10px] text-neutral-400 block uppercase">
                    {review.service}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
