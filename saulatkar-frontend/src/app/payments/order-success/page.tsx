"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Check } from "lucide-react"

export default function OrderSuccess() {
  const [animateIn, setAnimateIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setAnimateIn(true)
  }, [])

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-12 lg:px-8">
        {/* Header Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="text-xs font-semibold text-orange-700 uppercase tracking-wider">VERIFIED</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center space-y-6 mb-12">
          <div className={`transition-all duration-700 ${animateIn ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}>
            <div className="w-24 h-24 mx-auto bg-emerald-100 rounded-full flex items-center justify-center">
              <Check className="w-12 h-12 text-emerald-600" strokeWidth={3} />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-slate-900">Order Placed Successfully</h1>
          <p className="text-slate-600 text-lg">Your transaction has been processed securely.</p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden mb-8">
          <div className="px-8 py-6 bg-gradient-to-r from-slate-50 to-orange-50 border-b border-slate-200">
            <p className="text-xs uppercase tracking-widest text-slate-600 font-semibold">Order ID</p>
            <p className="text-2xl font-bold text-slate-900 font-mono mt-2">SAK-2948-HB</p>
          </div>

          <div className="p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Product Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📱</div>
                  <div>
                    <p className="text-sm uppercase tracking-wider text-slate-500 font-semibold">Item</p>
                    <p className="text-lg font-bold text-slate-900">Alpha Electronics</p>
                    <p className="text-sm text-slate-600">Authorized Merchant</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">🚚</div>
                  <div>
                    <p className="text-sm uppercase tracking-wider text-slate-500 font-semibold">Shipping</p>
                    <p className="text-lg font-bold text-slate-900">BlueEx Logistics</p>
                    <p className="text-sm text-slate-600">ETA: 3-5 Working Days</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">🏛️</div>
                  <div>
                    <p className="text-sm uppercase tracking-wider text-slate-500 font-semibold">Partner</p>
                    <p className="text-lg font-bold text-slate-900">Supporting Edhi Foundation</p>
                    <p className="text-sm text-slate-600">1% Contributed</p>
                  </div>
                </div>
              </div>

              {/* Payment Plan */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Sahulat Plan</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">Rs 14,166</span>
                    <span className="text-sm text-slate-400">/month</span>
                  </div>
                </div>

                <div className="border-t border-slate-700 pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Item Price</span>
                    <span className="font-semibold">Rs 85,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Duration</span>
                    <span className="font-semibold">06 Months</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Service Fee</span>
                    <span className="font-semibold text-emerald-400">Rs 0.00</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 pt-2">
                  Next installment scheduled for the 50 of next month via auto-Pay.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <button
            onClick={() => router.push("/dashboard")}
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-semibold transition"
          >
            Continue Shopping
          </button>
          <button
            onClick={() => router.push("/admin")}
            className="px-6 py-3 border-2 border-slate-300 text-slate-900 rounded-2xl font-semibold hover:bg-slate-50 transition"
          >
            View Order Details
          </button>
        </div>

        {/* Quote */}
        <div className="text-center space-y-2">
          <p className="text-3xl">99</p>
          <p className="text-slate-600 italic leading-relaxed max-w-2xl mx-auto">
            "Modernizing trust, ensuring every transaction builds a better tomorrow for our community."
          </p>
        </div>
      </div>
    </div>
  )
}
