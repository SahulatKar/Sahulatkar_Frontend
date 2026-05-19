"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Eye, EyeOff, Lock, User, Shield, Building, UserCheck } from "lucide-react"
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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-orange-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">
            Sign in to your SahulatKar account to continue
          </p>
        </motion.div>

        {/* Login Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onSubmit={handleLogin}
          className="space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mobile Number
            </label>
            <Input
              type="tel"
              placeholder="Enter your mobile number"
              value={formData.mobileNumber}
              onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 pr-12"
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
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
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
        </motion.form>

        {/* Role Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-6"
        >
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Select Your Role
          </label>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => setSelectedRole('user')}
              className={`p-3 rounded-lg border-2 transition-all ${
                selectedRole === 'user'
                  ? "border-orange-500 bg-orange-50 text-orange-700"
                  : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
              }`}
            >
              <User className="w-5 h-5 mx-auto mb-1" />
              <span className="text-xs font-medium">User</span>
            </button>
            <button
              onClick={() => setSelectedRole('admin')}
              className={`p-3 rounded-lg border-2 transition-all ${
                selectedRole === 'admin'
                  ? "border-purple-500 bg-purple-50 text-purple-700"
                  : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
              }`}
            >
              <Shield className="w-5 h-5 mx-auto mb-1" />
              <span className="text-xs font-medium">Admin</span>
            </button>
            <button
              onClick={() => setSelectedRole('merchant')}
              className={`p-3 rounded-lg border-2 transition-all ${
                selectedRole === 'merchant'
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
              }`}
            >
              <Building className="w-5 h-5 mx-auto mb-1" />
              <span className="text-xs font-medium">Merchant</span>
            </button>
          </div>
        </motion.div>

        {/* Additional Options */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 mb-4">
            Don't have an account?{" "}
            <Link
              href="/auth/register"
              className="text-orange-600 hover:text-orange-700 font-medium"
            >
              Sign up
            </Link>
          </p>
        </motion.div>

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
      </motion.div>
    </div>
  )
}
