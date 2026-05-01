'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MdOutlineArrowForward } from 'react-icons/md'
import { IoCheckmarkCircle } from 'react-icons/io5'

export default function CreditLine() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)

  const amounts = [
    { value: 50000, label: 'PKR 50,000', monthly: 'PKR 2,500/mo' },
    { value: 100000, label: 'PKR 100,000', monthly: 'PKR 5,000/mo' },
    { value: 250000, label: 'PKR 250,000', monthly: 'PKR 12,500/mo' },
    { value: 500000, label: 'PKR 500,000', monthly: 'PKR 25,000/mo' },
  ]

  const benefits = [
    'Zero Hidden Charges',
    'Flexible Repayment Terms',
    'No Collateral Required',
    'Instant Approval',
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-neutral-light px-6 sm:px-12 py-4 flex items-center justify-between">
        <Link href="/" className="font-black text-neutral-dark">
          SahulatKar
        </Link>
        <div className="text-xs text-neutral-gray font-semibold uppercase tracking-wide">
          KYC - Final Step
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl w-full"
        >
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-black mb-6 text-neutral-dark">
              Your Credit Line
            </h1>
            <p className="text-lg text-neutral-gray leading-relaxed max-w-lg mx-auto">
              Based on your information, we&apos;ve approved you for a credit line. Choose your desired limit to get started.
            </p>
          </div>

          {/* Amount Selection Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {amounts.map((amount, i) => (
              <motion.button
                key={amount.value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedAmount(amount.value)}
                className={`p-6 rounded-xl transition-all border-2 group ${
                  selectedAmount === amount.value
                    ? 'bg-orange-600 border-orange-600 text-white shadow-lg'
                    : 'bg-white border-neutral-light text-neutral-dark hover:border-orange-600'
                }`}
              >
                <p className="font-black text-2xl mb-1 group-hover:scale-105 transition-transform">
                  {amount.label}
                </p>
                <p
                  className={`text-xs font-semibold ${
                    selectedAmount === amount.value
                      ? 'text-orange-100'
                      : 'text-neutral-gray'
                  }`}
                >
                  {amount.monthly}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-orange-50 rounded-2xl p-8 mb-12"
          >
            <h2 className="text-2xl font-black mb-6 text-neutral-dark">
              Why Choose SahulatKar?
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <IoCheckmarkCircle className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                  <p className="font-bold text-sm text-neutral-dark">{benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Summary Card */}
          {selectedAmount && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-neutral-light border-2 border-orange-600 rounded-2xl p-8 mb-12"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-neutral-gray font-semibold">Credit Limit</p>
                  <p className="text-2xl font-black text-orange-600">
                    PKR {(selectedAmount / 1000).toFixed(0)}K
                  </p>
                </div>
                <div className="w-full h-px bg-neutral-light"></div>
                <div className="flex items-center justify-between">
                  <p className="text-neutral-gray font-semibold">Monthly Installment</p>
                  <p className="text-lg font-bold text-neutral-dark">
                    PKR {(selectedAmount / 20).toLocaleString()}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* CTA Button */}
          <Link href="/dashboard">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={!selectedAmount}
              className={`w-full font-bold py-4 rounded-lg transition flex items-center justify-center gap-2 group ${
                selectedAmount
                  ? 'bg-orange-600 hover:bg-orange-700 text-white'
                  : 'bg-neutral-light text-neutral-gray cursor-not-allowed'
              }`}
            >
              Continue to Dashboard
              <MdOutlineArrowForward className="group-hover:translate-x-1 transition" />
            </motion.button>
          </Link>

          <p className="text-xs text-neutral-gray mt-8 text-center">
            Your credit line is under review and will be finalized once you activate your account.
          </p>
        </motion.div>
      </div>
    </main>
  )
}
