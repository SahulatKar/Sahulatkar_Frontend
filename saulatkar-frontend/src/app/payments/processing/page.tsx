"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Check, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function ProcessingPayment() {
  const [steps, setSteps] = useState([
    { id: 1, label: "Identity Verified", status: "completed", substatus: "BIOMETRIC_AUTH_SUCCESS" },
    { id: 2, label: "Executing Transfer", status: "pending", substatus: "ROUTING_GATEWAY_LINK" },
  ])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setSteps((prev) =>
        prev.map((step) =>
          step.id === 2 ? { ...step, status: "completed" } : step
        )
      )
    }, 3000)

    const timer2 = setTimeout(() => {
      setLoading(false)
      // Completely disabled automated page moving/redirection to let the user review
    }, 5000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <div 
      className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 py-16 text-theme"
      style={{
        backgroundImage: "url('https://cdn.pixabay.com/photo/2015/10/30/10/40/key-1013662_1280.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Deep blue/slate overlay for uniform layout */}
      <div className="pointer-events-none absolute inset-0 bg-slate-950/80" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.15),transparent_40%)]" />

      {/* Cyber ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="w-full max-w-md relative z-10"
      >
        {/* Premium glassmorphic console card */}
        <div className="bg-slate-900/60 rounded-[2.5rem] p-8 shadow-2xl border border-white/10 text-center space-y-8 backdrop-blur-2xl relative overflow-hidden">
          
          {/* Header section */}
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/15 border border-orange-500/20 px-3.5 py-1 text-[10px] font-black uppercase tracking-widest text-orange-400">
              🔐 SECURE TRANSACTION
            </span>
            <h1 className="text-3xl font-extrabold text-white tracking-wide">Processing Payment...</h1>
          </div>

          {/* Advanced Biometric Circular Aperture Loader */}
          <div className="flex justify-center py-4">
            <div className="relative w-36 h-36">
              {/* Outer spinning tech dashes */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-orange-500/30"
              />
              {/* Inner reverse spinning ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2.5 rounded-full border border-cyan-500/20 border-t-cyan-500/60"
              />
              {/* Pulsing inner scanner ring */}
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-5 rounded-full border-2 border-orange-500/40 shadow-[0_0_20px_rgba(249,115,22,0.25)]"
              />
              {/* Core central security lock lock */}
              <div className="absolute inset-7 bg-slate-950 rounded-full border border-white/10 flex items-center justify-center shadow-inner">
                {loading ? (
                  <span className="text-2xl animate-pulse">🔒</span>
                ) : (
                  <motion.span 
                    initial={{ scale: 0.5, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="text-2xl"
                  >
                    🔓
                  </motion.span>
                )}
              </div>
            </div>
          </div>

          {/* Safety instructions */}
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed px-2">
            Please do not close your browser or refresh this page. We are finalizing your transaction with institutional-grade Shariah security protocols.
          </p>

          {/* Clean Monospace HUD Steps readout logs */}
          <div className="space-y-3 font-mono">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`flex items-start gap-3.5 p-4 rounded-2xl border transition-all duration-300 ${
                  step.status === "completed"
                    ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-450"
                    : "bg-slate-900/60 border-white/5 text-slate-400"
                }`}
              >
                <div className="flex-shrink-0 mt-0.5">
                  {step.status === "completed" ? (
                    <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-full border border-orange-500/40 flex items-center justify-center animate-pulse">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    </div>
                  )}
                </div>
                
                <div className="text-left space-y-1">
                  <p className={`font-bold text-sm ${step.status === "completed" ? "text-white" : "text-slate-400"}`}>{step.label}</p>
                  <p className="text-[9px] tracking-widest font-semibold opacity-70 uppercase">{step.substatus}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive footer details and manual action triggers */}
          <div className="border-t border-white/10 pt-6">
            {loading ? (
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                <span className="text-xs font-semibold text-orange-400 tracking-wider font-mono">ENCRYPTING BRIDGE...</span>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-semibold text-emerald-400 tracking-wider font-mono">PAYMENT SECURED</span>
                </div>

                {/* Manual Continue Button instead of Automated Redirect */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 150 }}
                >
                  <Button
                    onClick={() => router.push("/payments/automation-engine")}
                    className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 py-6 text-base font-bold shadow-lg shadow-orange-500/25 hover:from-orange-600 hover:to-orange-700 text-white transform active:scale-95 transition-all"
                  >
                    Proceed to Allocation Engine
                    <ArrowRight className="w-5 h-5 ml-2 inline-block" />
                  </Button>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
