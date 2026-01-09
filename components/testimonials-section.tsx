"use client"

import { motion } from "framer-motion"
import { Reveal } from "./reveal"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content: "Really cool place, great bud.",
    author: "Ed",
  },
  {
    id: 2,
    content: "Immaculate vibes, spectacular flower, and extraordinary service!",
    author: "Kayla",
  },
  {
    id: 3,
    content: "Very cozy spot in Sea Point main road opposite Engen.",
    author: "Josh",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-neutral-900 mb-4 lg:text-5xl">
              What our <span className="italic font-normal">members say</span>
            </h2>
          </div>
        </Reveal>

        {/* Scrolling testimonials */}
        <div className="relative">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -100 * testimonials.length * 2],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {/* Double the testimonials for seamless loop */}
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-80 md:w-96"
              >
                <div className="bg-[#faf9f7] p-8 h-full border border-neutral-200">
                  <Quote className="w-8 h-8 text-[#1a3329]/20 mb-5" />
                  <p className="text-neutral-600 text-lg mb-5 leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <p className="text-neutral-900 font-semibold tracking-wide">— {testimonial.author}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
