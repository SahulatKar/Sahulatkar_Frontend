"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, Shield, CheckCircle, User, Phone, Mail, Tag } from "lucide-react"
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
    <div className="min-h-screen flex">
      {/* Left Panel - Registration Form */}
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
              Begin Your <span className="text-orange-600">Halal</span> Wealth Journey
            </h1>
            <p className="text-gray-600">
              Join thousands of digital investors building their future with Shariah-compliant financing
            </p>
          </motion.div>

          <motion.form
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            <Input
              label="FULL NAME"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              leftIcon={<User className="w-5 h-5 text-gray-400" />}
            />
            
            <Input
              label="MOBILE NUMBER"
              placeholder="+92 300 1234567"
              value={formData.mobileNumber}
              onChange={(e) => handleInputChange("mobileNumber", e.target.value)}
              leftIcon={<Phone className="w-5 h-5 text-gray-400" />}
            />
            
            <Input
              label="EMAIL ADDRESS"
              placeholder="your.email@example.com"
              value={formData.emailAddress}
              onChange={(e) => handleInputChange("emailAddress", e.target.value)}
              leftIcon={<Mail className="w-5 h-5 text-gray-400" />}
            />
            
            <Input
              label="REFERRAL (OPTIONAL)"
              placeholder="Enter referral code"
              value={formData.referral}
              onChange={(e) => handleInputChange("referral", e.target.value)}
              leftIcon={<Tag className="w-5 h-5 text-gray-400" />}
            />

            <Button
              size="xl"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleRegister}
            >
              Create Secure Account →
            </Button>

            <div className="text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link href="/auth/login" className="text-orange-600 font-medium hover:text-orange-700 transition-colors">
                  Sign In Here
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
        <div className="text-center text-white max-w-lg">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8">
              Trusted by 25,000+ Digital Investors
            </h2>
            
            {/* User avatars */}
            <div className="flex justify-center mb-8">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-gray-800 flex items-center justify-center text-white font-medium"
                  >
                    {i}
                  </div>
                ))}
              </div>
            </div>
            
            <p className="text-gray-300 mb-12 text-lg leading-relaxed">
              Your security is our priority. We use bank-level encryption and store all data on Pakistan-based servers to ensure complete compliance with local regulations.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Shariah Compliant</h3>
              </div>
              <p className="text-gray-300">
                All our financial products are certified by leading Shariah scholars and follow Islamic banking principles.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Audited Under Shariah</h3>
              </div>
              <p className="text-gray-300">
                Regular audits ensure complete compliance with Islamic financial standards and ethical practices.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Risk Policy</h3>
              </div>
              <p className="text-gray-300">
                Transparent risk assessment and clear terms ensure you understand your financial commitments.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
