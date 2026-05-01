"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ArrowRight, Shield, Smartphone, MessageCircle, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Verify() {
  const [code, setCode] = useState(["", "", "", "", "", "", ""])
  const [timeLeft, setTimeLeft] = useState(59) // seconds
  const [canResend, setCanResend] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (timeLeft > 0 && !canResend) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0) {
      setCanResend(true)
    }
  }, [timeLeft, canResend])

  const handleCodeChange = (index: number, value: string) => {
    if (value.length > 1) return // Only allow single digit
    
    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`) as HTMLInputElement
      nextInput?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`) as HTMLInputElement
      prevInput?.focus()
    }
  }

  const handleResend = () => {
    setTimeLeft(59)
    setCanResend(false)
    setCode(["", "", "", "", "", ""])
  }

  const handleVerify = () => {
    // Simulate verification - redirect to KYC
    router.push('/kyc/cnic-capture')
  }

  const isCodeComplete = code.every(digit => digit !== "")

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mb-8"
          >
            <Link href="/" className="inline-flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold text-white">SahulatKar</span>
            </Link>
            
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4">
              Verify Your Account
            </h1>
            <p className="text-gray-300">
              We've sent a 6-digit verification code to <br />
              <span className="text-orange-400 font-medium">+92 303...63</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex justify-center space-x-3 mb-8">
              {code.map((digit, index) => (
                <div key={index} className="relative">
                  <input
                    id={`code-${index}`}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-14 text-center text-xl font-bold text-white bg-white/10 border-2 border-white/20 rounded-xl focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all duration-200"
                  />
                  {digit && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute inset-0 border-2 border-green-500 rounded-xl pointer-events-none"
                    />
                  )}
                </div>
              ))}
            </div>

            <Button
              size="xl"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-300"
              disabled={!isCodeComplete}
              onClick={handleVerify}
            >
              Verify Code
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center space-x-6 text-sm">
              <button
                onClick={handleResend}
                disabled={!canResend}
                className={`flex items-center space-x-2 transition-colors ${
                  canResend 
                    ? "text-orange-400 hover:text-orange-300" 
                    : "text-gray-500 cursor-not-allowed"
                }`}
              >
                <RefreshCw className={`w-4 h-4 ${!canResend && "animate-spin-slow"}`} />
                <span>Resend code in {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}s</span>
              </button>
              
              <button className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>Get code on WhatsApp</span>
              </button>
            </div>

            <div className="flex items-center justify-center">
              <button className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors text-sm">
                <Smartphone className="w-4 h-4" />
                <span>Change Mobile Number?</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Security badges */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 flex items-center justify-center space-x-8 text-xs text-gray-400"
        >
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4" />
            <span>Secure Verification</span>
          </div>
          <div className="flex items-center space-x-2">
            <Smartphone className="w-4 h-4" />
            <span>OTP Protected</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
