"use client"

import { useState } from "react"
import SocialConnectionCard from "@/components/dashboard/connections/connection-card"

export default function ConnectionsPage() {
  const [connections, setConnections] = useState({
    whatsapp: { connected: false, account: null },
    instagram: { connected: false, account: null },
    facebook: { connected: false, account: null },
    twitter: { connected: false, account: null },
  })

  const handleConnect = (platform: string) => {
    console.log(`Connecting to ${platform}...`)
    // In production, this would initiate OAuth flow
    setConnections((prev) => ({
      ...prev,
      [platform]: {
        connected: true,
        account: `@username_${platform}`,
      },
    }))
  }

  const handleDisconnect = (platform: string) => {
    setConnections((prev) => ({
      ...prev,
      [platform]: {
        connected: false,
        account: null,
      },
    }))
  }

  const socialPlatforms = [
    {
      name: "WhatsApp",
      icon: "💬",
      description: "Connect your WhatsApp Business account to receive requests and send messages",
      color: "from-green-400 to-green-600",
    },
    {
      name: "Instagram",
      icon: "📷",
      description: "Link your Instagram account to auto-post content directly",
      color: "from-pink-500 to-red-500",
    },
    {
      name: "Facebook",
      icon: "👍",
      description: "Connect your Facebook page to publish content automatically",
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Twitter",
      icon: "𝕏",
      description: "Link your Twitter account for instant social media posting",
      color: "from-slate-700 to-slate-900",
    },
  ]

  return (
    <div className="p-8">
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold text-foreground">Social Media Connections</h1>
        <p className="text-muted">Connect your social accounts to start auto-posting content</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {socialPlatforms.map((platform) => {
          const key = platform.name.toLowerCase() as keyof typeof connections
          const connection = connections[key]

          return (
            <SocialConnectionCard
              key={key}
              platform={platform}
              isConnected={connection.connected}
              account={connection.account}
              onConnect={() => handleConnect(key)}
              onDisconnect={() => handleDisconnect(key)}
            />
          )
        })}
      </div>

      <div className="mt-12 card-lg bg-info/10 border-2 border-info/50">
        <h3 className="text-lg font-bold text-foreground mb-4">Why Connect Your Socials?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-3xl mb-3">🚀</div>
            <p className="font-semibold text-foreground mb-2">Auto-Post Everywhere</p>
            <p className="text-sm text-muted">Generate content once and post to all platforms automatically</p>
          </div>
          <div>
            <div className="text-3xl mb-3">⏰</div>
            <p className="font-semibold text-foreground mb-2">Schedule in Advance</p>
            <p className="text-sm text-muted">Plan your content calendar weeks ahead and let Sabi Agent do the work</p>
          </div>
          <div>
            <div className="text-3xl mb-3">💬</div>
            <p className="font-semibold text-foreground mb-2">WhatsApp Chat Control</p>
            <p className="text-sm text-muted">Request content anytime via WhatsApp without opening the dashboard</p>
          </div>
        </div>
      </div>
    </div>
  )
}
