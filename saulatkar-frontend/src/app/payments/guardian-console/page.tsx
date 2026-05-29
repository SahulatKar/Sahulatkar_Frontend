"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function GuardianConsole() {
  const [steps, setSteps] = useState([
    { label: "Guardian Agent v2.4", status: "active" },
    { label: "Navigating...", status: "in-progress" },
  ])
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/payments/milestone-achieved")
    }, 4000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-slate-900">SahulatKar</span>
            <span className="text-xs text-slate-500 uppercase">Ethical Fintech</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-600 uppercase tracking-wider">
            <span>Automation Engine</span>
            <span className="text-orange-500">Guardian Console</span>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          {/* Right Browser Window */}
          <div className="lg:order-2 space-y-4">
            <div className="bg-slate-200 rounded-2xl overflow-hidden shadow-2xl">
              {/* Browser Header */}
              <div className="bg-slate-300 px-4 py-3 flex items-center gap-2 text-xs text-slate-700">
                <span>◀ ▶ ⟳</span>
                <span className="flex-1 text-center">https://merchant-store.com/checkout/active_session_442</span>
                <span>⋮</span>
              </div>

              {/* Content */}
              <div className="bg-gradient-to-br from-sky-200 to-sky-100 p-12 flex items-center justify-center min-h-96">
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center space-y-4 max-w-xs">
                  <p className="text-sm font-semibold text-slate-600">MacBook Pro M3 Max</p>
                  <div className="w-24 h-32 mx-auto bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg" />
                  <div className="text-xs text-slate-500 space-y-1">
                    <p>SYSTEM LATENCY</p>
                    <p className="font-mono">12ms</p>
                  </div>
                  <div className="text-xs text-slate-500">
                    <p>ENCRYPTION</p>
                    <p className="font-mono">AES-256</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Content */}
          <div className="lg:order-1 space-y-8 flex flex-col justify-center">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 leading-tight mb-2">
                The Magic of
                <br />
                <span className="text-orange-500">SahulatKar</span>
              </h1>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Our AI Guardian agent is currently fulfilling your request. Sit back as we navigate, secure, and verify your ethical purchase in real-time.
            </p>

            {/* Active Steps */}
            <div className="space-y-3">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    {step.status === "active" ? (
                      <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center">
                        <span className="text-xs font-bold text-white">✓</span>
                      </div>
                    ) : step.status === "in-progress" ? (
                      <div className="w-8 h-8 rounded-full border-2 border-orange-500 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full border-2 border-slate-300" />
                    )}
                  </div>
                  <p className={`text-sm font-semibold ${step.status === "in-progress" ? "text-slate-900" : "text-slate-600"}`}>
                    {step.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { icon: "👆", title: "Zero-Touch", desc: "Automated checkout forms no friction, no human errors" },
                { icon: "🛡️", title: "Policy Guard", desc: "Real-time Shariah compliance checks on every item and merchant" },
                { icon: "⚡", title: "Instant Capture", desc: "We sync with the merchant instantly to lock in your price and stock" },
              ].map((feature, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-4 space-y-2">
                  <p className="text-2xl">{feature.icon}</p>
                  <p className="text-xs font-semibold text-slate-900">{feature.title}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
