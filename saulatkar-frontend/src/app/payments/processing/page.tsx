"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Check } from "lucide-react"

export default function ProcessingPayment() {
  const [steps, setSteps] = useState([
    { id: 1, label: "Identity Verified", status: "completed", substatus: "BIOMETRIC_AUTH_SUCCESS" },
    { id: 2, label: "Executing Transfer", status: "pending", substatus: "ROUTING_GATEWAY_LINK" },
  ])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setSteps((prev) =>
        prev.map((step) =>
          step.id === 2 ? { ...step, status: "completed" } : step
        )
      )
    }, 3000)

    const timer2 = setTimeout(() => {
      setLoading(false)
      router.push("/payments/automation-engine")
    }, 5000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [router])

  return (
    <div className="min-h-screen bg-[#f7f0e6] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 text-center space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-widest text-orange-600 font-bold">SahulatKar</p>
            <h1 className="text-3xl font-bold text-slate-900">Processing Secure Payment...</h1>
          </div>

          {/* Loading Circle */}
          <div className="flex justify-center py-8">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 rounded-full border-4 border-slate-200" />
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-orange-500 border-r-orange-500 animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-xl">🔒</span>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <p className="text-sm text-slate-600 leading-relaxed">
            Please do not close your browser or refresh the page. We are finalizing your transaction with institutional security protocols.
          </p>

          {/* Steps */}
          <div className="space-y-2">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`flex items-start gap-3 p-4 rounded-2xl transition-all ${
                  step.status === "completed"
                    ? "bg-emerald-50 border border-emerald-200"
                    : "bg-slate-50 border border-slate-200"
                }`}
              >
                <div className="flex-shrink-0">
                  {step.status === "completed" ? (
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-slate-400 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-slate-400 animate-pulse" />
                    </div>
                  )}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-slate-900">{step.label}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{step.substatus}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Status */}
          <div className="border-t border-slate-200 pt-6">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-sm font-semibold text-emerald-700">Payment Confirmed (Success message ready)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
