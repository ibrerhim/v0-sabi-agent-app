import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/sabi-20agent-20-284-29.png"
                alt="Sabi Agent Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-bold">Sabi Agent</span>
            </div>
            <p className="text-sm text-muted">AI content creation for African SMEs</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#features" className="text-muted hover:text-foreground transition-smooth">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-muted hover:text-foreground transition-smooth">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-muted hover:text-foreground transition-smooth">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted hover:text-foreground transition-smooth">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted hover:text-foreground transition-smooth">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted hover:text-foreground transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted hover:text-primary transition-smooth">
                Twitter
              </a>
              <a href="#" className="text-muted hover:text-primary transition-smooth">
                LinkedIn
              </a>
              <a href="#" className="text-muted hover:text-primary transition-smooth">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted">© 2025 Sabi Agent. All rights reserved.</p>
          <p className="text-sm text-muted">Built for African SMEs with ❤️</p>
        </div>
      </div>
    </footer>
  )
}
