"use client"

import * as React from "react"
import { BookingDialog } from "./booking-dialog"
import { BUSINESS_INFO } from "./types"
import {
  CalendarDaysIcon,
  MessageCircleIcon,
  PhoneCallIcon,
} from "lucide-react"

export function FloatingQuickActions() {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 animate-in fade-in slide-in-from-bottom-4 duration-300 font-mono text-xs">
      {/* Viber quick action */}
      <a
        href={`https://viber.click/${BUSINESS_INFO.viberClean}`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-md bg-[#7360f2] text-white px-3.5 py-2 font-semibold shadow-2xl hover:bg-[#604ee0] hover:scale-102 transition-all border border-white/20"
        title="Message us on Viber"
      >
        <MessageCircleIcon className="size-4" />
        <span className="hidden sm:inline uppercase">VIBER</span>
      </a>

      {/* Direct phone call action */}
      <a
        href={`tel:${BUSINESS_INFO.phoneClean}`}
        className="flex items-center gap-2 rounded-md bg-neutral-900 text-white border border-white/15 px-3.5 py-2 font-semibold shadow-2xl hover:bg-neutral-800 hover:scale-102 transition-all"
        title="Call Motech CDO"
      >
        <PhoneCallIcon className="size-3.5 text-primary" />
        <span className="hidden sm:inline uppercase">{BUSINESS_INFO.phone}</span>
      </a>

      {/* Book service main trigger */}
      <BookingDialog>
        <button className="flex items-center gap-2 rounded-md bg-primary text-white px-4 py-2.5 font-bold shadow-2xl shadow-primary/40 hover:bg-primary/90 hover:scale-102 transition-all border border-primary/50 uppercase tracking-wider">
          <CalendarDaysIcon className="size-4" />
          <span>BOOK SERVICE</span>
        </button>
      </BookingDialog>
    </div>
  )
}
