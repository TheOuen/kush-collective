// Mock data for demo dashboards (no authentication)

export interface Member {
  id: string
  name: string
  email: string
  phone: string
  memberSince: string
  membershipType: "Day Pass" | "7-Day Pass" | "30-Day Pass" | "Annual"
  membershipExpires: string
  status: "active" | "expired" | "pending"
  visits: number
  lastVisit: string
  totalSpent: number
  avatar?: string
}

export interface Offer {
  id: string
  title: string
  description: string
  discount: string
  validUntil: string
  code: string
  membershipTypes: string[]
  isActive: boolean
}

export interface DashboardStats {
  totalMembers: number
  activeMembers: number
  newMembersThisMonth: number
  revenueThisMonth: number
  visitsToday: number
  topMembershipType: string
}

export const mockMembers: Member[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    phone: "+27 82 123 4567",
    memberSince: "January 2025",
    membershipType: "30-Day Pass",
    membershipExpires: "February 8, 2025",
    status: "active",
    visits: 12,
    lastVisit: "Today",
    totalSpent: 2450,
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah.j@gmail.com",
    phone: "+27 83 234 5678",
    memberSince: "December 2024",
    membershipType: "Annual",
    membershipExpires: "December 15, 2025",
    status: "active",
    visits: 28,
    lastVisit: "Yesterday",
    totalSpent: 8900,
  },
  {
    id: "3",
    name: "Michael Chen",
    email: "m.chen@outlook.com",
    phone: "+27 84 345 6789",
    memberSince: "November 2024",
    membershipType: "30-Day Pass",
    membershipExpires: "January 5, 2025",
    status: "expired",
    visits: 15,
    lastVisit: "Jan 4, 2025",
    totalSpent: 3200,
  },
  {
    id: "4",
    name: "Emma Williams",
    email: "emma.w@icloud.com",
    phone: "+27 85 456 7890",
    memberSince: "January 2025",
    membershipType: "7-Day Pass",
    membershipExpires: "January 15, 2025",
    status: "active",
    visits: 4,
    lastVisit: "Today",
    totalSpent: 850,
  },
  {
    id: "5",
    name: "David Nkosi",
    email: "david.n@gmail.com",
    phone: "+27 86 567 8901",
    memberSince: "October 2024",
    membershipType: "Annual",
    membershipExpires: "October 20, 2025",
    status: "active",
    visits: 45,
    lastVisit: "2 days ago",
    totalSpent: 12500,
  },
  {
    id: "6",
    name: "Lisa van der Berg",
    email: "lisa.vdb@yahoo.com",
    phone: "+27 87 678 9012",
    memberSince: "January 2025",
    membershipType: "Day Pass",
    membershipExpires: "January 9, 2025",
    status: "pending",
    visits: 1,
    lastVisit: "Today",
    totalSpent: 150,
  },
  {
    id: "7",
    name: "James Mokoena",
    email: "james.m@proton.me",
    phone: "+27 88 789 0123",
    memberSince: "September 2024",
    membershipType: "30-Day Pass",
    membershipExpires: "February 1, 2025",
    status: "active",
    visits: 22,
    lastVisit: "3 days ago",
    totalSpent: 5600,
  },
  {
    id: "8",
    name: "Thandi Dlamini",
    email: "thandi.d@gmail.com",
    phone: "+27 89 890 1234",
    memberSince: "August 2024",
    membershipType: "Annual",
    membershipExpires: "August 10, 2025",
    status: "active",
    visits: 52,
    lastVisit: "Yesterday",
    totalSpent: 15200,
  },
]

export const mockOffers: Offer[] = [
  {
    id: "1",
    title: "Welcome Bonus",
    description: "Get 20% off your first flower purchase as a new member",
    discount: "20% OFF",
    validUntil: "Ongoing",
    code: "WELCOME20",
    membershipTypes: ["Day Pass", "7-Day Pass", "30-Day Pass", "Annual"],
    isActive: true,
  },
  {
    id: "2",
    title: "Annual Member Exclusive",
    description: "Free premium pre-roll with any purchase over R500",
    discount: "FREE GIFT",
    validUntil: "January 31, 2025",
    code: "ANNUALPERK",
    membershipTypes: ["Annual"],
    isActive: true,
  },
  {
    id: "3",
    title: "Happy Hour Special",
    description: "15% off all edibles every Tuesday & Thursday 4-7PM",
    discount: "15% OFF",
    validUntil: "February 28, 2025",
    code: "HAPPYHOUR",
    membershipTypes: ["7-Day Pass", "30-Day Pass", "Annual"],
    isActive: true,
  },
  {
    id: "4",
    title: "Refer a Friend",
    description: "Get R100 credit when your referral signs up for a 30-Day or Annual pass",
    discount: "R100 CREDIT",
    validUntil: "Ongoing",
    code: "REFERRAL",
    membershipTypes: ["30-Day Pass", "Annual"],
    isActive: true,
  },
  {
    id: "5",
    title: "Birthday Treat",
    description: "25% off any purchase during your birthday week",
    discount: "25% OFF",
    validUntil: "Ongoing",
    code: "BIRTHDAY",
    membershipTypes: ["30-Day Pass", "Annual"],
    isActive: true,
  },
]

export const mockDashboardStats: DashboardStats = {
  totalMembers: 156,
  activeMembers: 128,
  newMembersThisMonth: 24,
  revenueThisMonth: 89500,
  visitsToday: 34,
  topMembershipType: "30-Day Pass",
}

// Current logged-in member for demo (simulates member view)
export const currentMember: Member = mockMembers[0]
