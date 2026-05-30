"use client"

import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowRight, Camera, CheckCircle2, RefreshCcw, ScanLine, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { VerificationPageShell } from "@/components/auth/verification-page-shell"

export default function CNICFront() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    processFile(file)
  }

  const processFile = (file: File) => {
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
      setError("Please upload the CNIC front image before continuing.")
      return
    }
    setIsLoading(true)
    setTimeout(() => {
      localStorage.setItem("cnicFrontUploaded", "true")
      router.push("/auth/cnic-back")
    }, 1100)
  }

  return (
    <VerificationPageShell
      activeStep="cnic-front"
      accent="orange"
      badge="Document Capture"
      title="Capture CNIC Front"
      subtitle="Upload or scan the front of your national identity card for instant verification"
    >
      <div className="grid gap-8 xl:grid-cols-[1.65fr_1fr]">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="overflow-hidden rounded-[2.5rem] capture-panel p-6 shadow-[var(--shadow-soft)]"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-orange-200">
              <ScanLine className="h-3.5 w-3.5" />
              Live camera feed
            </span>
            <button
              type="button"
              onClick={() => { setSelectedFile(null); setPreview(null) }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
            >
              <RefreshCcw className="h-4 w-4" />
              Retake Photo
            </button>
          </div>

          <div
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true) }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => {
              e.preventDefault()
              setIsDragging(false)
              const file = e.dataTransfer.files?.[0]
              if (file) processFile(file)
            }}
            className={`group relative mt-6 cursor-pointer overflow-hidden rounded-[2rem] border-2 border-dashed p-5 transition-all duration-300 ${
              isDragging
                ? "border-orange-400 bg-orange-500/10"
                : "border-white/15 bg-slate-900/60 hover:border-orange-400/40"
            }`}
          >
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950">
              {preview ? (
                <img src={preview} alt="CNIC Front Preview" className="h-full w-full object-cover" />
              ) : (
                <div className="grid h-full place-items-center px-6 text-center text-slate-300">
                  <div className="space-y-5">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-inner">
                      <Camera className="h-9 w-9 text-orange-300" />
                    </div>
                    <div>
                      <p className="text-xl font-medium text-white">Tap to upload your card</p>
                      <p className="mt-2 text-sm text-slate-400">Drag & drop or use the camera action below</p>
                    </div>
                  </div>
                </div>
              )}
              {/* Dynamic laser scan line */}
              <motion.div
                animate={{ y: ["12%", "88%", "12%"] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_12px_rgba(249,115,22,0.8)] z-20"
              />
              <div className="pointer-events-none absolute inset-6 rounded-[1.25rem] border border-orange-400/20" />
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
              CNIC verification is live
            </div>
          </div>
        </motion.section>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="theme-panel rounded-[2.5rem] p-8 shadow-[var(--shadow-soft)]"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-theme-muted">Data Extraction</p>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">Real-time</p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="h-4 w-4" /> Verified
            </span>
          </div>

          <div className="mt-8 space-y-4">
            {[
              { label: "Full Name", value: "Muhammad Arsalan Khan" },
              { label: "CNIC Number", value: "42101-9283741-3" },
            ].map((field) => (
              <div
                key={field.label}
                className="rounded-[1.5rem] border border-[var(--section-border)] bg-[var(--card-bg)] p-5 shadow-sm"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-theme-muted">{field.label}</p>
                <p className="mt-2 text-lg font-semibold text-theme">{field.value}</p>
              </div>
            ))}
            <div className="rounded-[1.5rem] border border-orange-200/60 bg-orange-50/80 p-5 dark:border-orange-500/20 dark:bg-orange-500/10">
              <p className="font-semibold text-orange-700 dark:text-orange-300">Card Verified</p>
              <p className="mt-2 text-sm text-theme-muted">
                Identity document matches the database and security features are intact.
              </p>
            </div>
          </div>

          {error && (
            <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300">
              {error}
            </div>
          )}

          <Button
            size="xl"
            className="mt-8 w-full rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 py-6 shadow-lg shadow-orange-500/25"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Confirming..." : "Confirm & Continue"}
            <ArrowRight className="h-5 w-5" />
          </Button>
        </motion.aside>
      </div>
    </VerificationPageShell>
  )
}
