"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Menu, X, Phone, Mail, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50"
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
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              SahulatKar
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {["Home", "Products", "How It Works", "About", "Contact"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Link
                  href="#"
                  className="text-gray-600 hover:text-orange-600 font-medium transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="hidden lg:flex items-center space-x-4"
          >
            <Button variant="ghost" className="text-gray-700 hover:text-orange-600">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
              Get Started
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
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
            {["Home", "Products", "How It Works", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href="#"
                className="block text-gray-600 hover:text-orange-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <Button variant="ghost" className="w-full justify-start">
                Sign In
              </Button>
              <Button className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}
