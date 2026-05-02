"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, Eye, EyeOff, Lock, User, Shield } from "lucide-react"
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
  const [isAdminMode, setIsAdminMode] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    setError("")
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (isAdminMode) {
      // Admin login logic
      if (formData.mobileNumber === "admin" && formData.password === "admin123") {
        localStorage.setItem('isAdminAuthenticated', 'true')
        localStorage.setItem('userRole', 'admin')
        router.push('/admin')
      } else {
        setError("Invalid admin credentials. Use: admin / admin123")
      }
    } else {
      // User login logic - redirect to OTP
      if (formData.mobileNumber && formData.password) {
        localStorage.setItem('userMobile', formData.mobileNumber)
        localStorage.setItem('userPassword', formData.password)
        router.push('/auth/otp')
      } else {
        setError("Please enter valid credentials")
      }
    }
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
              {isAdminMode ? "Admin Portal" : "Welcome Back"}
            </h1>
            <p className="text-gray-600">
              {isAdminMode 
                ? "Sign in to access admin dashboard and system controls"
                : "Sign in to your account to continue your halal wealth journey"
              }
            </p>
          </motion.div>

          <motion.form
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Admin Mode Toggle */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-orange-600" />
                <span className="text-sm font-medium text-gray-700">Admin Access</span>
              </div>
              <button
                type="button"
                onClick={() => setIsAdminMode(!isAdminMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isAdminMode ? 'bg-orange-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAdminMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Error Display */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-50 border border-red-200 rounded-xl"
              >
                <p className="text-red-600 text-sm">{error}</p>
              </motion.div>
            )}

            <Input
              label={isAdminMode ? "ADMIN USERNAME" : "MOBILE NUMBER"}
              placeholder={isAdminMode ? "Enter admin username" : "+92 300 1234567"}
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
              {isAdminMode ? "Access Admin Panel →" : "Sign In to Dashboard →"}
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
            className="mt-12 space-y-4"
          >
            {/* Admin Credentials Hint */}
            {isAdminMode && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-orange-50 border border-orange-200 rounded-xl"
              >
                <div className="flex items-center space-x-2 text-orange-600 text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Admin Credentials: admin / admin123</span>
                </div>
              </motion.div>
            )}

            <div className="flex items-center justify-center space-x-8 text-xs text-gray-500">
              <div className="flex items-center space-x-2">
                <Lock className="w-4 h-4" />
                <span>Secure Login</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>24/7 Support</span>
              </div>
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
