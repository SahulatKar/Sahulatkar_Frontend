"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Link, CreditCard, Smartphone, Calendar, CheckCircle, AlertCircle, Download, ArrowRight, Banknote, QrCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Repayment() {
  const [selectedMethod, setSelectedMethod] = useState("")
  const [paymentAmount, setPaymentAmount] = useState("25000")
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [raastAccount, setRaastAccount] = useState("")
  const [isProcessingRaast, setIsProcessingRaast] = useState(false)
  const [raastTransactionId, setRaastTransactionId] = useState("")
  const [paymentStatus, setPaymentStatus] = useState("")
  const [showQRCode, setShowQRCode] = useState(false)

  const paymentMethods = [
    {
      id: "raast",
      name: "Raast Instant Payment",
      description: "Instant bank transfer via Pakistan's real-time payment system",
      icon: Banknote,
      color: "from-green-500 to-green-600",
      fee: "PKR 0",
      time: "Instant"
    },
    {
      id: "easypaisa",
      name: "EasyPaisa",
      description: "Pay using your EasyPaisa mobile wallet",
      icon: Smartphone,
      color: "from-green-600 to-green-700",
      fee: "PKR 0",
      time: "Instant"
    },
    {
      id: "jazzcash",
      name: "JazzCash",
      description: "Pay using your JazzCash mobile wallet",
      icon: Smartphone,
      color: "from-blue-500 to-blue-600",
      fee: "PKR 0",
      time: "Instant"
    },
    {
      id: "bank",
      name: "Bank Transfer",
      description: "Traditional bank transfer to our account",
      icon: CreditCard,
      color: "from-purple-500 to-purple-600",
      fee: "PKR 0",
      time: "1-2 hours"
    }
  ]

  const upcomingPayments = [
    {
      id: 1,
      order: "iPhone 15 Pro 256GB",
      amount: "PKR 25,000",
      dueDate: "May 3, 2024",
      daysLeft: 4,
      status: "upcoming",
      orderId: "ORD-2024-001"
    },
    {
      id: 2,
      order: "MacBook Air M2 512GB",
      amount: "PKR 20,833",
      dueDate: "May 1, 2024",
      daysLeft: 2,
      status: "urgent",
      orderId: "ORD-2024-002"
    },
    {
      id: 3,
      order: "Samsung TV 55\"",
      amount: "PKR 12,500",
      dueDate: "May 2, 2024",
      daysLeft: 3,
      status: "upcoming",
      orderId: "ORD-2024-003"
    }
  ]

  const paymentHistory = [
    {
      date: "April 15, 2024",
      amount: "PKR 20,833",
      method: "Raast",
      status: "completed",
      order: "MacBook Air M2"
    },
    {
      date: "April 1, 2024",
      amount: "PKR 25,000",
      method: "EasyPaisa",
      status: "completed",
      order: "iPhone 15 Pro"
    },
    {
      date: "March 15, 2024",
      amount: "PKR 12,500",
      method: "Bank Transfer",
      status: "completed",
      order: "Samsung TV 55\""
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-green-600 bg-green-100"
      case "pending": return "text-orange-600 bg-orange-100"
      case "failed": return "text-red-600 bg-red-100"
      default: return "text-gray-600 bg-gray-100"
    }
  }

  const getUrgencyColor = (daysLeft: number) => {
    if (daysLeft <= 2) return "text-red-600 bg-red-100"
    if (daysLeft <= 5) return "text-orange-600 bg-orange-100"
    return "text-green-600 bg-green-100"
  }

  const handlePayment = () => {
    if (selectedMethod && paymentAmount) {
      if (selectedMethod === "raast") {
        setShowQRCode(true)
      } else {
        setShowConfirmation(true)
      }
    }
  }

  const processRaastPayment = async () => {
    setIsProcessingRaast(true)
    
    // Simulate Raast payment processing
    setTimeout(() => {
      const transactionId = `RAST${Date.now()}${Math.random().toString(36).substr(2, 6).toUpperCase()}`
      setRaastTransactionId(transactionId)
      setPaymentStatus("completed")
      setIsProcessingRaast(false)
      setShowQRCode(false)
      
      // Store transaction record
      const transaction = {
        id: transactionId,
        amount: paymentAmount,
        method: "Raast",
        status: "completed",
        timestamp: new Date().toISOString(),
        account: raastAccount
      }
      
      localStorage.setItem('lastTransaction', JSON.stringify(transaction))
    }, 3000)
  }

  const validateRaastAccount = (account: string) => {
    // Basic validation for Pakistani bank account format
    const raastRegex = /^03\d{9}$/
    return raastRegex.test(account)
  }

  const generateRaastQR = () => {
    // Simulate QR code generation for Raast payment
    const qrData = {
      merchantId: "MERCHANT123456",
      amount: paymentAmount,
      currency: "PKR",
      account: "03123456789",
      transactionId: `QR${Date.now()}`,
      timestamp: new Date().toISOString()
    }
    
    return `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==`
  }

  const confirmPayment = () => {
    // Handle payment processing
    setShowConfirmation(false)
    setSelectedMethod("")
    setPaymentAmount("25000")
    setRaastAccount("")
    setRaastTransactionId("")
    setPaymentStatus("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/dashboard">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
              </Link>
              <span className="text-xl font-bold text-gray-900">SahulatKar</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-400 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Repayment Center</h1>
          <p className="text-gray-600">
            Manage your installment payments with multiple convenient payment options
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Methods */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="border-0 shadow-large">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Make a Payment</h3>
                
                {/* Amount Selection */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-gray-700 mb-3 block">Payment Amount</label>
                  <div className="grid grid-cols-3 gap-3">
                    {["12500", "20833", "25000"].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setPaymentAmount(amount)}
                        className={`p-3 rounded-xl border-2 transition-all duration-200 ${
                          paymentAmount === amount
                            ? "border-orange-500 bg-orange-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="font-semibold text-gray-900">PKR {parseInt(amount).toLocaleString()}</div>
                        <div className="text-xs text-gray-600">
                          {amount === "12500" ? "TV Payment" : amount === "20833" ? "MacBook" : "iPhone"}
                        </div>
                      </button>
                    ))}
                  </div>
                  <Input
                    placeholder="Enter custom amount"
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(e.target.value)}
                    className="mt-3"
                    leftIcon={<Banknote className="w-5 h-5 text-gray-400" />}
                  />
                </div>

                {/* Payment Methods */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-gray-700 mb-3 block">Payment Method</label>
                  <div className="space-y-3">
                    {paymentMethods.map((method) => (
                      <motion.div
                        key={method.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div
                          onClick={() => setSelectedMethod(method.id)}
                          className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-200 ${
                            selectedMethod === method.id
                              ? "border-orange-500 bg-orange-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center`}>
                                <method.icon className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900">{method.name}</h4>
                                <p className="text-sm text-gray-600">{method.description}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-green-600 font-medium">{method.fee}</div>
                              <div className="text-xs text-gray-500">{method.time}</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <Button
                  size="xl"
                  onClick={handlePayment}
                  disabled={!selectedMethod || !paymentAmount}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Proceed to Payment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Upcoming Payments */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="border-0 shadow-large mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Upcoming Payments</h3>
                <div className="space-y-4">
                  {upcomingPayments.map((payment) => (
                    <div key={payment.id} className="border border-gray-200 rounded-xl p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-medium text-gray-900">{payment.order}</h4>
                          <p className="text-sm text-gray-600">{payment.orderId}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(payment.daysLeft)}`}>
                          {payment.daysLeft} days left
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-lg font-bold text-gray-900">{payment.amount}</p>
                          <p className="text-sm text-gray-600">Due: {payment.dueDate}</p>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => setPaymentAmount(payment.amount.replace("PKR ", "").replace(",", ""))}
                        >
                          Pay Now
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Payment Summary */}
            <Card className="border-0 shadow-large">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Payment Summary</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Outstanding</span>
                    <span className="font-semibold">PKR 58,333</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Next Payment</span>
                    <span className="font-semibold text-orange-600">PKR 20,833</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Paid</span>
                    <span className="font-semibold text-green-600">PKR 58,333</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Remaining</span>
                    <span className="font-semibold">PKR 58,333</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Payment History */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8"
        >
          <Card className="border-0 shadow-large">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Payment History</h3>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download Statement
                </Button>
              </div>
              <div className="space-y-4">
                {paymentHistory.map((payment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        payment.status === "completed" ? "bg-green-100" : "bg-orange-100"
                      }`}>
                        {payment.status === "completed" ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-orange-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{payment.order}</p>
                        <p className="text-sm text-gray-600">{payment.date} • {payment.method}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{payment.amount}</p>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(payment.status)}`}>
                        {payment.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Payment Confirmation Modal */}
      {showConfirmation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Confirm Payment</h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Amount</span>
                <span className="font-semibold">PKR {parseInt(paymentAmount).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Method</span>
                <span className="font-semibold">
                  {paymentMethods.find(m => m.id === selectedMethod)?.name}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Processing Fee</span>
                <span className="font-semibold text-green-600">PKR 0</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-lg">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-orange-600">PKR {parseInt(paymentAmount).toLocaleString()}</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                onClick={() => setShowConfirmation(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={confirmPayment}
                className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600"
              >
                Confirm Payment
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
