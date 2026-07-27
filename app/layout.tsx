import type React from "react"
import type { Metadata } from "next"
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { getServerSession } from "next-auth/next"
import { SessionProvider } from "@/components/providers/session-provider"
import "./globals.css"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-loaded",
  display: "swap",
})
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-loaded",
  display: "swap",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Rahmax Agent — Better content for African businesses",
  description: "Turn your products into ready-to-post social content, schedule your week, and keep selling from the channels you already use.",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession()

  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <SessionProvider session={session}>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </SessionProvider>
        <Analytics />
      </body>
    </html>
  )
}
