import { Navbar } from "@/components/landing/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { QuickContactBar } from "@/components/landing/quick-contact-bar"
import { ServicesSection } from "@/components/landing/services-section"
import { PackagesSection } from "@/components/landing/packages-section"
import { WhyChooseUsSection } from "@/components/landing/why-choose-us"
import { WorkflowProcessSection } from "@/components/landing/workflow-process"
import { ReviewsSection } from "@/components/landing/reviews-section"
import { LocationContactSection } from "@/components/landing/location-contact-section"
import { FAQSection } from "@/components/landing/faq-section"
import { Footer } from "@/components/landing/footer"
import { FloatingQuickActions } from "@/components/landing/floating-quick-actions"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <HeroSection />
      <QuickContactBar />
      <ServicesSection />
      <PackagesSection />
      <WhyChooseUsSection />
      <WorkflowProcessSection />
      <ReviewsSection />
      <LocationContactSection />
      <FAQSection />
      <Footer />
      <FloatingQuickActions />
    </main>
  )
}
