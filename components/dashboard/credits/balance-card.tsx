import { Card, CardContent } from "@/components/ui/card"

interface CreditBalanceProps {
  balance: number
}

export default function CreditBalance({ balance }: CreditBalanceProps) {
  return (
    <Card className="card-lg bg-gradient-to-br from-primary/10 to-primary-light/10 border-primary/30">
      <CardContent className="pt-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-muted text-sm mb-2">Your Balance</p>
            <p className="text-5xl font-bold text-primary">{balance}</p>
            <p className="text-muted text-sm mt-2">Credits available</p>
          </div>
          <div className="text-6xl">💳</div>
        </div>
        <div className="mt-6 pt-6 border-t border-primary/20">
          <p className="text-sm text-muted">
            Each credit = <span className="font-semibold text-foreground">₦20</span> value
          </p>
          <p className="text-sm text-muted mt-1">
            Total wallet value: <span className="font-semibold text-primary text-lg">₦{balance * 20}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
