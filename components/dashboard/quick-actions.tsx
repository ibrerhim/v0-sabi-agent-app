"use client"

import Link from "next/link"

export default function QuickActions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Link
        href="/dashboard/generator"
        className="card-lg hover:shadow-soft-lg transition-smooth border-2 border-primary/30 cursor-pointer"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">Generate New Content</h3>
            <p className="text-muted text-sm">Create AI-powered posts for your products</p>
          </div>
          <span className="text-4xl">✨</span>
        </div>
      </Link>

      <Link
        href="/dashboard/connections"
        className="card-lg hover:shadow-soft-lg transition-smooth border-2 border-secondary/30 cursor-pointer"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">Connect Social Media</h3>
            <p className="text-muted text-sm">Link your WhatsApp, Instagram, and more</p>
          </div>
          <span className="text-4xl">🔗</span>
        </div>
      </Link>
    </div>
  )
}
