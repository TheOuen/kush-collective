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
        "backdrop-blur-md border-b border-white/[0.02]",
        isScrolled ? "bg-white/90" : "bg-transparent",
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
                  "text-lg lg:text-xl font-bold tracking-tight transition-colors",
                  isScrolled ? "text-neutral-900" : "text-white",
                )}>
                  Kush Collective
                </span>
                <span className={cn(
                  "text-[10px] lg:text-xs font-light tracking-wide transition-colors hidden sm:block",
                  isScrolled ? "text-neutral-500" : "text-white/70",
                )}>
                  Private Members Collective
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/sign-in"
                className={cn(
                  "px-4 py-2 rounded-full font-medium text-sm transition-all hidden sm:inline-block",
                  isScrolled
                    ? "text-neutral-700 hover:text-neutral-900"
                    : "text-white/90 hover:text-white",
                )}
              >
                Sign in
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/sign-up"
                className={cn(
                  "px-5 py-2.5 rounded-full font-medium text-sm transition-all",
                  isScrolled
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-white text-neutral-900 hover:bg-white/90",
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
