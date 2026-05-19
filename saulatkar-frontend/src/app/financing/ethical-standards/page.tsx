"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { CheckCircle, Shield, ArrowRight, Scale, Heart, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function EthicalStandards() {
  const [acceptedStandards, setAcceptedStandards] = useState(false)
  const router = useRouter()

  const handleContinue = () => {
    if (acceptedStandards) {
      router.push('/financing/technical-review')
    }
  }

  const ethicalStandards = [
    {
      icon: Scale,
      title: "Shariah Compliant",
      description: "All financing follows Islamic principles with no Riba (interest)",
      checked: true
    },
    {
      icon: Shield,
      title: "Risk Sharing",
      description: "Profits and losses are shared between parties fairly",
      checked: true
    },
    {
      icon: Heart,
      title: "Ethical Investment",
      description: "Only invests in Halal and socially responsible businesses",
      checked: true
    },
    {
      icon: Globe,
      title: "Transparency",
      description: "All terms and conditions are clearly disclosed upfront",
      checked: true
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
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Ethical Financing Standards</h1>
          <p className="text-gray-600">
            Our financing follows strict Islamic principles
          </p>
        </motion.div>

        {/* Ethical Standards List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 space-y-4"
        >
          {ethicalStandards.map((standard, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border border-green-200"
            >
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <standard.icon className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-green-900 mb-1">{standard.title}</h3>
                <p className="text-sm text-green-700">{standard.description}</p>
              </div>
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
            </motion.div>
          ))}
        </motion.div>

        {/* Compliance Certificate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-green-900 mb-2">Shariah Certified</h3>
            <p className="text-sm text-green-700 mb-3">
              Certified by Islamic Finance Board of Pakistan
            </p>
            <div className="text-xs text-green-600">
              Certificate No: IFB-2024-001 | Valid until: Dec 2025
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
              checked={acceptedStandards}
              onChange={(e) => setAcceptedStandards(e.target.checked)}
              className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-1"
            />
            <span className="text-sm text-gray-700">
              I acknowledge and agree to the ethical financing standards and understand that this financing follows Islamic principles
            </span>
          </label>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Button
            onClick={handleContinue}
            disabled={!acceptedStandards}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="flex items-center justify-center">
              Continue to Technical Review
              <ArrowRight className="w-5 h-5 ml-2" />
            </div>
          </Button>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-6 text-center"
        >
          <p className="text-xs text-gray-500">
            By proceeding, you confirm your understanding of our ethical financing approach
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
