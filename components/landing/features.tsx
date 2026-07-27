import Image from "next/image"
import {
  CatalogIcon,
  ChatFlowIcon,
  ComposeIcon,
  ScheduleIcon,
  VoiceIcon,
} from "./brand-icons"

const capabilities = [
  {
    icon: CatalogIcon,
    title: "One product catalogue",
    description: "Add your products once and reuse the right details whenever you create.",
  },
  {
    icon: VoiceIcon,
    title: "Your business voice",
    description: "Keep captions clear, familiar and suited to the people you actually sell to.",
  },
  {
    icon: ScheduleIcon,
    title: "A calmer content week",
    description: "See what is ready, what is scheduled and what still needs your approval.",
  },
]

export default function Features() {
  return (
    <section id="features" className="rx-features" aria-labelledby="features-title">
      <div className="rx-feature-intro rx-section">
        <p className="rx-eyebrow">Your always-ready content desk</p>
        <h2 id="features-title">Good content, without becoming a full-time marketer.</h2>
        <p>
          Rahmax Agent keeps the work practical: your products, your voice, and a clear path from idea to published post.
        </p>
      </div>

      <div className="rx-feature-story rx-feature-story-compose">
        <div className="rx-feature-copy">
          <span className="rx-feature-icon"><ComposeIcon /></span>
          <p className="rx-eyebrow">Create</p>
          <h3>Give every product a strong story.</h3>
          <p>
            Upload a photo and product details. Rahmax Agent turns them into a polished graphic, caption or short video that is ready for your customers.
          </p>
          <ul>
            <li>Graphics, captions and short videos</li>
            <li>Content shaped around each product</li>
            <li>Review before anything goes live</li>
          </ul>
        </div>

        <div className="rx-compose-surface" aria-label="Example Rahmax Agent content workspace">
          <div className="rx-compose-toolbar">
            <span>Rahmax Agent / Create</span>
            <span>Draft saved</span>
          </div>
          <div className="rx-compose-canvas">
            <span className="rx-compose-product">New arrival</span>
            <strong>Make the first look count.</strong>
            <p>Freshly made. Carefully finished. Ready for your next outing.</p>
          </div>
          <div className="rx-compose-actions">
            <span>Caption</span><span>Graphic</span><span>Short video</span>
          </div>
        </div>
      </div>

      <div className="rx-feature-story rx-feature-story-schedule">
        <figure className="rx-feature-image" data-motion="schedule-photo">
          <Image
            src="/images/rahmax/shop-owner.jpg"
            alt="A Nigerian beauty business owner planning content from her phone"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
          />
        </figure>
        <div className="rx-feature-copy">
          <span className="rx-feature-icon"><ScheduleIcon /></span>
          <p className="rx-eyebrow">Schedule</p>
          <h3>Plan once. Keep showing up.</h3>
          <p>
            Build a simple content calendar around launches, restocks and everyday sales. You stay in control while Rahmax Agent handles the repeat work.
          </p>
        </div>
      </div>

      <div className="rx-whatsapp-band">
        <div className="rx-whatsapp-mark" aria-hidden="true"><ChatFlowIcon /></div>
        <div>
          <p className="rx-eyebrow">WhatsApp-first</p>
          <h3>Ask from the chat you already use.</h3>
        </div>
        <p>
          Need a quick restock post while customers are waiting? Message Rahmax Agent, choose the product and get a draft without opening another complicated tool.
        </p>
      </div>

      <div className="rx-capability-ledger rx-section" aria-label="Rahmax Agent capabilities">
        {capabilities.map((capability, index) => {
          const Icon = capability.icon
          return (
            <article key={capability.title}>
              <span className="rx-ledger-number">0{index + 1}</span>
              <Icon />
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
