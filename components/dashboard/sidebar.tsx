"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function DashboardSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(true)

  const menuItems = [
    { label: "Overview", icon: "📊", href: "/dashboard" },
    { label: "Generate Content", icon: "✨", href: "/dashboard/generator" },
    { label: "Schedule", icon: "📅", href: "/dashboard/schedule" },
    { label: "Credits", icon: "💳", href: "/dashboard/credits" },
    { label: "Connections", icon: "🔗", href: "/dashboard/connections" },
  ]

  return (
    <aside
      className={`${isOpen ? "w-64" : "w-20"} border-r border-border bg-background transition-all duration-300 hidden md:flex flex-col`}
    >
      <div className="h-16 border-b border-border flex items-center justify-between px-4">
        {isOpen && <span className="font-bold text-lg">Sabi Agent</span>}
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-muted-light rounded-lg transition-smooth">
          {isOpen ? "◀" : "▶"}
        </button>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-smooth ${
                isActive ? "bg-primary text-white shadow-soft" : "text-foreground hover:bg-muted-light"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {isOpen && <span className="font-medium">{item.label}</span>}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <div className="card bg-secondary/10 border-secondary/30">
          <p className="text-sm font-medium text-foreground mb-2">Quick Tip</p>
          <p className="text-xs text-muted">Schedule content in advance for consistent engagement</p>
        </div>
      </div>
    </aside>
  )
}
