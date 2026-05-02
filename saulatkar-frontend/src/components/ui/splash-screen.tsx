"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Sparkles, Shield, TrendingUp, Zap, Crown, Diamond } from "lucide-react"

export function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Hide navigation during splash
    const nav = document.querySelector('nav')
    if (nav) {
      nav.style.display = 'none'
    }

    // Show content after a brief delay
    const contentTimer = setTimeout(() => {
      setShowContent(true)
    }, 300)

    // Hide splash screen and show main page after animation
    const splashTimer = setTimeout(() => {
      setShowSplash(false)
      // Show navigation again after splash
      if (nav) {
        nav.style.display = ''
      }
    }, 5000) // 5 seconds total for better experience

    return () => {
      clearTimeout(contentTimer)
      clearTimeout(splashTimer)
      // Ensure navigation is visible on cleanup
      if (nav) {
        nav.style.display = ''
      }
    }
  }, [])

  const letters = "Sahulatkar".split("")
  
  const containerVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      y: "-100vh",
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  }

  const letterVariants = {
    initial: { 
      opacity: 0,
      x: -100,
      y: 50,
      scale: 0.3,
      rotate: -15
    },
    animate: { 
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const iconVariants = {
    initial: { 
      opacity: 0,
      scale: 0,
      rotate: -360
    },
    animate: { 
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 3.2
      }
    }
  }

  const taglineVariants = {
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
        duration: 1,
        ease: "easeOut",
        delay: 3.8
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
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-purple-900 via-orange-600 to-pink-600 flex items-center justify-center overflow-hidden"
        >
          {/* Enhanced Background animated elements */}
          <div className="absolute inset-0">
            {/* Large floating orbs */}
            <motion.div
              className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.4, 0.8, 0.4],
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-10 right-10 w-52 h-52 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-3xl"
              animate={{
                scale: [2, 1, 2],
                opacity: [0.8, 0.4, 0.8],
                x: [0, -50, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            <motion.div
              className="absolute top-1/3 right-1/4 w-36 h-36 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full blur-2xl"
              animate={{
                scale: [1.5, 1, 1.5],
                opacity: [0.6, 0.3, 0.6],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3
              }}
            />
            
            {/* Particle effects */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/60 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  y: [0, -window.innerHeight - 100],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>

          {/* Main content */}
          <div className="text-center relative z-10 px-4">
            {/* Crown/Icon */}
            <motion.div
              variants={iconVariants}
              initial="initial"
              animate={showContent ? "animate" : "initial"}
              className="mb-12"
            >
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-yellow-400/30 to-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border-4 border-white/40 shadow-2xl">
                  <Crown className="w-16 h-16 text-white drop-shadow-lg" />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-4 border-yellow-400/50 rounded-full border-dashed"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 border-2 border-white/30 rounded-full border-dotted"
                />
              </div>
            </motion.div>

            {/* Animated Letters - Much Larger and Stylish */}
            <div className="mb-12">
              <h1 className="text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-white flex items-center justify-center leading-none tracking-tight" 
                  style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
                {showContent && letters.map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    initial="initial"
                    animate="animate"
                    transition={{
                      delay: index * 0.2, // Slower stagger for dramatic effect
                      duration: 0.8,
                      ease: "easeOut"
                    }}
                    className="inline-block drop-shadow-2xl"
                    style={{
                      textShadow: '0 0 40px rgba(255,255,255,0.5), 0 0 80px rgba(255,255,255,0.3)'
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>
              
              {/* Underline animation */}
              {showContent && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 3, ease: "easeOut" }}
                  className="h-2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mt-4"
                />
              )}
            </div>

            {/* Enhanced Tagline */}
            {showContent && (
              <motion.div
                variants={taglineVariants}
                initial="initial"
                animate="animate"
                className="space-y-6"
              >
                <div className="flex items-center justify-center space-x-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Sparkles className="w-8 h-8 text-yellow-300" />
                  </motion.div>
                  <p className="text-3xl md:text-4xl font-bold text-white/95 tracking-wide">
                    Your Premium Financial Partner
                  </p>
                  <motion.div
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Sparkles className="w-8 h-8 text-yellow-300" />
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 4.2 }}
                  className="flex items-center justify-center space-x-8 text-white/80 text-lg"
                >
                  <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                    <Shield className="w-6 h-6 text-yellow-300" />
                    <span className="font-semibold">Shariah Compliant</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                    <Diamond className="w-6 h-6 text-yellow-300" />
                    <span className="font-semibold">Smart Financing</span>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Enhanced Loading dots */}
            {showContent && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 4 }}
                className="flex justify-center space-x-4 mt-12"
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-white rounded-full shadow-lg"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6],
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            )}
          </div>

          {/* Enhanced gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
