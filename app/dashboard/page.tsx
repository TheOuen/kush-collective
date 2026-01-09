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
    <div className="min-h-screen bg-neutral-50">
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
              <span className="text-lg font-bold text-neutral-900">Kush Collective</span>
            </Link>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-neutral-500 hover:text-neutral-700 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-green-600" />
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
                    ? "border-green-600 text-green-600"
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
              <h1 className="text-3xl font-bold text-neutral-900 mb-2">
                Welcome back, {user.name.split(" ")[0]}!
              </h1>
              <p className="text-neutral-600">
                Here&apos;s an overview of your membership and activity.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Membership Card Preview */}
                <motion.div
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-600 to-green-700 p-6 text-white cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  onClick={() => setShowPassModal(true)}
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

                  <div className="relative">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <p className="text-green-100 text-sm mb-1">Current Membership</p>
                        <h2 className="text-2xl font-bold">{user.membershipType}</h2>
                      </div>
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <CreditCard className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-green-100 text-sm mb-1">Valid Until</p>
                        <p className="font-semibold">{user.membershipExpires}</p>
                      </div>
                      <div>
                        <p className="text-green-100 text-sm mb-1">Total Visits</p>
                        <p className="font-semibold">{user.visits} visits</p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between">
                      <span className="text-sm text-green-100">Tap to view digital pass</span>
                      <QrCode className="w-5 h-5 text-green-100" />
                    </div>
                  </div>
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { icon: Calendar, label: "Book Visit", color: "bg-neutral-100 text-neutral-900" },
                      { icon: Leaf, label: "Browse Menu", color: "bg-green-100 text-green-700" },
                      { icon: Gift, label: "Refer a Friend", color: "bg-neutral-100 text-neutral-900" },
                      { icon: CreditCard, label: "Upgrade Pass", color: "bg-green-100 text-green-700" },
                    ].map((action, index) => (
                      <button
                        key={index}
                        className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-neutral-50 transition-colors"
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${action.color}`}>
                          <action.icon className="w-6 h-6" />
                        </div>
                        <span className="text-sm font-medium text-neutral-700">{action.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Recent Activity */}
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">Recent Activity</h3>
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
                          <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center">
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
                  className="bg-white rounded-2xl p-6 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900">{user.name}</h3>
                    <p className="text-sm text-neutral-500">{user.email}</p>
                    <p className="text-xs text-neutral-400 mt-1">Member since {user.memberSince}</p>
                  </div>
                  <div className="space-y-2">
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-left text-neutral-700 hover:bg-neutral-50 rounded-xl transition-colors">
                      <Settings className="w-5 h-5 text-neutral-400" />
                      <span className="text-sm font-medium">Account Settings</span>
                    </button>
                    <Link
                      href="/"
                      className="w-full flex items-center gap-3 px-4 py-3 text-left text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                    >
                      <LogOut className="w-5 h-5" />
                      <span className="text-sm font-medium">Sign Out</span>
                    </Link>
                  </div>
                </motion.div>

                {/* Special Offers Preview */}
                <motion.div
                  className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-amber-600" />
                    <h3 className="font-semibold text-neutral-900">Special Offers</h3>
                  </div>
                  <p className="text-sm text-neutral-600 mb-4">
                    You have {memberOffers.length} exclusive offers available!
                  </p>
                  <button
                    onClick={() => setActiveTab("offers")}
                    className="w-full py-2.5 bg-amber-500 text-white font-medium rounded-xl hover:bg-amber-600 transition-colors text-sm"
                  >
                    View Offers
                  </button>
                </motion.div>

                {/* Location Card */}
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">Visit Us</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-neutral-600">
                        Shop 2, 323 Main Rd
                        <br />
                        Sea Point, Cape Town, 8005
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-neutral-600">
                        <p>Sun-Thu: 10AM - 12AM</p>
                        <p>Fri-Sat: 10AM - 2AM</p>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="https://maps.google.com"
                    target="_blank"
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-neutral-100 text-neutral-700 font-medium rounded-xl hover:bg-neutral-200 transition-colors text-sm"
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
              <h1 className="text-2xl font-bold text-neutral-900 mb-2">Your Digital Pass</h1>
              <p className="text-neutral-600">Show this to staff when you visit the club</p>
            </div>

            {/* Digital Pass Card */}
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-6 text-white shadow-2xl">
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
                    <p className="font-bold">KUSH COLLECTIVE</p>
                    <p className="text-xs text-neutral-400">Member Pass</p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-green-500 rounded-full text-xs font-bold">
                  {user.status.toUpperCase()}
                </div>
              </div>

              {/* QR Code Placeholder */}
              <div className="bg-white rounded-2xl p-6 mb-6">
                <div className="w-48 h-48 mx-auto bg-neutral-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <QrCode className="w-24 h-24 text-neutral-900 mx-auto mb-2" />
                    <p className="text-xs text-neutral-500">Member ID: KC-{user.id.padStart(6, "0")}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-neutral-700">
                  <span className="text-neutral-400">Member Name</span>
                  <span className="font-semibold">{user.name}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-neutral-700">
                  <span className="text-neutral-400">Membership</span>
                  <span className="font-semibold">{user.membershipType}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-neutral-700">
                  <span className="text-neutral-400">Valid Until</span>
                  <span className="font-semibold">{user.membershipExpires}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-neutral-400">Total Visits</span>
                  <span className="font-semibold">{user.visits}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-colors">
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
              <h1 className="text-2xl font-bold text-neutral-900 mb-2">Special Offers</h1>
              <p className="text-neutral-600">
                Exclusive discounts for {user.membershipType} members
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {memberOffers.map((offer) => (
                <motion.div
                  key={offer.id}
                  className="bg-white rounded-2xl p-6 shadow-sm border-2 border-transparent hover:border-green-200 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Tag className="w-4 h-4 text-green-600" />
                        <span className="text-xs font-medium text-green-600 uppercase">
                          {offer.isActive ? "Active Offer" : "Expired"}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-900">{offer.title}</h3>
                    </div>
                    <div className="px-3 py-1.5 bg-green-100 text-green-700 rounded-lg font-bold text-sm">
                      {offer.discount}
                    </div>
                  </div>

                  <p className="text-neutral-600 text-sm mb-4">{offer.description}</p>

                  <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-xl">
                    <div>
                      <p className="text-xs text-neutral-500 mb-0.5">Promo Code</p>
                      <p className="font-mono font-bold text-neutral-900">{offer.code}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(offer.code)}
                      className={`p-2 rounded-lg transition-colors ${
                        copiedCode === offer.code
                          ? "bg-green-100 text-green-600"
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
              <div className="text-center py-12 bg-white rounded-2xl">
                <Gift className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">No offers available</h3>
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
            className="bg-white rounded-3xl max-w-sm w-full max-h-[90vh] overflow-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="p-4 flex items-center justify-between border-b border-neutral-200">
              <h2 className="font-semibold text-neutral-900">Digital Pass</h2>
              <button
                onClick={() => setShowPassModal(false)}
                className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-neutral-500" />
              </button>
            </div>
            <div className="p-4">
              <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-5 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Image
                    src="/kush-logo.png"
                    alt="Kush Collective"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                  <div>
                    <p className="font-bold text-sm">KUSH COLLECTIVE</p>
                    <p className="text-xs text-neutral-400">Member Pass</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 mb-4">
                  <div className="w-32 h-32 mx-auto bg-neutral-100 rounded-lg flex items-center justify-center">
                    <QrCode className="w-20 h-20 text-neutral-900" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-neutral-400">{user.membershipType}</p>
                  <p className="text-xs text-neutral-500 mt-1">Valid until {user.membershipExpires}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
