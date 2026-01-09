import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Kush Collective — Cannabis done right.",
  description: "For the connoisseurs. For the casuals. For the culture. A cozy, premium cannabis club in Sea Point, Cape Town. Private Members Collective 18+.",
  alternates: {
    canonical: "https://kushcannabiscollective.com/",
  },
  openGraph: {
    siteName: "Kush Collective",
    title: "Cannabis done right. | Kush Collective",
    description: "For the connoisseurs. For the casuals. For the culture. A cozy, premium cannabis club in Sea Point, Cape Town.",
    type: "website",
    url: "https://kushcannabiscollective.com/",
    images: [
      {
        url: "/kush-hero.jpg",
        alt: "Kush Collective — Premium cannabis club in Cape Town",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cannabis done right. | Kush Collective",
    description: "For the connoisseurs. For the casuals. For the culture. A cozy, premium cannabis club in Sea Point, Cape Town.",
    images: [
      {
        url: "/kush-hero.jpg",
        alt: "Kush Collective — Premium cannabis club in Cape Town",
      },
    ],
    site: "@thekushclubza",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className="font-sans bg-neutral-50 text-neutral-900 overflow-x-hidden">{children}</body>
    </html>
  )
}
