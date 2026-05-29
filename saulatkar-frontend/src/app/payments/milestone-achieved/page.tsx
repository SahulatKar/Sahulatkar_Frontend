"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle } from "lucide-react"

export default function MilestoneAchieved() {
  const [animateIn, setAnimateIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setAnimateIn(true)
    const timer = setTimeout(() => {
      router.push("/payments/order-success")
    }, 5000)

    return () => clearTimeout(timer)
  }, [router])

  const orderJourney = [
    { title: "Order Confirmation", desc: "Instant Shariah validation completed", icon: "✓", status: "completed" },
    { title: "Vendor Handover", desc: "Merchant is preparing your items", icon: "◯", status: "in-progress" },
    { title: "Delivery Scheduled", desc: "Estimated delivery: Oct 24, 2023", icon: "◯", status: "pending" },
  ]

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="text-center space-y-6 mb-12">
          <div className={`transition-all duration-700 ${animateIn ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}>
            <div className="w-24 h-24 mx-auto bg-orange-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-16 h-16 text-orange-500" />
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">Achievement Unlocked</p>
            <h1 className="text-4xl font-bold text-slate-900">Milestone Achieved!</h1>
            <p className="mt-4 text-slate-600 text-lg">
              Your order <span className="font-semibold text-slate-900">#SK-99281</span> has been successfully placed. Your financial journey with SahulatKar begins now.
            </p>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Left - Credit Info */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 text-white space-y-8">
            <div>
              <p className="text-sm uppercase tracking-widest text-slate-400 mb-1">Updated Power Limit</p>
              <h2 className="text-4xl font-bold">PKR 250,000</h2>
              <p className="text-sm text-slate-400 mt-1">Credit Utilization: 14%</p>
            </div>

            <div className="relative pt-6">
              <div className="flex items-end gap-2">
                <div className="h-2 bg-orange-500 rounded-full" style={{ width: "14%" }} />
                <div className="h-1 bg-slate-700 rounded-full flex-1" />
              </div>
              <p className="text-xs text-slate-400 mt-2">Responsibly utilized</p>
            </div>

            <div className="border-t border-slate-700 pt-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Your ethical credit limit was increased due to high-trust scoring checkpoint.</span>
                <span className="text-orange-500">→</span>
              </div>
            </div>
          </div>

          {/* Right - Order Journey */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Order Journey</h3>

            <div className="space-y-4">
              {orderJourney.map((step, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl border-2 p-6 transition-all ${
                    step.status === "completed"
                      ? "border-emerald-200 bg-emerald-50"
                      : step.status === "in-progress"
                      ? "border-orange-200 bg-orange-50"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                        step.status === "completed"
                          ? "bg-emerald-500 text-white"
                          : step.status === "in-progress"
                          ? "bg-orange-500 text-white animate-pulse"
                          : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {step.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{step.title}</p>
                      <p className="text-sm text-slate-600 mt-1">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              <button
                onClick={() => router.push("/admin")}
                className="flex-1 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-semibold transition"
              >
                View Transaction Details
              </button>
              <button
                onClick={() => router.push("/dashboard")}
                className="flex-1 px-6 py-3 border-2 border-slate-300 text-slate-900 rounded-2xl font-semibold hover:bg-slate-50 transition"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-8">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🏛️</span>
            <div>
              <p className="font-semibold text-slate-900">Impact of this Order</p>
              <p className="text-sm text-slate-600 mt-2">
                By completing this transaction on time, you are building a robust ethical credit profile that will lower your markup rates for future large-scale financing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
