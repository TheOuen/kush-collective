"use client"

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
  Gift
} from "lucide-react"

export default function DashboardPage() {
  // Demo user data
  const user = {
    name: "John Doe",
    email: "john@example.com",
    memberSince: "January 2025",
    membershipType: "30-Day Pass",
    membershipExpires: "February 8, 2025",
    visits: 12,
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">
            Welcome back, {user.name.split(' ')[0]}!
          </h1>
          <p className="text-neutral-600">
            Here's an overview of your membership and activity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Membership Card */}
            <motion.div
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-600 to-green-700 p-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
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
                  <div key={index} className="flex items-center justify-between py-3 border-b border-neutral-100 last:border-0">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5 text-neutral-500" />
                      </div>
                      <div>
                        <p className="font-medium text-neutral-900">{activity.action}</p>
                        <p className="text-sm text-neutral-500">{activity.date} at {activity.time}</p>
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
                <button className="w-full flex items-center gap-3 px-4 py-3 text-left text-red-600 hover:bg-red-50 rounded-xl transition-colors">
                  <LogOut className="w-5 h-5" />
                  <span className="text-sm font-medium">Sign Out</span>
                </button>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Visit Us</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-600">
                    Shop 2, 323 Main Rd<br />
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
      </main>
    </div>
  )
}
