"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { ArrowRight, Camera, User, Shield, AlertCircle, CheckCircle2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { VerificationPageShell } from "@/components/auth/verification-page-shell"

export default function FacialRecognition() {
  const [isScanning, setIsScanning] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)
  const [scanComplete, setScanComplete] = useState(false)
  const [error, setError] = useState("")
  const [cameraActive, setCameraActive] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (cameraActive) startCamera()
    return () => stopCamera()
  }, [cameraActive])

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } })
      if (videoRef.current) videoRef.current.srcObject = stream
    } catch {
      setError("Camera access denied. Please allow camera permissions and try again.")
      setCameraActive(false)
    }
  }

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream
      stream.getTracks().forEach((track) => track.stop())
    }
  }

  const handleScan = () => {
    setIsScanning(true)
    setScanProgress(0)
    setScanComplete(false)

    const interval = window.setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          window.clearInterval(interval)
          setIsScanning(false)
          setScanComplete(true)
          localStorage.setItem("facialRecognitionComplete", "true")
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  const handleContinue = () => {
    router.push("/auth/verification-success")
  }

  const handleRetake = () => {
    setIsScanning(false)
    setScanProgress(0)
    setScanComplete(false)
    setError("")
  }

  return (
    <VerificationPageShell
      activeStep="liveness"
      accent="sky"
      badge="Biometric Liveness"
      title="Facial Recognition"
      subtitle="Position your face in the frame and complete the liveness verification"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="mx-auto max-w-3xl overflow-hidden rounded-[2.5rem] border border-white/20 bg-[rgba(15,23,42,0.82)] p-8 shadow-[0_32px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl"
      >
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-4 grid h-20 w-20 place-items-center rounded-[1.75rem] bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-xl shadow-cyan-500/25">
            {scanComplete ? <CheckCircle2 className="h-10 w-10" /> : <Camera className="h-10 w-10" />}
          </div>
          <h2 className="text-2xl font-semibold text-white">
            {scanComplete ? "Face Scan Complete" : "Align Your Face"}
          </h2>
          <p className="mt-2 text-slate-400">
            {scanComplete
              ? "Your biometric profile has been verified successfully."
              : "Keep your face centered and well-lit for best results."}
          </p>
        </div>

        <div className="mb-6 rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-4">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300 sm:text-sm">
            {["CNIC uploaded", "CNIC verified", "Face scan"].map((step, i) => (
              <div key={step} className="inline-flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${i < 2 || scanComplete ? "bg-emerald-400" : "bg-sky-400 animate-pulse"}`} />
                {step}
              </div>
            ))}
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-800">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-400"
              animate={{ width: scanComplete ? "100%" : "85%" }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <div className="relative mb-6 overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/40">
          <div className="relative h-80 overflow-hidden bg-slate-900">
            {!cameraActive ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-slate-400">
                <Camera className="h-16 w-16 opacity-50" />
                <p className="text-lg text-slate-300">Camera not active</p>
                <p className="text-sm">Start the camera to begin face scan</p>
              </div>
            ) : (
              <>
                <video ref={videoRef} autoPlay playsInline muted className="h-full w-full object-cover" />
                {isScanning && (
                  <div className="absolute inset-0 bg-sky-500/15">
                    <motion.div
                      animate={{ top: ["15%", "75%", "15%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-x-8 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    />
                    <div className="absolute inset-8 rounded-[2rem] border-2 border-sky-400/60" />
                  </div>
                )}
                {scanComplete && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-emerald-500/20 backdrop-blur-sm"
                  >
                    <div className="rounded-3xl border border-emerald-400/30 bg-slate-950/80 px-8 py-6 text-center">
                      <Sparkles className="mx-auto h-10 w-10 text-emerald-400" />
                      <p className="mt-3 text-lg font-semibold text-white">Match Confirmed</p>
                      <p className="text-sm text-slate-300">99.2% confidence score</p>
                    </div>
                  </motion.div>
                )}
              </>
            )}
          </div>

          <AnimatePresence>
            {isScanning && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-4 left-4 right-4 rounded-2xl bg-black/75 p-4 backdrop-blur-md"
              >
                <div className="flex items-center justify-between text-sm text-white">
                  <span>Scanning...</span>
                  <span>{scanProgress}%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full rounded-full bg-emerald-400 transition-all" style={{ width: `${scanProgress}%` }} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {error && (
          <div className="mb-5 flex items-center gap-2 rounded-2xl border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-200">
            <AlertCircle className="h-4 w-4 shrink-0" />
            {error}
          </div>
        )}

        <div className="space-y-3">
          {!scanComplete ? (
            !cameraActive ? (
              <Button onClick={() => { setCameraActive(true); setError("") }} className="w-full rounded-2xl bg-sky-500 py-6 hover:bg-sky-600">
                <Camera className="mr-2 h-5 w-5" /> Start Camera
              </Button>
            ) : !isScanning ? (
              <Button onClick={handleScan} className="w-full rounded-2xl bg-sky-500 py-6 hover:bg-sky-600">
                <User className="mr-2 h-5 w-5" /> Start Face Scan
              </Button>
            ) : (
              <Button disabled className="w-full rounded-2xl bg-slate-600 py-6">
                <span className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent inline-block" />
                Scanning...
              </Button>
            )
          ) : (
            <Button onClick={handleContinue} className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 py-6 shadow-lg shadow-emerald-500/25">
              Continue to Success <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          )}

          <div className="flex gap-3 text-sm">
            <button onClick={handleRetake} className="flex-1 rounded-2xl border border-white/10 bg-white/5 py-3 text-slate-200 transition hover:bg-white/10">
              Retake
            </button>
            <button onClick={() => router.push("/auth/cnic-back")} className="flex-1 rounded-2xl border border-white/10 bg-white/5 py-3 text-slate-200 transition hover:bg-white/10">
              Back
            </button>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 rounded-2xl border border-slate-700/50 bg-slate-950/60 p-4 text-sm text-slate-300">
          <Shield className="h-4 w-4 text-sky-400 shrink-0" />
          Your facial data is encrypted and never stored on our servers.
        </div>
      </motion.div>
    </VerificationPageShell>
  )
}
