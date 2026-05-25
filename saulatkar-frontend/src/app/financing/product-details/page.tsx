"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { CheckCircle, Package, Search, ArrowRight, Shield, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function ProductDetails() {
  const [fetchProgress, setFetchProgress] = useState(0)
  const [fetchComplete, setFetchComplete] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const interval = window.setInterval(() => {
      setFetchProgress((prev) => {
        if (prev >= 100) {
          window.clearInterval(interval)
          setFetchComplete(true)
          return 100
        }
        return prev + 10
      })
    }, 250)

    return () => window.clearInterval(interval)
  }, [])

  const handleContinue = () => {
    router.push('/financing/product-extracted')
  }

  const handleBack = () => {
    router.push('/financing/credit-line-activated')
  }

  useEffect(() => {
    if (fetchComplete) {
      const t = window.setTimeout(() => {
        router.push('/financing/product-extracted')
      }, 700)

      return () => window.clearTimeout(t)
    }
  }, [fetchComplete, router])

  return (
    <div className="min-h-screen bg-[#f8f2ed] text-slate-900">
      <div className="relative mx-auto max-w-6xl px-6 py-12">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-xs uppercase tracking-[0.28em] text-orange-700">
            SYSTEM AUTOMATION ACTIVE
          </span>
          <h1 className="mt-8 text-5xl font-semibold tracking-tight">Fetching product details</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Our ethical AI is navigating the marketplace to secure the most transparent pricing and payment structure for your purchase.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[32px] bg-slate-950 p-8 text-slate-100 shadow-[0_40px_120px_rgba(15,23,42,0.22)]">
            <div className="mb-6 flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">https://api.sahulatkar.com/v1/extract/product_id_8929</p>
                <p className="mt-3 text-sm text-slate-300">Real-time product extraction</p>
              </div>
              <Package className="h-6 w-6 text-orange-400" />
            </div>

            <div className="space-y-5">
              <div className="rounded-3xl border border-white/10 bg-slate-900 p-5">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>14:02:11</span>
                  <span>Detecting Store</span>
                </div>
                <p className="mt-3 text-sm text-slate-200">Amazon Global Marketplace</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900 p-5">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>14:02:13</span>
                  <span>Extracting Product Data</span>
                </div>
                <p className="mt-3 text-sm text-slate-200">Fetching metadata, specs & merchant reputation...</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900 p-5">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>14:02:16</span>
                  <span>Preparing Offer</span>
                </div>
                <p className="mt-3 text-sm text-slate-200">Waiting for data payload...</p>
              </div>
            </div>

            <div className="mt-8 rounded-[28px] border border-white/10 bg-slate-900/70 p-5">
              <div className="h-3 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-300 transition-all duration-300"
                  style={{ width: `${fetchProgress}%` }}
                />
              </div>
              <p className="mt-4 text-sm text-slate-400">Progress: {fetchProgress}%</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <div className="flex items-center gap-3 text-sm text-orange-600 uppercase tracking-[0.24em]">
                <Search className="h-4 w-4" />
                <span>Ethical Sourcing</span>
              </div>
              <p className="mt-4 text-sm text-slate-600">
                We only extract data from regulated and SECP compliant vendors.
              </p>
            </div>
            <div className="rounded-[32px] bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <div className="flex items-center gap-3 text-sm text-orange-600 uppercase tracking-[0.24em]">
                <Shield className="h-4 w-4" />
                <span>Instant Analysis</span>
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Automated price comparison engines working in real-time for you.
              </p>
            </div>
            <div className="rounded-[32px] bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <div className="flex items-center gap-3 text-sm text-orange-600 uppercase tracking-[0.24em]">
                <Truck className="h-4 w-4" />
                <span>Secure Channel</span>
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Your personal credentials are never shared with third-party stores.
              </p>
            </div>
          </div>
        </div>

        {fetchComplete && (
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              onClick={handleBack}
              variant="outline"
              className="w-full border-slate-300 bg-white text-slate-900 hover:bg-slate-50 sm:w-auto"
            >
              Back to Credit Activation
            </Button>
            <Button
              onClick={handleContinue}
              className="w-full rounded-full bg-orange-500 px-8 py-4 text-white shadow-lg shadow-orange-300/20 hover:bg-orange-600 sm:w-auto"
            >
              Continue to Extraction
              <ArrowRight className="ml-3 inline-block h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
