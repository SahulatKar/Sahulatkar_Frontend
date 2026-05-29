"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight, BadgeCheck, Circle, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProductExtracted() {
  const router = useRouter()

  const handleContinue = () => {
    router.push('/financing/ethical-standards')
  }

  const handleBack = () => {
    router.push('/financing/product-details')
  }

  useEffect(() => {
    const t = window.setTimeout(() => {
      router.push('/financing/ethical-standards')
    }, 1200)

    return () => window.clearTimeout(t)
  }, [router])

  return (
    <div className="min-h-screen text-slate-900">
      <div className="relative mx-auto max-w-6xl px-6 py-12">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-xs uppercase tracking-[0.28em] text-emerald-700">
            OPERATION COMPLETE
          </span>
          <h1 className="mt-8 text-5xl font-semibold tracking-tight">
            Product Extracted <span className="text-orange-500">Successfully</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Our ethical AI has verified the product details and secured the most transparent pricing from the marketplace.
          </p>
        </div>

        <div className="rounded-[32px] bg-slate-950 p-8 text-slate-100 shadow-[0_40px_120px_rgba(15,23,42,0.22)]">
          <div className="mb-8 rounded-[28px] border border-white/10 bg-slate-900 p-6">
            <div className="flex items-center justify-between text-sm text-slate-400 mb-6">
              <span>https://api.sahulatkar.com/v1/extract/product_id_8929</span>
              <BadgeCheck className="h-5 w-5 text-orange-400" />
            </div>
            <div className="space-y-4">
              <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>14:02:11</span>
                  <span>Detecting Store</span>
                </div>
                <p className="mt-3 text-sm text-slate-200">Amazon Global Marketplace</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>14:02:13</span>
                  <span>Extracting Product Data</span>
                </div>
                <p className="mt-3 text-sm text-slate-200">Metadata, specs & merchant reputation secured.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>14:02:16</span>
                  <span>Preparing Offer</span>
                </div>
                <p className="mt-3 text-sm text-slate-200">Payload ready for financing bridge.</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 rounded-[28px] bg-white p-6 text-slate-900 shadow-[0_40px_80px_rgba(15,23,42,0.08)] md:grid-cols-[1fr_0.9fr]">
            <div className="space-y-4">
              <div className="rounded-3xl border border-slate-200 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">VERIFIED PRODUCT</p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="h-20 w-20 rounded-3xl bg-slate-100" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-orange-600">Samsung Galaxy S24 Ultra</p>
                    <p className="mt-2 text-sm text-slate-600">Titanium Black | 12GB RAM | 256GB Storage</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 p-5 bg-slate-50">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Estimated Installment Price</p>
                <p className="mt-3 text-3xl font-semibold text-slate-950">PKR 285,000</p>
              </div>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
              <div className="mb-5 flex items-center gap-3 text-slate-700">
                <Circle className="h-2.5 w-2.5 rounded-full bg-orange-500" />
                <span className="text-sm uppercase tracking-[0.24em]">Offer confirmed</span>
              </div>
              <p className="text-sm text-slate-600">The product meets ethical sourcing filters and is approved for financing.</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              onClick={handleBack}
              variant="outline"
              className="w-full border-slate-300 bg-white text-slate-900 hover:bg-slate-50 sm:w-auto"
            >
              Back to Product Details
            </Button>
            <Button
              onClick={handleContinue}
              className="w-full rounded-full bg-orange-500 px-8 py-4 text-white shadow-lg shadow-orange-300/20 hover:bg-orange-600 sm:w-auto"
            >
              Continue to Ethical Standards
              <ArrowRight className="ml-3 inline-block h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
