import Image from "next/image"
import { ChatFlowIcon, ComposeIcon, ConnectIcon } from "./brand-icons"

const steps = [
  {
    number: "01",
    title: "Bring your products",
    description: "Connect your social accounts and add the products you want customers to see.",
    icon: ConnectIcon,
  },
  {
    number: "02",
    title: "Shape the message",
    description: "Rahmax Agent creates product graphics, captions and short videos in your own business voice.",
    icon: ComposeIcon,
  },
  {
    number: "03",
    title: "Post your way",
    description: "Publish immediately, schedule the week, or request fresh content from WhatsApp when you are busy.",
    icon: ChatFlowIcon,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="rx-section rx-process" aria-labelledby="process-title">
      <div className="rx-process-heading" data-motion="process-heading">
        <p className="rx-eyebrow">A simpler content routine</p>
        <h2 id="process-title">From product photo to published post.</h2>
      </div>

      <figure className="rx-process-photo" data-motion="process-photo">
        <Image
          src="/images/rahmax/product-photo.jpg"
          alt="A small business owner photographing a handmade product"
          fill
          sizes="(max-width: 900px) 100vw, 46vw"
        />
        <figcaption>Start with what you already have.</figcaption>
      </figure>

      <ol className="rx-step-list">
        {steps.map((step) => {
          const Icon = step.icon
          return (
            <li key={step.number} data-motion="process-step">
              <span className="rx-step-number">{step.number}</span>
              <Icon className="rx-step-icon" />
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
