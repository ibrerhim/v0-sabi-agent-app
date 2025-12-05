"use client"

import { Button } from "@/components/ui/button"

interface CreditPackagesProps {
  onBuy: (amount: number) => void
}

export default function CreditPackages({ onBuy }: CreditPackagesProps) {
  const packages = [
    {
      credits: 50,
      price: 1000,
      popular: false,
      bonus: 0,
      description: "Small package",
    },
    {
      credits: 100,
      price: 1800,
      popular: true,
      bonus: 10,
      description: "Most popular",
    },
    {
      credits: 250,
      price: 4200,
      popular: false,
      bonus: 50,
      description: "Best value",
    },
    {
      credits: 500,
      price: 7500,
      popular: false,
      bonus: 150,
      description: "Enterprise",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {packages.map((pkg) => (
        <div
          key={pkg.credits}
          className={`card-lg ${pkg.popular ? "ring-2 ring-primary border-primary" : "border-border"} relative`}
        >
          {pkg.popular && (
            <div className="absolute -top-3 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
              Most Popular
            </div>
          )}

          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted mb-1">{pkg.description}</p>
              <p className="text-3xl font-bold text-foreground">
                {pkg.credits}
                <span className="text-lg text-muted">+ {pkg.bonus}</span>
              </p>
              <p className="text-xs text-muted">credits + bonus</p>
            </div>

            <div className="bg-muted-light rounded-lg p-4">
              <p className="text-2xl font-bold text-foreground mb-1">₦{pkg.price}</p>
              <p className="text-xs text-muted">₦{(pkg.price / (pkg.credits + pkg.bonus)).toFixed(0)} per credit</p>
            </div>

            <div className="bg-success/10 rounded-lg p-3">
              <p className="text-sm text-success font-medium">+{pkg.bonus} bonus credits included!</p>
            </div>

            <Button
              onClick={() => onBuy(pkg.credits)}
              className={`w-full ${
                pkg.popular ? "bg-primary hover:bg-primary-dark" : "bg-primary/80 hover:bg-primary"
              }`}
            >
              Buy {pkg.credits} Credits
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
