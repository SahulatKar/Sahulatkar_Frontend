"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Eye, EyeOff, Lock, User, Shield, Building, UserCheck, Phone, CheckCircle } from "lucide-react"
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
  const [selectedRole, setSelectedRole] = useState<'user' | 'admin' | 'merchant'>('user')
  const [error, setError] = useState("")
  const router = useRouter()

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    setError("")
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (selectedRole === 'admin') {
      // Admin login logic
      if (formData.mobileNumber === "admin" && formData.password === "admin123") {
        localStorage.setItem('isAdminAuthenticated', 'true')
        localStorage.setItem('userRole', 'admin')
        localStorage.setItem('adminPermissions', JSON.stringify(['dashboard', 'users', 'analytics', 'settings']))
        router.push('/admin')
      } else {
        setError("Invalid admin credentials. Use: admin / admin123")
      }
    } else if (selectedRole === 'merchant') {
      // Merchant login logic
      if (formData.mobileNumber === "merchant" && formData.password === "merchant123") {
        localStorage.setItem('isMerchantAuthenticated', 'true')
        localStorage.setItem('userRole', 'merchant')
        localStorage.setItem('merchantPermissions', JSON.stringify(['products', 'orders', 'analytics', 'profile']))
        router.push('/merchant')
      } else {
        setError("Invalid merchant credentials. Use: merchant / merchant123")
      }
    } else {
      // User login logic - redirect to OTP
      if (formData.mobileNumber && formData.password) {
        localStorage.setItem('userMobile', formData.mobileNumber)
        localStorage.setItem('userPassword', formData.password)
        localStorage.setItem('userRole', 'user')
        router.push('/auth/otp')
      } else {
        setError("Please enter valid credentials")
      }
    }
  }

  return (
    <div
      className="min-h-screen flex relative pt-20"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(15,23,42,0.18), rgba(15,23,42,0.3)), url('https://images.unsplash.com/photo-1515165562835-c6f0d3a79659?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/25 dark:bg-black/65" />
      {/* Left Panel - Login Form */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full lg:w-1/2 bg-[#FFF7ED] dark:bg-[#161413] border-r border-[var(--section-border)] p-8 lg:p-14 flex items-center justify-center transition-colors duration-300"
      >
        <div className="w-full max-w-md">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-5"
          >
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Welcome <span className="text-orange-600">Back</span>
            </h1>
            <p className="text-gray-600">
              Sign in to continue to your account.
            </p>
          </motion.div>
          {/* Role Selection */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6"
          >
            <label className="block text-sm font-medium text-gray-700 mb-3">
              SELECT YOUR ROLE
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setSelectedRole('user')}
                className={`p-3 rounded-lg border-2 transition-all ${selectedRole === 'user'
                    ? "border-orange-500 bg-orange-50 text-orange-700"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                  }`}
              >
                <User className="w-5 h-5 mx-auto mb-1" />
                <span className="text-xs font-medium">User</span>
              </button>
              <button
                onClick={() => setSelectedRole('admin')}
                className={`p-3 rounded-lg border-2 transition-all ${selectedRole === 'admin'
                    ? "border-purple-500 bg-purple-50 text-purple-700"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                  }`}
              >
                <Shield className="w-5 h-5 mx-auto mb-1" />
                <span className="text-xs font-medium">Admin</span>
              </button>
              <button
                onClick={() => setSelectedRole('merchant')}
                className={`p-3 rounded-lg border-2 transition-all ${selectedRole === 'merchant'
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                  }`}
              >
                <Building className="w-5 h-5 mx-auto mb-1" />
                <span className="text-xs font-medium">Merchant</span>
              </button>
            </div>
          </motion.div>
          <motion.form
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            onSubmit={handleLogin}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                MOBILE NUMBER
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={formData.mobileNumber}
                  onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                PASSWORD
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm"
              >
                {error}
              </motion.div>
            )}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-300 py-3"
            >
              Sign In
            </Button>

            <div className="text-center">
              <Link
                href="/auth/forgot-password"
                className="text-orange-600 hover:text-orange-700 text-sm"
              >
                Forgot your password?
              </Link>
            </div>

            <div className="text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link
                  href="/auth/register"
                  className="text-orange-600 font-medium hover:text-orange-700 transition-colors"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </motion.form>

          {/* Demo Credentials Notice */}
          {(selectedRole === 'admin' || selectedRole === 'merchant') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200"
            >
              <div className="flex items-center space-x-2 text-orange-700">
                <UserCheck className="w-4 h-4" />
                <p className="text-sm">
                  <strong>{selectedRole === 'admin' ? 'Admin' : 'Merchant'} Demo:</strong> Use{" "}
                  <code className="bg-orange-100 px-1 rounded">
                    {selectedRole === 'admin' ? 'admin' : 'merchant'}
                  </code>{" "}
                  /{" "}
                  <code className="bg-orange-100 px-1 rounded">
                    {selectedRole === 'admin' ? 'admin123' : 'merchant123'}
                  </code>
                </p>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 flex items-center justify-center space-x-8 text-xs text-gray-500"
          >
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>FOLLOWS SECP</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>Shariah Certified</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Panel - Trust & Security */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="hidden lg:flex w-1/2 bg-gradient-to-br from-gray-900 to-gray-800 p-16 items-center justify-center"
      >
        <div className="text-center text-white max-w-lg relative">
          {/* SK Logo in background */}
          <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
            <span className="text-[200px] font-bold text-white">SK</span>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-12 relative z-10"
          >
            {/* Avatar */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-4 border-white/20 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <span className="text-6xl">👔</span>
                </div>
              </div>
            </div>

            {/* Certified Badge */}
            <div className="flex justify-center mb-8">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all">
                <CheckCircle className="w-5 h-5" />
                <span>CERTIFIED</span>
              </button>
            </div>

            <h2 className="text-4xl font-bold mb-6">
              Invest with Confidence
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-12">
              Join 50,000+ Pakistanis building ethical wealth through our Shariah-compliant digital custodian platform.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="relative z-10"
          >
            {/* User avatars */}
            <div className="flex justify-center mb-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-gray-800 flex items-center justify-center text-white font-medium text-sm"
                  >
                    {i}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-300 font-medium">
              HIGHLY RATED BY USERS
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
