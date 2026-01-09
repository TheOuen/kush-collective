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
          <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-[#1a3329]/10 text-[#1a3329]">
            <CheckCircle className="w-3 h-3" />
            Active
          </span>
        )
      case "expired":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-red-100 text-red-700">
            <XCircle className="w-3 h-3" />
            Expired
          </span>
        )
      case "pending":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-[#d4c4a8]/30 text-[#1a3329]">
            <Clock className="w-3 h-3" />
            Pending
          </span>
        )
    }
  }

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-[#1a3329] text-white z-50 hidden lg:block">
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
              <span className="font-[family-name:var(--font-playfair)] text-lg font-bold">Kush Collective</span>
              <p className="text-xs text-[#f5f0e8]/60">Admin Portal</p>
            </div>
          </Link>
        </div>

        <nav className="px-4 space-y-1">
          <button
            onClick={() => setActiveTab("members")}
            className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
              activeTab === "members"
                ? "bg-[#f5f0e8] text-[#1a3329]"
                : "text-[#f5f0e8]/80 hover:bg-[#f5f0e8]/10"
            }`}
          >
            <Users className="w-5 h-5" />
            <span className="font-medium">Members</span>
          </button>
          <button
            onClick={() => setActiveTab("offers")}
            className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
              activeTab === "offers"
                ? "bg-[#f5f0e8] text-[#1a3329]"
                : "text-[#f5f0e8]/80 hover:bg-[#f5f0e8]/10"
            }`}
          >
            <Tag className="w-5 h-5" />
            <span className="font-medium">Offers & Discounts</span>
          </button>
          <button
            onClick={() => setActiveTab("analytics")}
            className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
              activeTab === "analytics"
                ? "bg-[#f5f0e8] text-[#1a3329]"
                : "text-[#f5f0e8]/80 hover:bg-[#f5f0e8]/10"
            }`}
          >
            <BarChart3 className="w-5 h-5" />
            <span className="font-medium">Analytics</span>
          </button>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#f5f0e8]/10">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-4 py-3 text-[#f5f0e8]/80 hover:bg-[#f5f0e8]/10 transition-colors"
          >
            <Eye className="w-5 h-5" />
            <span className="font-medium">View as Member</span>
          </Link>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-[#f5f0e8]/80 hover:bg-[#f5f0e8]/10 transition-colors">
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </button>
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-[#f5f0e8]/10 transition-colors"
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
                <span className="font-bold text-[#1a3329]">Admin</span>
              </Link>
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#1a3329] hidden lg:block">
              {activeTab === "members" && "Member Management"}
              {activeTab === "offers" && "Offers & Discounts"}
              {activeTab === "analytics" && "Analytics"}
            </h1>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-neutral-500 hover:text-[#1a3329] transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-neutral-200">
                <div className="w-9 h-9 bg-[#1a3329] flex items-center justify-center">
                  <span className="text-[#f5f0e8] text-sm font-medium">KC</span>
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-[#1a3329]">Owner</p>
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
            <div className="bg-white p-5 shadow-sm border border-neutral-200">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-[#1a3329]/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#1a3329]" />
                </div>
                <span className="text-xs font-medium text-[#1a3329] bg-[#1a3329]/10 px-2 py-1">
                  +{mockDashboardStats.newMembersThisMonth} new
                </span>
              </div>
              <p className="text-2xl font-bold text-[#1a3329]">{mockDashboardStats.totalMembers}</p>
              <p className="text-sm text-neutral-500">Total Members</p>
            </div>

            <div className="bg-white p-5 shadow-sm border border-neutral-200">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-[#d4c4a8]/30 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-[#1a3329]" />
                </div>
              </div>
              <p className="text-2xl font-bold text-[#1a3329]">{mockDashboardStats.activeMembers}</p>
              <p className="text-sm text-neutral-500">Active Members</p>
            </div>

            <div className="bg-white p-5 shadow-sm border border-neutral-200">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-[#d4c4a8]/30 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-[#1a3329]" />
                </div>
              </div>
              <p className="text-2xl font-bold text-[#1a3329]">{mockDashboardStats.visitsToday}</p>
              <p className="text-sm text-neutral-500">Visits Today</p>
            </div>

            <div className="bg-white p-5 shadow-sm border border-neutral-200">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-[#1a3329]/10 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-[#1a3329]" />
                </div>
                <span className="text-xs font-medium text-[#1a3329] bg-[#1a3329]/10 px-2 py-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  12%
                </span>
              </div>
              <p className="text-2xl font-bold text-[#1a3329]">
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
              <div className="bg-white p-4 shadow-sm mb-6 border border-neutral-200">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div className="flex flex-1 gap-3 w-full sm:w-auto">
                    <div className="relative flex-1 sm:max-w-xs">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                      <input
                        type="text"
                        placeholder="Search members..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3329] focus:border-transparent"
                      />
                    </div>
                    <div className="relative">
                      <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="appearance-none pl-4 pr-10 py-2.5 border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3329] focus:border-transparent bg-white"
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
                    <button className="flex items-center gap-2 px-4 py-2.5 border border-neutral-200 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors">
                      <Download className="w-4 h-4" />
                      Export
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-[#1a3329] text-[#f5f0e8] text-sm font-medium hover:bg-[#1a3329]/90 transition-colors">
                      <UserPlus className="w-4 h-4" />
                      Add Member
                    </button>
                  </div>
                </div>
              </div>

              {/* Members Table */}
              <div className="bg-white shadow-sm overflow-hidden border border-neutral-200">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-neutral-200 bg-[#faf9f7]">
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
                        <tr key={member.id} className="hover:bg-[#faf9f7] transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-[#1a3329]/10 flex items-center justify-center">
                                <span className="text-[#1a3329] font-medium text-sm">
                                  {member.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </span>
                              </div>
                              <div>
                                <p className="font-medium text-[#1a3329]">{member.name}</p>
                                <p className="text-sm text-neutral-500">{member.email}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <p className="font-medium text-[#1a3329]">{member.membershipType}</p>
                            <p className="text-sm text-neutral-500">Expires {member.membershipExpires}</p>
                          </td>
                          <td className="px-6 py-4">{getStatusBadge(member.status)}</td>
                          <td className="px-6 py-4">
                            <p className="font-medium text-[#1a3329]">{member.visits}</p>
                            <p className="text-sm text-neutral-500">Last: {member.lastVisit}</p>
                          </td>
                          <td className="px-6 py-4">
                            <p className="font-medium text-[#1a3329]">R{member.totalSpent.toLocaleString()}</p>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-end gap-2">
                              <button className="p-2 text-neutral-400 hover:text-[#1a3329] hover:bg-[#1a3329]/10 transition-colors">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-neutral-400 hover:text-[#1a3329] hover:bg-[#1a3329]/10 transition-colors">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-neutral-400 hover:text-red-600 hover:bg-red-50 transition-colors">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="px-6 py-4 border-t border-neutral-200 flex items-center justify-between bg-[#faf9f7]">
                  <p className="text-sm text-neutral-500">
                    Showing {filteredMembers.length} of {mockMembers.length} members
                  </p>
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 border border-neutral-200 text-sm font-medium text-neutral-700 hover:bg-white transition-colors">
                      Previous
                    </button>
                    <button className="px-3 py-1.5 border border-neutral-200 text-sm font-medium text-neutral-700 hover:bg-white transition-colors">
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
                <h2 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#1a3329]">Active Offers</h2>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-[#1a3329] text-[#f5f0e8] text-sm font-medium hover:bg-[#1a3329]/90 transition-colors">
                  <Tag className="w-4 h-4" />
                  Create Offer
                </button>
              </div>

              <div className="grid gap-4">
                {mockOffers.map((offer) => (
                  <div
                    key={offer.id}
                    className="bg-white p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-neutral-200"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-[#1a3329]">{offer.title}</h3>
                        <span className="px-2.5 py-1 bg-[#1a3329]/10 text-[#1a3329] text-xs font-bold">
                          {offer.discount}
                        </span>
                      </div>
                      <p className="text-neutral-600 text-sm mb-3">{offer.description}</p>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs text-neutral-500">Valid for:</span>
                        {offer.membershipTypes.map((type) => (
                          <span
                            key={type}
                            className="px-2 py-0.5 bg-[#faf9f7] text-neutral-600 text-xs border border-neutral-200"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm font-mono bg-[#faf9f7] px-3 py-1.5 text-[#1a3329] border border-neutral-200">
                          {offer.code}
                        </p>
                        <p className="text-xs text-neutral-500 mt-1">Valid until {offer.validUntil}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-neutral-400 hover:text-[#1a3329] hover:bg-[#1a3329]/10 transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-neutral-400 hover:text-red-600 hover:bg-red-50 transition-colors">
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
              <div className="bg-white p-6 shadow-sm border border-neutral-200">
                <h2 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#1a3329] mb-6">Membership Distribution</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { type: "Day Pass", count: 12, percentage: 8, color: "bg-[#d4c4a8]" },
                    { type: "7-Day Pass", count: 28, percentage: 18, color: "bg-[#d4c4a8]/70" },
                    { type: "30-Day Pass", count: 76, percentage: 49, color: "bg-[#1a3329]" },
                    { type: "Annual", count: 40, percentage: 26, color: "bg-[#1a3329]/70" },
                  ].map((stat) => (
                    <div key={stat.type} className="text-center p-4 bg-[#faf9f7] border border-neutral-200">
                      <div className={`w-12 h-12 ${stat.color} mx-auto mb-3 flex items-center justify-center`}>
                        <span className="text-[#f5f0e8] font-bold">{stat.percentage}%</span>
                      </div>
                      <p className="text-2xl font-bold text-[#1a3329]">{stat.count}</p>
                      <p className="text-sm text-neutral-500">{stat.type}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 shadow-sm border border-neutral-200">
                  <h2 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#1a3329] mb-4">Top Members by Visits</h2>
                  <div className="space-y-4">
                    {mockMembers
                      .sort((a, b) => b.visits - a.visits)
                      .slice(0, 5)
                      .map((member, index) => (
                        <div key={member.id} className="flex items-center gap-4">
                          <span className="w-6 h-6 bg-[#1a3329]/10 flex items-center justify-center text-xs font-bold text-[#1a3329]">
                            {index + 1}
                          </span>
                          <div className="flex-1">
                            <p className="font-medium text-[#1a3329]">{member.name}</p>
                            <p className="text-sm text-neutral-500">{member.membershipType}</p>
                          </div>
                          <p className="font-semibold text-[#1a3329]">{member.visits} visits</p>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="bg-white p-6 shadow-sm border border-neutral-200">
                  <h2 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#1a3329] mb-4">Top Members by Spending</h2>
                  <div className="space-y-4">
                    {mockMembers
                      .sort((a, b) => b.totalSpent - a.totalSpent)
                      .slice(0, 5)
                      .map((member, index) => (
                        <div key={member.id} className="flex items-center gap-4">
                          <span className="w-6 h-6 bg-[#1a3329]/10 flex items-center justify-center text-xs font-bold text-[#1a3329]">
                            {index + 1}
                          </span>
                          <div className="flex-1">
                            <p className="font-medium text-[#1a3329]">{member.name}</p>
                            <p className="text-sm text-neutral-500">{member.membershipType}</p>
                          </div>
                          <p className="font-semibold text-[#1a3329]">R{member.totalSpent.toLocaleString()}</p>
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
