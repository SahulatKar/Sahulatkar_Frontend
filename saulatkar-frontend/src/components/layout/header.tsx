"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useTheme } from "@/components/theme/theme-provider"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const router = useRouter()
  
  // Mouse-following orange effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 700 }
  const translateX = useSpring(mouseX, springConfig)
  const translateY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.body.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <>
      {/* Mouse-following orange background effect */}
      <motion.div
        style={{
          translateX: translateX,
          translateY: translateY,
        }}
        className="fixed top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full blur-3xl opacity-40 dark:opacity-25 pointer-events-none z-40"
      />
      
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 glass-header text-[var(--foreground)] backdrop-blur-3xl"
      >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold text-[var(--foreground)]">SahulatKar</span>
            </Link>
          </motion.div>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-[var(--foreground)]">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <Link href="/" className="link underline-grow font-medium transition-colors relative group text-[var(--foreground)]">Home</Link>
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Link href="/shop/paste-go" className="link underline-grow font-medium transition-colors relative group text-[var(--foreground)]">Shop</Link>
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Link href="/financing" className="link underline-grow font-medium transition-colors relative group text-[var(--foreground)]">Financing</Link>
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Link href="/dashboard" className="link underline-grow font-medium transition-colors relative group text-[var(--foreground)]">Dashboard</Link>
            </motion.div>
          </nav>

          {/* CTA Buttons */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="hidden lg:flex items-center space-x-4"
          >
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="theme-toggle-btn btn-smooth"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-theme" />
              )}
            </button>
            <Button
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white btn-smooth"
              onClick={() => router.push('/auth/login')}
            >
              Sign In
            </Button>
            <Button
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white btn-smooth"
              onClick={() => router.push('/auth/register')}
            >
              Get Started
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
            <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg theme-toggle-btn"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[var(--foreground)]" />
            ) : (
              <Menu className="w-6 h-6 text-[var(--foreground)]" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden lg:hidden"
        >
          <div className="py-4 space-y-4">
            <Link
              href="/"
              className="block link font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/shop/paste-go"
              className="block link font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/financing"
              className="block link font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Financing
            </Link>
            <Link
              href="/dashboard"
              className="block link font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <div className="pt-4 space-y-3">
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => {
                  router.push('/auth/login')
                  setIsMenuOpen(false)
                }}
              >
                Sign In
              </Button>
              <div className="flex items-center justify-between px-2">
                <Button 
                  className="w-full mr-2"
                  onClick={() => {
                    router.push('/auth/register')
                    setIsMenuOpen(false)
                  }}
                >
                  Get Started
                </Button>
                <button
                  aria-label="Toggle theme"
                  onClick={() => {
                    toggleTheme()
                    setIsMenuOpen(false)
                  }}
                  className="theme-toggle-btn btn-smooth text-[var(--foreground)]"
                >
                  {theme === "dark" ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-[var(--foreground)]" />}
                </button>
              </div>
              <Button 
                className="hidden"
                onClick={() => {
                  router.push('/auth/register')
                  setIsMenuOpen(false)
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
    </>
  )
}
