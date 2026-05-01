'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiDownload, FiHeart, FiBarChart2, FiShield, FiZap, FiTrendingUp } from 'react-icons/fi'

const features = [
  {
    icon: FiDownload,
    title: 'Download & Verify',
    description: 'Secure onboarding with CNIC-based identity verification and facial liveness detection',
    color: 'bg-blue-500',
  },
  {
    icon: FiHeart,
    title: 'Shop Favorites',
    description: 'Browse partner brands in the Discover tab to find your essentials with exclusive offers',
    color: 'bg-rose-500',
  },
  {
    icon: FiBarChart2,
    title: 'Select Plan',
    description: 'Choose customized installment plans with transparent Shariah-compliant financing',
    color: 'bg-violet-500',
  },
  {
    icon: FiShield,
    title: 'Ethical Sourcing',
    description: 'We only extract data from regulated and SECP compliant vendors',
    color: 'bg-emerald-500',
  },
  {
    icon: FiZap,
    title: 'Instant Analysis',
    description: 'Automated price comparison engines working in real-time for transparent pricing',
    color: 'bg-orange-500',
  },
  {
    icon: FiTrendingUp,
    title: 'Secure Channel',
    description: 'Your personal credentials are never shared with third-party stores',
    color: 'bg-cyan-500',
  },
]

export default function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
            Transparent & Simple
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our ethical AI has verified the product details and secured the most transparent pricing from the marketplace.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group p-8 bg-white rounded-3xl border border-slate-200 hover:border-primary-200 hover:shadow-elevation-lg transition-all"
              >
                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 8 }}
                  className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:shadow-lg transition-all`}
                >
                  <Icon className="w-8 h-8" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>

                {/* Hover Indicator */}
                <div className="mt-6 flex items-center gap-2 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-semibold">Learn more</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
