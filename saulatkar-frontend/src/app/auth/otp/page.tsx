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
    <div className="min-h-screen flex items-center justify-center p-4">
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
            <Shield className="w-8 h-8 text-orange-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Verify OTP</h1>
          <p className="text-gray-600">
            Enter the 6-digit code sent to your mobile number
          </p>
        </motion.div>

        {/* OTP Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
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
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm"
          >
            {error}
          </motion.div>
        )}

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-3"
        >
          <Button
            type="submit"
            onClick={handleVerify}
            disabled={isLoading || otp.some(digit => !digit)}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors disabled:opacity-50"
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
        </motion.div>

        {/* Demo Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200"
        >
          <div className="flex items-center space-x-2 text-orange-700">
            <Smartphone className="w-4 h-4" />
            <p className="text-sm">
              <strong>Demo OTP:</strong> Enter <code className="bg-orange-100 px-1 rounded">123456</code>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
