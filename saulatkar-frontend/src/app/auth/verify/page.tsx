"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ArrowRight, Camera, MessageCircle, RefreshCw, Shield, Smartphone } from "lucide-react"
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
    <div
      className="min-h-screen text-theme relative overflow-hidden"
      style={{
        backgroundImage: "url('https://cdn.pixabay.com/photo/2015/10/30/10/40/key-1013662_1280.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-slate-950/70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,126,0,0.14),transparent_18%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_18%)]" />
      <div className="relative mx-auto flex min-h-screen items-center justify-center px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="w-full max-w-3xl"
        >
          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/10 shadow-[0_35px_120px_rgba(15,23,42,0.35)] backdrop-blur-2xl">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative p-10 lg:p-14">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.24),transparent_28%)]" />
                <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                  <div className="space-y-4">
                    <span className="inline-flex items-center gap-3 rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-orange-200 shadow-sm shadow-orange-500/20">
                      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white">S</span>
                      SahulatKar Secure
                    </span>
                    <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">
                      Verify OTP with advanced face liveness
                    </h1>
                    <p className="max-w-2xl text-base leading-8 text-slate-200/90 sm:text-lg">
                      Complete the verification with a secure OTP and a robotic liveness check to keep your account safe from spoofing attacks.
                    </p>
                  </div>

                  <div className="rounded-[32px] border border-white/10 bg-slate-950/20 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.28)] backdrop-blur-xl">
                    <div className="flex items-center justify-between gap-4 text-sm text-slate-200">
                      <div>
                        <p className="font-semibold">Robotic Liveness Scan</p>
                        <p className="text-slate-300">Realtime face authentication in progress</p>
                      </div>
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 ring-1 ring-cyan-300/20">
                        <Camera className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="mt-6 rounded-[28px] border border-cyan-400/10 bg-slate-950/90 p-5 text-slate-300 shadow-[inset_0_0_45px_rgba(56,189,248,0.15)]">
                      <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-slate-950/90 to-slate-900/80 p-5">
                        <div className="absolute inset-x-0 top-4 h-1 bg-gradient-to-r from-cyan-400/70 via-sky-300/60 to-indigo-500/70 opacity-90" />
                        <div className="relative z-10 flex h-48 flex-col items-center justify-center gap-4">
                          <div className="grid h-20 w-20 place-items-center rounded-full bg-slate-900/80 text-cyan-300 shadow-cyan-500/20 border border-cyan-400/20">
                            <Camera className="h-8 w-8" />
                          </div>
                          <div className="space-y-1 text-center">
                            <p className="text-lg font-semibold text-white">Live face scan active</p>
                            <p className="text-sm text-slate-400">Keep your face centered and follow the animation until the scan completes.</p>
                          </div>
                        </div>
                        <div className="absolute inset-x-5 bottom-5 grid grid-cols-3 gap-2">
                          <div className="h-3 rounded-full bg-cyan-400/20">
                            <div className="h-3 rounded-full bg-cyan-400 animate-pulse" />
                          </div>
                          <div className="h-3 rounded-full bg-cyan-400/20">
                            <div className="h-3 rounded-full bg-cyan-400/80 animate-pulse" />
                          </div>
                          <div className="h-3 rounded-full bg-cyan-400/20">
                            <div className="h-3 rounded-full bg-cyan-400/60 animate-pulse" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-center bg-slate-950/95 p-8 lg:p-10">
                <div className="w-full rounded-[32px] border border-white/10 bg-slate-950/95 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-[32px] bg-gradient-to-br from-orange-500 to-orange-600 shadow-xl shadow-orange-500/20">
                      <Shield className="h-10 w-10 text-white" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm uppercase tracking-[0.28em] text-orange-300">Verify OTP</p>
                      <h2 className="text-3xl font-semibold text-white">Enter your 5-digit code</h2>
                      <p className="max-w-md text-sm text-slate-400">
                        We sent the code to <span className="font-semibold text-slate-100">+92 300 •••• 123</span>. Enter it below to continue.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-5">
                    {code.map((digit, index) => (
                      <input
                        key={index}
                        id={`code-${index}`}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(event) => handleCodeChange(index, event.target.value)}
                        onKeyDown={(event) => handleKeyDown(index, event)}
                        className="mx-auto flex h-20 min-w-[70px] items-center justify-center rounded-[24px] border border-white/10 bg-slate-900/90 text-center text-4xl font-semibold tracking-[0.3em] text-white outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30"
                      />
                    ))}
                  </div>

                  <Button
                    size="xl"
                    className="mt-8 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-xl shadow-orange-500/25"
                    disabled={!isCodeComplete}
                    onClick={handleVerify}
                  >
                    Verify Code
                    <ArrowRight className="h-5 w-5" />
                  </Button>

                  <div className="mt-6 space-y-3 text-sm text-slate-300">
                    <button
                      type="button"
                      disabled={!canResend}
                      onClick={handleResend}
                      className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 transition ${
                        canResend
                          ? 'bg-white/5 text-orange-200 hover:bg-white/10'
                          : 'cursor-not-allowed bg-slate-900/70 text-slate-500'
                      }`}
                    >
                      <RefreshCw className={`h-4 w-4 ${!canResend ? 'animate-spin-slow' : ''}`} />
                      <span>
                        {canResend ? 'Resend code via SMS' : `Resend in ${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, '0')}`}
                      </span>
                    </button>
                    <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900/70 px-4 py-3 text-slate-300 transition hover:bg-slate-800/90 hover:text-white">
                      <MessageCircle className="h-4 w-4" />
                      Get code on WhatsApp
                    </button>
                    <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900/70 px-4 py-3 text-slate-400 transition hover:bg-slate-800/90 hover:text-slate-200">
                      <Smartphone className="h-4 w-4" />
                      Change mobile number?
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
