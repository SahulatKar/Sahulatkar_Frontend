"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, Camera, Shield, Smartphone, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { AuthPageShell } from "@/components/auth/auth-page-shell"

export default function OTP() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null)
  const router = useRouter()

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return
    if (value.length > 1) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)
    setError("")

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`) as HTMLInputElement
      nextInput?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`) as HTMLInputElement
      prevInput?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6)
    if (!pasted) return
    const newOtp = [...otp]
    pasted.split("").forEach((char, i) => {
      newOtp[i] = char
    })
    setOtp(newOtp)
  }

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const otpValue = otp.join("")

    setTimeout(() => {
      if (otpValue === "123456") {
        localStorage.setItem("isOtpVerified", "true")
        router.push("/auth/cnic-front")
      } else {
        setError("Invalid OTP. Please enter 123456 for demo")
        setIsLoading(false)
      }
    }, 1200)
  }

  const handleResend = () => {
    setOtp(["", "", "", "", "", ""])
    setError("")
  }

  const filledCount = otp.filter(Boolean).length

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-theme">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2015/10/30/10/40/key-1013662_1280.jpg')",
          opacity: 0.28,
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/80 to-slate-950/90" />
      <div className="pointer-events-none absolute inset-x-0 top-8 h-56 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),transparent_40%)]" />
      <AuthPageShell
        badge="Two-Factor Security"
        title="Verify OTP"
        subtitle="Enter the 6-digit code sent to your registered mobile number"
        icon={<Shield className="h-9 w-9" strokeWidth={1.75} />}
      >
        <form onSubmit={handleVerify}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mb-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <label className="text-sm font-semibold text-theme">Enter OTP Code</label>
              <span className="text-xs font-medium text-theme-muted">{filledCount}/6</span>
            </div>

            <div className="flex justify-center gap-2 sm:gap-3" onPaste={handlePaste}>
              {otp.map((digit, index) => (
                <motion.input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onFocus={() => setFocusedIndex(index)}
                  onBlur={() => setFocusedIndex(null)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className={`h-14 w-11 sm:h-16 sm:w-14 rounded-2xl border-2 bg-[var(--card-bg)] text-center text-xl font-bold text-theme outline-none transition-all duration-300 ${
                    focusedIndex === index
                      ? "border-orange-500 shadow-[0_0_0_4px_rgba(249,115,22,0.15)] scale-105"
                      : digit
                        ? "border-orange-400/60 bg-orange-50/50 dark:bg-orange-500/10"
                        : "border-[var(--section-border)]"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5 rounded-2xl border border-red-200/80 bg-red-50/80 px-4 py-3 text-sm text-red-600 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300"
            >
              {error}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <Button
              type="submit"
              disabled={isLoading || otp.some((digit) => !digit)}
              className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 py-6 text-base font-semibold shadow-lg shadow-orange-500/25 hover:from-orange-600 hover:to-orange-700 disabled:opacity-50"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Verifying...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Verify OTP
                  <ArrowRight className="h-5 w-5" />
                </span>
              )}
            </Button>

            <div className="flex flex-col gap-3 text-center text-sm">
              <button
                type="button"
                onClick={handleResend}
                className="font-semibold text-orange-600 transition hover:text-orange-700 dark:text-orange-400"
              >
                Didn&apos;t receive code? Resend OTP
              </button>
              <Link href="/auth/login" className="text-theme-muted transition hover:text-theme">
                Back to Login
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 rounded-2xl border border-orange-200/70 bg-gradient-to-r from-orange-50/90 to-amber-50/60 p-4 dark:border-orange-500/20 dark:from-orange-500/10 dark:to-amber-500/5"
          >
            <div className="flex items-start gap-3 text-sm text-orange-800 dark:text-orange-200">
              <Smartphone className="mt-0.5 h-4 w-4 shrink-0" />
              <p>
                <strong>Demo OTP:</strong> Enter{' '}
                <code className="rounded-md bg-orange-100/80 px-1.5 py-0.5 font-mono dark:bg-orange-500/20">
                  123456
                </code>
              </p>
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-theme-muted">
              <Lock className="h-3.5 w-3.5" />
              End-to-end encrypted verification channel
            </div>
          </motion.div>
        </form>
      </AuthPageShell>
    </div>
  )
}
