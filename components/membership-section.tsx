"use client"

import { motion } from "framer-motion"
import { Tv, Monitor, Wifi, Wind, Utensils, Coffee } from "lucide-react"
import Image from "next/image"

const amenities = [
  { icon: Tv, label: "TV Lounge" },
  { icon: Monitor, label: "Workspace" },
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Wind, label: "Balcony" },
  { icon: Utensils, label: "Food Menu" },
  { icon: Coffee, label: "Refreshments" },
]

export function MembershipSection() {
  return (
    <section className="py-24 lg:py-36 bg-white" id="membership">
      <div className="container-custom">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl text-neutral-900 mb-4 lg:text-6xl">
            Become a <span className="italic font-normal">member</span>
          </h2>
        </motion.div>

        {/* Membership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-24">
          {/* Day Pass */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#faf9f7] overflow-hidden h-full flex flex-col">
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <Image
                  src="/kush-day-pass.webp"
                  alt="Day Pass"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex-grow border border-t-0 border-neutral-200">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-neutral-900 mb-3">Day Pass</h3>
                <p className="text-neutral-500 leading-relaxed">
                  Gain full access to our club for a single day. Enjoy a premium experience and the ability to withdraw flower during your visit.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 30-Day Pass */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#faf9f7] overflow-hidden border-2 border-[#1a3329] h-full flex flex-col">
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <Image
                  src="/kush-monthly-pass.webp"
                  alt="30-Day Pass"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#1a3329] text-[#f5f0e8] text-xs font-semibold tracking-wider uppercase px-4 py-2">
                  Most Popular
                </div>
              </div>
              <div className="p-8 flex-grow">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-neutral-900 mb-3">30-Day Pass</h3>
                <p className="text-neutral-500 leading-relaxed">
                  Unlimited access to our club for 30 days from the date of purchase. Enjoy all amenities, exclusive member benefits and a premium experience whenever you visit.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Club Amenities */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-neutral-900 lg:text-3xl">
            Club amenities
          </h3>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 lg:gap-6 max-w-5xl mx-auto">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#faf9f7] p-6 text-center aspect-square flex flex-col items-center justify-center border border-neutral-200">
                <div className="w-12 h-12 bg-[#1a3329] rounded-sm flex items-center justify-center mb-4">
                  <amenity.icon className="w-6 h-6 text-[#f5f0e8]" strokeWidth={1.5} />
                </div>
                <p className="text-neutral-900 text-sm font-medium">{amenity.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
