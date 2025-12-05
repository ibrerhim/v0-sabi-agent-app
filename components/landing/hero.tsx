"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background pt-24 pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/15 border border-success/30">
                <span className="w-2 h-2 rounded-full bg-success"></span>
                <p className="text-sm font-semibold text-foreground">AI Content Created Just for You</p>
              </div>

              {/* Main Headline */}
              <h1 className="text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
                Create, Schedule & Post
                <span className="block text-primary"> Content Automatically</span>
              </h1>

              {/* Subheading */}
              <p className="text-xl text-muted leading-relaxed max-w-lg">
                AI content creation and social media management for African SMEs — no stress, no extra cost.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/auth/signup">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-soft"
                >
                  Get Started
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="font-semibold shadow-soft-sm bg-transparent">
                Try Demo
              </Button>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-12 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-foreground">150+</p>
                <p className="text-sm text-muted mt-1 font-medium">SMEs Onboarded</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">3,500+</p>
                <p className="text-sm text-muted mt-1 font-medium">AI Posts Created</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">₦12M</p>
                <p className="text-sm text-muted mt-1 font-medium">Pre-seed Raised</p>
              </div>
            </div>
          </div>

          {/* Right - Dashboard Mockup */}
          <div className="relative h-full min-h-[500px] lg:min-h-[600px]">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-success/20 to-primary/10 rounded-3xl blur-3xl opacity-40"></div>

            {/* Card */}
            <div className="relative h-full bg-gradient-to-br from-white to-success/5 rounded-3xl border border-success/20 shadow-soft-lg p-10 flex flex-col items-center justify-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-success/15 flex items-center justify-center">
                <span className="text-4xl">📊</span>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground mb-2">Dashboard Preview</p>
                <p className="text-muted leading-relaxed">Real-time analytics & content management in one place</p>
              </div>

              {/* Mini Stats */}
              <div className="grid grid-cols-3 gap-4 w-full pt-6 border-t border-success/20">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">24</p>
                  <p className="text-xs text-muted mt-1">Posts Today</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">4.2K</p>
                  <p className="text-xs text-muted mt-1">Reach</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">8%</p>
                  <p className="text-xs text-muted mt-1">Engagement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-20 right-0 -z-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-success/5 rounded-full blur-3xl"></div>
    </section>
  )
}
