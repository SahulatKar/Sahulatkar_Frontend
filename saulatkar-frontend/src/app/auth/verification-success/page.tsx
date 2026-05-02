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
          setTimeout(() => router.push('/financing/credit-scoring'), 0)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleGoToHome = () => {
    router.push('/financing/credit-scoring')
  }

  const handleGoToDashboard = () => {
    router.push('/financing/credit-scoring')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-12 h-12 text-green-600" />
        </motion.div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Identity Verified Successfully
          </h1>
          <p className="text-gray-600 mb-8">
            Your identity has been verified and your account is now active
          </p>
        </motion.div>

        {/* Completion Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 space-y-3"
        >
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Mobile number verified</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>CNIC uploaded and verified</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Facial recognition completed</span>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-3"
        >
          <Button
            onClick={handleGoToHome}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
          >
            Go to Home
          </Button>
          
          <Button
            onClick={handleGoToDashboard}
            variant="outline"
            className="w-full border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            View Dashboard
          </Button>
        </motion.div>

        {/* Auto-redirect notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-sm text-gray-500"
        >
          Redirecting to home page in {countdown} seconds...
        </motion.div>
      </motion.div>
    </div>
  )
}
