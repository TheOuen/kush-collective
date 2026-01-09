"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

const membershipOptions = [
  {
    id: "day",
    name: "Day Pass",
    price: "R30",
    description: "Perfect for first-time visitors",
  },
  {
    id: "month",
    name: "30-Day Pass",
    price: "R100",
    description: "Unlimited access for a full month",
    popular: true,
  },
]

export function LoungeSection() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  return (
    <section className="py-24 lg:py-36 bg-[#1a3329] text-[#f5f0e8]">
      <div className="container-custom">
        <AnimatePresence mode="wait">
          {!selectedOption ? (
            <motion.div
              key="initial"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.p
                className="text-[#d4c4a8] font-medium tracking-[0.2em] uppercase text-sm mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Private Members Collective
              </motion.p>

              <h2 className="font-[family-name:var(--font-playfair)] text-6xl md:text-7xl lg:text-9xl font-bold mb-8 tracking-tight">
                Kush Collective
              </h2>

              <p className="text-lg md:text-xl text-[#f5f0e8]/70 max-w-2xl mx-auto mb-16 leading-relaxed">
                Your space to unwind. A cozy sanctuary designed for relaxation, connection, and elevated experiences.
              </p>

              {/* Membership Options */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center max-w-xl mx-auto">
                {membershipOptions.map((option) => (
                  <motion.button
                    key={option.id}
                    onClick={() => setSelectedOption(option.id)}
                    className={`relative flex-1 p-8 rounded-sm border text-left transition-all duration-300 ${
                      option.popular
                        ? "border-[#f5f0e8] bg-[#f5f0e8]/10"
                        : "border-[#f5f0e8]/30 bg-[#f5f0e8]/5 hover:border-[#f5f0e8]/60"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {option.popular && (
                      <span className="absolute -top-3 left-6 px-4 py-1 bg-[#f5f0e8] text-[#1a3329] text-xs font-semibold tracking-wider uppercase">
                        Popular
                      </span>
                    )}
                    <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-2">{option.price}</p>
                    <p className="font-semibold text-[#f5f0e8] mb-1">{option.name}</p>
                    <p className="text-sm text-[#f5f0e8]/60">{option.description}</p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="selected"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="max-w-md mx-auto text-center"
            >
              <motion.div
                className="w-20 h-20 bg-[#f5f0e8] rounded-full flex items-center justify-center mx-auto mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
              >
                <Check className="w-10 h-10 text-[#1a3329]" />
              </motion.div>

              <h3 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4">
                {selectedOption === "day" ? "Day Pass" : "30-Day Pass"} Selected
              </h3>

              <p className="text-[#f5f0e8]/70 mb-10 text-lg">
                Create your account to complete your membership and gain instant access to Kush Collective.
              </p>

              <div className="space-y-5">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={`/sign-up?plan=${selectedOption}`}
                    className="w-full inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#f5f0e8] text-[#1a3329] font-semibold tracking-wide uppercase text-sm hover:bg-[#f5f0e8]/90 transition-colors"
                  >
                    Create Account
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>

                <button
                  onClick={() => setSelectedOption(null)}
                  className="text-[#f5f0e8]/50 hover:text-[#f5f0e8] transition-colors text-sm tracking-wide"
                >
                  Choose a different option
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
