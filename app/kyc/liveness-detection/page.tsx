'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MdOutlineArrowForward } from 'react-icons/md'

export default function LivenessDetection() {
  const [isScanning, setIsScanning] = useState(false)

  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-neutral-light px-6 sm:px-12 py-4 flex items-center justify-between">
        <Link href="/" className="font-black text-neutral-dark">
          SahulatKar
        </Link>
        <div className="text-xs text-neutral-gray font-semibold uppercase tracking-wide">
          KYC - Step 2 of 4
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
            Liveness Detection
          </h1>

          <p className="text-lg text-neutral-gray mb-16 leading-relaxed max-w-lg mx-auto">
            Prove you&apos;re a real person by following simple on-screen actions. Takes less than 30 seconds.
          </p>

          {/* Camera Frame */}
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="w-full max-w-md mx-auto mb-12 aspect-square rounded-3xl border-4 border-orange-600 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center relative overflow-hidden"
          >
            {/* Scanning animation */}
            {isScanning && (
              <motion.div
                animate={{ y: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-b from-orange-500/30 via-transparent to-orange-500/30"
              />
            )}

            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-8xl relative z-10"
            >
              👤
            </motion.span>
          </motion.div>

          {/* Instructions Card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-orange-50 border-l-4 border-orange-600 rounded-lg p-6 mb-12 text-left max-w-lg mx-auto"
          >
            <h3 className="font-bold text-orange-900 mb-4">Blink twice, then turn head slowly</h3>
            <p className="text-sm text-orange-800">
              This ensures you&apos;re a real person and helps us verify your identity securely and responsibly.
            </p>
          </motion.div>

          {/* Live Badge */}
          <div className="flex items-center justify-center gap-2 mb-12">
            <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-neutral-dark uppercase tracking-wide">Live Camera Feed</span>
          </div>

          {/* Button */}
          <Link href="/kyc/cnic-front">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsScanning(true)}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg transition flex items-center justify-center gap-2 group mx-auto"
            >
              {isScanning ? 'Scanning...' : 'Start Detection'}
              <MdOutlineArrowForward className="group-hover:translate-x-1 transition" />
            </motion.button>
          </Link>

          <p className="text-xs text-neutral-gray mt-8">
            This takes about 30 seconds. Ensure good lighting and a neutral background.
          </p>
        </motion.div>
      </div>
    </main>
  )
}
