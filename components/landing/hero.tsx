import Link from "next/link"
import Image from "next/image"
import { ArrowUpRightIcon, PulseIcon } from "./brand-icons"

export default function Hero() {
  return (
    <section className="rx-hero" aria-labelledby="hero-title">
      <div className="rx-hero-copy">
        <div className="rx-hero-panel" data-hero="panel">
          <header className="rx-hero-panel-header">
            <span>Rahmax Agent / Create</span>
            <span>Content workspace</span>
          </header>

          <div className="rx-hero-panel-body">
            <p className="rx-eyebrow" data-hero="eyebrow">AI content support for African SMEs</p>
            <h1 id="hero-title" className="rx-hero-title" data-hero="title">
              Your products deserve better posts.
            </h1>
            <p className="rx-hero-intro" data-hero="intro">
              Turn your product photos into clear, on-brand content. Plan the week, publish across your socials, or simply ask Rahmax Agent on WhatsApp.
            </p>

            <div className="rx-hero-note" data-hero="note">
              <PulseIcon />
              <span>Made for the way small businesses sell on WhatsApp and Instagram.</span>
            </div>
          </div>

          <footer className="rx-hero-panel-footer rx-hero-actions" data-hero="actions">
            <Link className="rx-hero-panel-action" href="/auth/signup">
              Start creating free
              <ArrowUpRightIcon />
            </Link>
            <Link className="rx-hero-panel-link" href="#how-it-works">
              See how it works
            </Link>
          </footer>
        </div>
      </div>

      <figure className="rx-hero-visual" data-hero="visual">
        <Image
          src="/images/rahmax/hero-founder.jpg"
          alt="A Nigerian fashion business owner working from her phone in her studio"
          fill
          priority
          sizes="(max-width: 900px) 100vw, 48vw"
        />
        <figcaption data-hero="caption">
          <span>One product photo</span>
          <strong>A week of content</strong>
        </figcaption>
      </figure>

      <span className="rx-hero-index" aria-hidden="true">01 / 07</span>
    </section>
  )
}
