import Hero from "@/components/landing/hero"
import HowItWorks from "@/components/landing/how-it-works"
import Features from "@/components/landing/features"
import BusinessModel from "@/components/landing/business-model"
import Traction from "@/components/landing/traction"
import Testimonials from "@/components/landing/testimonials"

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <HowItWorks />
      <Features />
      <BusinessModel />
      <Traction />
      <Testimonials />
    </div>
  )
}
