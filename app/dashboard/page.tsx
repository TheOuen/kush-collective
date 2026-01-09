"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  User,
  CreditCard,
  Calendar,
  Clock,
  MapPin,
  Leaf,
  Settings,
  LogOut,
  ChevronRight,
  Bell,
  Gift,
  Tag,
  Copy,
  Check,
  QrCode,
  Sparkles,
  X,
} from "lucide-react"
import { currentMember, mockOffers } from "@/lib/mock-data"

export default function MemberDashboardPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "pass" | "offers">("overview")
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [showPassModal, setShowPassModal] = useState(false)

  const user = currentMember

  // Filter offers for current member's membership type
  const memberOffers = mockOffers.filter((offer) =>
    offer.membershipTypes.includes(user.membershipType)
  )

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/kush-logo.png"
                alt="Kush Collective"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div>
                <span className="font-[family-name:var(--font-playfair)] text-lg font-bold text-neutral-900">Kush Collective</span>
                <p className="text-[10px] text-neutral-400 tracking-wider uppercase hidden sm:block">Member Portal</p>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-neutral-500 hover:text-neutral-700 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#1a3329] rounded-full" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#1a3329]/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-[#1a3329]" />
                </div>
                <span className="text-sm font-medium text-neutral-900 hidden sm:block">{user.name}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-8">
            {[
              { id: "overview", label: "Overview", icon: User },
              { id: "pass", label: "My Pass", icon: CreditCard },
              { id: "offers", label: "Special Offers", icon: Tag },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 py-4 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-[#1a3329] text-[#1a3329]"
                    : "border-transparent text-neutral-500 hover:text-neutral-700"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="font-medium text-sm">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-neutral-900 mb-2">
                Welcome back, {user.name.split(" ")[0]}!
              </h1>
              <p className="text-neutral-500">
                Here&apos;s an overview of your membership and activity.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Membership Card Preview */}
                <motion.div
                  className="relative overflow-hidden bg-[#1a3329] p-6 text-[#f5f0e8] cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  onClick={() => setShowPassModal(true)}
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                  <div className="relative">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <p className="text-[#f5f0e8]/60 text-sm mb-1">Current Membership</p>
                        <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold">{user.membershipType}</h2>
                      </div>
                      <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                        <CreditCard className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-[#f5f0e8]/60 text-sm mb-1">Valid Until</p>
                        <p className="font-semibold">{user.membershipExpires}</p>
                      </div>
                      <div>
                        <p className="text-[#f5f0e8]/60 text-sm mb-1">Total Visits</p>
                        <p className="font-semibold">{user.visits} visits</p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between">
                      <span className="text-sm text-[#f5f0e8]/60">Tap to view digital pass</span>
                      <QrCode className="w-5 h-5 text-[#f5f0e8]/60" />
                    </div>
                  </div>
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                  className="bg-white p-6 shadow-sm border border-neutral-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-neutral-900 mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { icon: Calendar, label: "Book Visit", color: "bg-[#faf9f7] text-neutral-700" },
                      { icon: Leaf, label: "Browse Menu", color: "bg-[#1a3329]/10 text-[#1a3329]" },
                      { icon: Gift, label: "Refer a Friend", color: "bg-[#faf9f7] text-neutral-700" },
                      { icon: CreditCard, label: "Upgrade Pass", color: "bg-[#1a3329]/10 text-[#1a3329]" },
                    ].map((action, index) => (
                      <button
                        key={index}
                        className="flex flex-col items-center gap-2 p-4 hover:bg-[#faf9f7] transition-colors"
                      >
                        <div className={`w-12 h-12 flex items-center justify-center ${action.color}`}>
                          <action.icon className="w-6 h-6" />
                        </div>
                        <span className="text-sm font-medium text-neutral-700">{action.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Recent Activity */}
                <motion.div
                  className="bg-white p-6 shadow-sm border border-neutral-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-neutral-900 mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {[
                      { date: "Today", action: "Club visit", time: "2:30 PM" },
                      { date: "Jan 5", action: "Flower withdrawal - Blue Dream", time: "4:15 PM" },
                      { date: "Jan 3", action: "Club visit", time: "6:00 PM" },
                      { date: "Jan 1", action: "Membership renewed", time: "10:00 AM" },
                    ].map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-3 border-b border-neutral-100 last:border-0"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-[#faf9f7] flex items-center justify-center">
                            <Clock className="w-5 h-5 text-neutral-500" />
                          </div>
                          <div>
                            <p className="font-medium text-neutral-900">{activity.action}</p>
                            <p className="text-sm text-neutral-500">
                              {activity.date} at {activity.time}
                            </p>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-neutral-400" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Profile Card */}
                <motion.div
                  className="bg-white p-6 shadow-sm border border-neutral-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-[#1a3329]/10 flex items-center justify-center mx-auto mb-4">
                      <User className="w-10 h-10 text-[#1a3329]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-neutral-900">{user.name}</h3>
                    <p className="text-sm text-neutral-500">{user.email}</p>
                    <p className="text-xs text-neutral-400 mt-1">Member since {user.memberSince}</p>
                  </div>
                  <div className="space-y-2">
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-left text-neutral-700 hover:bg-[#faf9f7] transition-colors">
                      <Settings className="w-5 h-5 text-neutral-400" />
                      <span className="text-sm font-medium">Account Settings</span>
                    </button>
                    <Link
                      href="/"
                      className="w-full flex items-center gap-3 px-4 py-3 text-left text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <LogOut className="w-5 h-5" />
                      <span className="text-sm font-medium">Sign Out</span>
                    </Link>
                  </div>
                </motion.div>

                {/* Special Offers Preview */}
                <motion.div
                  className="bg-[#1a3329] p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-[#d4c4a8]" />
                    <h3 className="font-semibold text-[#f5f0e8]">Special Offers</h3>
                  </div>
                  <p className="text-sm text-[#f5f0e8]/70 mb-4">
                    You have {memberOffers.length} exclusive offers available!
                  </p>
                  <button
                    onClick={() => setActiveTab("offers")}
                    className="w-full py-2.5 bg-[#f5f0e8] text-[#1a3329] font-semibold text-sm tracking-wide uppercase hover:bg-white transition-colors"
                  >
                    View Offers
                  </button>
                </motion.div>

                {/* Location Card */}
                <motion.div
                  className="bg-white p-6 shadow-sm border border-neutral-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-neutral-900 mb-4">Visit Us</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#1a3329] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-neutral-600">
                        Shop 2, 323 Main Rd
                        <br />
                        Sea Point, Cape Town, 8005
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#d4c4a8] flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-neutral-600">
                        <p>Sun-Thu: 10AM - 12AM</p>
                        <p>Fri-Sat: 10AM - 2AM</p>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="https://maps.google.com"
                    target="_blank"
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#faf9f7] text-neutral-700 font-medium hover:bg-neutral-100 transition-colors text-sm"
                  >
                    <MapPin className="w-4 h-4" />
                    Get Directions
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Digital Pass Tab */}
        {activeTab === "pass" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-md mx-auto"
          >
            <div className="text-center mb-8">
              <h1 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-neutral-900 mb-2">Your Digital Pass</h1>
              <p className="text-neutral-500">Show this to staff when you visit the club</p>
            </div>

            {/* Digital Pass Card */}
            <div className="bg-[#1a3329] p-6 text-[#f5f0e8] shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Image
                    src="/kush-logo.png"
                    alt="Kush Collective"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                  <div>
                    <p className="font-[family-name:var(--font-playfair)] font-bold">KUSH COLLECTIVE</p>
                    <p className="text-xs text-[#f5f0e8]/50 tracking-wider uppercase">Member Pass</p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-[#f5f0e8] text-[#1a3329] text-xs font-bold uppercase tracking-wider">
                  {user.status}
                </div>
              </div>

              {/* QR Code Placeholder */}
              <div className="bg-white p-6 mb-6">
                <div className="w-48 h-48 mx-auto bg-[#faf9f7] flex items-center justify-center">
                  <div className="text-center">
                    <QrCode className="w-24 h-24 text-[#1a3329] mx-auto mb-2" />
                    <p className="text-xs text-neutral-500">Member ID: KC-{user.id.padStart(6, "0")}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-[#f5f0e8]/20">
                  <span className="text-[#f5f0e8]/60">Member Name</span>
                  <span className="font-semibold">{user.name}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[#f5f0e8]/20">
                  <span className="text-[#f5f0e8]/60">Membership</span>
                  <span className="font-semibold">{user.membershipType}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[#f5f0e8]/20">
                  <span className="text-[#f5f0e8]/60">Valid Until</span>
                  <span className="font-semibold">{user.membershipExpires}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-[#f5f0e8]/60">Total Visits</span>
                  <span className="font-semibold">{user.visits}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a3329] text-[#f5f0e8] font-semibold text-sm tracking-wide uppercase hover:bg-[#1a3329]/90 transition-colors">
                <CreditCard className="w-5 h-5" />
                Upgrade Membership
              </button>
            </div>
          </motion.div>
        )}

        {/* Offers Tab */}
        {activeTab === "offers" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-8">
              <h1 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-neutral-900 mb-2">Special Offers</h1>
              <p className="text-neutral-500">
                Exclusive discounts for {user.membershipType} members
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {memberOffers.map((offer) => (
                <motion.div
                  key={offer.id}
                  className="bg-white p-6 shadow-sm border-2 border-neutral-200 hover:border-[#1a3329]/30 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Tag className="w-4 h-4 text-[#1a3329]" />
                        <span className="text-xs font-medium text-[#1a3329] uppercase tracking-wider">
                          {offer.isActive ? "Active Offer" : "Expired"}
                        </span>
                      </div>
                      <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-neutral-900">{offer.title}</h3>
                    </div>
                    <div className="px-3 py-1.5 bg-[#1a3329]/10 text-[#1a3329] font-bold text-sm">
                      {offer.discount}
                    </div>
                  </div>

                  <p className="text-neutral-600 text-sm mb-4">{offer.description}</p>

                  <div className="flex items-center justify-between p-3 bg-[#faf9f7]">
                    <div>
                      <p className="text-xs text-neutral-500 mb-0.5">Promo Code</p>
                      <p className="font-mono font-bold text-neutral-900">{offer.code}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(offer.code)}
                      className={`p-2 transition-colors ${
                        copiedCode === offer.code
                          ? "bg-[#1a3329]/10 text-[#1a3329]"
                          : "bg-white text-neutral-600 hover:bg-neutral-100"
                      }`}
                    >
                      {copiedCode === offer.code ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-neutral-400 mt-3">Valid until {offer.validUntil}</p>
                </motion.div>
              ))}
            </div>

            {memberOffers.length === 0 && (
              <div className="text-center py-12 bg-white border border-neutral-200">
                <Gift className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-neutral-900 mb-2">No offers available</h3>
                <p className="text-neutral-500">
                  Upgrade your membership to unlock exclusive offers!
                </p>
              </div>
            )}
          </motion.div>
        )}
      </main>

      {/* Pass Modal */}
      {showPassModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            className="bg-white max-w-sm w-full max-h-[90vh] overflow-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="p-4 flex items-center justify-between border-b border-neutral-200">
              <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-neutral-900">Digital Pass</h2>
              <button
                onClick={() => setShowPassModal(false)}
                className="p-2 hover:bg-neutral-100 transition-colors"
              >
                <X className="w-5 h-5 text-neutral-500" />
              </button>
            </div>
            <div className="p-4">
              <div className="bg-[#1a3329] p-5 text-[#f5f0e8]">
                <div className="flex items-center gap-3 mb-6">
                  <Image
                    src="/kush-logo.png"
                    alt="Kush Collective"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                  <div>
                    <p className="font-[family-name:var(--font-playfair)] font-bold text-sm">KUSH COLLECTIVE</p>
                    <p className="text-xs text-[#f5f0e8]/50 tracking-wider uppercase">Member Pass</p>
                  </div>
                </div>
                <div className="bg-white p-4 mb-4">
                  <div className="w-32 h-32 mx-auto bg-[#faf9f7] flex items-center justify-center">
                    <QrCode className="w-20 h-20 text-[#1a3329]" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-[#f5f0e8]/60">{user.membershipType}</p>
                  <p className="text-xs text-[#f5f0e8]/50 mt-1">Valid until {user.membershipExpires}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
