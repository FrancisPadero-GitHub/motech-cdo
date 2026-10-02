"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { BookingDialog } from "./booking-dialog"
import { Button } from "@/components/ui/button"
import type { FAQItem } from "./types"
import { BUSINESS_INFO } from "./types"
import { HelpCircleIcon, MessageCircleIcon } from "lucide-react"

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Do I need to make an appointment or do you accept walk-ins?",
    answer: "We warmly welcome walk-ins at our Pueblo de Oro branch during operating hours (Mon-Sat, 8:00 AM - 5:00 PM). However, booking an appointment via our online form or Viber hotline guarantees an express service bay upon arrival and minimizes wait times.",
  },
  {
    question: "How long does a standard PMS (Change Oil & Inspection) take?",
    answer: "A standard PMS typically takes between 45 to 90 minutes, depending on the package selected (e.g., Bronze vs Silver with OBD scanning). You are welcome to relax in our air-conditioned lounge with free high-speed Wi-Fi, coffee, and a direct view of the service bays.",
  },
  {
    question: "What brands of engine oils and parts do you use?",
    answer: "We only use 100% genuine, top-tier automotive lubricants such as Mobil, Motul, Shell Helix, and Castrol, paired with OEM-grade oil and air filters. We can also accommodate manufacturer-specific fluid specs for Japanese, Korean, American, and European car models.",
  },
  {
    question: "Do you provide a warranty for repairs and parts?",
    answer: "Yes! All repairs, component replacements, and major overhauls at Motech CDO are backed by our standard 6-month or 10,000 km warranty (whichever comes first) on both parts and labor.",
  },
  {
    question: "How do your prices compare to dealership / casa service centers?",
    answer: "Motech CDO offers dealership-grade computerized equipment and certified technicians at roughly 40% to 60% less than casa rates, with zero hidden charges. We provide written quotations and return all replaced old parts upon turnover for 100% transparency.",
  },
  {
    question: "What payment methods do you accept at the workshop?",
    answer: "We accept Cash, GCash, Maya, major Credit & Debit cards (Visa/Mastercard), and online bank transfers for your convenience.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 sm:py-24 bg-neutral-950 relative border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-14">
          <Badge variant="accent" className="mb-3">
            <HelpCircleIcon className="size-3 mr-1 text-primary" />
            TECHNICAL KNOWLEDGE BASE
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Frequently Answered Inquiries
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
            Essential information about bringing your vehicle to Motech CDO.
          </p>
        </div>

        {/* Accordion list */}
        <div className="rounded-lg border border-white/10 bg-neutral-900/90 p-6 sm:p-8 shadow-xl">
          <Accordion type="single" collapsible defaultValue="item-0">
            {FAQ_ITEMS.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-white/10 last:border-b-0">
                <AccordionTrigger className="text-left font-heading text-sm sm:text-base font-bold text-white hover:text-primary transition-colors py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-neutral-400 leading-relaxed pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions banner */}
        <div className="mt-8 rounded-lg bg-neutral-900/80 border border-white/10 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-heading font-bold text-sm sm:text-base text-white">
              Have a specific mechanical or electrical question?
            </h4>
            <p className="text-xs text-neutral-400 mt-0.5 font-mono">
              Chat directly with our master mechanics on Viber or send us an inquiry.
            </p>
          </div>
          <div className="flex items-center gap-2.5 font-mono">
            <a
              href={`https://viber.click/${BUSINESS_INFO.viberClean}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-[#7360f2] hover:bg-[#604ee0] text-white px-4 py-2 text-xs font-semibold shadow-md transition-all border border-white/15"
            >
              <MessageCircleIcon className="size-3.5" />
              <span>VIBER CHAT</span>
            </a>
            <BookingDialog>
              <Button variant="outline" size="sm" className="rounded-md border-white/15 bg-neutral-950 text-neutral-200 text-xs font-semibold hover:bg-neutral-800">
                ASK ADVISOR
              </Button>
            </BookingDialog>
          </div>
        </div>
      </div>
    </section>
  )
}
