"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Check, ArrowRight, Shield, Cpu, ExternalLink, Activity, Info } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function GuardianConsole() {
  const [steps, setSteps] = useState([
    { label: "Guardian Agent v2.4 initialized", status: "active" },
    { label: "Securing transaction tunnel nodes...", status: "in-progress" },
  ])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setSteps([
        { label: "Guardian Agent v2.4 initialized", status: "active" },
        { label: "Securing transaction tunnel nodes...", status: "active" },
        { label: "Shariah Policy checks: PASS", status: "in-progress" }
      ])
    }, 2000)

    const timer2 = setTimeout(() => {
      setSteps([
        { label: "Guardian Agent v2.4 initialized", status: "active" },
        { label: "Securing transaction tunnel nodes...", status: "active" },
        { label: "Shariah Policy checks: PASS", status: "active" },
        { label: "Zero-Touch checkout verification finalized", status: "active" }
      ])
      setLoading(false)
    }, 4500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <div className="min-h-screen pt-28 pb-16 page-canvas">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Navigation / HUD Header */}
        <div className="flex items-center justify-between mb-8 border-b border-gray-200 dark:border-white/5 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-wider">SahulatKar</span>
            <span className="text-[10px] bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded-full text-orange-500 font-bold uppercase font-mono">
              Ethical Fintech
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-gray-500 tracking-wider">
            <span>Automation Engine</span>
            <span className="text-orange-500 font-bold">Guardian Console</span>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
          
          {/* Left Column: Content, steps, description */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            className="space-y-8 flex flex-col justify-center text-left"
          >
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 px-3.5 py-1 text-[10px] font-black uppercase tracking-widest text-orange-400">
                🛡️ AI TRANSACTIONS SECURITY
              </span>
              <h1 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white leading-tight tracking-tight">
                The Magic of
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  SahulatKar
                </span>
              </h1>
            </div>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
              Our AI Guardian agent is currently fulfilling your request. Sit back as we navigate, secure, and verify your ethical purchase in real-time.
            </p>

            {/* Active Steps Console */}
            <div className="space-y-3 font-mono bg-gray-50 dark:bg-white/5 rounded-2xl p-5 border border-gray-150 dark:border-white/5">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    {step.status === "active" ? (
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                    ) : step.status === "in-progress" ? (
                      <div className="w-6 h-6 rounded-full border border-orange-500 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full border border-gray-300 dark:border-white/10" />
                    )}
                  </div>
                  <p className={`text-xs font-mono font-bold ${
                    step.status === "in-progress" 
                      ? "text-orange-500" 
                      : step.status === "active"
                      ? "text-gray-800 dark:text-gray-200"
                      : "text-gray-400"
                  }`}>
                    {step.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: "👆", title: "Zero-Touch", desc: "Automated checkout forms: no friction, no errors" },
                { icon: "🛡️", title: "Policy Guard", desc: "Real-time compliance checks on every item" },
                { icon: "⚡", title: "Instant Capture", desc: "Instantly locked-in merchant prices" },
              ].map((feature, idx) => (
                <div key={idx} className="card-surface p-4 space-y-2 hover:-translate-y-1 transition duration-300">
                  <p className="text-xl">{feature.icon}</p>
                  <h4 className="text-xs font-extrabold text-gray-900 dark:text-white uppercase tracking-wider">{feature.title}</h4>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Bottom Actions - Proceed Manual Button */}
            <div className="pt-2 border-t border-gray-150 dark:border-white/5">
              {loading ? (
                <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-orange-500/10 border border-orange-500/20 text-orange-500 rounded-xl">
                  <Activity className="w-4 h-4 animate-spin" />
                  <span className="text-xs font-mono font-bold">Fulfilling Allocation Tunnel...</span>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 150 }}
                >
                  <Button
                    onClick={() => router.push("/payments/milestone-achieved")}
                    className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-6 text-base font-bold shadow-lg shadow-orange-500/15 hover:from-orange-600 hover:to-orange-700 text-white flex items-center justify-center gap-2 group"
                  >
                    Proceed to Verification Success
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Right Column: Web Browser Mock with Luxury Laptop Render */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="lg:order-2 space-y-4"
          >
            <div className="bg-slate-900/60 rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-md">
              {/* Mock Browser Title bar */}
              <div className="bg-slate-950 px-4 py-3 flex items-center gap-2 text-xs text-gray-400 font-mono border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="flex-1 text-center truncate text-[10px] select-all">
                  https://merchant-store.com/checkout/active_session_442
                </span>
                <span className="font-bold select-none cursor-pointer">⋮</span>
              </div>

              {/* Browser Page Frame Content */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 flex flex-col items-center justify-center min-h-[380px] text-white">
                <div className="bg-slate-950/60 rounded-2xl shadow-xl border border-white/10 p-6 text-center space-y-4 w-full max-w-sm">
                  <div>
                    <span className="text-[9px] uppercase font-mono tracking-widest text-slate-500">Selected Product</span>
                    <p className="text-sm font-bold text-slate-200 mt-0.5">MacBook Pro M3 Max 16-inch</p>
                  </div>

                  {/* MacBook Luxury Render Generated Asset */}
                  <div className="w-full aspect-[4/3] max-w-[200px] mx-auto rounded-xl overflow-hidden shadow-inner bg-slate-900 border border-white/10 relative group">
                    <img 
                      src="/images/macbook_luxury_render.png" 
                      alt="MacBook Pro luxury mockup render"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Glowing corner shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent shimmer pointer-events-none" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4 text-xs font-mono">
                    <div className="text-left">
                      <p className="text-[9px] text-gray-500">ENCRYPTION</p>
                      <p className="font-bold text-emerald-400">AES-256 SECURE</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] text-gray-500">GATEWAY DURATION</p>
                      <p className="font-bold text-orange-400">12ms</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

