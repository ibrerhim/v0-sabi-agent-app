"use client"

import { Button } from "@/components/ui/button"

interface SocialConnectionCardProps {
  platform: {
    name: string
    icon: string
    description: string
    color: string
  }
  isConnected: boolean
  account: string | null
  onConnect: () => void
  onDisconnect: () => void
}

export default function SocialConnectionCard({
  platform,
  isConnected,
  account,
  onConnect,
  onDisconnect,
}: SocialConnectionCardProps) {
  return (
    <div
      className={`card-lg bg-gradient-to-br ${platform.color} bg-opacity-5 border-2 ${isConnected ? "border-success" : "border-border"}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-4xl">{platform.icon}</div>
          <div>
            <h3 className="font-bold text-foreground text-lg">{platform.name}</h3>
            {isConnected && <p className="text-xs text-success font-semibold">Connected as {account}</p>}
          </div>
        </div>
        <div className={`h-3 w-3 rounded-full ${isConnected ? "bg-success" : "bg-muted"}`}></div>
      </div>

      <p className="text-muted text-sm mb-6">{platform.description}</p>

      <div className="space-y-2">
        {isConnected ? (
          <>
            <Button
              onClick={onDisconnect}
              variant="outline"
              className="w-full text-error hover:border-error bg-transparent"
            >
              Disconnect
            </Button>
            <p className="text-xs text-muted text-center">Your account is connected and ready to use</p>
          </>
        ) : (
          <>
            <Button onClick={onConnect} className="w-full bg-primary hover:bg-primary-dark">
              Connect {platform.name}
            </Button>
            <p className="text-xs text-muted text-center">You'll be redirected to authorize the connection</p>
          </>
        )}
      </div>
    </div>
  )
}
