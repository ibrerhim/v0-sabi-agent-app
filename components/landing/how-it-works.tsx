"use client"

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Connect Your Socials",
      description: "Simple onboarding — link WhatsApp or Instagram and upload your products.",
      icon: "🔗",
      color: "from-primary/10 to-primary/5",
    },
    {
      number: 2,
      title: "AI Generates Content",
      description: "AI creates product-specific content and posts it instantly across platforms.",
      icon: "✨",
      color: "from-success/10 to-success/5",
    },
    {
      number: 3,
      title: "Chat on WhatsApp",
      description: "Feeling lazy? Ask Sabi Agent on WhatsApp to handle everything for you.",
      icon: "💬",
      color: "from-primary/10 to-primary/5",
    },
  ]

  return (
    <section className="w-full py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">How It Works</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Simple 3-step process to automate your content strategy
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              {/* Card */}
              <div
                className={`h-full rounded-2xl border border-border bg-gradient-to-br ${step.color} shadow-soft p-8 flex flex-col items-center text-center space-y-4 transition-smooth hover:shadow-soft-lg`}
              >
                {/* Icon */}
                <div className="text-5xl drop-shadow-sm">{step.icon}</div>

                {/* Step Number */}
                <div className="inline-block w-12 h-12 rounded-full bg-primary/20 text-primary font-bold text-lg flex items-center justify-center">
                  {step.number}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>

              {/* Connector Arrow */}
              {step.number < 3 && (
                <div className="hidden md:flex absolute top-1/2 -right-12 transform -translate-y-1/2 items-center justify-center">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-success"></div>
                  <div className="w-3 h-3 rounded-full bg-primary absolute -right-1.5"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
