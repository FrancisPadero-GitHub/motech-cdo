"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookingDialog } from "./booking-dialog"
import { BUSINESS_INFO } from "./types"
import {
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
  MenuIcon,
  PhoneCallIcon,
  XIcon,
} from "lucide-react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "PMS Packages", href: "#packages" },
    { label: "Why Motech", href: "#why-us" },
    { label: "Workflow", href: "#process" },
    { label: "Reviews", href: "#reviews" },
    { label: "Location", href: "#location" },
    { label: "FAQ", href: "#faq" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top telemetry status bar */}
      <div className="hidden md:block bg-neutral-950 text-neutral-400 text-[11px] font-mono py-1.5 px-4 border-b border-white/10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <span className="size-1.5 bg-primary rounded-xs" />
              <MapPinIcon className="size-3 text-primary" />
              <span className="text-white font-sans font-medium">Pueblo de Oro</span>, Cagayan De Oro
            </span>
            <span className="flex items-center gap-1.5 text-neutral-300">
              <ClockIcon className="size-3 text-emerald-400" />
              MON – SAT: 08:00 – 17:00
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="flex items-center gap-1.5 text-neutral-200 hover:text-white transition-colors"
            >
              <PhoneCallIcon className="size-3 text-primary" />
              <span>TEL: {BUSINESS_INFO.phone}</span>
            </a>
            <span className="text-neutral-700">/</span>
            <a
              href={`https://viber.click/${BUSINESS_INFO.viberClean}`}
              target="_blank"
              rel="noreferrer"
              className="text-[#9d8df8] hover:text-white transition-colors"
            >
              VIBER: {BUSINESS_INFO.viber}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={`w-full border-b transition-all duration-300 ${
          isScrolled
            ? "bg-neutral-950/95 backdrop-blur-md border-white/10 shadow-2xl py-3"
            : "bg-neutral-950/80 backdrop-blur-md border-white/5 py-4"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
          {/* Brand Logo & Telemetry Indicator */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-[72px] w-52 sm:w-64 transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/motech_without_bg_backup.png"
                alt="Motech Auto Care CDO"
                fill
                sizes="(max-width: 640px) 208px, 256px"
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden lg:flex flex-col border-l border-white/10 pl-3">
              <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase leading-tight">
                CDO BRANCH
              </span>
              <span className="text-[11px] text-neutral-400 font-medium leading-tight">
                Pueblo de Oro
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white hover:text-primary transition-colors duration-150 relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action buttons (Booking Dialog, Mobile Menu Toggle) */}
          <div className="flex items-center gap-3">
            <BookingDialog>
              <Button
                variant="default"
                size="default"
                className="hidden sm:inline-flex rounded-md bg-primary hover:bg-primary/90 text-white font-mono text-xs uppercase tracking-wider font-bold shadow-lg shadow-primary/25 border border-primary/40 px-4 py-2"
              >
                <CalendarDaysIcon className="size-3.5 mr-1.5" />
                Book Service
              </Button>
            </BookingDialog>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex size-9 items-center justify-center rounded-md border border-white/10 bg-neutral-900 text-neutral-200 hover:bg-neutral-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <XIcon className="size-5" />
              ) : (
                <MenuIcon className="size-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-neutral-950/98 backdrop-blur-2xl px-5 py-6 shadow-2xl animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-mono uppercase tracking-wider text-neutral-200 hover:bg-neutral-900 hover:text-primary transition-colors border border-transparent hover:border-white/10"
              >
                {link.label}
              </a>
            ))}

            <div className="border-t border-white/10 pt-4 mt-2 flex flex-col gap-2.5">
              <BookingDialog>
                <Button className="w-full justify-center rounded-md bg-primary font-mono text-xs uppercase tracking-wider font-bold">
                  <CalendarDaysIcon className="size-4 mr-2" />
                  Book Appointment
                </Button>
              </BookingDialog>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex items-center justify-center gap-2 rounded-md border border-white/10 bg-neutral-900 py-2.5 text-xs font-mono uppercase tracking-wider text-neutral-200 hover:bg-neutral-800"
              >
                <PhoneCallIcon className="size-3.5 text-primary" />
                Call {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
