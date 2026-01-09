"use client"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { TestimonialsSection } from "@/components/testimonials-section"
import { MembershipSection } from "@/components/membership-section"
import { MapSection } from "@/components/map-section"
import { LoungeSection } from "@/components/lounge-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedProducts />
      <TestimonialsSection />
      <MembershipSection />
      <LoungeSection />
      <MapSection />
      <Footer />
    </main>
  )
}
