import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CreditHistoryProps {
  history: Array<{
    id: number
    type: "spent" | "earned" | "purchased"
    amount: number
    description: string
    date: string
  }>
}

export default function CreditHistory({ history }: CreditHistoryProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case "spent":
        return "📤"
      case "earned":
        return "🎁"
      case "purchased":
        return "💳"
      default:
        return "📊"
    }
  }

  const getColor = (type: string) => {
    switch (type) {
      case "spent":
        return "text-error"
      case "earned":
        return "text-success"
      case "purchased":
        return "text-primary"
      default:
        return "text-foreground"
    }
  }

  const getSign = (type: string) => {
    return type === "spent" ? "-" : "+"
  }

  return (
    <Card className="card-lg">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {history.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 rounded-lg bg-muted-light/50 hover:bg-muted-light transition-smooth"
            >
              <div className="flex items-center gap-3 flex-1">
                <span className="text-2xl">{getIcon(item.type)}</span>
                <div className="flex-1">
                  <p className="font-medium text-foreground text-sm">{item.description}</p>
                  <p className="text-xs text-muted">{item.date}</p>
                </div>
              </div>
              <p className={`font-bold text-lg ${getColor(item.type)}`}>
                {getSign(item.type)}
                {item.amount}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
