"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { CheckCircle, FileText, ArrowRight, Shield, DollarSign, Calendar, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function MurabahaContract() {
  const [contractAccepted, setContractAccepted] = useState(false)
  const [isFinalizing, setIsFinalizing] = useState(false)
  const [contractComplete, setContractComplete] = useState(false)
  const router = useRouter()

  const handleFinalizeContract = () => {
    setIsFinalizing(true)
    
    // Simulate contract finalization
    setTimeout(() => {
      setIsFinalizing(false)
      setContractComplete(true)
      localStorage.setItem('murabahaContract', 'true')
      localStorage.setItem('financingComplete', 'true')
    }, 2000)
  }

  const handleComplete = () => {
    router.push('/financing/purchase-confirmed')
  }

  // Auto-accept and finalize contract to continue flow
  useEffect(() => {
    if (!contractComplete) {
      setContractAccepted(true)
      const t = window.setTimeout(() => {
        handleFinalizeContract()
      }, 700)

      return () => window.clearTimeout(t)
    }
  }, [])

  const handleBack = () => {
    router.push('/financing/wakalaah-agreement')
  }

  const contractDetails = {
    product: "iPhone 15 Pro Max 256GB",
    costPrice: 250000,
    sellingPrice: 299999,
    markup: 49999,
    profitRate: "20%",
    paymentTerm: "12 months",
    monthlyPayment: 24999,
    downPayment: 50000,
    financedAmount: 249999
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
            <FileText className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Murabaha Sale Contract</h1>
          <p className="text-gray-600">
            Finalize your Shariah-compliant financing agreement
          </p>
        </motion.div>

        {/* Back Button */}
        <div className="mb-6">
          <Button
            onClick={handleBack}
            variant="outline"
            className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            ← Back to Wakalaah Agreement
          </Button>
        </div>

        {/* Contract Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200"
        >
          <h3 className="font-semibold text-green-900 mb-4">Contract Summary:</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Product:</span>
              <span className="font-medium text-gray-900">{contractDetails.product}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Cost Price:</span>
              <span className="font-medium text-gray-900">PKR {contractDetails.costPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Markup (Profit):</span>
              <span className="font-medium text-green-600">PKR {contractDetails.markup.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm font-semibold pt-2 border-t">
              <span className="text-gray-700">Selling Price:</span>
              <span className="text-green-700">PKR {contractDetails.sellingPrice.toLocaleString()}</span>
            </div>
          </div>
        </motion.div>

        {/* Payment Structure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8 space-y-4"
        >
          <h3 className="font-semibold text-gray-900">Payment Structure:</h3>
          
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <DollarSign className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-700">Down Payment:</span>
              </div>
              <span className="font-semibold text-blue-900">PKR {contractDetails.downPayment.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-700">Monthly Payment:</span>
              </div>
              <span className="font-semibold text-blue-900">PKR {contractDetails.monthlyPayment.toLocaleString()}</span>
            </div>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Building className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-gray-700">Financed Amount:</span>
              </div>
              <span className="font-semibold text-purple-900">PKR {contractDetails.financedAmount.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-gray-700">Payment Term:</span>
              </div>
              <span className="font-semibold text-purple-900">{contractDetails.paymentTerm}</span>
            </div>
          </div>
        </motion.div>

        {/* Murabaha Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200"
        >
          <h4 className="font-semibold text-gray-900 mb-3">Murabaha Principles:</h4>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2 text-sm text-gray-700">
              <CheckCircle className="w-3 h-3 text-green-600" />
              <span>Cost-plus pricing with disclosed markup</span>
            </li>
            <li className="flex items-center space-x-2 text-sm text-gray-700">
              <CheckCircle className="w-3 h-3 text-green-600" />
              <span>Ownership transfer at contract signing</span>
            </li>
            <li className="flex items-center space-x-2 text-sm text-gray-700">
              <CheckCircle className="w-3 h-3 text-green-600" />
              <span>Deferred payment with fixed installments</span>
            </li>
            <li className="flex items-center space-x-2 text-sm text-gray-700">
              <CheckCircle className="w-3 h-3 text-green-600" />
              <span>No interest (Riba) - profit from sale only</span>
            </li>
          </ul>
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
              checked={contractAccepted}
              onChange={(e) => setContractAccepted(e.target.checked)}
              className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-1"
            />
            <span className="text-sm text-gray-700">
              I accept the Murabaha sale contract terms and agree to the payment schedule
            </span>
          </label>
        </motion.div>

        {/* Finalize Button */}
        {!contractComplete ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Button
              onClick={handleFinalizeContract}
              disabled={!contractAccepted || isFinalizing}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isFinalizing ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Finalizing Contract...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Finalize Murabaha Contract
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
                <span className="font-semibold">Murabaha Contract Activated!</span>
              </div>
            </div>
            
            <Button
              onClick={handleComplete}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              <div className="flex items-center justify-center">
                Go to Dashboard
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
          className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200"
        >
          <div className="flex items-center space-x-2 text-green-700">
            <Shield className="w-4 h-4" />
            <p className="text-sm">
              Your contract is legally binding and Shariah compliant
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
