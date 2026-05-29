"use client"

import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowRight, Camera, CheckCircle2, RefreshCcw, Shield, Upload, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { VerificationStepper } from "@/components/auth/verification-stepper"

export default function CNICFront() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith("image/")) {
      setError("Please upload a valid image file.")
      return
    }

    const reader = new FileReader()
    reader.onload = (uploadEvent) => {
      setPreview(uploadEvent.target?.result as string)
    }
    reader.readAsDataURL(file)
    setSelectedFile(file)
    setError("")
  }

  const handleUpload = () => {
    fileInputRef.current?.click()
  }

  const handleCameraCapture = () => {
    alert("Camera capture is available in a full production build. Please upload a photo for the preview.")
  }

  const handleSubmit = () => {
    if (!selectedFile) {
      setError("Please upload the CNIC front image before continuing.")
      return
    }

    setIsLoading(true)
    setTimeout(() => {
      localStorage.setItem('cnicFrontUploaded', 'true')
      router.push('/auth/cnic-back')
    }, 1100)
  }

  return (
    <div className="min-h-screen overflow-hidden text-theme">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,_rgba(255,119,36,0.14),transparent_25%),radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_22%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-10">
        <header className="mb-10 flex flex-col gap-6 rounded-[40px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4 text-slate-100">
            <div className="grid h-14 w-14 place-items-center rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg">S</div>
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-orange-200">SahulatKar</p>
              <h1 className="mt-1 text-2xl font-semibold">Capture CNIC Front</h1>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <button className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 transition hover:border-orange-300 hover:bg-orange-500/10">
              <User className="h-4 w-4" />
              Profile
            </button>
          </div>
        </header>

        <div className="grid gap-8 xl:grid-cols-[1.7fr_1fr]">
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="rounded-[40px] border border-white/10 bg-slate-950/90 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.32)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-300/20 bg-orange-500/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-orange-200">Live camera feed</span>
              <button
                type="button"
                onClick={() => setSelectedFile(null)}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
              >
                <RefreshCcw className="h-4 w-4" />
                Retake Photo
              </button>
            </div>

            <div
              onClick={handleUpload}
              className="group relative mt-8 cursor-pointer overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/80 p-6 transition hover:border-orange-500/30 hover:bg-slate-900"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
              <div className="relative overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_top,_rgba(255,111,6,0.18),transparent_35%),radial-gradient(circle_at_center,_rgba(255,255,255,0.06),transparent_55%)]">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] border border-white/10 bg-slate-900">
                  {preview ? (
                    <img src={preview} alt="CNIC Front Preview" className="h-full w-full object-cover" />
                  ) : (
                    <div className="grid h-full place-items-center text-center text-slate-300">
                      <div className="space-y-6">
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5">
                          <Camera className="h-8 w-8" />
                        </div>
                        <div>
                          <p className="text-xl font-medium">Tap to upload your card</p>
                          <p className="text-sm text-slate-500">Or use the camera action below</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                type="button"
                variant="outline"
                className="inline-flex items-center gap-2 px-5 py-3"
                onClick={handleCameraCapture}
              >
                <Camera className="h-4 w-4" />
                Use Camera
              </Button>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                CNIC verification is live
              </div>
            </div>
          </motion.section>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="rounded-[40px] border border-white/10 bg-white/90 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.18)]"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Data Extraction</p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">Real-time</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-3xl bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                <CheckCircle2 className="h-4 w-4" /> Verified
              </span>
            </div>

            <div className="mt-8 space-y-5">
              <div className="rounded-[28px] border border-slate-200/80 bg-slate-100/80 p-5 text-slate-700 shadow-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Full Name</p>
                <p className="mt-3 text-lg font-semibold">Muhammad Arsalan Khan</p>
              </div>
              <div className="rounded-[28px] border border-slate-200/80 bg-slate-100/80 p-5 text-slate-700 shadow-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">CNIC Number</p>
                <p className="mt-3 text-lg font-semibold">42101-9283741-3</p>
              </div>
              <div className="rounded-[28px] border border-orange-200/80 bg-orange-50 p-5 text-orange-700 shadow-sm">
                <p className="text-sm font-semibold">Card Verified</p>
                <p className="mt-2 text-sm text-slate-600">Identity document matches the database and security features are intact.</p>
              </div>
            </div>

            <Button
              size="xl"
              className="mt-8 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? 'Confirming...' : 'Confirm & Continue'}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.aside>
        </div>

        <VerificationStepper active="cnic-front" />
      </div>
    </div>
  )
}
