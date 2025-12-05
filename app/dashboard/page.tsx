"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import OverviewStats from "@/components/dashboard/overview-stats"
import ContentChart from "@/components/dashboard/content-chart"
import EngagementChart from "@/components/dashboard/engagement-chart"
import QuickActions from "@/components/dashboard/quick-actions"

export default function DashboardOverview() {
  const { data: session } = useSession()
  const [stats, setStats] = useState({
    totalCredits: 150,
    remainingCredits: 87,
    postsGenerated: 24,
    scheduledPosts: 5,
  })

  const [contentData, setContentData] = useState([
    { month: "Jan", posts: 8 },
    { month: "Feb", posts: 12 },
    { month: "Mar", posts: 15 },
    { month: "Apr", posts: 10 },
    { month: "May", posts: 18 },
    { month: "Jun", posts: 22 },
  ])

  const [engagementData, setEngagementData] = useState([
    { month: "Jan", engagement: 240 },
    { month: "Feb", engagement: 380 },
    { month: "Mar", engagement: 250 },
    { month: "Apr", engagement: 430 },
    { month: "May", engagement: 490 },
    { month: "Jun", engagement: 521 },
  ])

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Welcome back, {session?.user?.name}!</h1>
        <p className="text-muted">Here's your content performance overview</p>
      </div>

      {/* Stats Grid */}
      <OverviewStats stats={stats} />

      {/* Quick Actions */}
      <QuickActions />

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ContentChart data={contentData} />
        <EngagementChart data={engagementData} />
      </div>
    </div>
  )
}
