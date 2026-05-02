"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { CheckCircle, Shield, ArrowRight, Home, User, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function VerificationSuccess() {
  const [countdown, setCountdown] = useState(5)
  const router = useRouter()

  useEffect(() => {
    // Set authentication as complete
    localStorage.setItem('isAuthenticated', 'true')
    localStorage.setItem('userRole', 'user')
    localStorage.setItem('identityVerified', 'true')

    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          router.push('/')
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [router])

  const handleGoToHome = () => {
    router.push('/')
  }

  const handleGoToDashboard = () => {
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Success Message */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white"
      >
        <div className="w-full max-w-md text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
              className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Identity Verified!
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Welcome to SahulatKar
            </p>
            <p className="text-gray-500">
              Your account has been successfully verified and is now active
            </p>
          </motion.div>

          {/* Completion Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 p-6 bg-green-50 rounded-xl border border-green-200"
          >
            <h3 className="text-lg font-semibold text-green-800 mb-4">
              Verification Complete ✅
            </h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Mobile number verified</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">CNIC front uploaded</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">CNIC back uploaded</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Facial recognition completed</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Account activated</span>
              </div>
            </div>
          </motion.div>

          {/* Auto-redirect countdown */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200"
          >
            <div className="flex items-center justify-center space-x-2 text-blue-700">
              <Home className="w-5 h-5" />
              <p className="text-sm">
                Redirecting to home page in <span className="font-bold">{countdown}</span> seconds...
              </p>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-3"
          >
            <Button
              onClick={handleGoToHome}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200"
            >
              <div className="flex items-center justify-center">
                <Home className="w-5 h-5 mr-2" />
                Go to Home
              </div>
            </Button>
            
            <Button
              onClick={handleGoToDashboard}
              variant="outline"
              className="w-full border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200"
            >
              <div className="flex items-center justify-center">
                <User className="w-5 h-5 mr-2" />
                View Dashboard
              </div>
            </Button>
          </motion.div>

          {/* Security Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200"
          >
            <div className="flex items-center space-x-2 text-gray-600">
              <Shield className="w-5 h-5" />
              <p className="text-sm">
                <strong>Security Notice:</strong> Your account is now protected with multi-factor authentication
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Panel - Visual */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden lg:flex lg:w-1/2 items-center justify-center bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 p-8"
      >
        <div className="text-center text-white max-w-md">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 360, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle className="w-16 h-16" />
          </motion.div>
          <h2 className="text-4xl font-bold mb-4">Welcome Aboard!</h2>
          <p className="text-xl opacity-90 mb-6">
            Your identity has been verified successfully. You can now access all features of SahulatKar.
          </p>
          <div className="space-y-4 text-left">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>🛒 Shop with instant financing</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>💳 Flexible payment plans</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>🔒 Secure transactions</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>📱 Track your orders</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>🎯 Personalized recommendations</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
