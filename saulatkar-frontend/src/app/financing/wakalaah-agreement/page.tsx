"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { CheckCircle, FileText, ArrowRight, Shield, User, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function WakalaahAgreement() {
  const [agreementAccepted, setAgreementAccepted] = useState(false)
  const [isSigning, setIsSigning] = useState(false)
  const [signatureComplete, setSignatureComplete] = useState(false)
  const router = useRouter()

  const handleSignAgreement = () => {
    setIsSigning(true)
    
    // Simulate signing process
    setTimeout(() => {
      setIsSigning(false)
      setSignatureComplete(true)
      localStorage.setItem('wakalaahSigned', 'true')
    }, 2000)
  }

  const handleContinue = () => {
    router.push('/financing/murabaha-contract')
  }

  const agreementTerms = [
    {
      title: "Agency Agreement",
      description: "SahulatKar acts as your agent to purchase the product"
    },
    {
      title: "Cost Disclosure",
      description: "All costs and markup are clearly disclosed upfront"
    },
    {
      title: "Payment Terms",
      description: "Flexible payment schedule with no hidden charges"
    },
    {
      title: "Ownership Transfer",
      description: "Product ownership transfers upon final payment"
    }
  ]

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
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-purple-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Wakalaah Agreement</h1>
          <p className="text-gray-600">
            Review and sign the agency agreement
          </p>
        </motion.div>

        {/* Agreement Terms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 space-y-4"
        >
          {agreementTerms.map((term, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg border border-purple-200"
            >
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-purple-600 font-semibold text-sm">{index + 1}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-purple-900 mb-1">{term.title}</h3>
                <p className="text-sm text-purple-700">{term.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Agreement Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-8 p-6 bg-gray-50 rounded-xl"
        >
          <h3 className="font-semibold text-gray-900 mb-4">Agreement Details:</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Agreement Type:</span>
              <span className="font-medium text-gray-900">Wakalaah (Agency)</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Agent:</span>
              <span className="font-medium text-gray-900">SahulatKar Ltd.</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Principal:</span>
              <span className="font-medium text-gray-900">Customer</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Agreement Date:</span>
              <span className="font-medium text-gray-900">May 3, 2026</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Duration:</span>
              <span className="font-medium text-gray-900">12 months</span>
            </div>
          </div>
        </motion.div>

        {/* Acceptance Checkbox */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-6"
        >
          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreementAccepted}
              onChange={(e) => setAgreementAccepted(e.target.checked)}
              className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500 mt-1"
            />
            <span className="text-sm text-gray-700">
              I have read and agree to the terms of the Wakalaah agreement and understand that SahulatKar will act as my agent
            </span>
          </label>
        </motion.div>

        {/* Sign Button */}
        {!signatureComplete ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Button
              onClick={handleSignAgreement}
              disabled={!agreementAccepted || isSigning}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSigning ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Signing Agreement...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Sign Agreement
                </div>
              )}
            </Button>
          </motion.div>
        ) : (
          /* Success State */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="space-y-4"
          >
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center space-x-2 text-green-700">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Agreement Signed Successfully</span>
              </div>
            </div>
            
            <Button
              onClick={handleContinue}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              <div className="flex items-center justify-center">
                Continue to Murabaha Contract
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </Button>
          </motion.div>
        )}

        {/* Security Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200"
        >
          <div className="flex items-center space-x-2 text-purple-700">
            <Shield className="w-4 h-4" />
            <p className="text-sm">
              Your agreement is legally binding and securely stored
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
