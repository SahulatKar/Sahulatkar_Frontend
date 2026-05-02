"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Sparkles, Shield, TrendingUp } from "lucide-react"

export function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Show content after a brief delay
    const contentTimer = setTimeout(() => {
      setShowContent(true)
    }, 500)

    // Hide splash screen and show main page after animation
    const splashTimer = setTimeout(() => {
      setShowSplash(false)
    }, 4000) // 4 seconds total

    return () => {
      clearTimeout(contentTimer)
      clearTimeout(splashTimer)
    }
  }, [])

  const letters = "Sahulatkar".split("")
  
  const containerVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      y: "-100vh",
      transition: {
        duration: 1.2,
        ease: "easeInOut"
      }
    }
  }

  const letterVariants = {
    initial: { 
      opacity: 0,
      y: 50,
      scale: 0.8
    },
    animate: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const iconVariants = {
    initial: { 
      opacity: 0,
      scale: 0,
      rotate: -180
    },
    animate: { 
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 2.5
      }
    }
  }

  const taglineVariants = {
    initial: { 
      opacity: 0,
      y: 30
    },
    animate: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 3
      }
    }
  }

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          variants={containerVariants}
          initial="initial"
          exit="exit"
          className="fixed inset-0 z-50 bg-gradient-to-br from-orange-500 via-orange-600 to-pink-600 flex items-center justify-center overflow-hidden"
        >
          {/* Background animated elements */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-xl"
              animate={{
                scale: [1.5, 1, 1.5],
                opacity: [0.6, 0.3, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Main content */}
          <div className="text-center relative z-10">
            {/* Logo/Icon */}
            <motion.div
              variants={iconVariants}
              initial="initial"
              animate={showContent ? "animate" : "initial"}
              className="mb-8"
            >
              <div className="relative">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center border-2 border-white/30">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-white/30 rounded-3xl border-dashed"
                />
              </div>
            </motion.div>

            {/* Animated Letters */}
            <div className="mb-8">
              <h1 className="text-6xl lg:text-8xl font-bold text-white flex items-center justify-center">
                {showContent && letters.map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    initial="initial"
                    animate="animate"
                    transition={{
                      delay: index * 0.15, // Stagger letter appearance
                      duration: 0.6,
                      ease: "easeOut"
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>
            </div>

            {/* Tagline */}
            {showContent && (
              <motion.div
                variants={taglineVariants}
                initial="initial"
                animate="animate"
                className="space-y-4"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Sparkles className="w-5 h-5 text-white/80" />
                  <p className="text-xl text-white/90 font-medium">
                    Your Ethical Financial Partner
                  </p>
                  <Sparkles className="w-5 h-5 text-white/80" />
                </div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 3.5 }}
                  className="flex items-center justify-center space-x-6 text-white/70"
                >
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm">Shariah Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">Smart Financing</span>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Loading dots */}
            {showContent && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 3.2 }}
                className="flex justify-center space-x-2 mt-8"
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 bg-white/60 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            )}
          </div>

          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
