"use client"

import { motion } from "framer-motion"
import { Reveal } from "./reveal"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content: "Really cool place, great bud 👍",
    author: "Ed",
  },
  {
    id: 2,
    content: "Immaculate vibes, spectacular flower, and extraordinary service!",
    author: "Kayla",
  },
  {
    id: 3,
    content: "Very cozy spot in Sea Point main road opposite Engen. 🤍",
    author: "Josh",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl text-neutral-900 mb-4 lg:text-5xl">
              What our <span className="italic font-light">members say</span>
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
                duration: 20,
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
                <div className="bg-neutral-50 rounded-2xl p-6 h-full border border-neutral-100">
                  <Quote className="w-8 h-8 text-green-500/30 mb-4" />
                  <p className="text-neutral-700 text-lg mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <p className="text-neutral-900 font-semibold">— {testimonial.author}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
