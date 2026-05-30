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
      if (formData.mobileNumber === "admin" && formData.password === "admin123") {
        localStorage.setItem('isAdminAuthenticated', 'true')
        localStorage.setItem('userRole', 'admin')
        localStorage.setItem('adminPermissions', JSON.stringify(['dashboard', 'users', 'analytics', 'settings']))
        router.push('/admin')
      } else {
        setError("Invalid admin credentials. Use: admin / admin123")
      }
    } else if (selectedRole === 'merchant') {
      if (formData.mobileNumber === "merchant" && formData.password === "merchant123") {
        localStorage.setItem('isMerchantAuthenticated', 'true')
        localStorage.setItem('userRole', 'merchant')
        localStorage.setItem('merchantPermissions', JSON.stringify(['products', 'orders', 'analytics', 'profile']))
        router.push('/merchant')
      } else {
        setError("Invalid merchant credentials. Use: merchant / merchant123")
      }
    } else {
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
      className="min-h-screen flex relative pt-20 overflow-hidden"
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
        className="relative z-10 w-full lg:w-1/2 bg-[#FFF7ED] dark:bg-[#161413] border-r border-[var(--section-border)] p-6 sm:p-10 lg:p-14 flex items-center justify-center transition-colors duration-300"
      >
        <div className="w-full max-w-md space-y-6 text-left">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-2"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-orange-600 dark:text-orange-400">
              🔑 SECURE ENTRY POINT
            </span>
            <h1 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
              Welcome <span className="text-orange-500">Back</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Sign in to manage your Shariah financing.
            </p>
          </motion.div>

          {/* Role Selection */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-3"
          >
            <label className="block text-[10px] font-extrabold tracking-widest text-gray-400 uppercase font-mono">
              SELECT YOUR ACCESS ROLE
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setSelectedRole('user')}
                className={`p-3 rounded-xl border-2 transition-all duration-300 ${selectedRole === 'user'
                    ? "border-orange-500 bg-orange-500/10 text-orange-500 shadow-md shadow-orange-500/5 font-extrabold cursor-pointer"
                    : "border-gray-200 dark:border-white/5 bg-white dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:border-orange-500/20 cursor-pointer"
                  }`}
              >
                <User className="w-5 h-5 mx-auto mb-1.5" />
                <span className="text-xs font-semibold">User</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedRole('admin')}
                className={`p-3 rounded-xl border-2 transition-all duration-300 ${selectedRole === 'admin'
                    ? "border-orange-500 bg-orange-500/10 text-orange-500 shadow-md shadow-orange-500/5 font-extrabold cursor-pointer"
                    : "border-gray-200 dark:border-white/5 bg-white dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:border-orange-500/20 cursor-pointer"
                  }`}
              >
                <Shield className="w-5 h-5 mx-auto mb-1.5" />
                <span className="text-xs font-semibold">Admin</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedRole('merchant')}
                className={`p-3 rounded-xl border-2 transition-all duration-300 ${selectedRole === 'merchant'
                    ? "border-orange-500 bg-orange-500/10 text-orange-500 shadow-md shadow-orange-500/5 font-extrabold cursor-pointer"
                    : "border-gray-200 dark:border-white/5 bg-white dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:border-orange-500/20 cursor-pointer"
                  }`}
              >
                <Building className="w-5 h-5 mx-auto mb-1.5" />
                <span className="text-xs font-semibold">Merchant</span>
              </button>
            </div>
          </motion.div>

          <motion.form
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            onSubmit={handleLogin}
            className="space-y-5"
          >
            <div className="space-y-1.5">
              <label className="block text-[10px] font-extrabold tracking-widest text-gray-400 uppercase font-mono">
                MOBILE NUMBER / USERNAME
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Enter mobile number"
                  value={formData.mobileNumber}
                  onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-white/10 focus:ring-2 focus:ring-orange-500 bg-white dark:bg-white/5"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-[10px] font-extrabold tracking-widest text-gray-400 uppercase font-mono">
                PASSWORD
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter account password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-300 dark:border-white/10 focus:ring-2 focus:ring-orange-500 bg-white dark:bg-white/5"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-350 cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-rose-500/10 border border-rose-500/20 text-rose-500 px-4 py-3 rounded-xl text-xs font-mono"
              >
                {error}
              </motion.div>
            )}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-300 py-6 rounded-xl font-bold text-white btn-smooth cursor-pointer"
            >
              Sign In to Account
            </Button>

            <div className="flex justify-between items-center text-xs">
              <Link
                href="/auth/forgot-password"
                className="text-orange-500 hover:text-orange-600 transition"
              >
                Forgot your password?
              </Link>
              <p className="text-gray-600 dark:text-gray-400">
                New user?{" "}
                <Link
                  href="/auth/register"
                  className="text-orange-500 font-bold hover:text-orange-600 transition-colors"
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
              className="p-4 bg-orange-500/5 rounded-xl border border-orange-500/20 text-left font-mono"
            >
              <div className="flex items-center space-x-2 text-orange-400">
                <UserCheck className="w-4 h-4" />
                <p className="text-xs">
                  <strong>{selectedRole === 'admin' ? 'Admin' : 'Merchant'} Demo:</strong> Use{" "}
                  <code className="bg-orange-500/10 px-1 py-0.5 rounded font-bold">
                    {selectedRole === 'admin' ? 'admin' : 'merchant'}
                  </code>{" "}
                  /{" "}
                  <code className="bg-orange-500/10 px-1 py-0.5 rounded font-bold">
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
            className="flex items-center justify-center space-x-8 text-[10px] text-gray-500 font-mono tracking-wider pt-6 border-t border-gray-200 dark:border-white/5"
          >
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-orange-500" />
              <span>FOLLOWS SECP CODE</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-orange-500" />
              <span>Shariah Certified</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Panel - Trust & Security Centerpiece */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="hidden lg:flex w-1/2 bg-gradient-to-br from-slate-900 via-slate-950 to-orange-950/20 p-16 items-center justify-center relative border-l border-white/5"
      >
        {/* Ambient mesh background effects */}
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
        
        <div className="text-center text-white max-w-lg relative space-y-8">
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Centerpiece Image of credit card/key portal */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-[280px] aspect-[4/5] rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl relative group mx-auto bg-slate-900"
            >
              <img 
                src="/images/login_premium_render.png" 
                alt="SahulatKar Premium Security Centerpiece"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent shimmer pointer-events-none" />
            </motion.div>

            {/* Certified Badge */}
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-1.5 bg-orange-500/15 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest font-mono">
                <CheckCircle className="w-4 h-4 text-orange-500 animate-pulse" />
                SHARIAH CERTIFIED PLATFORM
              </span>
            </div>

            <h2 className="text-3xl font-black mb-4 tracking-tight">
              Invest with Confidence
            </h2>

            <p className="text-gray-300 text-base leading-relaxed max-w-sm mx-auto">
              Join 50,000+ Pakistanis building ethical wealth through our Shariah-compliant digital custodian platform.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-2 pt-6 border-t border-white/5"
          >
            {/* User avatars */}
            <div className="flex justify-center -space-x-3 mb-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-slate-950 flex items-center justify-center text-white font-bold text-xs shadow-md"
                >
                  {i}
                </div>
              ))}
            </div>

            <p className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
              HIGHLY TRUSTED FINTECH PORTAL
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
