"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white border-b border-neutral-200" : "bg-transparent",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div className="flex-shrink-0" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <Link
              href="/"
              className="flex items-center gap-3 transition-colors"
              aria-label="Kush Collective Home"
            >
              <Image
                src="/kush-logo.png"
                alt="Kush Collective Logo"
                width={48}
                height={48}
                className="w-10 h-10 lg:w-12 lg:h-12"
              />
              <div className="flex flex-col">
                <span className={cn(
                  "font-[family-name:var(--font-playfair)] text-lg lg:text-xl font-bold tracking-tight transition-colors",
                  isScrolled ? "text-neutral-900" : "text-[#f5f0e8]",
                )}>
                  Kush Collective
                </span>
                <span className={cn(
                  "text-[10px] lg:text-xs tracking-[0.15em] uppercase transition-colors hidden sm:block",
                  isScrolled ? "text-neutral-400" : "text-[#d4c4a8]",
                )}>
                  Private Members Collective
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/sign-in"
                className={cn(
                  "px-5 py-2 font-medium text-sm tracking-wide transition-all hidden sm:inline-block",
                  isScrolled
                    ? "text-neutral-600 hover:text-neutral-900"
                    : "text-[#f5f0e8]/80 hover:text-[#f5f0e8]",
                )}
              >
                Sign in
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/sign-up"
                className={cn(
                  "px-6 py-3 font-semibold text-sm tracking-wide uppercase transition-all",
                  isScrolled
                    ? "bg-[#1a3329] text-[#f5f0e8] hover:bg-[#1a3329]/90"
                    : "bg-[#f5f0e8] text-[#1a3329] hover:bg-white",
                )}
              >
                Become a Member
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
