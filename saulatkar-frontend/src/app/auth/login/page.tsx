"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, Eye, EyeOff, Lock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Login() {
  const [formData, setFormData] = useState({
    mobileNumber: "",
    password: ""
  })
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate login - redirect to dashboard
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Login Form */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-1/2 bg-gradient-to-br from-orange-50 to-white p-8 lg:p-16 flex items-center justify-center"
      >
        <div className="w-full max-w-md">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <Link href="/" className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                SahulatKar
              </span>
            </Link>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Welcome Back
            </h1>
            <p className="text-gray-600">
              Sign in to your account to continue your halal wealth journey
            </p>
          </motion.div>

          <motion.form
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            <Input
              label="MOBILE NUMBER"
              placeholder="+92 300 1234567"
              value={formData.mobileNumber}
              onChange={(e) => handleInputChange("mobileNumber", e.target.value)}
              leftIcon={<User className="w-5 h-5 text-gray-400" />}
            />
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                PASSWORD
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="pr-12"
                  leftIcon={<Lock className="w-5 h-5 text-gray-400" />}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <div className="text-right">
                <Link href="/auth/forgot-password" className="text-sm text-orange-600 hover:text-orange-700 transition-colors">
                  Forgot?
                </Link>
              </div>
            </div>

            <Button
              size="xl"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleLogin}
            >
              Sign In to Dashboard →
            </Button>

            <div className="text-center">
              <p className="text-gray-600">
                New to SahulatKar?{" "}
                <Link href="/auth/register" className="text-orange-600 font-medium hover:text-orange-700 transition-colors">
                  Sign Up
                </Link>
              </p>
              <p className="text-gray-600 mt-2">
                <Link href="/" className="text-orange-600 font-medium hover:text-orange-700 transition-colors">
                  ← Back to Home
                </Link>
              </p>
            </div>
          </motion.form>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 flex items-center justify-center space-x-8 text-xs text-gray-500"
          >
            <div className="flex items-center space-x-2">
              <Lock className="w-4 h-4" />
              <span>Secure Login</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>24/7 Support</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Panel - Trust Building */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="hidden lg:flex w-1/2 bg-gradient-to-br from-gray-900 to-gray-800 p-16 items-center justify-center"
      >
        <div className="text-center text-white max-w-lg">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-12"
          >
            {/* Circular portrait */}
            <div className="w-48 h-48 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                <div className="w-44 h-44 bg-gray-800 rounded-full flex items-center justify-center">
                  <div className="w-40 h-40 bg-gradient-to-br from-gray-700 to-gray-600 rounded-full flex items-center justify-center">
                    <User className="w-20 h-20 text-gray-400" />
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full"
              />
            </div>
            
            <h2 className="text-3xl font-bold mb-4">
              Invest with Confidence
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Join thousands of smart investors who trust SahulatKar for their financial needs. Our Shariah-compliant platform ensures your investments grow ethically and securely.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-3 gap-4"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">25K+</div>
              <div className="text-sm text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">PKR 50M</div>
              <div className="text-sm text-gray-400">Financed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">99.9%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
