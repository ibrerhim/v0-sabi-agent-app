export default function OverviewStats({ stats }: any) {
  const statCards = [
    {
      label: "Total Credits",
      value: stats.totalCredits,
      icon: "💳",
      bgColor: "bg-primary/10",
      textColor: "text-primary",
    },
    {
      label: "Remaining Credits",
      value: stats.remainingCredits,
      icon: "✨",
      bgColor: "bg-success/10",
      textColor: "text-success",
    },
    {
      label: "Posts Generated",
      value: stats.postsGenerated,
      icon: "📝",
      bgColor: "bg-info/10",
      textColor: "text-info",
    },
    {
      label: "Scheduled Posts",
      value: stats.scheduledPosts,
      icon: "📅",
      bgColor: "bg-secondary/10",
      textColor: "text-secondary-dark",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((card, index) => (
        <div key={index} className={`card ${card.bgColor}`}>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted mb-1">{card.label}</p>
              <p className={`text-3xl font-bold ${card.textColor}`}>{card.value}</p>
            </div>
            <span className="text-2xl">{card.icon}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
