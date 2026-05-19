"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { CheckCircle, AlertCircle, Wrench, ArrowRight, Shield, Cpu, Battery } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function TechnicalReview() {
  const [isReviewing, setIsReviewing] = useState(false)
  const [reviewProgress, setReviewProgress] = useState(0)
  const [reviewComplete, setReviewComplete] = useState(false)
  const [reviewResults, setReviewResults] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    // Start technical review
    setIsReviewing(true)
    
    const interval = setInterval(() => {
      setReviewProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsReviewing(false)
          setReviewComplete(true)
          // Mock review results
          setReviewResults({
            overall: "Passed",
            battery: "Good",
            screen: "Excellent",
            performance: "Excellent",
            camera: "Good",
            connectivity: "Excellent",
            issues: [],
            recommendations: ["Device is in excellent condition", "All components functioning properly", "Ready for immediate financing"]
          })
          return 100
        }
        return prev + 10
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  const handleContinue = () => {
    router.push('/financing/wakalaah-agreement')
  }

  const getReviewIcon = (status: string) => {
    return status === "Passed" || status === "Excellent" ? 
      <CheckCircle className="w-4 h-4 text-green-600" /> : 
      <AlertCircle className="w-4 h-4 text-yellow-600" />
  }

  const getReviewColor = (status: string) => {
    return status === "Passed" || status === "Excellent" ? "text-green-600" : "text-yellow-600"
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
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Wrench className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Technical Review</h1>
          <p className="text-gray-600">
            Performing comprehensive technical inspection
          </p>
        </motion.div>

        {/* Review Progress */}
        {isReviewing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Wrench className="w-5 h-5 text-blue-600 animate-pulse" />
              <span className="text-gray-600">Analyzing device components...</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-blue-500 h-2 rounded-full"
                animate={{ width: `${reviewProgress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <p className="text-center text-gray-500 text-sm mt-2">
              {reviewProgress}% Complete
            </p>
          </motion.div>
        )}

        {/* Review Results */}
        {reviewComplete && reviewResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-6"
          >
            {/* Overall Status */}
            <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-2">
                Technical Review: {reviewResults.overall}
              </h3>
              <p className="text-green-700">
                Device meets all quality standards
              </p>
            </div>

            {/* Component Analysis */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 mb-3">Component Analysis:</h4>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Battery className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-700">Battery Health</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className={`text-sm font-medium ${getReviewColor(reviewResults.battery)}`}>
                    {reviewResults.battery}
                  </span>
                  {getReviewIcon(reviewResults.battery)}
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Cpu className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-700">Performance</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className={`text-sm font-medium ${getReviewColor(reviewResults.performance)}`}>
                    {reviewResults.performance}
                  </span>
                  {getReviewIcon(reviewResults.performance)}
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-700">Screen Condition</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className={`text-sm font-medium ${getReviewColor(reviewResults.screen)}`}>
                    {reviewResults.screen}
                  </span>
                  {getReviewIcon(reviewResults.screen)}
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-700">Connectivity</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className={`text-sm font-medium ${getReviewColor(reviewResults.connectivity)}`}>
                    {reviewResults.connectivity}
                  </span>
                  {getReviewIcon(reviewResults.connectivity)}
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Recommendations:</h4>
              <ul className="space-y-1">
                {reviewResults.recommendations.map((rec: string, index: number) => (
                  <li key={index} className="flex items-center space-x-2 text-sm text-blue-700">
                    <CheckCircle className="w-3 h-3 text-blue-600" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {/* Action Button */}
        {reviewComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Button
              onClick={handleContinue}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              <div className="flex items-center justify-center">
                Continue to Agreement
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </Button>
          </motion.div>
        )}

        {/* Quality Assurance */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200"
        >
          <div className="flex items-center space-x-2 text-gray-700">
            <Shield className="w-4 h-4" />
            <p className="text-sm">
              Technical review completed by certified technicians
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
