"use client"

import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"

export default function DashboardHeader() {
  const { data: session } = useSession()

  return (
    <header className="h-16 border-b border-border bg-background flex items-center justify-between px-6 shadow-soft-sm">
      <div className="md:hidden flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-sm">
          SA
        </div>
        <span className="font-bold">Sabi</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-medium text-foreground">{session?.user?.name}</p>
          <p className="text-xs text-muted">{session?.user?.email}</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold">
          {session?.user?.name?.charAt(0) || "U"}
        </div>
        <Button variant="outline" size="sm" onClick={() => signOut()}>
          Sign Out
        </Button>
      </div>
    </header>
  )
}
