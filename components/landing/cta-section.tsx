import Link from "next/link"
import { ArrowUpRightIcon } from "./brand-icons"

export default function CTASection() {
  return (
    <section className="rx-final-cta" aria-labelledby="cta-title">
      <p className="rx-eyebrow">Your next post can start here</p>
      <h2 id="cta-title">Bring the product.<br />We&apos;ll help with the content.</h2>
      <div className="rx-final-cta-actions">
        <Link className="rx-button rx-button-light" href="/auth/signup">
          Start creating free
          <ArrowUpRightIcon />
        </Link>
        <span>Free starter credits · No card required</span>
      </div>
    </section>
  )
}
