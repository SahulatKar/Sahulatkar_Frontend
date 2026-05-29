"use client"

import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { ArrowRight, Camera, User, Shield, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function FacialRecognition() {
  const [isScanning, setIsScanning] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)
  const [error, setError] = useState("")
  const [cameraActive, setCameraActive] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (cameraActive) {
      startCamera()
    }
    return () => {
      stopCamera()
    }
  }, [cameraActive])

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" }
      })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
    } catch (err) {
      console.error("Camera access denied:", err)
      setError("Camera access denied. Please allow camera permissions and try again.")
      setCameraActive(false)
    }
  }

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream
      stream.getTracks().forEach(track => track.stop())
    }
  }

  const handleStartScanning = () => {
    setCameraActive(true)
    setError("")
  }

  const handleScan = () => {
    setIsScanning(true)
    setScanProgress(0)

    const interval = window.setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          window.clearInterval(interval)
          window.setTimeout(() => {
            localStorage.setItem('facialRecognitionComplete', 'true')
            router.push('/auth/verification-success')
          }, 500)
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  const handleRetake = () => {
    setIsScanning(false)
    setScanProgress(0)
    setError("")
  }

  return (
    <div className="min-h-screen text-theme">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.12),transparent_21%),radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.08),transparent_18%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-[40px] border border-white/10 bg-slate-950/80 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.32)]"
        >
          <div className="text-center mb-8">
            <div className="mx-auto mb-4 grid h-20 w-20 place-items-center rounded-[32px] bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-xl shadow-cyan-500/20">
              <Camera className="h-10 w-10" />
            </div>
            <h1 className="text-4xl font-semibold">Facial Recognition</h1>
            <p className="mt-3 text-slate-400">Position your face in the frame and complete the verification.</p>
          </div>

          <div className="mb-8 rounded-[32px] border border-white/10 bg-slate-900/80 p-4">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 text-sm text-slate-300">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                CNIC uploaded
              </div>
              <div className="inline-flex items-center gap-2 text-sm text-slate-300">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                CNIC verified
              </div>
              <div className="inline-flex items-center gap-2 text-sm text-slate-300">
                <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
                Face scan
              </div>
            </div>
            <div className="h-2 rounded-full bg-slate-800">
              <div className="h-2 rounded-full bg-sky-500 transition-all duration-300" style={{ width: '85%' }} />
            </div>
          </div>

          <div className="mb-6 relative overflow-hidden rounded-[32px] border border-white/10 bg-black/30">
            <div className="relative h-72 overflow-hidden rounded-[32px] bg-slate-900">
              {!cameraActive ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-slate-400">
                  <Camera className="h-16 w-16" />
                  <p className="text-lg">Camera not active</p>
                  <p className="text-sm text-slate-500">Start the camera to begin face scan.</p>
                </div>
              ) : (
                <>
                  <video ref={videoRef} autoPlay playsInline muted className="h-full w-full object-cover" />
                  {isScanning && (
                    <div className="absolute inset-0 bg-sky-500/20">
                      <div className="absolute inset-0 border-4 border-sky-500 rounded-[32px] animate-pulse" />
                      <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <div className="h-32 w-32 rounded-full border-4 border-sky-500" />
                      </motion.div>
                    </div>
                  )}
                </>
              )}
            </div>

            {isScanning && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-4 left-4 right-4 rounded-3xl bg-black/70 p-4"
              >
                <div className="flex items-center justify-between text-sm text-white">
                  <span>Scanning...</span>
                  <span>{scanProgress}%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-slate-800">
                  <div className="h-2 rounded-full bg-emerald-400 transition-all duration-200" style={{ width: `${scanProgress}%` }} />
                </div>
              </motion.div>
            )}
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 rounded-3xl border border-red-300/30 bg-red-500/10 p-4 text-sm text-red-200"
            >
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                <span>{error}</span>
              </div>
            </motion.div>
          )}

          <div className="space-y-3">
            {!cameraActive ? (
              <Button
                onClick={handleStartScanning}
                className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-xl font-semibold transition-colors"
              >
                <div className="flex items-center justify-center gap-2">
                  <Camera className="h-5 w-5" />
                  Start Camera
                </div>
              </Button>
            ) : !isScanning ? (
              <Button
                onClick={handleScan}
                className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-xl font-semibold transition-colors"
              >
                <div className="flex items-center justify-center gap-2">
                  <User className="h-5 w-5" />
                  Start Face Scan
                </div>
              </Button>
            ) : (
              <Button disabled className="w-full bg-slate-600 text-white py-3 rounded-xl font-semibold">
                <div className="flex items-center justify-center gap-2">
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Scanning...
                </div>
              </Button>
            )}

            <div className="flex gap-3 text-sm text-slate-300">
              <button onClick={handleRetake} className="flex-1 rounded-xl border border-white/10 bg-white/5 py-3 transition hover:bg-white/10">
                Retake Photo
              </button>
              <button onClick={() => router.push('/auth/cnic-back')} className="flex-1 rounded-xl border border-white/10 bg-white/5 py-3 transition hover:bg-white/10">
                Back
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-4 text-sm text-slate-300"
          >
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-sky-400" />
              <span>Your facial data is encrypted and never stored.</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
