"use client"

import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowRight, Camera, CheckCircle2, ChevronLeft, ChevronRight, Shield, Upload, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { VerificationStepper } from "@/components/auth/verification-stepper"

export default function CNICBack() {
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
      setError("Please upload the CNIC back image before continuing.")
      return
    }

    setIsLoading(true)
    setTimeout(() => {
      localStorage.setItem('cnicBackUploaded', 'true')
      router.push('/auth/facial-recognition')
    }, 1100)
  }

  return (
    <div className="min-h-screen overflow-hidden text-theme">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(255,99,0,0.16),transparent_22%),radial-gradient(circle_at_20%_25%,rgba(255,255,255,0.08),transparent_18%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-10">
        <header className="mb-10 flex flex-col gap-6 rounded-[40px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4 text-slate-100">
            <div className="grid h-14 w-14 place-items-center rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg">S</div>
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-orange-200">SahulatKar</p>
              <h1 className="mt-1 text-2xl font-semibold">Capture CNIC Back</h1>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <button className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 transition hover:border-purple-300 hover:bg-purple-500/10">
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
              <span className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-purple-200">Live scanning</span>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">
                <button type="button" className="rounded-full bg-white/5 p-2 text-slate-200 transition hover:bg-white/10">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button type="button" className="rounded-full bg-white/5 p-2 text-slate-200 transition hover:bg-white/10">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div
              onClick={handleUpload}
              className="group relative mt-8 cursor-pointer overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/80 p-6 transition hover:border-purple-500/30 hover:bg-slate-900"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
              <div className="relative overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05),transparent_45%),linear-gradient(180deg,rgba(15,23,42,0.5),rgba(15,23,42,0.9))]">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] border border-white/10 bg-slate-900">
                  {preview ? (
                    <img src={preview} alt="CNIC Back Preview" className="h-full w-full object-cover" />
                  ) : (
                    <div className="grid h-full place-items-center text-center text-slate-300">
                      <div className="space-y-6">
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5">
                          <Camera className="h-8 w-8" />
                        </div>
                        <div>
                          <p className="text-xl font-medium">Tap to upload your CNIC back</p>
                          <p className="text-sm text-slate-500">The MRZ zone will be extracted automatically.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="pointer-events-none absolute bottom-4 left-4 right-4 rounded-[24px] border border-white/10 bg-slate-950/70 p-4 text-sm text-slate-200 shadow-lg">
                Position the back of your CNIC within the frame for auto-capture.
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
                Front image captured
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
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.28em] text-slate-700">Real-time parsing</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-3xl bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700">
                <Shield className="h-4 w-4" /> Verified
              </span>
            </div>

            <div className="mt-8 space-y-5">
              <div className="rounded-[28px] border border-slate-200/80 bg-slate-100/80 p-5 text-slate-700 shadow-sm">
                <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">MRZ Machine readable zone</p>
                <pre className="mt-3 whitespace-pre-wrap text-sm text-slate-800">{'IDPAK<0D12345678<9PAK0000001<<<<<\nAHMED<<MOHAMMAD<E<RASHID<<<<<<<<<<<<<<'}</pre>
              </div>
              <div className="rounded-[28px] border border-slate-200/80 bg-slate-100/80 p-5 shadow-sm">
                <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">Permanent address</p>
                <p className="mt-3 text-sm text-slate-700">House No. 124, Sector F-10/2, Islamabad, ICT, Pakistan</p>
              </div>
              <div className="rounded-[28px] border border-orange-200/80 bg-orange-50 p-5 shadow-sm">
                <div className="flex items-center gap-3 text-orange-700">
                  <CheckCircle2 className="h-4 w-4" />
                  <span className="font-semibold">Micro-text verified</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">Security features are confirmed through the MRZ scan.</p>
              </div>
              <div className="rounded-[28px] border border-slate-200/80 bg-slate-100/80 p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-700">Extraction Confidence</p>
                <p className="mt-2 text-3xl font-semibold text-slate-900">98.4%</p>
              </div>
            </div>

            {error ? (
              <div className="mt-6 rounded-3xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                {error}
              </div>
            ) : null}

            <Button
              size="xl"
              className="mt-8 w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? 'Continuing...' : 'Continue to Liveness'}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.aside>
        </div>

        <VerificationStepper active="cnic-back" />
      </div>
    </div>
  )
}
