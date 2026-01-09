"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Shield, User } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDemoOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
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

          {/* Nav Items */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Demo Dashboard Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <motion.button
                onClick={() => setIsDemoOpen(!isDemoOpen)}
                className={cn(
                  "flex items-center gap-1.5 px-3 sm:px-4 py-2 font-medium text-sm tracking-wide transition-all rounded-lg",
                  isScrolled
                    ? "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                    : "text-[#f5f0e8]/80 hover:text-[#f5f0e8] hover:bg-white/10",
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="hidden sm:inline">Demo</span>
                <span className="sm:hidden">Demo</span>
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform",
                  isDemoOpen && "rotate-180"
                )} />
              </motion.button>

              <AnimatePresence>
                {isDemoOpen && (
                  <motion.div
                    className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-neutral-200 overflow-hidden"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div className="p-2">
                      <p className="px-3 py-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                        Demo Dashboards
                      </p>
                      <Link
                        href="/dashboard/admin"
                        onClick={() => setIsDemoOpen(false)}
                        className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-neutral-100 transition-colors group"
                      >
                        <div className="w-10 h-10 bg-[#1a3329] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                          <Shield className="w-5 h-5 text-[#f5f0e8]" />
                        </div>
                        <div>
                          <p className="font-semibold text-neutral-900 text-sm">Owner Dashboard</p>
                          <p className="text-xs text-neutral-500">Manage members & analytics</p>
                        </div>
                      </Link>
                      <Link
                        href="/dashboard"
                        onClick={() => setIsDemoOpen(false)}
                        className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-neutral-100 transition-colors group"
                      >
                        <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-neutral-900 text-sm">Member Portal</p>
                          <p className="text-xs text-neutral-500">View pass & offers</p>
                        </div>
                      </Link>
                    </div>
                    <div className="border-t border-neutral-100 p-2">
                      <p className="px-3 py-2 text-xs text-neutral-400 text-center">
                        No authentication required
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/sign-in"
                className={cn(
                  "px-3 sm:px-5 py-2 font-medium text-sm tracking-wide transition-all hidden sm:inline-block",
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
                  "px-4 sm:px-6 py-2.5 sm:py-3 font-semibold text-xs sm:text-sm tracking-wide uppercase transition-all",
                  isScrolled
                    ? "bg-[#1a3329] text-[#f5f0e8] hover:bg-[#1a3329]/90"
                    : "bg-[#f5f0e8] text-[#1a3329] hover:bg-white",
                )}
              >
                <span className="hidden sm:inline">Become a Member</span>
                <span className="sm:hidden">Join</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
