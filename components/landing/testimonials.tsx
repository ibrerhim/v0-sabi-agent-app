import { ChatFlowIcon, PulseIcon, VoiceIcon } from "./brand-icons"

const differences = [
  {
    icon: VoiceIcon,
    title: "Context before content",
    text: "Rahmax Agent works from your real products, customers and brand voice—not generic marketing copy.",
  },
  {
    icon: ChatFlowIcon,
    title: "Convenience without clutter",
    text: "Create from the dashboard or ask through WhatsApp, depending on what your day allows.",
  },
  {
    icon: PulseIcon,
    title: "Built for steady momentum",
    text: "Move from one-off posting to a simple, repeatable routine you can actually maintain.",
  },
]

export default function Testimonials() {
  return (
    <section id="why-rahmax" className="rx-difference rx-section" aria-labelledby="difference-title">
      <div className="rx-difference-heading">
        <p className="rx-eyebrow">Why Rahmax Agent</p>
        <h2 id="difference-title">Built around how business happens here.</h2>
      </div>

      <div className="rx-difference-list">
        {differences.map((item, index) => {
          const Icon = item.icon
          return (
            <article key={item.title}>
              <span>0{index + 1}</span>
              <Icon />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
