"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { CheckCircle, CreditCard, ArrowRight, Shield, TrendingUp, DollarSign, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function CreditLineActivated() {
  const [countdown, setCountdown] = useState(10)
  const [isActivating, setIsActivating] = useState(false)
  const [activationComplete, setActivationComplete] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Start activation process
    setIsActivating(true)
    
    setTimeout(() => {
      setIsActivating(false)
      setActivationComplete(true)
      localStorage.setItem('creditLineActivated', 'true')
      localStorage.setItem('creditLimit', '500000')
      localStorage.setItem('availableCredit', '500000')
      
      // Start countdown for auto-redirect
      const timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(timer)
            setTimeout(() => router.push('/dashboard'), 0)
            return 0
          }
          return prev - 1
        })
      }, 1000)

      return () => clearInterval(timer)
    }, 3000)
  }, [router])

  const handleGoToDashboard = () => {
    router.push('/dashboard')
  }

  const creditDetails = {
    creditLimit: 500000,
    availableCredit: 500000,
    interestRate: "0%",
    monthlyPayment: 0,
    nextPaymentDate: "June 3, 2026",
    accountStatus: "Active"
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CreditCard className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Credit Line Activated</h1>
          <p className="text-gray-600">
            Your Islamic financing credit line is now active
          </p>
        </motion.div>

        {/* Activation Progress */}
        {isActivating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-75"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-150"></div>
            </div>
            <p className="text-center text-gray-600 text-sm">
              Activating your credit line...
            </p>
          </motion.div>
        )}

        {/* Success State */}
        {activationComplete && (
          <>
            {/* Credit Card Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-8"
            >
              <div className="w-full h-48 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <p className="text-sm opacity-80">Credit Limit</p>
                      <p className="text-2xl font-bold">PKR {creditDetails.creditLimit.toLocaleString()}</p>
                    </div>
                    <CreditCard className="w-8 h-8" />
                  </div>
                  
                  <div className="mb-6">
                    <div className="w-full h-1 bg-white opacity-30 rounded-full mb-2">
                      <div className="w-full h-1 bg-white rounded-full"></div>
                    </div>
                    <p className="text-xs opacity-80">Available: PKR {creditDetails.availableCredit.toLocaleString()}</p>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs opacity-80">Account Holder</p>
                      <p className="text-sm font-medium">SahulatKar User</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs opacity-80">Valid Thru</p>
                      <p className="text-sm font-medium">12/27</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Credit Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mb-8 space-y-4"
            >
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">Interest Rate</span>
                  </div>
                  <span className="text-sm font-bold text-green-600">{creditDetails.interestRate}</span>
                </div>
                <p className="text-xs text-gray-600">Shariah-compliant financing with no Riba</p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">Account Status</span>
                  </div>
                  <span className="text-sm font-bold text-green-600">{creditDetails.accountStatus}</span>
                </div>
                <p className="text-xs text-gray-600">Ready for immediate use</p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-medium text-gray-700">Next Payment</span>
                  </div>
                  <span className="text-sm font-bold text-purple-900">{creditDetails.nextPaymentDate}</span>
                </div>
                <p className="text-xs text-gray-600">First payment due after first purchase</p>
              </div>
            </motion.div>

            {/* Success Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mb-8 space-y-3"
            >
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Instant access to credit line</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Shariah-compliant financing</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Flexible payment options</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No hidden fees or charges</span>
              </div>
            </motion.div>

            {/* Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <Button
                onClick={handleGoToDashboard}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                <div className="flex items-center justify-center">
                  Go to Dashboard
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </Button>
              
              <p className="text-center text-gray-500 text-sm mt-3">
                Auto-redirecting in {countdown} seconds...
              </p>
            </motion.div>
          </>
        )}

        {/* Security Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200"
        >
          <div className="flex items-center space-x-2 text-green-700">
            <Shield className="w-4 h-4" />
            <p className="text-sm">
              Your credit line is protected by advanced security measures
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
