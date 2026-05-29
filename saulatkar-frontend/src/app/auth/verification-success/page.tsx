"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import { BadgeCheck, Shield, Sparkles, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { VerificationPageShell } from "@/components/auth/verification-page-shell"

export default function VerificationSuccess() {
  const router = useRouter()

  useEffect(() => {
    localStorage.setItem("isAuthenticated", "true")
    localStorage.setItem("identityVerified", "true")
  }, [])

  const handleContinue = () => {
    router.push("/financing/credit-line-activated")
  }

  const handleBack = () => {
    router.push("/auth/facial-recognition")
  }

  return (
    <VerificationPageShell
      activeStep="success"
      accent="emerald"
      badge="Verification Complete"
      title="Identity Verified Successfully"
      subtitle="Your profile is authenticated and cleared for premium financial services"
    >
      <div className="grid gap-8 xl:grid-cols-[1.4fr_0.9fr]">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="theme-panel relative overflow-hidden rounded-[2.5rem] p-10 shadow-[var(--shadow-soft)]"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-orange-400/10 blur-3xl" />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex h-24 w-24 items-center justify-center rounded-[2rem] bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-xl shadow-emerald-500/30"
          >
            <BadgeCheck className="h-12 w-12" />
          </motion.div>

          <div className="relative mt-8 max-w-xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:border-emerald-500/25 dark:bg-emerald-500/10 dark:text-emerald-300">
              <Sparkles className="h-3.5 w-3.5" />
              Platinum Verified
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-theme sm:text-5xl">
              Welcome to SahulatKar
            </h2>
            <p className="mt-5 text-base leading-7 text-theme-muted">
              Your identity has been authenticated against institutional records. You are now cleared for Shariah-compliant financing with premium credit access.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Security", value: "AES-256" },
              { label: "Credit Band", value: "AA+" },
              { label: "Status", value: "Active" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="rounded-2xl border border-[var(--section-border)] bg-[var(--card-bg)] p-4 text-center"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-theme-muted">{item.label}</p>
                <p className="mt-2 text-xl font-bold text-theme">{item.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              size="xl"
              className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 py-6 shadow-lg shadow-orange-500/25"
              onClick={handleContinue}
            >
              Continue to Credit Activation
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="w-full rounded-2xl border-[var(--section-border)] py-6"
              onClick={handleBack}
            >
              Back to Face Scan
            </Button>
          </div>
        </motion.section>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="capture-panel rounded-[2.5rem] p-8 shadow-[var(--shadow-soft)]"
        >
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-300">Verification Status</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">Level 3 — Platinum</p>
            </div>
            <div className="flex items-center gap-1 rounded-2xl bg-white/10 px-3 py-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="h-3.5 w-3.5 fill-orange-400 text-orange-400" />
              ))}
            </div>
          </div>

          <div className="mt-10 space-y-6 text-slate-100">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Verified Name</p>
              <p className="mt-3 text-2xl font-semibold">Muhammad Ahmed Raza</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">CNIC Number</p>
              <p className="mt-3 text-lg font-semibold tracking-wide">42101-9283741-3</p>
            </div>
            <div className="rounded-[1.5rem] border border-orange-400/20 bg-orange-500/10 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-orange-300">Credit Band</p>
              <p className="mt-3 text-5xl font-bold text-orange-200">AA+</p>
            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm">
            <div className="flex items-center gap-2 text-orange-300">
              <Shield className="h-4 w-4" />
              <span className="font-medium">Data encrypted with AES-256</span>
            </div>
            <p className="mt-3 text-slate-400">
              Institutional-grade security protocols protect your identity information at every step.
            </p>
          </div>
        </motion.aside>
      </div>
    </VerificationPageShell>
  )
}
