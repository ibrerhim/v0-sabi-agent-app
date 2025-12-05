"use client"

import Link from "next/link"
import Image from "next/image"
import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Navbar() {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background shadow-soft-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/sabi-20agent-20-284-29.png"
              alt="Sabi Agent Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="font-bold text-lg text-foreground hidden sm:inline">Sabi Agent</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            {" "}
            {/* Improved spacing */}
            <Link
              href="/#features"
              className="px-4 py-2 text-sm font-medium text-muted hover:text-foreground transition-smooth"
            >
              Features
            </Link>
            <Link
              href="/#pricing"
              className="px-4 py-2 text-sm font-medium text-muted hover:text-foreground transition-smooth"
            >
              Pricing
            </Link>
            <Link
              href="/#testimonials"
              className="px-4 py-2 text-sm font-medium text-muted hover:text-foreground transition-smooth"
            >
              Testimonials
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            {" "}
            {/* Improved spacing */}
            {session ? (
              <>
                <Link href="/dashboard">
                  <Button variant="outline" size="sm" className="bg-muted hover:bg-muted-dark">
                    {" "}
                    {/* Cleaner button design */}
                    Dashboard
                  </Button>
                </Link>
                <Button variant="outline" size="sm" onClick={() => signOut()} className="bg-muted hover:bg-muted-dark">
                  {" "}
                  {/* Cleaner button design */}
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link href="/auth/signin">
                  <Button variant="outline" size="sm" className="bg-muted hover:bg-muted-dark">
                    {" "}
                    {/* Cleaner button design */}
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button size="sm" className="bg-primary hover:bg-primary-dark">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
