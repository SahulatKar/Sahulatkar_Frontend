"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Link, Users, ShoppingCart, CreditCard, AlertTriangle, TrendingUp, Shield, Eye, Download, Search, Filter, MoreVertical, Ban, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [searchTerm, setSearchTerm] = useState("")
  const router = useRouter()

  useEffect(() => {
    // Check if admin is authenticated
    const isAuthenticated = localStorage.getItem('isAdminAuthenticated')
    if (!isAuthenticated) {
      router.push('/admin/login')
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated')
    router.push('/admin/login')
  }

  const dashboardStats = [
    {
      label: "Total Users",
      value: "25,847",
      change: "+12.5%",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      trend: "up"
    },
    {
      label: "Active Orders",
      value: "1,429",
      change: "+8.3%",
      icon: ShoppingCart,
      color: "from-orange-500 to-orange-600",
      trend: "up"
    },
    {
      label: "Total Financed",
      value: "PKR 50.2M",
      change: "+15.7%",
      icon: CreditCard,
      color: "from-green-500 to-green-600",
      trend: "up"
    },
    {
      label: "Risk Alerts",
      value: "23",
      change: "-4.2%",
      icon: AlertTriangle,
      color: "from-red-500 to-red-600",
      trend: "down"
    }
  ]

  const recentOrders = [
    {
      id: "ORD-2024-001",
      user: "Muhammad Arsalan Khan",
      product: "iPhone 15 Pro 256GB",
      store: "Daraz",
      amount: "PKR 299,999",
      status: "Processing",
      risk: "Low",
      date: "2024-04-28",
      paymentStatus: "On Track"
    },
    {
      id: "ORD-2024-002",
      user: "Fatima Zahra",
      product: "MacBook Air M2",
      store: "Amazon",
      amount: "PKR 249,999",
      status: "Delivered",
      risk: "Low",
      date: "2024-04-27",
      paymentStatus: "On Track"
    },
    {
      id: "ORD-2024-003",
      user: "Ahmed Raza",
      product: "Samsung TV 55\"",
      store: "Naheed",
      amount: "PKR 149,999",
      status: "Shipped",
      risk: "Medium",
      date: "2024-04-26",
      paymentStatus: "Late Payment"
    },
    {
      id: "ORD-2024-004",
      user: "Sara Khan",
      product: "iPad Pro 11\"",
      store: "Daraz",
      amount: "PKR 189,999",
      status: "Processing",
      risk: "High",
      date: "2024-04-25",
      paymentStatus: "Overdue"
    }
  ]

  const riskAlerts = [
    {
      id: 1,
      type: "High Risk User",
      user: "Sara Khan",
      reason: "Multiple late payments",
      severity: "High",
      date: "2024-04-28",
      action: "Review Required"
    },
    {
      id: 2,
      type: "Unusual Activity",
      user: "Ahmed Raza",
      reason: "Large order volume spike",
      severity: "Medium",
      date: "2024-04-27",
      action: "Monitor"
    },
    {
      id: 3,
      type: "Payment Default",
      user: "Bilal Ahmed",
      reason: "3 consecutive missed payments",
      severity: "High",
      date: "2024-04-26",
      action: "Contact Required"
    },
    {
      id: 4,
      type: "Merchant Risk",
      user: "Store: TechWorld",
      reason: "High delivery failure rate",
      severity: "Medium",
      date: "2024-04-25",
      action: "Review"
    }
  ]

  const merchantPerformance = [
    {
      name: "Daraz",
      totalOrders: 847,
      successRate: "94.2%",
      avgDelivery: "2.3 days",
      status: "Active",
      riskLevel: "Low"
    },
    {
      name: "Amazon",
      totalOrders: 623,
      successRate: "96.8%",
      avgDelivery: "4.1 days",
      status: "Active",
      riskLevel: "Low"
    },
    {
      name: "Naheed",
      totalOrders: 412,
      successRate: "91.5%",
      avgDelivery: "3.7 days",
      status: "Active",
      riskLevel: "Medium"
    },
    {
      name: "TechWorld",
      totalOrders: 156,
      successRate: "78.3%",
      avgDelivery: "5.2 days",
      status: "Under Review",
      riskLevel: "High"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "text-green-600 bg-green-100"
      case "Processing": return "text-blue-600 bg-blue-100"
      case "Delivered": return "text-green-600 bg-green-100"
      case "Shipped": return "text-orange-600 bg-orange-100"
      case "Under Review": return "text-orange-600 bg-orange-100"
      default: return "text-gray-600 bg-gray-100"
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low": return "text-green-600 bg-green-100"
      case "Medium": return "text-orange-600 bg-orange-100"
      case "High": return "text-red-600 bg-red-100"
      default: return "text-gray-600 bg-gray-100"
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Low": return "text-green-600 bg-green-100"
      case "Medium": return "text-orange-600 bg-orange-100"
      case "High": return "text-red-600 bg-red-100"
      default: return "text-gray-600 bg-gray-100"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
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
              <span className="text-xl font-bold text-gray-900">SahulatKar Admin</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">
                <Download className="w-5 h-5" />
              </Button>
              <Button variant="ghost" onClick={handleLogout}>
                <Shield className="w-5 h-5" />
              </Button>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-400 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl">
            {["dashboard", "orders", "risk", "merchants", "users"].map((tab) => (
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

        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              {dashboardStats.map((stat, index) => (
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
                        <div className={`flex items-center space-x-1 text-sm ${
                          stat.trend === "up" ? "text-green-600" : "text-red-600"
                        }`}>
                          <TrendingUp className={`w-4 h-4 ${stat.trend === "down" ? "rotate-180" : ""}`} />
                          <span>{stat.change}</span>
                        </div>
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
                    <div className="space-y-3">
                      {recentOrders.slice(0, 4).map((order, index) => (
                        <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{order.product}</p>
                            <p className="text-sm text-gray-600">{order.user} • {order.store}</p>
                          </div>
                          <div className="text-right">
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                              {order.status}
                            </span>
                            <p className="text-sm font-medium text-gray-900 mt-1">{order.amount}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      View All Orders
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
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Risk Alerts</h3>
                    <div className="space-y-3">
                      {riskAlerts.slice(0, 4).map((alert, index) => (
                        <div key={alert.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{alert.type}</p>
                            <p className="text-sm text-gray-600">{alert.user} • {alert.reason}</p>
                          </div>
                          <div className="text-right">
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                              {alert.severity}
                            </span>
                            <p className="text-sm text-gray-600 mt-1">{alert.action}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      View All Alerts
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
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Order Management</h3>
                  <div className="flex items-center space-x-3">
                    <Input
                      placeholder="Search orders..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-64"
                      leftIcon={<Search className="w-5 h-5 text-gray-400" />}
                    />
                    <Button variant="outline">
                      <Filter className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Order ID</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Customer</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Product</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Store</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Amount</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Risk</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order, index) => (
                        <motion.tr
                          key={order.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="border-b border-gray-100 hover:bg-gray-50"
                        >
                          <td className="py-3 px-4 font-medium">{order.id}</td>
                          <td className="py-3 px-4">{order.user}</td>
                          <td className="py-3 px-4">{order.product}</td>
                          <td className="py-3 px-4">{order.store}</td>
                          <td className="py-3 px-4 font-medium">{order.amount}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(order.risk)}`}>
                              {order.risk}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Risk Management Tab */}
        {activeTab === "risk" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-large">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Risk Management</h3>
                <div className="space-y-4">
                  {riskAlerts.map((alert, index) => (
                    <motion.div
                      key={alert.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="border border-gray-200 rounded-xl p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              alert.severity === "High" ? "bg-red-100" : 
                              alert.severity === "Medium" ? "bg-orange-100" : "bg-green-100"
                            }`}>
                              <AlertTriangle className={`w-5 h-5 ${
                                alert.severity === "High" ? "text-red-600" : 
                                alert.severity === "Medium" ? "text-orange-600" : "text-green-600"
                              }`} />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{alert.type}</h4>
                              <p className="text-sm text-gray-600">{alert.user}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                              {alert.severity}
                            </span>
                            <p className="text-sm text-gray-500 mt-1">{alert.date}</p>
                          </div>
                        </div>
                        <div className="mb-4">
                          <p className="text-gray-700">{alert.reason}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-600">Recommended Action:</span>
                          <div className="flex items-center space-x-3">
                            <span className="text-sm font-medium text-orange-600">{alert.action}</span>
                            <Button size="sm">Take Action</Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Merchants Tab */}
        {activeTab === "merchants" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-large">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Merchant Performance</h3>
                <div className="space-y-4">
                  {merchantPerformance.map((merchant, index) => (
                    <motion.div
                      key={merchant.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="border border-gray-200 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h4 className="font-semibold text-gray-900">{merchant.name}</h4>
                            <div className="flex items-center space-x-4 mt-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(merchant.status)}`}>
                                {merchant.status}
                              </span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(merchant.riskLevel)}`}>
                                {merchant.riskLevel} Risk
                              </span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <p className="text-2xl font-bold text-gray-900">{merchant.totalOrders}</p>
                            <p className="text-sm text-gray-600">Total Orders</p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-green-600">{merchant.successRate}</p>
                            <p className="text-sm text-gray-600">Success Rate</p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-blue-600">{merchant.avgDelivery}</p>
                            <p className="text-sm text-gray-600">Avg Delivery</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  )
}
