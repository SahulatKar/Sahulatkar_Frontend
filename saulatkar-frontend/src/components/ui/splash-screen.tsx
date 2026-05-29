"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const SPLASH_GRADIENT =
  "linear-gradient(135deg, #4c1d95 0%, #6d28d9 22%, #9333ea 38%, #f97316 58%, #fb923c 68%, #ec4899 88%, #db2777 100%)"

export function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true)
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    const header = document.querySelector("header")
    if (header) header.style.visibility = "hidden"

    const textTimer = setTimeout(() => setShowText(true), 200)
    const splashTimer = setTimeout(() => {
      setShowSplash(false)
      if (header) header.style.visibility = ""
    }, 3200)

    return () => {
      clearTimeout(textTimer)
      clearTimeout(splashTimer)
      if (header) header.style.visibility = ""
    }
  }, [])

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: SPLASH_GRADIENT }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.08) 0%, transparent 40%)",
            }}
          />

          <AnimatePresence>
            {showText && (
              <motion.h1
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 px-6 text-center text-[clamp(3.5rem,14vw,11rem)] font-black leading-none tracking-tight text-white"
                style={{
                  fontFamily:
                    'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  textShadow: "0 4px 40px rgba(0,0,0,0.15)",
                }}
              >
                Sahulatkar
              </motion.h1>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
