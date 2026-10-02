"use client"

import * as React from "react"
import confetti from "canvas-confetti"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BUSINESS_INFO } from "./types"
import {
  CalendarIcon,
  CarIcon,
  CheckCircle2Icon,
  ClockIcon,
  MessageSquareIcon,
  PhoneCallIcon,
  WrenchIcon,
} from "lucide-react"

interface BookingDialogProps {
  children?: React.ReactNode
  defaultService?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const SERVICE_OPTIONS = [
  "Preventive Maintenance Schedule (PMS) & Oil Change",
  "Computerized Engine & Electrical Diagnostics",
  "Brake Inspection, Pads & Rotor Replacement",
  "Aircon Cleaning, Leak Test & Freon Recharge",
  "3D Wheel Alignment & Tire Balancing",
  "Suspension, Shocks & Underchassis Repair",
  "Engine Overhaul / Major Mechanical Repair",
  "Battery Test, Charging & Replacement",
  "General Vehicle Check-up & 25-Point Inspection",
]

export function BookingDialog({
  children,
  defaultService,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}: BookingDialogProps) {
  const [internalOpen, setInternalOpen] = React.useState(false)
  const isControlled = controlledOpen !== undefined
  const isOpen = isControlled ? controlledOpen : internalOpen
  const setIsOpen = (value: boolean) => {
    if (isControlled && setControlledOpen) {
      setControlledOpen(value)
    } else {
      setInternalOpen(value)
    }
  }

  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    vehicle: "",
    service: defaultService || SERVICE_OPTIONS[0],
    preferredDate: "",
    preferredTime: "Morning (8:00 AM - 12:00 PM)",
    notes: "",
  })

  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)

    // Trigger celebratory confetti effect
    try {
      void confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#dc2626", "#ef4444", "#f97316", "#ffffff"],
      })
    } catch {
      // ignore
    }
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setFormData({
      name: "",
      phone: "",
      vehicle: "",
      service: defaultService || SERVICE_OPTIONS[0],
      preferredDate: "",
      preferredTime: "Morning (8:00 AM - 12:00 PM)",
      notes: "",
    })
    setIsOpen(false)
  }

  const getViberMessageUrl = () => {
    const message = `Hello Motech CDO! I would like to book a service appointment:
• Name: ${formData.name}
• Contact: ${formData.phone}
• Vehicle: ${formData.vehicle}
• Service: ${formData.service}
• Preferred Date: ${formData.preferredDate || "Earliest available"} (${formData.preferredTime})
• Notes: ${formData.notes || "None"}`
    return `https://viber.click/${BUSINESS_INFO.viberClean}?text=${encodeURIComponent(message)}`
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent className="max-w-lg border border-white/15 bg-neutral-950/98 backdrop-blur-2xl text-white rounded-lg p-6 sm:p-7 shadow-2xl">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <div className="inline-flex items-center gap-2 border-l-2 border-primary bg-neutral-900 px-2.5 py-1 text-primary font-mono text-[11px] font-semibold uppercase tracking-wider mb-1 w-fit rounded-xs">
                MOTECH CDO • PUEBLO DE ORO
              </div>
              <DialogTitle className="text-2xl font-bold tracking-tight text-white font-heading">
                Book Service Appointment
              </DialogTitle>
              <DialogDescription className="text-neutral-400 text-xs sm:text-sm">
                Schedule your PMS, diagnostic scan, or repair with our certified mechanics.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-neutral-300 uppercase">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <Input
                    required
                    placeholder="e.g. Juan dela Cruz"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="rounded-md border-white/15 bg-neutral-900/90 text-white placeholder:text-neutral-500 text-sm focus-visible:border-primary"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-neutral-300 uppercase">
                    Phone / Viber <span className="text-primary">*</span>
                  </label>
                  <Input
                    required
                    placeholder="e.g. 0953 564 4211"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="rounded-md border-white/15 bg-neutral-900/90 text-white placeholder:text-neutral-500 text-sm focus-visible:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-medium text-neutral-300 uppercase flex items-center gap-1.5">
                  <CarIcon className="size-3.5 text-primary" />
                  Vehicle Make, Model & Year <span className="text-primary">*</span>
                </label>
                <Input
                  required
                  placeholder="e.g. 2022 Toyota Fortuner 2.8L Diesel / 2020 Honda Civic"
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleInputChange}
                  className="rounded-md border-white/15 bg-neutral-900/90 text-white placeholder:text-neutral-500 text-sm focus-visible:border-primary"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-medium text-neutral-300 uppercase flex items-center gap-1.5">
                  <WrenchIcon className="size-3.5 text-primary" />
                  Required Service <span className="text-primary">*</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-white/15 bg-neutral-900/90 px-3.5 py-2 text-sm text-white shadow-sm transition-colors focus-visible:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary font-sans"
                >
                  {defaultService && !SERVICE_OPTIONS.includes(defaultService) && (
                    <option value={defaultService}>{defaultService}</option>
                  )}
                  {SERVICE_OPTIONS.map((svc) => (
                    <option key={svc} value={svc} className="bg-neutral-950 text-white">
                      {svc}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-neutral-300 uppercase flex items-center gap-1.5">
                    <CalendarIcon className="size-3.5 text-primary" />
                    Preferred Date
                  </label>
                  <Input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="rounded-md border-white/15 bg-neutral-900/90 text-white text-sm focus-visible:border-primary"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-neutral-300 uppercase flex items-center gap-1.5">
                    <ClockIcon className="size-3.5 text-primary" />
                    Preferred Time
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="flex h-10 w-full rounded-md border border-white/15 bg-neutral-900/90 px-3.5 py-2 text-sm text-white shadow-sm transition-colors focus-visible:outline-none focus-visible:border-primary font-sans"
                  >
                    <option value="Morning (8:00 AM - 12:00 PM)" className="bg-neutral-950">Morning (8:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 5:00 PM)" className="bg-neutral-950">Afternoon (1:00 PM - 5:00 PM)</option>
                    <option value="First Available Slot Today" className="bg-neutral-950">First Available Slot Today</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-medium text-neutral-300 uppercase">
                  Additional Notes / Symptoms (Optional)
                </label>
                <Textarea
                  placeholder="e.g. Squeaking noise when braking, AC blowing warm air, or check engine light on..."
                  rows={3}
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="rounded-md border-white/15 bg-neutral-900/90 text-white placeholder:text-neutral-500 text-sm focus-visible:border-primary"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <Button type="submit" size="lg" className="w-full rounded-md bg-primary hover:bg-primary/90 text-white font-mono text-xs uppercase tracking-wider font-bold py-5 shadow-xl border border-primary/50">
                  Confirm Booking Request
                </Button>
                <p className="text-[11px] font-mono text-center text-neutral-400">
                  NEED IMMEDIATE HELP? CALL <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="text-primary font-bold underline">{BUSINESS_INFO.phone}</a>
                </p>
              </div>
            </form>
          </>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="mx-auto flex size-14 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <CheckCircle2Icon className="size-8" />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-xl font-bold font-heading text-white">
                Booking Request Submitted!
              </h3>
              <p className="text-xs text-neutral-400 max-w-sm mx-auto font-mono">
                Thank you, <span className="font-bold text-white">{formData.name}</span>. Our service desk will contact your number ({formData.phone}) to confirm the time slot.
              </p>
            </div>

            <div className="rounded-md border border-white/15 bg-neutral-900 p-4 text-left font-mono text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-neutral-400 uppercase">Vehicle:</span>
                <span className="font-bold text-white">{formData.vehicle}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400 uppercase">Service:</span>
                <span className="font-bold text-white truncate max-w-[200px]">{formData.service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400 uppercase">Schedule:</span>
                <span className="font-bold text-white">{formData.preferredDate || "Today"} ({formData.preferredTime})</span>
              </div>
            </div>

            <div className="space-y-2 pt-2 font-mono text-xs">
              <a
                href={getViberMessageUrl()}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-md bg-[#7360f2] hover:bg-[#604ee0] text-white py-2.5 px-4 font-semibold transition-all shadow-md border border-white/15 uppercase"
              >
                <MessageSquareIcon className="size-4" />
                SEND COPY VIA VIBER ({BUSINESS_INFO.viber})
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex items-center justify-center gap-2 w-full rounded-md border border-white/15 bg-neutral-900 hover:bg-neutral-800 text-white py-2.5 px-4 font-medium transition-all uppercase"
              >
                <PhoneCallIcon className="size-4 text-primary" />
                CALL DESK ({BUSINESS_INFO.phone})
              </a>

              <Button
                variant="ghost"
                onClick={handleReset}
                className="w-full text-xs text-neutral-400 hover:text-white mt-1 uppercase"
              >
                Close & Return
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
