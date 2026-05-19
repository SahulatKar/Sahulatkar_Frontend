"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { CheckCircle, Package, ArrowRight, Shield, Truck, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function ProductExtracted() {
  const router = useRouter()

  const handleContinue = () => {
    router.push('/financing/ethical-standards')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8"
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
          className="text-center mb-8"
        >
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Product Extracted Successfully
          </h1>
          <p className="text-gray-600 mb-8">
            Your product has been successfully extracted and is ready for financing
          </p>
        </motion.div>

        {/* Product Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 p-6 bg-gray-50 rounded-xl"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">iPhone 15 Pro Max</h3>
              <p className="text-sm text-gray-600">256GB - Natural Titanium</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Product ID:</span>
              <span className="font-medium text-gray-900">#PRD-2024-001</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Extraction Date:</span>
              <span className="font-medium text-gray-900">May 3, 2026</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Status:</span>
              <span className="font-medium text-green-600">Ready for Financing</span>
            </div>
          </div>
        </motion.div>

        {/* Completion Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8 space-y-3"
        >
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Product details verified</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Pricing information extracted</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Financing options calculated</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Quality assurance passed</span>
          </div>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            onClick={handleContinue}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors"
          >
            <div className="flex items-center justify-center">
              Continue to Ethical Standards
              <ArrowRight className="w-5 h-5 ml-2" />
            </div>
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 flex justify-around"
        >
          <div className="text-center">
            <Shield className="w-6 h-6 text-green-600 mx-auto mb-1" />
            <span className="text-xs text-gray-600">Verified</span>
          </div>
          <div className="text-center">
            <Truck className="w-6 h-6 text-blue-600 mx-auto mb-1" />
            <span className="text-xs text-gray-600">Ready</span>
          </div>
          <div className="text-center">
            <Clock className="w-6 h-6 text-purple-600 mx-auto mb-1" />
            <span className="text-xs text-gray-600">Fast</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
