"use client"

import { motion } from "framer-motion"
import { Reveal } from "./reveal"
import { MapPin, Clock, Mail, Instagram } from "lucide-react"

export function MapSection() {
  return (
    <section className="py-24 lg:py-36 bg-white" id="location">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl text-neutral-900 mb-4 lg:text-6xl">
              Find <span className="italic font-normal">us</span>
            </h2>
            <p className="text-lg text-neutral-500">
              Visit our cozy spot in Sea Point, Cape Town
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <Reveal>
            <motion.div
              className="relative h-80 lg:h-full min-h-[400px] overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.8!2d18.3842!3d-33.9167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc675f4e8b8a1b%3A0x9c9c9c9c9c9c9c9c!2s323%20Main%20Rd%2C%20Sea%20Point%2C%20Cape%20Town%2C%208005!5e0!3m2!1sen!2sza!4v1699999999999!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale"
              />
            </motion.div>
          </Reveal>

          {/* Contact Info */}
          <Reveal delay={0.1}>
            <div className="bg-neutral-50 p-10 lg:p-12 h-full">
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-neutral-900 mb-10">Visit Us</h3>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-[#1a3329] rounded-sm flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#f5f0e8]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1 tracking-wide">Address</h4>
                    <p className="text-neutral-600 leading-relaxed">
                      Shop 2, 323 Main Rd<br />
                      Sea Point, Cape Town, 8005
                    </p>
                    <p className="text-neutral-400 text-sm mt-2">
                      Opposite Engen garage
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-[#1a3329] rounded-sm flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#f5f0e8]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1 tracking-wide">Hours</h4>
                    <p className="text-neutral-600 leading-relaxed">
                      Sunday - Thursday: 10:00 AM – 12:00 AM<br />
                      Friday - Saturday: 10:00 AM - 2:00 AM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-[#1a3329] rounded-sm flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#f5f0e8]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1 tracking-wide">Email</h4>
                    <a
                      href="mailto:contact@thekushclub.co.za"
                      className="text-neutral-600 hover:text-[#1a3329] transition-colors"
                    >
                      contact@thekushclub.co.za
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-[#1a3329] rounded-sm flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 text-[#f5f0e8]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1 tracking-wide">Instagram</h4>
                    <a
                      href="https://instagram.com/thekushclubza"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 hover:text-[#1a3329] transition-colors"
                    >
                      @thekushclubza
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
