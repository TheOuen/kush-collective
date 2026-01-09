"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Users, User, Shield, CreditCard, Tag, BarChart3, ArrowRight } from "lucide-react"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-900 to-green-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="inline-flex items-center gap-3 mb-6">
            <Image
              src="/kush-logo.png"
              alt="Kush Collective"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <span className="text-2xl font-bold text-white">Kush Collective</span>
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4">Demo Dashboard</h1>
          <p className="text-neutral-400 max-w-xl mx-auto">
            Explore our member management system. Choose a demo mode below to see the
            dashboard from different perspectives.
          </p>
          <p className="text-amber-400 text-sm mt-3">
            No authentication required for demo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Owner/Admin Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href="/dashboard/admin"
              className="block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-green-500/50 transition-all group"
            >
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Owner Dashboard</h2>
              <p className="text-neutral-400 mb-6">
                Manage all club members, view analytics, create offers and discounts, track
                revenue and visits.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-neutral-300">
                  <Users className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Member Management</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-300">
                  <Tag className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Offers & Discounts</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-300">
                  <BarChart3 className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Analytics & Reports</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-green-500 font-medium group-hover:gap-4 transition-all">
                <span>Enter Admin Portal</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </motion.div>

          {/* Member Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/dashboard"
              className="block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-green-500/50 transition-all group"
            >
              <div className="w-16 h-16 bg-neutral-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <User className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Member Portal</h2>
              <p className="text-neutral-400 mb-6">
                View your digital membership pass, check exclusive offers, track visits and
                manage your account.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-neutral-300">
                  <CreditCard className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Digital Membership Pass</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-300">
                  <Tag className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Exclusive Offers</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-300">
                  <User className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Activity History</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-green-500 font-medium group-hover:gap-4 transition-all">
                <span>Enter Member Portal</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-neutral-500 text-sm mb-4">
            This is a demo with mock data. No real user data is used.
          </p>
          <Link
            href="/"
            className="text-green-500 hover:text-green-400 font-medium text-sm transition-colors"
          >
            ← Back to Homepage
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
