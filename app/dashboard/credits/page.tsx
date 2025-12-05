"use client"

import { useState } from "react"
import CreditBalance from "@/components/dashboard/credits/balance-card"
import CreditPackages from "@/components/dashboard/credits/credit-packages"
import AdWatchModal from "@/components/dashboard/credits/ad-watch-modal"
import CreditHistory from "@/components/dashboard/credits/credit-history"
import { Button } from "@/components/ui/button"

export default function CreditsPage() {
  const [balance, setBalance] = useState(87)
  const [showAdModal, setShowAdModal] = useState(false)
  const [creditHistory, setCreditHistory] = useState([
    {
      id: 1,
      type: "spent",
      amount: 1,
      description: "Generated content for Leather Bag",
      date: "2024-12-05",
    },
    {
      id: 2,
      type: "earned",
      amount: 10,
      description: "Watched advertisement",
      date: "2024-12-04",
    },
    {
      id: 3,
      type: "purchased",
      amount: 50,
      description: "Credit package purchase",
      date: "2024-12-03",
    },
    {
      id: 4,
      type: "earned",
      amount: 5,
      description: "Referral bonus",
      date: "2024-12-02",
    },
  ])

  const handleBuyCredits = (amount: number) => {
    console.log(`Buying ${amount} credits`)
    // Integration with payment gateway would go here
  }

  const handleWatchAd = () => {
    setShowAdModal(true)
  }

  const handleAdComplete = (credits: number) => {
    setBalance(balance + credits)
    setCreditHistory([
      {
        id: creditHistory.length + 1,
        type: "earned",
        amount: credits,
        description: "Watched advertisement",
        date: new Date().toISOString().split("T")[0],
      },
      ...creditHistory,
    ])
    setShowAdModal(false)
  }

  return (
    <div className="p-8">
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold text-foreground">Credit Wallet</h1>
        <p className="text-muted">Manage your credits and buy more when needed</p>
      </div>

      {/* Balance Card */}
      <CreditBalance balance={balance} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Left Column - Packages */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Buy Credits</h2>
              <CreditPackages onBuy={handleBuyCredits} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Credit History</h2>
              <CreditHistory history={creditHistory} />
            </div>
          </div>
        </div>

        {/* Right Column - Earn Free Credits */}
        <div>
          <div className="space-y-4">
            <div className="card-lg border-2 border-secondary/50">
              <h3 className="text-lg font-bold text-foreground mb-4">Earn Free Credits</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/10 border border-secondary/30">
                  <div>
                    <p className="font-semibold text-foreground">Watch Ads</p>
                    <p className="text-sm text-muted">Earn 10 credits per video</p>
                  </div>
                  <span className="text-2xl">📺</span>
                </div>

                <Button onClick={handleWatchAd} className="w-full bg-primary hover:bg-primary-dark">
                  Watch Ad Now
                </Button>
              </div>

              <div className="border-t border-border pt-4">
                <p className="text-sm text-muted mb-3">More ways to earn:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-foreground">Refer a friend (+25 credits)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-foreground">Complete challenges (+5 credits each)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-foreground">Leave a review (+10 credits)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card-lg bg-info/10 border-2 border-info/50">
              <h3 className="text-lg font-bold text-foreground mb-3">Pro Tip</h3>
              <p className="text-sm text-muted">
                Watch one ad daily to earn 300 free credits every month. That's enough for 15 posts!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ad Modal */}
      {showAdModal && <AdWatchModal onComplete={handleAdComplete} onClose={() => setShowAdModal(false)} />}
    </div>
  )
}
