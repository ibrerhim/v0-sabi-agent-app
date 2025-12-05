"use client"

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Connect Your Socials",
      description: "Simple onboarding — link WhatsApp or Instagram and upload your products.",
      icon: "🔗",
    },
    {
      number: 2,
      title: "AI Generates Content",
      description: "AI creates product-specific content and posts it instantly across platforms.",
      icon: "✨",
    },
    {
      number: 3,
      title: "Chat on WhatsApp",
      description: "Feeling lazy? Ask Sabi Agent on WhatsApp to handle everything for you.",
      icon: "💬",
    },
  ]

  return (
    <section className="w-full py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Simple 3-step process to automate your content strategy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="card-lg text-center">
                <div className="text-5xl mb-4">{step.icon}</div>
                <div className="inline-block w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.description}</p>
              </div>

              {/* Connector */}
              {step.number < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-1 bg-gradient-to-r from-primary to-secondary"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
