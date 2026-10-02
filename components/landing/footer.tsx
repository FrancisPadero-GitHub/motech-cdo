"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { BUSINESS_INFO } from "./types"
import {
  ChevronRightIcon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
  PhoneCallIcon,
  ShieldCheckIcon,
} from "lucide-react"
import { FacebookIcon } from "./icons"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-950 text-neutral-300 pt-16 pb-12 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-24 w-72">
                <Image
                  src="/motech_without_bg_backup.png"
                  alt="Motech Auto Care CDO"
                  fill
                  sizes="288px"
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              Motech CDO is Cagayan De Oro&apos;s trusted full-service automotive care center. We specialize in computerized engine diagnostics, preventive maintenance (PMS), brakes, aircon, underchassis, and major mechanical overhauls.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="flex size-9 items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-primary hover:border-primary text-white transition-all"
                aria-label="Facebook Page"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href={`https://viber.click/${BUSINESS_INFO.viberClean}`}
                target="_blank"
                rel="noreferrer"
                className="flex size-9 items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-[#7360f2] hover:border-[#7360f2] text-white transition-all"
                aria-label="Viber Chat"
              >
                <MessageCircleIcon className="size-4" />
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex size-9 items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-orange-600 hover:border-orange-600 text-white transition-all"
                aria-label="Email Us"
              >
                <MailIcon className="size-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRightIcon className="size-3 text-primary" />
                  Auto Services
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRightIcon className="size-3 text-primary" />
                  PMS Packages
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRightIcon className="size-3 text-primary" />
                  Why Choose Motech
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRightIcon className="size-3 text-primary" />
                  Service Workflow
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRightIcon className="size-3 text-primary" />
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRightIcon className="size-3 text-primary" />
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>• Synthetic Change Oil & PMS</li>
              <li>• Computerized OBD-II Diagnostics</li>
              <li>• Ceramic Brake Pad & Caliper Overhaul</li>
              <li>• Car Aircon Cleaning & Freon Recharge</li>
              <li>• 3D Wheel Alignment & Balancing</li>
              <li>• Suspension Bushings & Shock Absorbers</li>
              <li>• Top Engine Overhauls & Tuning</li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Branch Info
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPinIcon className="size-4 text-primary shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCallIcon className="size-4 text-primary shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="text-white hover:underline">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircleIcon className="size-4 text-[#7360f2] shrink-0" />
                <a href={`https://viber.click/${BUSINESS_INFO.viberClean}`} target="_blank" rel="noreferrer" className="text-[#9d8df8] hover:underline">
                  Viber: {BUSINESS_INFO.viber}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="size-4 text-orange-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-white hover:underline">
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2 pt-1 text-neutral-400">
                <ClockIcon className="size-4 text-emerald-400 shrink-0" />
                <span>Mon – Sat: 8:00 AM – 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {currentYear} Motech CDO. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <ShieldCheckIcon className="size-4 text-primary" />
            <span>Pueblo de Oro, Cagayan De Oro City, Misamis Oriental</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
