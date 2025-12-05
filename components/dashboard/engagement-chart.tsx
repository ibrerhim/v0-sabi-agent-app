"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function EngagementChart({ data }: any) {
  return (
    <Card className="card-lg">
      <CardHeader>
        <CardTitle>Engagement Growth</CardTitle>
        <CardDescription>Social media engagement trend</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="month" stroke="var(--color-muted)" />
            <YAxis stroke="var(--color-muted)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-background)",
                border: "1px solid var(--color-border)",
                borderRadius: "0.5rem",
              }}
            />
            <Line
              type="monotone"
              dataKey="engagement"
              stroke="var(--color-secondary-dark)"
              dot={{ fill: "var(--color-secondary-dark)" }}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
