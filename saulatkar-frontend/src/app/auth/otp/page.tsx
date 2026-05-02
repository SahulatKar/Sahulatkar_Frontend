"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, Shield, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function OTP() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return
    
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)
    setError("")

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`) as HTMLInputElement
      if (nextInput) nextInput.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`) as HTMLInputElement
      if (prevInput) prevInput.focus()
    }
  }

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const otpValue = otp.join("")
    
    // Simulate OTP verification
    setTimeout(() => {
      if (otpValue === "123456") {
        localStorage.setItem('isOtpVerified', 'true')
        router.push('/auth/cnic-front')
      } else {
        setError("Invalid OTP. Please enter 123456 for demo")
        setIsLoading(false)
      }
    }, 1500)
  }

  const handleResend = () => {
    alert("OTP resent! (Demo: Enter 123456)")
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - OTP Form */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white"
      >
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-8"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Verify OTP</h1>
            <p className="text-gray-600">
              Enter the 6-digit code sent to your mobile number
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleVerify}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Enter OTP Code
              </label>
              <div className="flex justify-center space-x-2">
                {otp.map((digit, index) => (
                  <Input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 text-center text-lg font-semibold border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-orange-500"
                  />
                ))}
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
              disabled={isLoading || otp.some(digit => !digit)}
              className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-pink-600 transition-all duration-200 disabled:opacity-50"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Verifying...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  Verify OTP
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              )}
            </Button>

            <div className="text-center">
              <button
                type="button"
                onClick={handleResend}
                className="text-orange-600 hover:text-orange-700 font-medium text-sm"
              >
                Didn't receive code? Resend OTP
              </button>
            </div>

            <div className="text-center">
              <Link
                href="/auth/login"
                className="text-gray-600 hover:text-gray-800 text-sm"
              >
                Back to Login
              </Link>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 p-4 bg-orange-50 rounded-lg border border-orange-200"
          >
            <div className="flex items-center space-x-2 text-orange-700">
              <Smartphone className="w-5 h-5" />
              <p className="text-sm">
                <strong>Demo OTP:</strong> Enter <code className="bg-orange-100 px-1 rounded">123456</code>
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Panel - Visual */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden lg:flex lg:w-1/2 items-center justify-center bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 p-8"
      >
        <div className="text-center text-white max-w-md">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8"
          >
            <Shield className="w-16 h-16" />
          </motion.div>
          <h2 className="text-4xl font-bold mb-4">Secure Verification</h2>
          <p className="text-xl opacity-90 mb-6">
            Your security is our priority. We use multi-factor authentication to protect your account.
          </p>
          <div className="space-y-4 text-left">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>Bank-level encryption</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>Multi-factor authentication</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>24/7 fraud monitoring</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
