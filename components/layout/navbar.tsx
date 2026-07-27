"use client"

import Link from "next/link"
import { signOut, useSession } from "next-auth/react"
import { useEffect, useState } from "react"

export default function Navbar() {
  const { data: session } = useSession()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav className={`rx-navbar${scrolled ? " is-scrolled" : ""}`} aria-label="Primary navigation">
      <Link className="rx-wordmark" href="/" aria-label="Rahmax Agent home">
        Rahmax <span>Agent</span>
      </Link>

      <span className="rx-nav-descriptor">AI content support for African SMEs</span>

      <div className="rx-nav-actions">
        {session ? (
          <>
            <Link className="rx-nav-link" href="/dashboard">Dashboard</Link>
            <button className="rx-nav-button" type="button" onClick={() => signOut()}>Sign out</button>
          </>
        ) : (
          <>
            <Link className="rx-nav-link" href="/auth/signin">Sign in</Link>
            <Link className="rx-nav-button" href="/auth/signup">Start free</Link>
          </>
        )}
      </div>
    </nav>
  )
}
