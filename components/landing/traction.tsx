"use client"

export default function Traction() {
  const stats = [
    {
      number: "150+",
      label: "SMEs Onboarded",
      icon: "👥",
    },
    {
      number: "3,500+",
      label: "AI Posts Created",
      icon: "📝",
    },
    {
      number: "₦12M",
      label: "Pre-seed Raised",
      icon: "💰",
    },
    {
      number: "450k",
      label: "Pilot Ad Revenue",
      icon: "📈",
    },
  ]

  return (
    <section className="w-full py-20 bg-muted-light/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Traction</h2>
          <p className="text-lg text-muted">Proven track record helping African SMEs scale</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="card text-center hover:shadow-soft-lg transition-smooth">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <p className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</p>
              <p className="text-muted text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
