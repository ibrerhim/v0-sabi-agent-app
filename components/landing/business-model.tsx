import Link from "next/link"
import { ArrowUpRightIcon, CreditIcon } from "./brand-icons"

const included = [
  "No monthly subscription",
  "Use credits only when you create",
  "Review every draft before publishing",
  "Earn extra credits through referrals and sponsor offers",
]

export default function BusinessModel() {
  return (
    <section id="pricing" className="rx-pricing" aria-labelledby="pricing-title">
      <div className="rx-pricing-heading">
        <p className="rx-eyebrow">Straightforward pricing</p>
        <h2 id="pricing-title">Pay for the content you need. Nothing more.</h2>
      </div>

      <div className="rx-pricing-figure">
        <CreditIcon />
        <span className="rx-price"><strong>₦20</strong> / credit</span>
        <p>Start small, top up when business is moving, and never carry an expensive monthly plan.</p>
      </div>

      <div className="rx-pricing-details">
        <ul>
          {included.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <Link className="rx-button rx-button-dark" href="/auth/signup">
          Open a free account
          <ArrowUpRightIcon />
        </Link>
        <p className="rx-pricing-footnote">Free starter credits. No card needed to create your account.</p>
      </div>
    </section>
  )
}
