"use client"

import { motion } from "framer-motion"
import { useState, useRef } from "react"
import { CheckCircle, FileText, ArrowRight, Shield, DollarSign, Calendar, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function MurabahaContract() {
  const [contractAccepted, setContractAccepted] = useState(false)
  const [isFinalizing, setIsFinalizing] = useState(false)
  const [contractComplete, setContractComplete] = useState(false)
  const router = useRouter()

  const contractDetails = {
    product: "Samsung S24 Ultra 512GB",
    costPrice: 250000,
    sellingPrice: 260000,
    markup: 10000,
    paymentTerm: "12 months",
    monthlyPayment: 65000,
    downPayment: 0,
    financedAmount: 260000
  }

  const [otp, setOtp] = useState(["", "", "", ""])
  const otpRefs = useRef<Array<HTMLInputElement | null>>([])

  const handleOtpChange = (index: number, value: string) => {
    // allow only digits, take only last digit if multiple provided
    const cleaned = value.replace(/[^0-9]/g, "")
    if (cleaned.length === 0) {
      const next = [...otp]
      next[index] = ""
      setOtp(next)
      return
    }
    const digit = cleaned.slice(-1)
    const next = [...otp]
    next[index] = digit
    setOtp(next)
    // focus next input if available
    const nextRef = otpRefs.current[index + 1]
    if (nextRef) nextRef.focus()
  }

  const isOtpComplete = otp.every((digit) => digit.length === 1)

  const handleFinalizeContract = () => {
    if (!contractAccepted) return
    if (!isOtpComplete) return
    setIsFinalizing(true)
    setTimeout(() => {
      setIsFinalizing(false)
      setContractComplete(true)
      localStorage.setItem('murabahaContract', 'true')
      localStorage.setItem('financingComplete', 'true')
      // navigate into the payments processing pipeline which will
      // sequentially route through automation engine -> guardian -> milestone -> order success
      router.replace('/payments/processing')
    }, 1400)
  }

  const handleComplete = () => {
    router.push('/financing/purchase-confirmed')
  }

  const handleBack = () => {
    router.push('/financing/wakalaah-agreement')
  }

  return (
    <div className="min-h-screen bg-[#f7f0e6]">
      <div className="mx-auto max-w-6xl px-4 py-10 lg:px-8">
        <div className="rounded-[2rem] bg-white shadow-[0_40px_90px_rgba(15,23,42,0.08)] overflow-hidden">
          <div className="bg-[#16223f] px-10 py-10 text-center text-white">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/80">Step 4: Contract Execution</span>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight">Murabaha Sale Contract</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">Please review the Shariah-compliant financing terms below. This document constitutes a binding agreement for the sale of assets on a cost-plus-profit basis.</p>
          </div>

          <div className="px-10 py-8 lg:px-14 lg:py-10">
            <div className="grid gap-6 lg:grid-cols-[1.7fr_1fr]">
              <div className="rounded-[1.75rem] bg-[#f8f4ed] p-6 shadow-sm border border-slate-200">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Contract Reference</p>
                    <p className="mt-3 text-xl font-semibold text-slate-900">MF - 2024 - 9982 - ELITE</p>
                  </div>
                  <div className="rounded-3xl bg-[#11213c] px-4 py-3 text-sm font-semibold text-white">Shariah Compliant</div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[1.25rem] bg-white p-4 shadow-sm border border-slate-200">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Cost Price</p>
                    <p className="mt-3 text-xl font-semibold text-slate-900">PKR {contractDetails.costPrice.toLocaleString()}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.28em] text-slate-500">Asset Acquisition Cost</p>
                  </div>
                  <div className="rounded-[1.25rem] bg-white p-4 shadow-sm border border-slate-200">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Profit (Halal)</p>
                    <p className="mt-3 text-xl font-semibold text-[#c15e00]">PKR {contractDetails.markup.toLocaleString()}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.28em] text-slate-500">Pre-agreed Profit Margin</p>
                  </div>
                  <div className="rounded-[1.25rem] bg-[#11213c] p-4 shadow-sm border border-slate-900 text-white">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Total Repayable</p>
                    <p className="mt-3 text-3xl font-semibold">PKR {contractDetails.sellingPrice.toLocaleString()}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.28em] text-slate-400">Aggregate Sale Price</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.75rem] bg-[#f8f4ed] p-6 shadow-sm border border-slate-200">
                <h2 className="text-lg font-semibold text-slate-900">Key Terms & Conditions</h2>
                <p className="mt-4 text-sm leading-7 text-slate-700">Under this Murabaha agreement, Heritage Financing (the “Seller”) has purchased the requested asset and hereby sells it to the client (the “Buyer”) at the Total Sale Price disclosed above.</p>
                <p className="mt-3 text-sm leading-7 text-slate-700">The Buyer agrees to pay the Total Sale Price in deferred installments as per the schedule below. There are no hidden fees, compound interest, or penalties that violate Shariah principles. Late payments may result in a contribution to a designated charity as per Shariah Board guidelines.</p>
              </div>
            </div>

            <div className="mt-8 rounded-[1.75rem] bg-white p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-lg font-semibold text-slate-900">Installment Schedule (Initial 4)</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-[1.25rem] border border-slate-200">
                <div className="grid grid-cols-[1fr_1.2fr_1.2fr] bg-slate-100 px-4 py-3 text-xs uppercase tracking-[0.35em] text-slate-600">
                  <span>Installment No.</span>
                  <span>Due Date</span>
                  <span>Amount (PKR)</span>
                </div>
                {[
                  { id: '01', due: 'Jan 15, 2025', amount: '65,000.00' },
                  { id: '02', due: 'Feb 15, 2025', amount: '65,000.00' },
                  { id: '03', due: 'Mar 15, 2025', amount: '65,000.00' },
                  { id: '04', due: 'Apr 15, 2025', amount: '65,000.00' },
                ].map((row) => (
                  <div key={row.id} className="grid grid-cols-[1fr_1.2fr_1.2fr] border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
                    <span className="font-semibold">{row.id}</span>
                    <span>{row.due}</span>
                    <span>{row.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-[1.75rem] bg-[#f8f4ed] p-6 shadow-sm border border-green-100">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-green-700">Digital Signature Verification</p>
                  <p className="mt-2 text-sm text-slate-600">An SMS code was sent to your registered mobile number (+92 •••• ••82).</p>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (otpRefs.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onPaste={(e) => {
                        const pasted = e.clipboardData.getData('text')
                        const digits = pasted.replace(/[^0-9]/g, '').split('').slice(0, 4)
                        if (digits.length) {
                          const next = [...otp]
                          for (let i = 0; i < digits.length; i++) {
                            next[i] = digits[i]
                          }
                          setOtp(next)
                          // focus the next empty input
                          const firstEmpty = next.findIndex(d => d === '')
                          const focusIndex = firstEmpty === -1 ? Math.min(digits.length, 3) : firstEmpty
                          const ref = otpRefs.current[focusIndex]
                          if (ref) ref.focus()
                        }
                        e.preventDefault()
                      }}
                      maxLength={1}
                      className="h-16 w-full rounded-3xl border border-slate-300 bg-white text-center text-xl font-semibold text-slate-900 focus:border-green-500 focus:ring-2 focus:ring-green-200"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-[1.75rem] bg-white p-6 shadow-sm border border-slate-200">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={contractAccepted}
                  onChange={(e) => setContractAccepted(e.target.checked)}
                  className="mt-1 h-5 w-5 rounded-lg border border-slate-300 text-[#11213c] focus:ring-[#11213c]"
                />
                <span className="text-sm text-slate-700">I accept the Murabaha sale contract terms and agree to the payment schedule.</span>
              </label>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Button
                onClick={handleBack}
                variant="outline"
                className="w-full rounded-3xl border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
              >
                ← Back to Wakalaah Agreement
              </Button>
              <Button
                onClick={handleFinalizeContract}
                disabled={!contractAccepted || !isOtpComplete || isFinalizing}
                className="w-full rounded-3xl bg-[#11213c] px-6 py-4 text-white hover:bg-[#101d33] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isFinalizing ? 'Confirming and Signing...' : 'Confirm and Sign Murabaha'}
              </Button>
            </div>

            <div className="mt-6 rounded-[1.75rem] bg-[#eff7f2] p-6 shadow-sm border border-slate-200">
              <p className="text-sm text-slate-700">By clicking confirm, you electronically sign this agreement and acknowledge the purchase of the asset under Shariah law.</p>
            </div>

            {contractComplete ? (
              <div className="mt-8 rounded-[1.75rem] bg-emerald-50 p-6 text-center text-slate-900 shadow-sm border border-emerald-200">
                <p className="text-lg font-semibold">You have successfully signed the Murabaha contract.</p>
                <Button
                  onClick={handleComplete}
                  className="mt-6 w-full rounded-3xl bg-[#1f4e8c] py-4 text-white hover:bg-[#173d74]"
                >
                  Continue to Purchase Confirmation
                </Button>
              </div>
            ) : null}
          </div>
        </div>

        <footer className="mt-10 rounded-[1.75rem] bg-[#16223f] px-8 py-6 text-slate-200 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="text-xl font-semibold text-orange-300">SahulatKar</div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-300">
              <span>SEC Regulatory Compliance</span>
              <span>Identity Verified</span>
              <span>Via NADRA Biometric Integration</span>
            </div>
          </div>
          <div className="mt-4 text-sm text-slate-400">� 2024 SahulatKar. Ethical Fintech Excellence.</div>
        </footer>
      </div>
    </div>
  )
}
