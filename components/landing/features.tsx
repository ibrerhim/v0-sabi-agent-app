"use client"

export default function Features() {
  const features = [
    {
      icon: "🤖",
      title: "AI Content Creation",
      description: "Smart AI generates compelling product descriptions and captions tailored to your audience.",
    },
    {
      icon: "📅",
      title: "Auto Scheduling",
      description: "Schedule posts at optimal times. Let Sabi Agent handle the timing for maximum engagement.",
    },
    {
      icon: "💬",
      title: "WhatsApp Chat",
      description: "Request content directly via WhatsApp. Get instant AI-generated posts on demand.",
    },
    {
      icon: "💳",
      title: "Credit System",
      description: "₦20 per credit. Transparent pricing. Pay only for what you use. No hidden fees.",
    },
    {
      icon: "📦",
      title: "Product Catalog",
      description: "Upload products once. AI learns and creates contextual content automatically.",
    },
    {
      icon: "🌐",
      title: "Multi-Platform",
      description: "Post to Instagram, Twitter, Facebook, and more from one dashboard.",
    },
  ]

  return (
    <section id="features" className="w-full py-20 bg-muted-light/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Powerful Features</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">Everything you need to succeed on social media</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="card hover:shadow-soft-lg transition-smooth">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
