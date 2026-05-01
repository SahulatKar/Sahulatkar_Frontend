'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-black text-neutral-dark">
            SahulatKar
            <span className="text-orange-600">*</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <Link href="#" className="text-sm text-neutral-dark hover:text-orange-600 transition-colors font-medium">
              Features
            </Link>
            <Link href="#" className="text-sm text-neutral-dark hover:text-orange-600 transition-colors font-medium">
              How It Works
            </Link>
            <Link href="#" className="text-sm text-neutral-dark hover:text-orange-600 transition-colors font-medium">
              Pricing
            </Link>
            <Link href="#" className="text-sm text-neutral-dark hover:text-orange-600 transition-colors font-medium">
              Security
            </Link>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/signin"
              className="px-6 py-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="px-6 py-2 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-neutral-light pb-4 space-y-2"
          >
            <Link href="#" className="block px-4 py-2 text-neutral-dark hover:bg-neutral-light rounded-lg">
              Features
            </Link>
            <Link href="#" className="block px-4 py-2 text-neutral-dark hover:bg-neutral-light rounded-lg">
              How It Works
            </Link>
            <Link href="#" className="block px-4 py-2 text-neutral-dark hover:bg-neutral-light rounded-lg">
              Pricing
            </Link>
            <Link href="/signin" className="block px-4 py-2 text-orange-600 font-semibold hover:bg-orange-50 rounded-lg">
              Sign In
            </Link>
            <Link href="/signup" className="block px-4 py-2 bg-orange-600 text-white font-bold rounded-lg text-center">
              Get Started
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
