'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MdOutlineArrowForward } from 'react-icons/md'
import { IoCheckmarkCircle } from 'react-icons/io5'

export default function IdentityVerification() {
  const [isReady, setIsReady] = useState(false)

  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-neutral-light px-6 sm:px-12 py-4 flex items-center justify-between">
        <Link href="/" className="font-black text-neutral-dark">
          SahulatKar
        </Link>
        <div className="text-xs text-neutral-gray font-semibold uppercase tracking-wide">
          KYC - Step 1 of 4
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl w-full text-center"
        >
          <h1 className="text-5xl sm:text-6xl font-black mb-6 text-neutral-dark">
            Identity Verification
          </h1>

          <p className="text-lg text-neutral-gray mb-16 leading-relaxed max-w-lg mx-auto">
            We need to verify your identity with a quick selfie. This is a one-time verification required by SECP and NADRA.
          </p>

          {/* Requirements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-lg mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-neutral-light rounded-xl p-6"
            >
              <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                ☀️
              </div>
              <h3 className="font-bold text-neutral-dark mb-2">Good Lighting</h3>
              <p className="text-sm text-neutral-gray">
                Ensure your face is evenly lit without shadows.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-neutral-light rounded-xl p-6"
            >
              <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                👁️
              </div>
              <h3 className="font-bold text-neutral-dark mb-2">Clear Face</h3>
              <p className="text-sm text-neutral-gray">
                Remove glasses, hats, or masks for clarity.
              </p>
            </motion.div>
          </div>

          {/* Face Detection Circle */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-48 h-48 mx-auto mb-16 rounded-full border-4 border-orange-600 border-dashed flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100"
          >
            <span className="text-8xl">📷</span>
          </motion.div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-orange-50 border-l-4 border-orange-600 rounded-lg p-6 mb-12 text-left max-w-lg mx-auto"
          >
            <h3 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
              <IoCheckmarkCircle className="text-orange-600" />
              What to do
            </h3>
            <ol className="space-y-2 text-sm text-orange-800">
              <li>1. Position your face clearly in the frame</li>
              <li>2. Blink twice to confirm you&apos;re live</li>
              <li>3. Turn your head slowly to the sides</li>
              <li>4. Verification completes instantly</li>
            </ol>
          </motion.div>

          {/* Button */}
          <Link href="/kyc/liveness-detection">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg transition flex items-center justify-center gap-2 group mx-auto"
            >
              I&apos;m Ready
              <MdOutlineArrowForward className="group-hover:translate-x-1 transition" />
            </motion.button>
          </Link>

          <p className="text-xs text-neutral-gray mt-8">
            By proceeding, you consent to our{' '}
            <a href="#" className="text-orange-600 font-semibold hover:text-orange-700">
              biometric data policy
            </a>{' '}
            for identity verification purposes only.
          </p>
        </motion.div>
      </div>
    </main>
  )
}
