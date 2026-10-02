import type { Metadata } from "next"
import { Geist_Mono, Raleway, Manrope } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const manropeHeading = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
})

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://motechcdo.com"),
  title: "Motech CDO | Complete Auto Repair, PMS & Diagnostics in Cagayan De Oro",
  description:
    "Cagayan De Oro's premier auto service center in Pueblo de Oro. Dealership-quality computerized diagnostics, PMS, oil change, brakes, aircon recharge, and underchassis repair.",
  keywords: [
    "Motech CDO",
    "Auto repair Cagayan de Oro",
    "PMS Cagayan de Oro",
    "Car diagnostics Pueblo CDO",
    "Change oil CDO",
    "Car aircon repair CDO",
    "Brake repair CDO",
    "Wheel alignment CDO",
  ],
  openGraph: {
    title: "Motech CDO | Precision Auto Repair & PMS Center",
    description:
      "Expert automotive diagnostics, change oil, brake repair, aircon, and underchassis maintenance in Pueblo, Cagayan De Oro City.",
    url: "https://facebook.com/motechcdo",
    siteName: "Motech CDO",
    images: [
      {
        url: "/images/hero_workshop.jpg",
        width: 1200,
        height: 630,
        alt: "Motech CDO Auto Care Workshop",
      },
    ],
    locale: "en_PH",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "dark antialiased scroll-smooth",
        fontMono.variable,
        "font-sans",
        raleway.variable,
        manropeHeading.variable
      )}
    >
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
        <ThemeProvider forcedTheme="dark" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
