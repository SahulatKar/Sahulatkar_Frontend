"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Lock } from "lucide-react"

export default function PaymentDetails() {
  const [cardNumber, setCardNumber] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvc, setCvc] = useState("")
  const [cardholderName, setCardholderName] = useState("")
  const [saveCard, setSaveCard] = useState(false)
  const router = useRouter()

  const orderSummary = {
    amount: "$12,450",
    plan: "Growth Equity II",
    fee: "0.00%",
  }

  const handleConfirm = () => {
    router.push("/payments/processing")
  }

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    if (parts.length) {
      return parts.join(" ")
    } else {
      return value
    }
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Left Card */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white h-fit space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-300 font-semibold">SahulatKar</p>
              <p className="text-xs uppercase tracking-widest text-orange-500 font-bold mt-1">PREMIUM</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-bold leading-tight">Secure Institutional Payment</h2>
              <p className="text-sm text-slate-300">Complete your investment transaction with end-to-end Shariah-compliant encryption</p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-slate-400">Investment Plan</span>
                <span className="text-lg font-semibold">{orderSummary.plan}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-400">Processing Fee</span>
                <span className="text-lg font-semibold">{orderSummary.fee}</span>
              </div>
              <div className="border-t border-slate-700 pt-3 flex justify-between">
                <span className="text-sm text-slate-400">TOTAL AMOUNT</span>
                <span className="text-4xl font-bold text-orange-400">{orderSummary.amount}</span>
              </div>
            </div>

            <div className="flex gap-2 text-xs text-slate-400">
              <span>🔒</span>
              <span>PCI-DSS LEVEL 1 • 256-BIT SSL</span>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Payment Details</h3>
              <p className="text-sm text-slate-600 mt-1">Enter your credit or debit card information.</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs uppercase tracking-widest text-slate-500 font-semibold block mb-2">
                  Card Number
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-slate-400">💳</span>
                  <input
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                    maxLength="19"
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-slate-900 placeholder-slate-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-widest text-slate-500 font-semibold block mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM / YY"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    maxLength="7"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-slate-900 placeholder-slate-400"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-slate-500 font-semibold block mb-2">
                    CVC / CVV
                  </label>
                  <input
                    type="text"
                    placeholder="•••"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    maxLength="4"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-slate-900 placeholder-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-slate-500 font-semibold block mb-2">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  placeholder="Full name as on card"
                  value={cardholderName}
                  onChange={(e) => setCardholderName(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-slate-900 placeholder-slate-400"
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="savecard"
                  checked={saveCard}
                  onChange={(e) => setSaveCard(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 accent-orange-500"
                />
                <label htmlFor="savecard" className="text-sm text-slate-700">
                  Save card for future transactions
                </label>
              </div>
            </div>

            <Button
              onClick={handleConfirm}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-2xl font-semibold flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" /> Confirm Payment
            </Button>

            <p className="text-xs text-center text-slate-500">
              Your transaction is protected by SahulatKar Finance. We do not store your credit card information on our servers.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
