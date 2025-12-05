"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface AdWatchModalProps {
  onComplete: (credits: number) => void
  onClose: () => void
}

export default function AdWatchModal({ onComplete, onClose }: AdWatchModalProps) {
  const [timeLeft, setTimeLeft] = useState(30)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const handleComplete = () => {
    onComplete(10)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="card-lg max-w-md w-full mx-4">
        <div className="text-center mb-6">
          <div className="text-5xl mb-4">📺</div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Watch & Earn</h2>
          <p className="text-muted">Watch this short ad to earn 10 free credits</p>
        </div>

        <div className="bg-muted-light rounded-lg aspect-video flex items-center justify-center mb-6">
          {isPlaying ? (
            <div className="text-center">
              <div className="text-6xl mb-4">▶</div>
              <p className="text-sm text-muted">Advertisement playing...</p>
              <p className="text-2xl font-bold text-primary mt-2">{timeLeft}s</p>
            </div>
          ) : (
            <div className="text-center">
              <div className="text-5xl mb-4">✓</div>
              <p className="text-foreground font-semibold">Ad Complete!</p>
            </div>
          )}
        </div>

        <div className="space-y-3">
          {isPlaying && timeLeft > 0 ? (
            <Button disabled className="w-full bg-muted text-muted-light">
              Skip in {timeLeft}s
            </Button>
          ) : (
            <>
              <Button onClick={handleComplete} className="w-full bg-success hover:bg-green-600">
                Claim 10 Credits
              </Button>
              <Button onClick={onClose} variant="outline" className="w-full bg-transparent">
                Close
              </Button>
            </>
          )}
        </div>

        <p className="text-xs text-muted text-center mt-4">
          You can watch one ad per day. Come back tomorrow for more credits!
        </p>
      </div>
    </div>
  )
}
