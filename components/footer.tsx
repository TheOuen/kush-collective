"use client"

import { Instagram, MapPin, Mail, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1a3329]" id="contact">
      {/* Main Content */}
      <div className="container-custom">
        {/* Top Section */}
        <div className="py-20 lg:py-24 border-b border-[#f5f0e8]/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/kush-logo.png"
                  alt="Kush Collective"
                  width={44}
                  height={44}
                  className="w-11 h-11"
                />
                <div>
                  <p className="font-[family-name:var(--font-playfair)] text-[#f5f0e8] font-bold text-xl">Kush Collective</p>
                  <p className="text-[#d4c4a8] text-xs tracking-wider uppercase">Private Members Collective</p>
                </div>
              </div>
              <p className="text-[#f5f0e8]/60 text-sm leading-relaxed mb-6">
                For the connoisseurs. For the casuals. For the culture.
              </p>
              <a
                href="https://instagram.com/thekushclubza"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#f5f0e8]/60 hover:text-[#f5f0e8] transition-colors text-sm"
              >
                <Instagram className="w-5 h-5" />
                <span>@thekushclubza</span>
              </a>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[#f5f0e8] font-semibold mb-6 tracking-wide">Contact</h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#d4c4a8] mt-0.5 flex-shrink-0" />
                  <span className="text-[#f5f0e8]/60 text-sm leading-relaxed">
                    Shop 2, 323 Main Rd<br />
                    Sea Point, Cape Town, 8005
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#d4c4a8] flex-shrink-0" />
                  <a href="mailto:contact@thekushclub.co.za" className="text-[#f5f0e8]/60 hover:text-[#f5f0e8] text-sm transition-colors">
                    contact@thekushclub.co.za
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#d4c4a8] mt-0.5 flex-shrink-0" />
                  <div className="text-[#f5f0e8]/60 text-sm leading-relaxed">
                    <p>Sun-Thu: 10AM - 12AM</p>
                    <p>Fri-Sat: 10AM - 2AM</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[#f5f0e8] font-semibold mb-6 tracking-wide">Quick Links</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#about" className="text-[#f5f0e8]/60 hover:text-[#f5f0e8] text-sm transition-colors">About the Club</a>
                </li>
                <li>
                  <a href="#membership" className="text-[#f5f0e8]/60 hover:text-[#f5f0e8] text-sm transition-colors">Membership</a>
                </li>
                <li>
                  <Link href="/sign-up" className="text-[#f5f0e8]/60 hover:text-[#f5f0e8] text-sm transition-colors">Join Now</Link>
                </li>
                <li>
                  <Link href="/sign-in" className="text-[#f5f0e8]/60 hover:text-[#f5f0e8] text-sm transition-colors">Member Login</Link>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-[#f5f0e8] font-semibold mb-6 tracking-wide">Opening Hours</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#f5f0e8]/60">Sunday - Thursday</span>
                  <span className="text-[#f5f0e8]">10AM - 12AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#f5f0e8]/60">Friday - Saturday</span>
                  <span className="text-[#f5f0e8]">10AM - 2AM</span>
                </div>
              </div>
              <div className="mt-8 p-5 bg-[#f5f0e8]/5 border border-[#f5f0e8]/10">
                <p className="text-[#d4c4a8] font-semibold text-sm mb-1">18+ Only</p>
                <p className="text-[#f5f0e8]/40 text-xs">Valid ID required for entry</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#f5f0e8]/40 text-sm">
            &copy; {currentYear} Kush Collective. All rights reserved.
          </p>
          <p className="text-[#f5f0e8]/40 text-sm">
            Please consume responsibly.
          </p>
        </div>
      </div>
    </footer>
  )
}
