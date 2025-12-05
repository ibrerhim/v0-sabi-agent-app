"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background pt-20 pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full bg-secondary/20 border border-secondary/50">
                <p className="text-sm font-medium text-secondary-dark">AI Content Created Just for You</p>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="text-primary">Create, Schedule</span> & Post Content Automatically
              </h1>
              <p className="text-xl text-muted leading-relaxed">
                AI content creation and social media management for African SMEs — no stress, no extra cost.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/auth/signup">
                <Button size="lg" className="bg-primary hover:bg-primary-dark">
                  Get Started
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Try Demo
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-2xl font-bold text-foreground">150+</p>
                <p className="text-sm text-muted">SMEs Onboarded</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">3,500+</p>
                <p className="text-sm text-muted">AI Posts Created</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">₦12M</p>
                <p className="text-sm text-muted">Pre-seed Raised</p>
              </div>
            </div>
          </div>

          {/* Right - Dashboard Mockup */}
          <div className="relative h-96 lg:h-full min-h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl blur-3xl opacity-50"></div>
            <div className="relative h-full bg-gradient-to-br from-white to-secondary/10 rounded-2xl border border-border shadow-soft-lg p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-foreground font-semibold mb-2">Dashboard Preview</p>
                <p className="text-muted text-sm">Real-time analytics & content management</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
    </section>
  )
}
