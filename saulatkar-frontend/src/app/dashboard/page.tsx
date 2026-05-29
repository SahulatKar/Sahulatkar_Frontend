"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Link, User, ShoppingBag, CreditCard, Calendar, TrendingUp, AlertCircle, ArrowRight, Eye, Download, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChatbotWidget } from "@/components/chatbot/chatbot-widget"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const router = useRouter()

  const userProfile = {
    name: "Muhammad Arsalan Khan",
    email: "arsalan.khan@example.com",
    phone: "+92 303 1234567",
    cnic: "42181-9283741-3",
    memberSince: "January 2024",
    creditScore: 750,
    creditLimit: "PKR 500,000",
    availableCredit: "PKR 500,000"
  }

  const recentOrders = [
    {
      id: "ORD-2024-001",
      product: "iPhone 15 Pro 256GB",
      store: "Daraz",
      amount: "PKR 299,999",
      status: "Processing",
      date: "2024-04-28",
      nextPayment: "PKR 25,000",
      dueDate: "2024-05-03"
    },
    {
      id: "ORD-2024-002", 
      product: "MacBook Air M2",
      store: "Amazon",
      amount: "PKR 249,999",
      status: "Delivered",
      date: "2024-04-15",
      nextPayment: "PKR 20,833",
      dueDate: "2024-05-01"
    },
    {
      id: "ORD-2024-003",
      product: "Samsung TV 55\"",
      store: "Naheed",
      amount: "PKR 149,999",
      status: "Shipped",
      date: "2024-04-25",
      nextPayment: "PKR 12,500",
      dueDate: "2024-05-02"
    }
  ]

  const upcomingPayments = [
    { date: "May 1, 2024", amount: "PKR 20,833", order: "MacBook Air M2", daysLeft: 2 },
    { date: "May 2, 2024", amount: "PKR 12,500", order: "Samsung TV 55\"", daysLeft: 3 },
    { date: "May 3, 2024", amount: "PKR 25,000", order: "iPhone 15 Pro", daysLeft: 4 }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered": return "text-green-600 bg-green-100"
      case "Processing": return "text-blue-600 bg-blue-100"
      case "Shipped": return "text-orange-600 bg-orange-100"
      default: return "text-gray-600 bg-gray-100"
    }
  }

  const getPaymentUrgency = (daysLeft: number) => {
    if (daysLeft <= 2) return "text-red-600 bg-red-100"
    if (daysLeft <= 5) return "text-orange-600 bg-orange-100"
    return "text-green-600 bg-green-100"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      <ChatbotWidget />
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
              </Link>
              <span className="text-xl font-bold text-gray-900">SahulatKar</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">
                <Settings className="w-5 h-5" />
              </Button>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-400 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {userProfile.name.split(' ')[0]}!
          </h1>
          <p className="text-gray-600">
            Manage your financing, track orders, and stay updated on your payments
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl">
            {["overview", "orders", "payments", "profile"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-white text-orange-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  label: "Credit Score",
                  value: userProfile.creditScore,
                  icon: TrendingUp,
                  color: "from-green-500 to-green-600",
                  change: "+12 this month"
                },
                {
                  label: "Credit Limit",
                  value: userProfile.creditLimit,
                  icon: CreditCard,
                  color: "from-blue-500 to-blue-600",
                  change: "Available: " + userProfile.availableCredit
                },
                {
                  label: "Active Orders",
                  value: recentOrders.length,
                  icon: ShoppingBag,
                  color: "from-orange-500 to-orange-600",
                  change: "2 processing"
                },
                {
                  label: "Next Payment",
                  value: upcomingPayments[0].amount,
                  icon: Calendar,
                  color: "from-purple-500 to-purple-600",
                  change: "In " + upcomingPayments[0].daysLeft + " days"
                }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-medium hover:shadow-large transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                          <stat.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm text-gray-500">{stat.change}</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="border-0 shadow-large">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Orders</h3>
                    <div className="space-y-4">
                      {recentOrders.slice(0, 3).map((order, index) => (
                        <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{order.product}</p>
                            <p className="text-sm text-gray-600">{order.store} • {order.date}</p>
                          </div>
                          <div className="text-right">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                              {order.status}
                            </span>
                            <p className="text-sm font-medium text-gray-900 mt-1">{order.amount}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      View All Orders
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Card className="border-0 shadow-large">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Payments</h3>
                    <div className="space-y-4">
                      {upcomingPayments.map((payment, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{payment.order}</p>
                            <p className="text-sm text-gray-600">{payment.date}</p>
                          </div>
                          <div className="text-right">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getPaymentUrgency(payment.daysLeft)}`}>
                              {payment.daysLeft} days left
                            </span>
                            <p className="text-sm font-medium text-gray-900 mt-1">{payment.amount}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button 
                      onClick={() => router.push('/payments/choose-method')}
                      className="w-full mt-4 bg-gradient-to-r from-orange-500 to-orange-600"
                    >
                      Make Payment
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-large">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Order History</h3>
                <div className="space-y-4">
                  {recentOrders.map((order, index) => (
                    <motion.div
                      key={order.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h4 className="font-semibold text-gray-900">{order.product}</h4>
                            <p className="text-sm text-gray-600">Order ID: {order.id}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </div>
                        <div className="grid md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-gray-600">Store</p>
                            <p className="font-medium">{order.store}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Amount</p>
                            <p className="font-medium">{order.amount}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Order Date</p>
                            <p className="font-medium">{order.date}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Next Payment</p>
                            <p className="font-medium">{order.nextPayment}</p>
                          </div>
                        </div>
                        <div className="flex space-x-3 mt-4">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            Track Order
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Download Invoice
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <Card className="border-0 shadow-large">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Profile Information</h3>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="text-sm font-medium text-gray-600">Full Name</label>
                          <p className="text-lg font-medium text-gray-900">{userProfile.name}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-600">Email Address</label>
                          <p className="text-lg font-medium text-gray-900">{userProfile.email}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-600">Mobile Number</label>
                          <p className="text-lg font-medium text-gray-900">{userProfile.phone}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-600">CNIC Number</label>
                          <p className="text-lg font-medium text-gray-900">{userProfile.cnic}</p>
                        </div>
                      </div>
                      <div className="pt-6 border-t border-gray-200">
                        <Button className="bg-gradient-to-r from-orange-500 to-orange-600">
                          Update Profile
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="border-0 shadow-large">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Account Summary</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Member Since</span>
                        <span className="font-medium">{userProfile.memberSince}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Credit Score</span>
                        <span className="font-medium text-green-600">{userProfile.creditScore}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Credit Limit</span>
                        <span className="font-medium">{userProfile.creditLimit}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Available Credit</span>
                        <span className="font-medium text-orange-600">{userProfile.availableCredit}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
