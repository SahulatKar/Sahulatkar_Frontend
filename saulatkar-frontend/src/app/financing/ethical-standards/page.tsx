"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EthicalStandards() {
  const router = useRouter()

  const handleContinue = () => {
    router.push('/financing/technical-review')
  }

  const handleBack = () => {
    router.push('/financing/product-extracted')
  }

  // auto-advance to Technical Review after a short delay
  useEffect(() => {
    const t = window.setTimeout(() => {
      router.push('/financing/technical-review')
    }, 800)

    return () => window.clearTimeout(t)
  }, [router])

  return (
    <div className="min-h-screen text-slate-900 py-12">
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-semibold tracking-tight">Ethical Financing Standards</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            At SahulatKar, we adhere to strict institutional guardrails to ensure all transactions meet our ethical and regulatory compliance benchmarks.
          </p>
        </div>

        <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="rounded-[24px] border-l-4 border-orange-500 bg-orange-50 p-6 flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-200">
              <AlertCircle className="h-6 w-6 text-orange-700" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-orange-700 font-semibold">TRANSACTION ASSESSMENT</p>
              <h2 className="mt-3 text-xl font-semibold text-slate-950">Financing Restricted for this Category</h2>
              <div className="mt-4 rounded-full inline-block bg-slate-900 text-white px-4 py-1.5 text-xs uppercase tracking-[0.24em] font-medium">
                Category: ALCOHOL
              </div>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                The requested item or merchant falls within a restricted category under our Ethical Financing Policy. We do not provide financing for products associated with prohibited sectors.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              onClick={handleBack}
              variant="outline"
              className="w-full border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
            >
              Try Different URL
            </Button>
            <Button
              onClick={handleContinue}
              className="w-full rounded-full bg-orange-500 px-8 py-3 text-white shadow-lg shadow-orange-300/20 hover:bg-orange-600"
            >
              View Ethical Guidelines
            </Button>
          </div>

          <div className="mt-6 text-center text-xs text-slate-500">
            Reference ID: SK-AU71-6829-X
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[32px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 mb-4">
              <AlertCircle className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-950">Shariah Compliant</h3>
            <p className="mt-3 text-sm text-slate-600">
              Our protocols are reviewed by independent ethical boards to ensure purity in fintech.
            </p>
          </div>
          <div className="rounded-[32px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 mb-4">
              <AlertCircle className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-950">Regulatory Standards</h3>
            <p className="mt-3 text-sm text-slate-600">
              SahulatKar is fully regulated by the SECP, maintaining strict operational integrity.
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            onClick={handleBack}
            variant="outline"
            className="w-full border-slate-300 bg-white text-slate-900 hover:bg-slate-50 sm:w-auto"
          >
            Back to Product Extracted
          </Button>
          <Button
            onClick={handleContinue}
            className="w-full rounded-full bg-orange-600 px-10 py-3 text-white shadow-lg shadow-orange-300/20 hover:bg-orange-700 sm:w-auto"
          >
            Continue to Technical Review
          </Button>
        </div>
      </div>
    </div>
  )
}
