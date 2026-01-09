"use client"

import { Instagram, MapPin, Mail, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-950" id="contact">
      {/* Main Content */}
      <div className="container-custom">
        {/* Top Section */}
        <div className="py-16 lg:py-20 border-b border-neutral-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <Image
                  src="/kush-logo.png"
                  alt="Kush Collective"
                  width={44}
                  height={44}
                  className="w-11 h-11"
                />
                <div>
                  <p className="text-white font-bold text-lg">Kush Collective</p>
                  <p className="text-neutral-500 text-xs">Private Members Collective</p>
                </div>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                For the connoisseurs. For the casuals. For the culture.
              </p>
              <a
                href="https://instagram.com/thekushclubza"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm"
              >
                <Instagram className="w-5 h-5" />
                <span>@thekushclubza</span>
              </a>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-5">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-400 text-sm">
                    Shop 2, 323 Main Rd<br />
                    Sea Point, Cape Town, 8005
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <a href="mailto:contact@thekushclub.co.za" className="text-neutral-400 hover:text-white text-sm transition-colors">
                    contact@thekushclub.co.za
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <div className="text-neutral-400 text-sm">
                    <p>Sun-Thu: 10AM - 12AM</p>
                    <p>Fri-Sat: 10AM - 2AM</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-5">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-neutral-400 hover:text-white text-sm transition-colors">About the Club</a>
                </li>
                <li>
                  <a href="#membership" className="text-neutral-400 hover:text-white text-sm transition-colors">Membership</a>
                </li>
                <li>
                  <Link href="/sign-up" className="text-neutral-400 hover:text-white text-sm transition-colors">Join Now</Link>
                </li>
                <li>
                  <Link href="/sign-in" className="text-neutral-400 hover:text-white text-sm transition-colors">Member Login</Link>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-white font-semibold mb-5">Opening Hours</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Sunday - Thursday</span>
                  <span className="text-white">10AM - 12AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Friday - Saturday</span>
                  <span className="text-white">10AM - 2AM</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-neutral-900 rounded-xl">
                <p className="text-amber-500 font-semibold text-sm mb-1">18+ Only</p>
                <p className="text-neutral-500 text-xs">Valid ID required for entry</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 text-sm">
            &copy; {currentYear} Kush Collective. All rights reserved.
          </p>
          <p className="text-neutral-600 text-sm">
            Please consume responsibly.
          </p>
        </div>
      </div>
    </footer>
  )
}
