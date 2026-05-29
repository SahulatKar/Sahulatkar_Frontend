"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

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
    }, 3000) // 3 seconds total

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
        duration: 1.5
      }
    }
  }

  const letterVariants = {
    initial: { 
      opacity: 0,
      x: -100,
      scale: 0.3
    },
    animate: { 
      opacity: 1,
      x: 0,
      scale: 1
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
          {/* Main content - Only text */}
          <div className="text-center relative z-10 px-4">
            {/* Animated Letters */}
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-black text-white flex items-center justify-center leading-none tracking-tight" 
                style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
              {showContent && letters.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  initial="initial"
                  animate="animate"
                  transition={{
                    delay: index * 0.2, // Left-to-right stagger
                    duration: 0.8,
                    ease: "easeOut"
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
