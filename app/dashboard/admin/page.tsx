"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Users,
  TrendingUp,
  DollarSign,
  Calendar,
  Search,
  Filter,
  MoreVertical,
  UserPlus,
  Download,
  Eye,
  Edit,
  Trash2,
  Tag,
  BarChart3,
  Settings,
  LogOut,
  ChevronDown,
  CheckCircle,
  XCircle,
  Clock,
  Bell,
} from "lucide-react"
import { mockMembers, mockOffers, mockDashboardStats, type Member } from "@/lib/mock-data"

export default function AdminDashboardPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [selectedMembers, setSelectedMembers] = useState<string[]>([])
  const [activeTab, setActiveTab] = useState<"members" | "offers" | "analytics">("members")

  const filteredMembers = mockMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || member.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status: Member["status"]) => {
    switch (status) {
      case "active":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
            <CheckCircle className="w-3 h-3" />
            Active
          </span>
        )
      case "expired":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
            <XCircle className="w-3 h-3" />
            Expired
          </span>
        )
      case "pending":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
            <Clock className="w-3 h-3" />
            Pending
          </span>
        )
    }
  }

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-neutral-900 text-white z-50 hidden lg:block">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/kush-logo.png"
              alt="Kush Collective"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div>
              <span className="text-lg font-bold">Kush Collective</span>
              <p className="text-xs text-neutral-400">Admin Portal</p>
            </div>
          </Link>
        </div>

        <nav className="px-4 space-y-1">
          <button
            onClick={() => setActiveTab("members")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === "members"
                ? "bg-green-600 text-white"
                : "text-neutral-300 hover:bg-neutral-800"
            }`}
          >
            <Users className="w-5 h-5" />
            <span className="font-medium">Members</span>
          </button>
          <button
            onClick={() => setActiveTab("offers")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === "offers"
                ? "bg-green-600 text-white"
                : "text-neutral-300 hover:bg-neutral-800"
            }`}
          >
            <Tag className="w-5 h-5" />
            <span className="font-medium">Offers & Discounts</span>
          </button>
          <button
            onClick={() => setActiveTab("analytics")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === "analytics"
                ? "bg-green-600 text-white"
                : "text-neutral-300 hover:bg-neutral-800"
            }`}
          >
            <BarChart3 className="w-5 h-5" />
            <span className="font-medium">Analytics</span>
          </button>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-neutral-800">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-4 py-3 text-neutral-300 hover:bg-neutral-800 rounded-lg transition-colors"
          >
            <Eye className="w-5 h-5" />
            <span className="font-medium">View as Member</span>
          </Link>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-neutral-300 hover:bg-neutral-800 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </button>
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-neutral-800 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sign Out</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Top Bar */}
        <header className="bg-white border-b border-neutral-200 sticky top-0 z-40">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="lg:hidden">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/kush-logo.png"
                  alt="Kush Collective"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="font-bold text-neutral-900">Admin</span>
              </Link>
            </div>
            <h1 className="text-xl font-semibold text-neutral-900 hidden lg:block">
              {activeTab === "members" && "Member Management"}
              {activeTab === "offers" && "Offers & Discounts"}
              {activeTab === "analytics" && "Analytics"}
            </h1>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-neutral-500 hover:text-neutral-700 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-neutral-200">
                <div className="w-9 h-9 bg-neutral-900 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">KC</span>
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-neutral-900">Owner</p>
                  <p className="text-xs text-neutral-500">admin@kushcollective.com</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="p-6">
          {/* Stats Cards */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  +{mockDashboardStats.newMembersThisMonth} new
                </span>
              </div>
              <p className="text-2xl font-bold text-neutral-900">{mockDashboardStats.totalMembers}</p>
              <p className="text-sm text-neutral-500">Total Members</p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              <p className="text-2xl font-bold text-neutral-900">{mockDashboardStats.activeMembers}</p>
              <p className="text-sm text-neutral-500">Active Members</p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-amber-600" />
                </div>
              </div>
              <p className="text-2xl font-bold text-neutral-900">{mockDashboardStats.visitsToday}</p>
              <p className="text-sm text-neutral-500">Visits Today</p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-purple-600" />
                </div>
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  12%
                </span>
              </div>
              <p className="text-2xl font-bold text-neutral-900">
                R{mockDashboardStats.revenueThisMonth.toLocaleString()}
              </p>
              <p className="text-sm text-neutral-500">Revenue This Month</p>
            </div>
          </motion.div>

          {/* Members Tab */}
          {activeTab === "members" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Actions Bar */}
              <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div className="flex flex-1 gap-3 w-full sm:w-auto">
                    <div className="relative flex-1 sm:max-w-xs">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                      <input
                        type="text"
                        placeholder="Search members..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div className="relative">
                      <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="appearance-none pl-4 pr-10 py-2.5 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                      >
                        <option value="all">All Status</option>
                        <option value="active">Active</option>
                        <option value="expired">Expired</option>
                        <option value="pending">Pending</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
                    </div>
                  </div>
                  <div className="flex gap-3 w-full sm:w-auto">
                    <button className="flex items-center gap-2 px-4 py-2.5 border border-neutral-200 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors">
                      <Download className="w-4 h-4" />
                      Export
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                      <UserPlus className="w-4 h-4" />
                      Add Member
                    </button>
                  </div>
                </div>
              </div>

              {/* Members Table */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-neutral-200">
                        <th className="text-left px-6 py-4 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                          Member
                        </th>
                        <th className="text-left px-6 py-4 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                          Membership
                        </th>
                        <th className="text-left px-6 py-4 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="text-left px-6 py-4 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                          Visits
                        </th>
                        <th className="text-left px-6 py-4 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                          Total Spent
                        </th>
                        <th className="text-right px-6 py-4 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                      {filteredMembers.map((member) => (
                        <tr key={member.id} className="hover:bg-neutral-50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                <span className="text-green-700 font-medium text-sm">
                                  {member.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </span>
                              </div>
                              <div>
                                <p className="font-medium text-neutral-900">{member.name}</p>
                                <p className="text-sm text-neutral-500">{member.email}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <p className="font-medium text-neutral-900">{member.membershipType}</p>
                            <p className="text-sm text-neutral-500">Expires {member.membershipExpires}</p>
                          </td>
                          <td className="px-6 py-4">{getStatusBadge(member.status)}</td>
                          <td className="px-6 py-4">
                            <p className="font-medium text-neutral-900">{member.visits}</p>
                            <p className="text-sm text-neutral-500">Last: {member.lastVisit}</p>
                          </td>
                          <td className="px-6 py-4">
                            <p className="font-medium text-neutral-900">R{member.totalSpent.toLocaleString()}</p>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-end gap-2">
                              <button className="p-2 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 rounded-lg transition-colors">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 rounded-lg transition-colors">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-neutral-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="px-6 py-4 border-t border-neutral-200 flex items-center justify-between">
                  <p className="text-sm text-neutral-500">
                    Showing {filteredMembers.length} of {mockMembers.length} members
                  </p>
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 border border-neutral-200 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors">
                      Previous
                    </button>
                    <button className="px-3 py-1.5 border border-neutral-200 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors">
                      Next
                    </button>
                  </div>
                </div>
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
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-neutral-900">Active Offers</h2>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                  <Tag className="w-4 h-4" />
                  Create Offer
                </button>
              </div>

              <div className="grid gap-4">
                {mockOffers.map((offer) => (
                  <div
                    key={offer.id}
                    className="bg-white rounded-xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-neutral-900">{offer.title}</h3>
                        <span className="px-2.5 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                          {offer.discount}
                        </span>
                      </div>
                      <p className="text-neutral-600 text-sm mb-3">{offer.description}</p>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs text-neutral-500">Valid for:</span>
                        {offer.membershipTypes.map((type) => (
                          <span
                            key={type}
                            className="px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded text-xs"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm font-mono bg-neutral-100 px-3 py-1.5 rounded text-neutral-700">
                          {offer.code}
                        </p>
                        <p className="text-xs text-neutral-500 mt-1">Valid until {offer.validUntil}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 rounded-lg transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-neutral-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Analytics Tab */}
          {activeTab === "analytics" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-neutral-900 mb-6">Membership Distribution</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { type: "Day Pass", count: 12, percentage: 8, color: "bg-blue-500" },
                    { type: "7-Day Pass", count: 28, percentage: 18, color: "bg-amber-500" },
                    { type: "30-Day Pass", count: 76, percentage: 49, color: "bg-green-500" },
                    { type: "Annual", count: 40, percentage: 26, color: "bg-purple-500" },
                  ].map((stat) => (
                    <div key={stat.type} className="text-center p-4 bg-neutral-50 rounded-xl">
                      <div className={`w-12 h-12 ${stat.color} rounded-full mx-auto mb-3 flex items-center justify-center`}>
                        <span className="text-white font-bold">{stat.percentage}%</span>
                      </div>
                      <p className="text-2xl font-bold text-neutral-900">{stat.count}</p>
                      <p className="text-sm text-neutral-500">{stat.type}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-neutral-900 mb-4">Top Members by Visits</h2>
                  <div className="space-y-4">
                    {mockMembers
                      .sort((a, b) => b.visits - a.visits)
                      .slice(0, 5)
                      .map((member, index) => (
                        <div key={member.id} className="flex items-center gap-4">
                          <span className="w-6 h-6 bg-neutral-100 rounded-full flex items-center justify-center text-xs font-bold text-neutral-600">
                            {index + 1}
                          </span>
                          <div className="flex-1">
                            <p className="font-medium text-neutral-900">{member.name}</p>
                            <p className="text-sm text-neutral-500">{member.membershipType}</p>
                          </div>
                          <p className="font-semibold text-neutral-900">{member.visits} visits</p>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-neutral-900 mb-4">Top Members by Spending</h2>
                  <div className="space-y-4">
                    {mockMembers
                      .sort((a, b) => b.totalSpent - a.totalSpent)
                      .slice(0, 5)
                      .map((member, index) => (
                        <div key={member.id} className="flex items-center gap-4">
                          <span className="w-6 h-6 bg-neutral-100 rounded-full flex items-center justify-center text-xs font-bold text-neutral-600">
                            {index + 1}
                          </span>
                          <div className="flex-1">
                            <p className="font-medium text-neutral-900">{member.name}</p>
                            <p className="text-sm text-neutral-500">{member.membershipType}</p>
                          </div>
                          <p className="font-semibold text-neutral-900">R{member.totalSpent.toLocaleString()}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  )
}
