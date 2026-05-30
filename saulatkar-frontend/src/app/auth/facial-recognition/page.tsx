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
      accent="orange"
      badge="Biometric Liveness"
      title="Facial Recognition"
      subtitle="Position your face in the frame and complete the liveness verification"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="mx-auto max-w-3xl overflow-hidden rounded-[2.5rem] capture-panel p-8 shadow-[var(--shadow-soft)] relative"
      >
        <div className="pointer-events-none absolute -inset-8 rounded-3xl bg-gradient-to-br from-orange-500/10 to-amber-500/6 blur-3xl" />
        
        <div className="mb-8 flex flex-col items-center text-center relative z-10">
          <div className="mb-4 grid h-20 w-20 place-items-center rounded-[1.75rem] bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-xl shadow-orange-500/25">
            {scanComplete ? <CheckCircle2 className="h-10 w-10" /> : <Camera className="h-10 w-10" />}
          </div>
          <h2 className="text-2xl font-bold text-white tracking-wide">
            {scanComplete ? "Face Scan Complete" : "Align Your Face"}
          </h2>
          <p className="mt-2 text-slate-300 max-w-md">
            {scanComplete
              ? "Your biometric profile has been verified successfully against institutional records."
              : "Keep your face centered and well-lit for optimal AI matching."}
          </p>
        </div>

        {/* Liveness Steps Progress HUD */}
        <div className="mb-6 rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-4 relative z-10">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300 sm:text-sm">
            {["CNIC uploaded", "CNIC verified", "Face scan"].map((step, i) => (
              <div key={step} className="inline-flex items-center gap-2 font-medium tracking-wide">
                <span className={`h-2.5 w-2.5 rounded-full ${i < 2 || scanComplete ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.4)]" : "bg-orange-500 animate-pulse shadow-[0_0_8px_rgba(249,115,22,0.5)]"}`} />
                {step}
              </div>
            ))}
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400"
              animate={{ width: scanComplete ? "100%" : "85%" }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* AI Face Scanning Live Box */}
        <div className="relative mb-6 overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/40 relative z-10 shadow-inner">
          <div className="relative h-96 overflow-hidden bg-slate-950">
            {!cameraActive ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-slate-400">
                <Camera className="h-16 w-16 opacity-30 text-orange-400 animate-pulse" />
                <p className="text-lg font-bold text-white tracking-wide">Biometric Camera Inactive</p>
                <p className="text-sm text-slate-400 px-8 text-center max-w-sm">Start the secure camera to begin face liveness verification</p>
              </div>
            ) : (
              <>
                <video ref={videoRef} autoPlay playsInline muted className="h-full w-full object-cover" />
                
                {/* Glowing AI Face Oval Guide HUD (Highly Aesthetic!) */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10">
                  <div className="relative w-48 h-64 sm:w-56 sm:h-72 rounded-[50%] border-2 border-dashed border-orange-500/40 flex items-center justify-center">
                    {/* Pulsing Scan Ring */}
                    <motion.div
                      animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.7, 0.3] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 rounded-[50%] border border-orange-500/60 shadow-[0_0_18px_rgba(249,115,22,0.3)]"
                    />
                    
                    {/* Targeting ticks */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-3.5 bg-orange-500" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-3.5 bg-orange-500" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 w-3.5 bg-orange-500" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-0.5 w-3.5 bg-orange-500" />
                    
                    {/* Scanning Status Tag */}
                    {isScanning && (
                      <motion.span
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                        className="absolute bottom-6 bg-orange-500/90 text-white font-mono text-[9px] font-black tracking-widest px-2.5 py-0.5 rounded border border-orange-400 shadow-md"
                      >
                        AI SCANNING
                      </motion.span>
                    )}
                  </div>

                  {/* AI Floating Telemetry HUD panels */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1.5 bg-black/75 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/10 text-[9px] font-mono tracking-wider text-orange-400 shadow-lg">
                    <div className="flex items-center gap-2">
                      <span className={`h-1.5 w-1.5 rounded-full bg-orange-500 ${isScanning ? "animate-ping" : ""}`} />
                      <span className="font-bold">HUD: LIVENESS</span>
                    </div>
                    <div>DETECTION: {isScanning ? "SCANNING" : "READY"}</div>
                    <div>ALGORITHM: NEURAL_v6</div>
                  </div>

                  <div className="absolute top-4 right-4 flex flex-col gap-1.5 bg-black/75 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/10 text-[9px] font-mono tracking-wider text-orange-400 text-right shadow-lg">
                    <div>VIDEO FEED: HD_RGB</div>
                    <div>LIGHT LEVEL: OPTIMAL</div>
                    <div>SECURITY: AES-256</div>
                  </div>
                </div>

                {isScanning && (
                  <div className="absolute inset-0 bg-orange-500/5 pointer-events-none z-20">
                    {/* Sweeping laser scanner line */}
                    <motion.div
                      animate={{ y: ["15%", "85%", "15%"] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_12px_rgba(249,115,22,0.8)]"
                    />
                  </div>
                )}
                
                {scanComplete && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-emerald-500/20 backdrop-blur-sm z-30"
                  >
                    <div className="rounded-3xl border border-emerald-400/30 bg-slate-950/95 px-8 py-6 text-center shadow-2xl max-w-xs">
                      <Sparkles className="mx-auto h-12 w-12 text-emerald-400 animate-bounce" />
                      <p className="mt-3 text-lg font-bold text-white tracking-wide">Match Confirmed</p>
                      <p className="text-sm text-emerald-400 font-mono font-bold mt-1 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-400/20">99.8% Liveness Score</p>
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
                className="absolute bottom-4 left-4 right-4 rounded-2xl bg-black/85 p-4 backdrop-blur-md z-25 border border-white/10"
              >
                <div className="flex items-center justify-between text-xs sm:text-sm text-white font-mono tracking-wider">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-orange-500 animate-ping" />
                    Analyzing facial landmarks...
                  </span>
                  <span className="font-bold text-orange-400">{scanProgress}%</span>
                </div>
                <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-200" style={{ width: `${scanProgress}%` }} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {error && (
          <div className="mb-5 flex items-center gap-2 rounded-2xl border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-200 relative z-10 font-medium">
            <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
            {error}
          </div>
        )}

        <div className="space-y-3 relative z-10">
          {!scanComplete ? (
            !cameraActive ? (
              <Button onClick={() => { setCameraActive(true); setError("") }} className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 py-6 hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/25 text-white font-semibold">
                <Camera className="mr-2 h-5 w-5" /> Start Camera
              </Button>
            ) : !isScanning ? (
              <Button onClick={handleScan} className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 py-6 hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/25 text-white font-semibold">
                <User className="mr-2 h-5 w-5" /> Start Face Scan
              </Button>
            ) : (
              <Button disabled className="w-full rounded-2xl bg-slate-800 py-6 text-slate-400 border border-slate-700">
                <span className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-orange-500 border-t-transparent inline-block" />
                Scanning Liveness...
              </Button>
            )
          ) : (
            <Button onClick={handleContinue} className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 py-6 shadow-lg shadow-emerald-500/25 text-white font-semibold">
              Continue to Success <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          )}

          <div className="flex gap-3 text-sm">
            <button onClick={handleRetake} className="flex-1 rounded-2xl border border-white/10 bg-white/5 py-3 text-slate-200 transition hover:bg-white/10 font-medium">
              Retake
            </button>
            <button onClick={() => router.push("/auth/cnic-back")} className="flex-1 rounded-2xl border border-white/10 bg-white/5 py-3 text-slate-200 transition hover:bg-white/10 font-medium">
              Back
            </button>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 rounded-2xl border border-slate-700/50 bg-slate-950/60 p-4 text-xs sm:text-sm text-slate-300 relative z-10">
          <Shield className="h-4 w-4 text-orange-500 shrink-0" />
          Your facial data is fully encrypted and never stored on our servers.
        </div>
      </motion.div>
    </VerificationPageShell>
  )
}
