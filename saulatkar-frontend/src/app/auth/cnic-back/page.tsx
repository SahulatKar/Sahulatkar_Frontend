"use client"

import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowRight, Camera, CheckCircle2, ChevronLeft, ChevronRight, ScanLine, Shield, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { VerificationPageShell } from "@/components/auth/verification-page-shell"

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
    reader.onload = (uploadEvent) => setPreview(uploadEvent.target?.result as string)
    reader.readAsDataURL(file)
    setSelectedFile(file)
    setError("")
  }

  const handleSubmit = () => {
    if (!selectedFile) {
      setError("Please upload the CNIC back image before continuing.")
      return
    }
    setIsLoading(true)
    setTimeout(() => {
      localStorage.setItem("cnicBackUploaded", "true")
      router.push("/auth/facial-recognition")
    }, 1100)
  }

  return (
    <VerificationPageShell
      activeStep="cnic-back"
      accent="purple"
      badge="MRZ Scanning"
      title="Capture CNIC Back"
      subtitle="Scan the back of your card to extract MRZ data and verify security features"
    >
      <div className="grid gap-8 xl:grid-cols-[1.65fr_1fr]">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="overflow-hidden rounded-[2.5rem] border border-white/20 bg-[rgba(15,23,42,0.82)] p-6 shadow-[0_32px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/25 bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-purple-200">
              <ScanLine className="h-3.5 w-3.5" />
              Live scanning
            </span>
            <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
              <button type="button" className="rounded-full p-2 text-slate-200 transition hover:bg-white/10">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button type="button" className="rounded-full p-2 text-slate-200 transition hover:bg-white/10">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div
            onClick={() => fileInputRef.current?.click()}
            className="group relative mt-6 cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-5 transition hover:border-purple-400/30"
          >
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950">
              {preview ? (
                <img src={preview} alt="CNIC Back Preview" className="h-full w-full object-cover" />
              ) : (
                <div className="grid h-full place-items-center px-6 text-center text-slate-300">
                  <div className="space-y-5">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5">
                      <Camera className="h-9 w-9 text-purple-300" />
                    </div>
                    <div>
                      <p className="text-xl font-medium text-white">Tap to upload CNIC back</p>
                      <p className="mt-2 text-sm text-slate-400">The MRZ zone will be extracted automatically</p>
                    </div>
                  </div>
                </div>
              )}
              <motion.div
                animate={{ top: ["10%", "85%", "10%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-x-8 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-[0_0_20px_rgba(168,85,247,0.8)]"
              />
            </div>
            <div className="pointer-events-none absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-slate-950/80 p-4 text-sm text-slate-200 backdrop-blur-md">
              Position the back of your CNIC within the frame for auto-capture.
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              type="button"
              variant="outline"
              className="inline-flex items-center gap-2 rounded-2xl border-white/15 bg-white/5 px-5 py-3 text-white hover:bg-white/10"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="h-4 w-4" />
              Upload Image
            </Button>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
              <CheckCircle2 className="h-4 w-4" />
              Front image captured
            </div>
          </div>
        </motion.section>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="rounded-[2.5rem] border border-white/40 bg-white/75 p-8 shadow-[0_32px_80px_rgba(35,30,28,0.1)] backdrop-blur-2xl dark:border-white/10 dark:bg-[rgba(35,30,28,0.72)]"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-theme-muted">Data Extraction</p>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-theme">Real-time parsing</p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-2xl bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-700 dark:text-purple-300">
              <Shield className="h-4 w-4" /> Verified
            </span>
          </div>

          <div className="mt-8 space-y-4">
            <div className="rounded-[1.5rem] border border-[var(--section-border)] bg-[var(--card-bg)] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-theme-muted">MRZ Machine readable zone</p>
              <pre className="mt-3 whitespace-pre-wrap font-mono text-xs leading-relaxed text-theme sm:text-sm">
                {"IDPAK<0D12345678<9PAK0000001<<<<<\nAHMED<<MOHAMMAD<E<RASHID<<<<<<<<<<<<<<"}
              </pre>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--section-border)] bg-[var(--card-bg)] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-theme-muted">Permanent address</p>
              <p className="mt-2 text-sm text-theme">House No. 124, Sector F-10/2, Islamabad, ICT, Pakistan</p>
            </div>
            <div className="rounded-[1.5rem] border border-orange-200/60 bg-orange-50/80 p-5 dark:border-orange-500/20 dark:bg-orange-500/10">
              <div className="flex items-center gap-2 font-semibold text-orange-700 dark:text-orange-300">
                <CheckCircle2 className="h-4 w-4" />
                Micro-text verified
              </div>
              <p className="mt-2 text-sm text-theme-muted">Security features confirmed through MRZ scan.</p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--section-border)] bg-[var(--card-bg)] p-5">
              <p className="text-sm font-semibold text-theme">Extraction Confidence</p>
              <p className="mt-2 text-4xl font-bold text-theme">98.4%</p>
            </div>
          </div>

          {error && (
            <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300">
              {error}
            </div>
          )}

          <Button
            size="xl"
            className="mt-8 w-full rounded-2xl bg-gradient-to-r from-purple-600 to-purple-700 py-6 shadow-lg shadow-purple-500/25"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Continuing..." : "Continue to Liveness"}
            <ArrowRight className="h-5 w-5" />
          </Button>
        </motion.aside>
      </div>
    </VerificationPageShell>
  )
}
