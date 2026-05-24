"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { BadgeCheck, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { VerificationStepper } from "@/components/auth/verification-stepper"

export default function VerificationSuccess() {
  const [countdown, setCountdown] = useState(5)
  const router = useRouter()

  useEffect(() => {
    localStorage.setItem('isAuthenticated', 'true')
    localStorage.setItem('identityVerified', 'true')

    const interval = window.setInterval(() => {
      setCountdown((value) => Math.max(value - 1, 0))
    }, 1000)

    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    if (countdown === 0) {
      router.push('/dashboard')
    }
  }, [countdown, router])

  const handleGoToDashboard = () => {
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#09080a] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,149,16,0.18),transparent_14%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.08),transparent_14%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 xl:grid-cols-[1.4fr_0.9fr]">
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="rounded-[40px] border border-white/10 bg-white/95 p-10 shadow-[0_30px_120px_rgba(0,0,0,0.22)]"
          >
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-[32px] bg-orange-500/10 text-orange-500 shadow-lg shadow-orange-500/20">
              <BadgeCheck className="h-10 w-10" />
            </div>
            <div className="mt-8 max-w-xl">
              <h1 className="text-5xl font-semibold tracking-tight text-slate-950">Identity Verified Successfully</h1>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Your profile has been authenticated against institutional records. You are now cleared for premium financial services.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="xl" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white" onClick={handleGoToDashboard}>
                Go to Dashboard
              </Button>
              <Button size="xl" variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-slate-50" onClick={handleGoToDashboard}>
                View Certificate
              </Button>
            </div>
          </motion.section>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="rounded-[40px] border border-white/10 bg-slate-950/90 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.32)]"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-orange-300">Verification Status</p>
                <p className="mt-3 text-sm uppercase tracking-[0.28em] text-slate-400">Level 3 - Platinum</p>
              </div>
              <div className="rounded-3xl bg-white/10 px-3 py-2 text-xs uppercase tracking-[0.28em] text-slate-200">
                Premium
              </div>
            </div>

            <div className="mt-10 space-y-6 text-slate-100">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Verified Name</p>
                <p className="mt-3 text-2xl font-semibold">Muhammad Ahmed Raza</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">CNIC Number</p>
                <p className="mt-3 text-lg font-semibold">42101-9283741-3</p>
              </div>
              <div className="rounded-[28px] border border-orange-200/80 bg-orange-50 p-5 text-orange-700 shadow-sm">
                <p className="text-xs uppercase tracking-[0.28em] text-orange-200">Credit Band</p>
                <p className="mt-3 text-4xl font-semibold text-orange-100">AA+</p>
              </div>
            </div>

            <div className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-5 text-sm text-slate-300">
              <div className="flex items-center gap-2 text-orange-300">
                <Shield className="h-4 w-4" />
                <span>Data encrypted with AES-256</span>
              </div>
              <p className="mt-3 text-slate-400">Institutional grade security protocols protect your identity information.</p>
            </div>
          </motion.aside>
        </div>

        <VerificationStepper active="success" />

        <div className="mt-10 text-sm text-slate-400 text-center">
          Redirecting in {countdown} second{countdown === 1 ? '' : 's'}...
        </div>
      </div>
    </div>
  )
}
