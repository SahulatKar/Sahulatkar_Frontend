"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, Eye, EyeOff, Lock, User, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function AdminLogin() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    setError("")
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Dummy credentials: username: admin, password: admin123
    if (formData.username === "admin" && formData.password === "admin123") {
      // Set admin session
      localStorage.setItem('isAdminAuthenticated', 'true')
      router.push('/admin')
    } else {
      setError("Invalid credentials. Please try again.")
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Admin Login Form */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-1/2 bg-gradient-to-br from-gray-900 to-gray-800 p-8 lg:p-16 flex items-center justify-center"
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
              <span className="text-2xl font-bold text-white">
                SahulatKar Admin
              </span>
            </Link>
            
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-8 h-8 text-orange-500" />
              <h1 className="text-3xl lg:text-4xl font-bold text-white">
                Admin Portal
              </h1>
            </div>
            <p className="text-gray-300">
              Secure access to system management and risk monitoring
            </p>
          </motion.div>

          <motion.form
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
            onSubmit={handleLogin}
          >
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-300 text-sm"
              >
                {error}
              </motion.div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                ADMIN USERNAME
              </label>
              <Input
                type="text"
                placeholder="Enter admin username"
                value={formData.username}
                onChange={(e) => handleInputChange("username", e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                leftIcon={<User className="w-5 h-5 text-gray-400" />}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                PASSWORD
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter admin password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="pr-12 bg-white/10 border-white/20 text-white placeholder-gray-400"
                  leftIcon={<Lock className="w-5 h-5 text-gray-400" />}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              size="xl"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Access Admin Panel →
            </Button>

            <div className="text-center">
              <p className="text-gray-400">
                <Link href="/" className="text-orange-400 hover:text-orange-300 transition-colors">
                  ← Back to Main Site
                </Link>
              </p>
            </div>
          </motion.form>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl"
          >
            <div className="flex items-center space-x-2 text-orange-400 text-sm">
              <Shield className="w-4 h-4" />
              <span>Dummy Credentials: admin / admin123</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Panel - Security Info */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="hidden lg:flex w-1/2 bg-gradient-to-br from-orange-50 to-white p-16 items-center justify-center"
      >
        <div className="text-center max-w-lg">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-12"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6 relative">
              <Shield className="w-16 h-16 text-orange-600" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-orange-300 rounded-full border-dashed"
              />
            </div>
          </motion.div>
          
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Enterprise Security
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            This admin portal provides secure access to critical system functions including user management, risk monitoring, and regulatory compliance tools.
          </p>

          <div className="grid grid-cols-3 gap-6 text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="text-3xl font-bold text-orange-600 mb-2">256-bit</div>
              <div className="text-sm text-gray-600">Encryption</div>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <div className="text-3xl font-bold text-orange-600 mb-2">2FA</div>
              <div className="text-sm text-gray-600">Authentication</div>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Monitoring</div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
