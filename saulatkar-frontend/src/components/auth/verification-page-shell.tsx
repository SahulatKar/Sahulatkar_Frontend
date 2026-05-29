"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { VerificationStepper } from "@/components/auth/verification-stepper"

type Step = "phone" | "cnic-front" | "cnic-back" | "liveness" | "success"

type VerificationPageShellProps = {
  children: ReactNode
  activeStep: Step
  title: string
  subtitle: string
  accent?: "orange" | "purple" | "sky" | "emerald"
  badge?: string
}

const accentMap = {
  orange: {
    badge: "border-orange-300/25 bg-orange-500/10 text-orange-200",
    logo: "from-orange-500 to-orange-600",
    label: "text-orange-200",
  },
  purple: {
    badge: "border-purple-300/25 bg-purple-500/10 text-purple-200",
    logo: "from-purple-500 to-purple-700",
    label: "text-purple-200",
  },
  sky: {
    badge: "border-sky-300/25 bg-sky-500/10 text-sky-200",
    logo: "from-sky-500 to-cyan-500",
    label: "text-sky-200",
  },
  emerald: {
    badge: "border-emerald-300/25 bg-emerald-500/10 text-emerald-200",
    logo: "from-emerald-500 to-teal-600",
    label: "text-emerald-200",
  },
}

export function VerificationPageShell({
  children,
  activeStep,
  title,
  subtitle,
  accent = "orange",
  badge = "Identity Verification",
}: VerificationPageShellProps) {
  const colors = accentMap[accent]

  return (
    <div className="relative min-h-[calc(100vh-5rem)] overflow-hidden px-4 py-10 sm:px-6">
      <div className="relative mx-auto max-w-7xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col gap-6 rounded-[2.5rem] border border-white/20 bg-white/10 p-6 shadow-[0_24px_80px_rgba(35,30,28,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-4">
            <div
              className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${colors.logo} text-xl font-bold text-white shadow-lg shadow-orange-500/20`}
            >
              S
            </div>
            <div>
              <p className={`text-xs uppercase tracking-[0.32em] ${colors.label}`}>
                SahulatKar · {badge}
              </p>
              <h1 className="mt-1 text-2xl font-semibold text-theme sm:text-3xl">{title}</h1>
              <p className="mt-1 text-sm text-theme-muted">{subtitle}</p>
            </div>
          </div>
          <span
            className={`inline-flex w-fit items-center rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] ${colors.badge}`}
          >
            Step {["phone", "cnic-front", "cnic-back", "liveness", "success"].indexOf(activeStep) + 1} of 5
          </span>
        </motion.header>

        {children}

        <VerificationStepper active={activeStep} />
      </div>
    </div>
  )
}
