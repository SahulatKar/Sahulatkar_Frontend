"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ArrowRight, MessageCircle, RefreshCw, Shield, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const CODE_LENGTH = 5

export default function Verify() {
  const [code, setCode] = useState(Array(CODE_LENGTH).fill(""))
  const [timeLeft, setTimeLeft] = useState(42)
  const [canResend, setCanResend] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (timeLeft > 0 && !canResend) {
      const timer = window.setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => window.clearTimeout(timer)
    }

    if (timeLeft === 0) {
      setCanResend(true)
    }
  }, [timeLeft, canResend])

  const handleCodeChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return
    const next = [...code]
    next[index] = value
    setCode(next)

    if (value && index < CODE_LENGTH - 1) {
      const nextInput = document.getElementById(`code-${index + 1}`) as HTMLInputElement | null
      nextInput?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const previousInput = document.getElementById(`code-${index - 1}`) as HTMLInputElement | null
      previousInput?.focus()
    }
  }

  const handleResend = () => {
    setCode(Array(CODE_LENGTH).fill(""))
    setTimeLeft(42)
    setCanResend(false)
  }

  const handleVerify = () => {
    router.push('/auth/cnic-front')
  }

  const isCodeComplete = code.every((digit) => digit !== "")

  return (
    <div className="min-h-screen text-theme relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,126,0,0.18),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_18%)]" />
      <div className="relative mx-auto flex min-h-screen items-center justify-center px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="w-full max-w-2xl"
        >
          <div className="rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-3 text-sm text-orange-100 shadow-inner shadow-orange-500/10">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-base font-bold text-white">S</span>
                <span className="text-sm font-semibold uppercase tracking-[0.24em] text-white">SahulatKar</span>
              </div>
              <div className="grid h-24 w-24 place-items-center rounded-[32px] bg-gradient-to-br from-orange-500 to-orange-600 shadow-xl shadow-orange-500/20">
                <Shield className="h-9 w-9 text-white" />
              </div>
              <div className="space-y-3">
                <h1 className="text-4xl font-semibold tracking-tight">Verify Your Account</h1>
                <p className="text-sm text-slate-300 sm:text-base">
                  We&apos;ve sent a 5-digit verification code to <span className="font-semibold text-orange-300">+92 300 •••• 123</span>
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-[32px] border border-white/10 bg-slate-950/90 p-6 shadow-xl">
              <div className="grid gap-4 sm:grid-cols-5">
                {code.map((digit, index) => (
                  <div key={index} className="relative">
                    <input
                      id={`code-${index}`}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(event) => handleCodeChange(index, event.target.value)}
                      onKeyDown={(event) => handleKeyDown(index, event)}
                      className="mx-auto w-full min-w-[72px] rounded-[26px] border border-white/10 bg-white/10 px-0 py-5 text-center text-3xl font-semibold tracking-[0.28em] text-white outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30"
                    />
                    {digit && <span className="pointer-events-none absolute inset-x-2 top-2 h-1 rounded-full bg-emerald-400/80" />}
                  </div>
                ))}
              </div>

              <Button
                size="xl"
                className="mt-8 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-xl shadow-orange-500/20"
                disabled={!isCodeComplete}
                onClick={handleVerify}
              >
                Verify Code
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            <div className="mt-8 space-y-4 text-center text-sm text-slate-300">
              <button
                type="button"
                disabled={!canResend}
                onClick={handleResend}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 transition ${
                  canResend ? 'bg-white/10 text-orange-200 hover:bg-white/15' : 'cursor-not-allowed text-slate-500'
                }`}
              >
                <RefreshCw className={`h-4 w-4 ${!canResend ? 'animate-spin-slow' : ''}`} />
                <span>{canResend ? 'Resend code via SMS' : `Resend in ${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, '0')}`}</span>
              </button>
              <button className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-slate-300 hover:text-white">
                <MessageCircle className="h-4 w-4" />
                <span>Get code on WhatsApp</span>
              </button>
              <button className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-slate-400 hover:text-slate-200">
                <Smartphone className="h-4 w-4" />
                <span>Change mobile number?</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
