"use client"

export default function BusinessModel() {
  return (
    <section id="pricing" className="w-full py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Simple Pricing Model</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Pay as you grow. Start free, scale up whenever you're ready
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Content Credits Card */}
          <div className="card-lg border-2 border-primary">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Pay Per Post
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Content Credits</h3>
            <p className="text-muted mb-6">Use credits for every post or AI generation request</p>

            <div className="mb-6">
              <p className="text-4xl font-bold text-foreground">
                ₦20 <span className="text-lg text-muted">/credit</span>
              </p>
              <p className="text-sm text-muted mt-2">1 credit = 1 AI-generated post</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span className="text-foreground">Flexible pay-as-you-go</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span className="text-foreground">No subscription needed</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span className="text-foreground">Buy in bulk for discounts</span>
              </li>
            </ul>

            <button className="w-full py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-smooth">
              Buy Credits
            </button>
          </div>

          {/* Ad-Supported Card */}
          <div className="card-lg border-2 border-secondary/50">
            <div className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary-dark text-sm font-medium mb-4">
              Free
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Earn Free Credits</h3>
            <p className="text-muted mb-6">Watch ads and earn credits to post for free</p>

            <div className="mb-6">
              <p className="text-4xl font-bold text-foreground">
                100+ <span className="text-lg text-muted">/month</span>
              </p>
              <p className="text-sm text-muted mt-2">By watching ads and referrals</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span className="text-foreground">Get free credits daily</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span className="text-foreground">Refer friends for bonuses</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span className="text-foreground">Complete challenges to earn more</span>
              </li>
            </ul>

            <button className="w-full py-3 rounded-lg border-2 border-secondary text-secondary-dark font-medium hover:bg-secondary/10 transition-smooth">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
