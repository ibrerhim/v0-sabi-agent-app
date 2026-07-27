import Link from "next/link"
import { ArrowUpRightIcon } from "@/components/landing/brand-icons"

const links = [
  { href: "/#features", label: "Product" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/auth/signin", label: "Sign in" },
]

export default function Footer() {
  return (
    <footer className="rx-footer">
      <div className="rx-footer-topline">
        <p>Content support for African SMEs.</p>
        <nav aria-label="Footer navigation">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>
      </div>

      <Link className="rx-footer-mast" href="/" aria-label="Rahmax Agent home">
        Rahmax Agent
        <ArrowUpRightIcon />
      </Link>

      <div className="rx-footer-bottom">
        <span>© {new Date().getFullYear()} Rahmax Agent</span>
        <span>Built in Nigeria for businesses across Africa.</span>
      </div>
    </footer>
  )
}
