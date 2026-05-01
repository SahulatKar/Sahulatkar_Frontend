'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-4 sm:px-6 lg:px-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
      >
        {/* Left Content */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="space-y-4">
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight"
            >
              Begin Your{' '}
              <span className="text-gradient">Halal Wealth</span>{' '}
              Journey
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-600 leading-relaxed max-w-2xl"
            >
              Join thousands of investors growing their wealth through Shariah-compliant digital custody
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/signup"
              className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl font-semibold flex items-center justify-center gap-2 hover:shadow-elevation-lg transition-all hover:scale-105"
            >
              Create Secure Account
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#features"
              className="px-8 py-4 border-2 border-primary-500 text-primary-500 rounded-2xl font-semibold hover:bg-primary-50 transition-all"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4 pt-8 border-t border-slate-200">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              <span>SECP Licensed & Regulated</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              <span>Shariah Certified Financing</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              <span>Trusted by 25,000+ Digital Investors</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          variants={itemVariants}
          className="relative h-full hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative"
          >
            {/* Card Stack Effect */}
            <div className="space-y-4">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: i * 4, y: i * 12 }}
                  className={`w-64 h-40 rounded-3xl backdrop-blur-md border border-white/30 p-6 shadow-elevation-lg ${
                    i === 0
                      ? 'bg-gradient-to-br from-primary-500/90 to-primary-600/90 text-white'
                      : 'bg-white/80'
                  }`}
                >
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      {i === 0 && <p className="text-xs font-semibold opacity-75">SAHULATKAR ELITE</p>}
                      {i > 0 && <p className="text-xs font-semibold text-slate-500">Featured Product</p>}
                    </div>
                    {i === 0 && <p className="text-4xl font-bold">PKR 50K</p>}
                    {i > 0 && <p className="text-slate-600">Your trusted partner</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-0 right-0 space-y-4 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-elevation-lg border border-white/50"
          >
            <div className="text-right">
              <p className="text-3xl font-bold text-primary-500">99.8%</p>
              <p className="text-sm text-slate-600">Platform Uptime</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-primary-500">PKR 4.2B</p>
              <p className="text-sm text-slate-600">Assets Under Custody</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
