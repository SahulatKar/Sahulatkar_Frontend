"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { CheckCircle, AlertCircle, TrendingUp, User, CreditCard, Shield, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function CreditScoring() {
  const [score, setScore] = useState(0)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Start credit scoring analysis
    setIsAnalyzing(true)
    
    const interval = setInterval(() => {
      setScore(prev => {
        if (prev >= 750) {
          clearInterval(interval)
          setIsAnalyzing(false)
          setAnalysisComplete(true)
          return 750
        }
        return prev + Math.floor(Math.random() * 50) + 25
      })
    }, 300)

    return () => clearInterval(interval)
  }, [])

  const handleContinue = () => {
    router.push('/financing/product-details')
  }

  const handleBack = () => {
    router.push('/financing')
  }

  const getScoreColor = (score: number) => {
    if (score >= 700) return "text-green-600"
    if (score >= 600) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreMessage = (score: number) => {
    if (score >= 700) return "Excellent Credit Score"
    if (score >= 600) return "Good Credit Score"
    return "Fair Credit Score"
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
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
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Credit Scoring</h1>
          <p className="text-gray-600">
            Analyzing your credit profile for financing options
          </p>
        </motion.div>

        {/* Credit Score Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-8"
        >
          <div className="relative w-48 h-48 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
            <motion.div
              className="absolute inset-0 rounded-full border-8 border-blue-500"
              style={{
                clipPath: `polygon(50% 50%, 50% 0%, ${50 + (score / 850) * 50}% 0%)`
              }}
              animate={{ rotate: -90 }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div>
                <div className={`text-4xl font-bold ${getScoreColor(score)}`}>
                  {score}
                </div>
                <div className="text-sm text-gray-500">out of 850</div>
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className={`text-xl font-semibold mb-2 ${getScoreColor(score)}`}>
              {getScoreMessage(score)}
            </h2>
            <p className="text-gray-600">
              {score >= 700 ? "You qualify for premium financing rates" : 
               score >= 600 ? "You qualify for standard financing options" : 
               "Limited financing options available"}
            </p>
          </motion.div>
        </motion.div>

        {/* Analysis Progress */}
        {isAnalyzing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-75"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-150"></div>
            </div>
            <p className="text-center text-gray-600 text-sm">
              Analyzing your financial profile...
            </p>
          </motion.div>
        )}

        {/* Credit Factors */}
        {analysisComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-8 space-y-3"
          >
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm text-gray-700">Payment History</span>
              </div>
              <span className="text-sm font-medium text-green-600">Excellent</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm text-gray-700">Credit Utilization</span>
              </div>
              <span className="text-sm font-medium text-green-600">Good</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 text-yellow-600" />
                <span className="text-sm text-gray-700">Credit History Length</span>
              </div>
              <span className="text-sm font-medium text-yellow-600">Moderate</span>
            </div>
          </motion.div>
        )}

        {/* Action Button */}
        {analysisComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="space-y-3"
          >
            <Button
              onClick={handleBack}
              variant="outline"
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-lg font-semibold"
            >
              ← Back
            </Button>
            <Button
              onClick={handleContinue}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              <div className="flex items-center justify-center">
                Continue to Product Details
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </Button>
          </motion.div>
        )}

        {/* Security Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200"
        >
          <div className="flex items-center space-x-2 text-blue-700">
            <Shield className="w-4 h-4" />
            <p className="text-sm">
              Your credit information is securely encrypted and protected
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
