"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Cpu, Battery, Shield, Smartphone, Zap, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const Monitor = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <line x1="2" y1="17" x2="22" y2="17"/>
  </svg>
)

export default function TechnicalReview() {
  const router = useRouter()

  const handleContinue = () => {
    router.push('/financing/wakalaah-agreement')
  }

  const handleBack = () => {
    router.push('/financing/ethical-standards')
  }

  // auto-advance to Wakalaah Agreement after short delay
  useEffect(() => {
    const t = window.setTimeout(() => {
      router.push('/financing/wakalaah-agreement')
    }, 800)

    return () => window.clearTimeout(t)
  }, [router])

  return (
    <div className="min-h-screen bg-[#f8f2ed] text-slate-900 py-12">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.8fr]">
          {/* Left Column - Product Image and Specs */}
          <div className="space-y-8">
            <div className="rounded-[32px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] flex items-center justify-center h-96">
              <Smartphone className="h-32 w-32 text-slate-300" />
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-950 mb-6">Technical Excellence</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[28px] bg-white p-6 border border-slate-200">
                  <div className="flex items-center gap-2 text-orange-600 uppercase text-xs tracking-[0.24em] font-semibold mb-3">
                    <Cpu className="h-4 w-4" />
                    Processor
                  </div>
                  <p className="text-lg font-semibold text-slate-950">Snapdragon 8 Gen 3</p>
                </div>
                <div className="rounded-[28px] bg-white p-6 border border-slate-200">
                  <div className="flex items-center gap-2 text-orange-600 uppercase text-xs tracking-[0.24em] font-semibold mb-3">
                    <Zap className="h-4 w-4" />
                    Camera
                  </div>
                  <p className="text-lg font-semibold text-slate-950">200MP Quad System</p>
                </div>
                <div className="rounded-[28px] bg-white p-6 border border-slate-200">
                  <div className="flex items-center gap-2 text-orange-600 uppercase text-xs tracking-[0.24em] font-semibold mb-3">
                    <Monitor className="h-4 w-4" />
                    Display
                  </div>
                  <p className="text-lg font-semibold text-slate-950">6.8\" Dynamic AMOLED</p>
                </div>
                <div className="rounded-[28px] bg-white p-6 border border-slate-200">
                  <div className="flex items-center gap-2 text-orange-600 uppercase text-xs tracking-[0.24em] font-semibold mb-3">
                    <Battery className="h-4 w-4" />
                    Battery
                  </div>
                  <p className="text-lg font-semibold text-slate-950">5000mAh AI Power</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="space-y-6">
            <div className="rounded-[32px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500 font-semibold">Galaxy S24 Ultra</p>
              <h1 className="mt-3 text-2xl font-semibold text-slate-950">Titanium Grey | Official PTA Approved</h1>
            </div>

            <div className="rounded-[32px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500 font-semibold mb-3">Monthly Installment</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-semibold text-orange-600">PKR 24,500</span>
                <span className="text-slate-600">/mo</span>
              </div>
            </div>

            <div className="rounded-[32px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500 font-semibold mb-4">Storage Variant</p>
              <div className="flex gap-3">
                {["256GB", "512GB", "1TB"].map((variant) => (
                  <button key={variant} className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50">
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500 font-semibold mb-4">Financing Tenure (Months)</p>
              <div className="flex gap-3">
                {["6", "12", "18", "24"].map((month) => {
                  const isSelected = month === "12";
                  const buttonClass = isSelected 
                    ? "border-orange-500 bg-orange-50 text-orange-600" 
                    : "border-slate-300 bg-white text-slate-900 hover:bg-slate-50";
                  return (
                    <button key={month} className={`rounded-full border px-4 py-2 text-sm font-medium ${buttonClass}`}>
                      {month}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[32px] bg-slate-900 p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400 font-semibold mb-3">Total Contract Price</p>
              <p className="text-3xl font-semibold">PKR 294,000</p>
            </div>

            <Button
              onClick={handleContinue}
              className="w-full rounded-full bg-orange-600 px-8 py-4 text-white shadow-lg shadow-orange-300/20 hover:bg-orange-700 text-base font-semibold"
            >
              Sign Murabaha Agreement
              <ArrowRight className="ml-2 inline-block h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Shariah Compliance Notice */}
        <div className="mt-12 rounded-[32px] border-l-4 border-orange-600 bg-slate-900 p-6 text-white">
          <p className="text-xs uppercase tracking-[0.32em] text-orange-400 font-semibold mb-2">Shariah Compliance Notice</p>
          <p className="text-sm leading-relaxed text-slate-300">
            This financing arrangement is structured as a Murabaha (Cost-Plus) transaction. Heritage Financing acts as the purchaser of the asset and sells it to you at a fixed profit margin, ensuring no interest (Riba) is involved. The contract price is final and fixed at the time of signing.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            onClick={handleBack}
            variant="outline"
            className="w-full border-slate-300 bg-white text-slate-900 hover:bg-slate-50 sm:w-auto"
          >
            Back to Ethical Standards
          </Button>
          <Button
            onClick={handleContinue}
            className="w-full rounded-full bg-orange-600 px-10 py-3 text-white shadow-lg shadow-orange-300/20 hover:bg-orange-700 sm:w-auto"
          >
            Continue to Agreement
            <ArrowRight className="ml-2 inline-block h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
