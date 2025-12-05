"use client"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Chioma Okafor",
      role: "Fashion Boutique Owner",
      image: "👩‍💼",
      content:
        "Sabi Agent saves me 2 hours daily. I just upload my products and the AI handles everything. My sales increased by 40%!",
    },
    {
      name: "Emeka Adeyemi",
      role: "Food & Beverage Entrepreneur",
      image: "👨‍💼",
      content:
        "Finally, a tool built for African SMEs. The WhatsApp integration is genius. I can request posts while on the go.",
    },
    {
      name: "Adeola Bello",
      role: "E-commerce Store Manager",
      image: "👩‍💼",
      content:
        "The credit system is so flexible. I started free with ads, now I buy credits when I need bulk posting. Perfect for our growth!",
    },
  ]

  return (
    <section id="testimonials" className="w-full py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Loved by SME Founders</h2>
          <p className="text-lg text-muted">See what our users are saying</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-lg border-2 border-primary/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted italic">"{testimonial.content}"</p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary">
                    ⭐
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
