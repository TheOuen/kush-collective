"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { MapPin, Clock } from "lucide-react"
import { Reveal } from "./reveal"
import { BlurPanel } from "./blur-panel"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 0.95])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    return (
      <span>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + index * 0.03,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            style={{ display: char === " " ? "inline" : "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    )
  }

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Background Image with Cinematic Effects */}
      <motion.div
        className="absolute inset-0"
        style={{ scale: imageScale, y: imageY }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <Image
          src="/kush-hero.jpg"
          alt="Kush Collective - Premium cannabis club in Sea Point, Cape Town"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex items-center justify-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="container-custom text-center text-white">
          <motion.p
            className="text-[#d4c4a8] font-medium tracking-[0.25em] uppercase text-sm mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            Private Members Collective
          </motion.p>

          <Reveal>
            <h1 className="font-[family-name:var(--font-playfair)] text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none tracking-tight mb-8">
              <AnimatedText text="Kush Collective" delay={0.5} />
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <motion.p
              className="text-lg md:text-xl text-white/70 mb-14 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              For the connoisseurs. For the casuals. For the culture.
            </motion.p>
          </Reveal>

          <Reveal delay={0.4}>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <a
                href="#about"
                className="px-10 py-4 bg-[#f5f0e8] text-[#1a3329] font-semibold tracking-wide uppercase text-sm hover:bg-white transition-all"
              >
                Explore the Club
              </a>
              <a
                href="#membership"
                className="px-10 py-4 bg-transparent border border-[#f5f0e8]/60 text-[#f5f0e8] font-semibold tracking-wide uppercase text-sm hover:bg-white/10 hover:border-[#f5f0e8] transition-all"
              >
                Become a Member
              </a>
            </motion.div>
          </Reveal>
        </div>
      </motion.div>

      {/* Info Strip */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <BlurPanel className="mx-6 mb-6 px-8 py-4 bg-black/30 backdrop-blur-md border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-white/80">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#d4c4a8]" />
              <span className="text-sm tracking-wide">Shop 2, 323 Main Rd, Sea Point</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-[#d4c4a8]" />
              <span className="text-sm tracking-wide">Sun-Thu 10AM-12AM · Fri-Sat 10AM-2AM</span>
            </div>
          </div>
        </BlurPanel>
      </motion.div>
    </section>
  )
}
