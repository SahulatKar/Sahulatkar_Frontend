"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, Shield, CheckCircle, User, Phone, Mail, Tag, Cpu, ShieldAlert, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    emailAddress: "",
    referral: ""
  })
  const router = useRouter()

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate registration - redirect to verification
    router.push('/auth/verify')
  }

  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row overflow-hidden relative pt-20"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(15,23,42,0.18), rgba(15,23,42,0.3)), url('https://images.unsplash.com/photo-1515165562835-c6f0d3a79659?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/25 dark:bg-black/65" />
      
      {/* Left Panel - Registration Form */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full lg:w-1/2 min-h-screen bg-[#FFF7ED] dark:bg-[#161413] border-r border-[var(--section-border)] p-6 sm:p-10 lg:p-14 flex items-center justify-center transition-colors duration-300"
      >
        <div className="w-full max-w-md space-y-6 text-left">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-2"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-orange-650 dark:text-orange-400">
              🌱 SHARIAH ACCOUNT REGISTRATION
            </span>
            <h1 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
              Begin Your <span className="text-orange-500">Halal</span> Wealth Journey
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
              Join thousands of digital investors building their future with Shariah-compliant financing.
            </p>
          </motion.div>

          <motion.form
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-5"
          >
            <div className="space-y-1.5">
              <label className="block text-[10px] font-extrabold tracking-widest text-gray-400 uppercase font-mono">
                FULL LEGAL NAME
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Enter full name matching CNIC"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-white/10 focus:ring-2 focus:ring-orange-500 bg-white dark:bg-white/5"
                />
              </div>
            </div>
            
            <div className="space-y-1.5">
              <label className="block text-[10px] font-extrabold tracking-widest text-gray-400 uppercase font-mono">
                MOBILE NUMBER
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="tel"
                  placeholder="+92 300 1234567"
                  value={formData.mobileNumber}
                  onChange={(e) => handleInputChange("mobileNumber", e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-white/10 focus:ring-2 focus:ring-orange-500 bg-white dark:bg-white/5"
                />
              </div>
            </div>
            
            <div className="space-y-1.5">
              <label className="block text-[10px] font-extrabold tracking-widest text-gray-400 uppercase font-mono">
                EMAIL ADDRESS
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.emailAddress}
                  onChange={(e) => handleInputChange("emailAddress", e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-white/10 focus:ring-2 focus:ring-orange-500 bg-white dark:bg-white/5"
                />
              </div>
            </div>
            
            <div className="space-y-1.5">
              <label className="block text-[10px] font-extrabold tracking-widest text-gray-400 uppercase font-mono">
                REFERRAL CODE (OPTIONAL)
              </label>
              <div className="relative">
                <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Enter referral code"
                  value={formData.referral}
                  onChange={(e) => handleInputChange("referral", e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-white/10 focus:ring-2 focus:ring-orange-500 bg-white dark:bg-white/5"
                />
              </div>
            </div>

            <Button
              size="xl"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-300 py-6 rounded-xl font-bold text-white btn-smooth"
              onClick={handleRegister}
            >
              Create Secure Account
            </Button>

            <div className="text-center text-xs">
              <p className="text-gray-600 dark:text-gray-400">
                Already have an account?{" "}
                <Link href="/auth/login" className="text-orange-500 font-bold hover:text-orange-600 transition-colors">
                  Sign In Here
                </Link>
              </p>
            </div>
          </motion.form>

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
        className="hidden lg:flex w-1/2 min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-orange-950/20 p-12 items-center justify-center relative border-l border-white/5"
      >
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
        
        <div className="text-center text-white max-w-lg space-y-8 relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-black tracking-tight">
              Trusted by 25,000+ Digital Investors
            </h2>
            
            {/* User avatars */}
            <div className="flex justify-center -space-x-3 mb-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-slate-950 flex items-center justify-center text-white font-bold text-[10px] shadow-lg"
                >
                  {i}
                </div>
              ))}
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm mx-auto">
              Your security is our priority. We use bank-level encryption and store all data on Pakistan-based servers to ensure complete compliance with local regulations.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-4 pt-6 border-t border-white/5 text-left"
          >
            <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-5 border border-white/10 flex items-start gap-4 hover:border-orange-500/20 transition duration-300">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-extrabold uppercase tracking-wide">Shariah Compliant</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  All financial products are audited and certified by leading scholars following Islamic banking principles.
                </p>
              </div>
            </div>

            <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-5 border border-white/10 flex items-start gap-4 hover:border-orange-500/20 transition duration-300">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-extrabold uppercase tracking-wide">Neural Compliance</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Regular automated checks ensure complete compliance with SECP guidelines and local security standards.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
