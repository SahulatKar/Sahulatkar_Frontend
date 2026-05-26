"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ArrowRight, Check } from "lucide-react"

export default function ChoosePaymentMethod() {
  const [selectedMethod, setSelectedMethod] = useState("easypaisa")
  const router = useRouter()

  const paymentMethods = [
    {
      id: "easypaisa",
      name: "EasyPaisa",
      description: "Pay via mobile wallet or retail shop",
      icon: "🏪",
    },
    {
      id: "jazzcash",
      name: "JazzCash",
      description: "Direct payment from JazzCash account",
      icon: "💳",
    },
    {
      id: "debitcard",
      name: "Debit Card",
      description: "Visa, Mastercard, or UnionPay",
      icon: "💳",
    },
  ]

  const orderSummary = {
    item: "iPhone 15 Pro Max PKR",
    spec: "256GB - Blue Titanium",
    price: "345,000",
    plan: "12 Months",
    fee: "PKR 1,500",
    total: "74,100",
  }

  const handleProceed = () => {
    router.push("/payments/payment-details")
  }

  return (
    <div className="min-h-screen bg-[#f7f0e6]">
      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          {/* Main Content */}
          <section className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-slate-900">Choose Payment Method</h1>
              <p className="mt-2 text-slate-600">Securely complete your down payment using our verified ethical fintech partners.</p>
            </div>

            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`cursor-pointer rounded-2xl border-2 p-4 transition-all ${
                    selectedMethod === method.id
                      ? "border-orange-500 bg-orange-50"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{method.icon}</span>
                      <div>
                        <p className="font-semibold text-slate-900">{method.name}</p>
                        <p className="text-sm text-slate-600">{method.description}</p>
                      </div>
                    </div>
                    <div
                      className={`h-6 w-6 rounded-full border-2 flex items-center justify-center ${
                        selectedMethod === method.id
                          ? "border-orange-500 bg-orange-500"
                          : "border-slate-300"
                      }`}
                    >
                      {selectedMethod === method.id && <Check className="h-4 w-4 text-white" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button
              onClick={handleProceed}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-2xl font-semibold flex items-center justify-center gap-2"
            >
              Proceed to Secure Payment <ArrowRight className="w-4 h-4" />
            </Button>

            <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
              <span>🔒</span>
              <span>Bank-grade 256-bit SSL encrypted connection</span>
            </div>
          </section>

          {/* Order Summary */}
          <aside className="rounded-3xl bg-white p-6 shadow-lg border border-slate-200 h-fit sticky top-8">
            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Order Summary</p>
                <span className="inline-block mt-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
                  SECURED
                </span>
              </div>

              <div className="border-t border-slate-200 pt-4">
                <p className="text-sm text-slate-600">{orderSummary.item}</p>
                <p className="text-xs text-slate-500">{orderSummary.spec}</p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Product Price</span>
                  <span className="font-semibold text-slate-900">{orderSummary.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Financing Plan</span>
                  <span className="font-semibold text-slate-900">{orderSummary.plan}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Processing Fee</span>
                  <span className="font-semibold text-slate-900">{orderSummary.fee}</span>
                </div>
              </div>

              <div className="bg-orange-50 rounded-2xl p-4 border border-orange-200">
                <p className="text-xs uppercase tracking-widest text-orange-700 font-semibold">DUE NOW</p>
                <p className="mt-3 text-3xl font-bold text-slate-900">PKR {orderSummary.total}</p>
                <p className="mt-1 text-xs text-slate-600">Includes down payment & processing fee</p>
              </div>

              <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200 space-y-2">
                <div className="flex gap-2">
                  <span className="text-lg">✓</span>
                  <div>
                    <p className="text-sm font-semibold text-emerald-900">Shariah Compliant</p>
                    <p className="text-xs text-emerald-700">This transaction follows ethical Murabaha financing principles with transparent pricing.</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
