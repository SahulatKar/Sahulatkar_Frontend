"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ArrowRight, Search, Shield, ShoppingBag, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function CreditLineActivated() {
  const [countdown, setCountdown] = useState(8)
  const router = useRouter()

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown((prev) => prev - 1)
    }, 1000)

    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    if (countdown <= 0) {
      router.push('/financing/product-details')
    }
  }, [countdown, router])

  const handleStartShopping = () => {
    router.push('/financing/product-details')
  }

  const handleBack = () => {
    router.push('/financing/murabaha-contract')
  }

  return (
    <div className="min-h-screen text-slate-900">
      <div className="relative mx-auto max-w-6xl px-6 py-12">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-xs uppercase tracking-[0.28em] text-orange-700">
            ACHIEVEMENT UNLOCKED
          </span>
          <h1 className="mt-8 text-5xl font-semibold tracking-tight">Credit Line Activated</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Your financial identity has been verified through SECP and NADRA protocols. Your purchasing power is now live.
          </p>
        </div>

        <div className="rounded-[40px] bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.25)] text-white relative overflow-hidden">
          <div className="absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-orange-300/20 blur-3xl" />
          <div className="relative z-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-orange-300">Sahulatkar Elite</p>
                <p className="mt-4 text-3xl font-semibold">Financial Freedom</p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200">Approved Credit Limit</div>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[32px] bg-slate-900/95 p-8 shadow-[0_30px_90px_rgba(255,255,255,0.05)]">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">PKR</p>
                <p className="mt-4 text-6xl font-semibold">50,000</p>
                <div className="mt-6 flex items-center justify-between text-sm text-slate-400">
                  <span>Valid Thru</span>
                  <span>12/29</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-sm text-orange-300">
                  <span>Status</span>
                  <span>ACTIVE</span>
                </div>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 text-slate-100">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Credit Score</span>
                  <span className="text-orange-300 font-semibold">AA+</span>
                </div>
                <p className="mt-4 text-sm text-slate-300">Your verified score is ready for instant shopping.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-[32px] bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
              <Search className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">1. Explore</h3>
            <p className="mt-3 text-sm text-slate-600">Browse partner brands in the ‘Discover’ tab to find your essentials.</p>
          </div>
          <div className="rounded-[32px] bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">2. Checkout</h3>
            <p className="mt-3 text-sm text-slate-600">Select ‘Custodian Pay’ at checkout. No interest, strictly Shariah-compliant.</p>
          </div>
          <div className="rounded-[32px] bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">3. Pay Later</h3>
            <p className="mt-3 text-sm text-slate-600">Split your total into 4 easy monthly instalments with zero hidden fees.</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            onClick={handleBack}
            variant="outline"
            className="w-full border-slate-300 bg-white text-slate-900 hover:bg-slate-50 sm:w-auto"
          >
            Back to Verification Success
          </Button>
          <Button
            onClick={handleStartShopping}
            className="w-full rounded-full bg-orange-600 px-10 py-4 text-white shadow-xl shadow-orange-300/30 hover:bg-orange-700 sm:w-auto"
          >
            Continue to Product Details
          </Button>
        </div>

        <div className="mt-6 text-center text-sm text-slate-500">
          View Credit Terms & Limits
        </div>
      </div>
    </div>
  )
}
