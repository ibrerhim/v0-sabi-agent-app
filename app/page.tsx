import Hero from "@/components/landing/hero"
import HowItWorks from "@/components/landing/how-it-works"
import Features from "@/components/landing/features"
import BusinessModel from "@/components/landing/business-model"
import Traction from "@/components/landing/traction"
import Testimonials from "@/components/landing/testimonials"
import CTASection from "@/components/landing/cta-section"
import LandingMotion from "@/components/landing/landing-motion"

export default function Home() {
  return (
    <div className="rahmax-landing">
      <Hero />
      <Traction />
      <HowItWorks />
      <Features />
      <BusinessModel />
      <Testimonials />
      <CTASection />
      <LandingMotion />
    </div>
  )
}
