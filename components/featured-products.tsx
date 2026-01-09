"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function FeaturedProducts() {
  return (
    <section className="py-24 lg:py-36 bg-[#faf9f7]" id="about">
      <div className="container-custom">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl text-neutral-900 mb-6 lg:text-6xl">
            About our <span className="italic font-normal">club</span>
          </h2>
          <p className="text-lg text-neutral-500 max-w-3xl mx-auto leading-relaxed">
            Our club is a cozy, premium space where anyone – from seasoned enjoyers to those curious to explore – can feel welcomed, acknowledged, and at ease. We offer a relaxed, social environment that feels both elevated and effortless, with thoughtful touches throughout and a balcony experience that sets the tone.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {/* Flower */}
          <motion.div
            className="h-full"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <div className="bg-white overflow-hidden group h-full flex flex-col">
              <div className="relative h-72 overflow-hidden flex-shrink-0">
                <Image
                  src="/kush-flower.jpg"
                  alt="Premium Flower"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow border border-t-0 border-neutral-200">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-neutral-900 mb-3">Flower</h3>
                <p className="text-neutral-500 leading-relaxed">
                  Premium, hand-selected flower crafted for a smooth, elevated experience.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Accessories */}
          <motion.div
            className="h-full"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <div className="bg-white overflow-hidden group h-full flex flex-col">
              <div className="relative h-72 overflow-hidden flex-shrink-0">
                <Image
                  src="/kush-accessories.jpg"
                  alt="Accessories"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow border border-t-0 border-neutral-200">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-neutral-900 mb-3">Accessories</h3>
                <p className="text-neutral-500 leading-relaxed">
                  Essential accessories to enhance your experience with style and convenience.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Work & Lounge */}
          <motion.div
            className="h-full"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <div className="bg-white overflow-hidden group h-full flex flex-col">
              <div className="relative h-72 overflow-hidden flex-shrink-0">
                <Image
                  src="/kush-lounge.jpg"
                  alt="Work & Lounge"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow border border-t-0 border-neutral-200">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-neutral-900 mb-3">Work & Lounge</h3>
                <p className="text-neutral-500 leading-relaxed">
                  Relax, create, and connect in our comfortable, thoughtfully designed space.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
