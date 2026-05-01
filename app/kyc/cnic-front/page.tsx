'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MdOutlineArrowForward } from 'react-icons/md'
import { IoCheckmark } from 'react-icons/io5'

export default function CNICFrontCapture() {
  const [isCaptured, setIsCaptured] = useState(false)

  const extractedData = {
    fullname: 'MUHAMMAD ARSALAN KHAN',
    cnicNumber: '42101-9283741-3',
    cardVerified: true,
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-neutral-light px-6 sm:px-12 py-4 flex items-center justify-between">
        <Link href="/" className="font-black text-neutral-dark">
          SahulatKar
        </Link>
        <div className="text-xs text-neutral-gray font-semibold uppercase tracking-wide">
          KYC - Step 3 of 4
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-12">
        {/* Left - Camera Frame */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl font-black mb-4 text-neutral-dark text-center">
            Capture CNIC Front
          </h1>
          <p className="text-neutral-gray mb-8 text-center max-w-sm">
            Position your Identity Card within the frame for automatic data extraction
          </p>

          {/* Camera Frame */}
          <motion.div
            animate={{ borderColor: ['#e84c21', '#f07a54', '#e84c21'] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-full max-w-sm aspect-video rounded-2xl border-4 border-orange-600 bg-gray-800 flex items-center justify-center relative overflow-hidden mb-6 group"
          >
            {/* Grid overlay */}
            <svg
              className="absolute inset-0 w-full h-full opacity-30"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <line x1="33" y1="0" x2="33" y2="100" stroke="#ff6b35" strokeWidth="0.5" />
              <line x1="66" y1="0" x2="66" y2="100" stroke="#ff6b35" strokeWidth="0.5" />
              <line x1="0" y1="33" x2="100" y2="33" stroke="#ff6b35" strokeWidth="0.5" />
              <line x1="0" y1="66" x2="100" y2="66" stroke="#ff6b35" strokeWidth="0.5" />
            </svg>

            {/* LIVE badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="flex items-center gap-2 text-orange-600 text-xs font-semibold uppercase tracking-wider bg-black/50 px-3 py-1 rounded-full">
                <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></span>
                LIVE CAMERA FEED
              </span>
            </div>

            {/* Card placeholder */}
            <div className="relative z-5 w-48 h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg border-2 border-gray-600 flex items-center justify-center">
              <span className="text-gray-500 text-center text-sm">ID Card</span>
            </div>
          </motion.div>

          {/* Controls */}
          <div className="flex gap-4 w-full max-w-sm">
            <button
              onClick={() => setIsCaptured(true)}
              className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg transition"
            >
              Capture
            </button>
            <button className="flex-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-50 font-bold py-3 rounded-lg transition">
              Retake
            </button>
          </div>

          <p className="text-xs text-neutral-gray mt-4 text-center max-w-sm">
            Position the back of your CNIC within the frame e for auto-capture.
          </p>
        </motion.div>

        {/* Right - Data Extraction */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-2xl font-black mb-2 text-neutral-dark">
            Data Extraction
          </h2>
          <p className="text-xs text-green-600 font-semibold uppercase tracking-wide mb-6">
            REAL-TIME PARSING
          </p>

          {/* Extracted Data Boxes */}
          <div className="space-y-4">
            {/* Full Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-neutral-light rounded-lg p-4"
            >
              <p className="text-xs text-neutral-gray uppercase tracking-wide font-semibold mb-2">
                FULLNAME
              </p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg font-bold text-neutral-dark"
              >
                {extractedData.fullname}
              </motion.p>
              <div className="absolute right-4 top-4 w-5 h-5 text-green-500">
                <IoCheckmark size={20} />
              </div>
            </motion.div>

            {/* CNIC Number */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-neutral-light rounded-lg p-4 relative"
            >
              <p className="text-xs text-neutral-gray uppercase tracking-wide font-semibold mb-2">
                CNIC NUMBER
              </p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg font-bold text-neutral-dark"
              >
                {extractedData.cnicNumber}
              </motion.p>
              <div className="absolute right-4 top-4 w-5 h-5 text-green-500">
                <IoCheckmark size={20} />
              </div>
            </motion.div>

            {/* Card Verified */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-orange-50 border-l-4 border-orange-600 rounded-lg p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-600 text-white flex items-center justify-center flex-shrink-0">
                  <IoCheckmark size={16} />
                </div>
                <div>
                  <p className="font-bold text-orange-900">Card Verified</p>
                  <p className="text-xs text-orange-800">
                    Identity document matches the database and security features are intact.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Continue Button */}
          <Link href="/kyc/cnic-back" className="mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-lg transition flex items-center justify-center gap-2 group"
            >
              Continue to Liveness
              <MdOutlineArrowForward className="group-hover:translate-x-1 transition" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
