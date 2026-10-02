"use client"

import * as React from "react"
import { BUSINESS_INFO } from "./types"
import {
  AlertCircleIcon,
  MailIcon,
  MessageCircleIcon,
  NavigationIcon,
  PhoneCallIcon,
} from "lucide-react"

export function QuickContactBar() {
  return (
    <section className="bg-neutral-900 border-b border-white/10 text-white py-3.5 px-4 relative overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-center md:text-left">
          <div className="flex size-9 items-center justify-center rounded-md bg-primary/20 text-primary border border-primary/30 shrink-0">
            <AlertCircleIcon className="size-4 animate-pulse" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-xs sm:text-sm text-white uppercase tracking-wide">
              URGENT ASSISTANCE OR INSTANT ESTIMATE IN CAGAYAN DE ORO?
            </h4>
            <p className="font-mono text-[11px] text-neutral-400">
              Pueblo service advisors available via Phone, Viber, or Email.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs">
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="inline-flex items-center gap-1.5 rounded-md bg-white text-neutral-950 px-3.5 py-1.5 font-bold hover:bg-neutral-200 transition-all shadow-sm"
          >
            <PhoneCallIcon className="size-3 text-primary" />
            <span>TEL: {BUSINESS_INFO.phone}</span>
          </a>

          <a
            href={`https://viber.click/${BUSINESS_INFO.viberClean}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-[#7360f2] text-white px-3.5 py-1.5 font-semibold hover:bg-[#604ee0] transition-all shadow-sm border border-white/15"
          >
            <MessageCircleIcon className="size-3" />
            <span>VIBER: {BUSINESS_INFO.viber}</span>
          </a>

          <a
            href={`mailto:${BUSINESS_INFO.email}`}
            className="inline-flex items-center gap-1.5 rounded-md bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 px-3 py-1.5 font-medium transition-all border border-white/10"
          >
            <MailIcon className="size-3" />
            <span>{BUSINESS_INFO.email}</span>
          </a>

          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1.5 font-semibold transition-all border border-primary/40"
          >
            <NavigationIcon className="size-3" />
            <span>DIRECTIONS</span>
          </a>
        </div>
      </div>
    </section>
  )
}
