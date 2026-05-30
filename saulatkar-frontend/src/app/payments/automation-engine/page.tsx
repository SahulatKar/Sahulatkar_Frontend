"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Zap, Activity, Cpu, Shield, ArrowRight, Terminal } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function AutomationEngine() {
  const [logs, setLogs] = useState<string[]>([])
  const router = useRouter()

  useEffect(() => {
    const engineLogs = [
      "[17:43:12] Initializing Neural Compliance layer...",
      "[17:43:13] Layer Active: AAOFI Standards V.4 verified",
      "[17:43:14] Scanning incoming transaction pool [TX_8893]...",
      "[17:43:15] Risk profile analysis: Low. Liquidity check: PASS.",
      "[17:43:16] Executing Smart-Contract: Automated Profit Share",
      "[17:43:17] Ledger update successful. Settlement time: 8.6s.",
      "[17:43:18] Waiting for next instructions cycle...",
    ]

    let index = 0
    const interval = setInterval(() => {
      if (index < engineLogs.length) {
        setLogs((prev) => [...prev, engineLogs[index]])
        index++
      } else {
        clearInterval(interval)
      }
    }, 400)

    return () => clearInterval(interval)
  }, [])

  return (
    <div 
      className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 py-24 text-white bg-slate-950"
      style={{
        backgroundImage: "url('/images/engine_bg_glow.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Deep slate and orange overlay */}
      <div className="pointer-events-none absolute inset-0 bg-slate-950/85 backdrop-blur-[2px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.15),transparent_45%)]" />

      {/* Cyber ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-orange-600/5 blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl relative z-10">
        
        {/* Top Header telemetry */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-10">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/15">
              <Cpu className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div className="text-left">
              <h2 className="text-lg font-black tracking-wider uppercase text-white">SahulatKar Engine</h2>
              <p className="text-[10px] text-orange-400 font-mono tracking-widest font-bold">NODE PIPELINE SECURED</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              LIVE ENGINE ACTIVE
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-900 border border-white/5 text-gray-400 rounded-full text-xs font-mono">
              VER: 2.4.0
            </span>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] items-stretch">
          
          {/* Left Column: Visual description & parameters */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6 text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 px-3.5 py-1 text-[10px] font-black uppercase tracking-widest text-orange-400">
                ⚡ SHARIAH COMPLIANT AUTOMATION
              </span>
              <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight">
                Autonomous
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Ethical
                </span>
                <br />
                Intelligence
              </h1>
              <p className="text-slate-350 leading-relaxed text-base sm:text-lg">
                Your SahulatKar agent is processing real-time shariah-compliant transactions with microsecond precision.
              </p>
            </div>

            {/* Middle metrics progress card */}
            <div className="bg-slate-900/60 rounded-[2rem] border border-white/10 p-6 backdrop-blur-md relative overflow-hidden space-y-4">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
              <div className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                <span className="text-gray-400">Halal Compliance Index:</span>
                <span className="font-black text-emerald-400 font-mono tracking-widest text-lg">99.98%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Ethical Policy Adherence:</span>
                <span className="font-bold text-slate-200">AAOIFI Compliant</span>
              </div>
              <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "99.98%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.4)]"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => router.push("/payments/guardian-console")}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold h-12 px-6 rounded-xl shadow-lg shadow-orange-500/10 flex items-center gap-2 group/btn"
              >
                <Zap className="w-4 h-4 text-white group-hover/btn:animate-pulse" />
                Proceed to Guardian
                <ArrowRight className="w-4 h-4 text-white group-hover/btn:translate-x-0.5 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                className="h-12 px-6 rounded-xl font-bold border-gray-300 dark:border-white/10 dark:hover:bg-white/5 hover:border-orange-500/30 flex items-center gap-2"
              >
                <Shield className="w-4 h-4 text-gray-400" />
                Audit Policy Logs
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Console / Logs terminal */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="space-y-6 flex flex-col justify-between"
          >
            {/* Speed card HUD */}
            <div className="bg-slate-900/60 rounded-[2rem] border border-white/10 p-6 flex justify-between items-center backdrop-blur-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl pointer-events-none" />
              <div className="text-left space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">Processing Speed</span>
                <h3 className="text-lg font-bold text-white">Shariah Node Network</h3>
              </div>
              <div className="text-right">
                <span className="text-3xl font-black text-orange-400 font-mono tracking-tighter drop-shadow-[0_0_8px_rgba(249,115,22,0.35)]">1.2ms</span>
              </div>
            </div>

            {/* Terminal Console log card */}
            <div className="bg-slate-950 border border-white/10 rounded-[2rem] p-6 font-mono text-sm shadow-2xl relative overflow-hidden flex-1 flex flex-col justify-between min-h-[260px]">
              <div className="space-y-4">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 pb-4 border-b border-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 shadow-md" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-md" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-md" />
                  </div>
                  <span className="ml-auto text-[10px] text-gray-500 tracking-wider flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-orange-500" />
                    SAULAT_ENGINE_LOG_V2
                  </span>
                </div>

                {/* Logs lists */}
                <div className="space-y-2.5 max-h-[220px] overflow-y-auto pr-1">
                  {logs.map((log, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-xs text-emerald-400/90 leading-relaxed font-mono text-left flex items-start gap-2"
                    >
                      <span className="text-orange-500/70 select-none font-bold font-mono">❯</span>
                      <span>{log}</span>
                    </motion.div>
                  ))}
                  {logs.length < 7 && (
                    <div className="text-orange-500 animate-pulse font-mono text-left pl-4">
                      <span>▌</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Status indicator logs bar */}
              <div className="border-t border-white/5 pt-4 mt-6 flex justify-between items-center text-[10px] text-gray-500">
                <span className="flex items-center gap-1.5 uppercase font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Realtime pipeline logs active
                </span>
                <span>PKT timezone</span>
              </div>
            </div>

            {/* Performance metrics row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: "📈", label: "Mudarabah", value: "ACTIVE_CONTRACT" },
                { icon: "📋", label: "Sukuk Bonds", value: "8_PORTFOLIOS" },
                { icon: "📊", label: "Halal Index", value: "GLOBAL_MARKET" },
                { icon: "💹", label: "Yield AI", value: "+4.2% GROWTH" },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-900/60 border border-white/5 rounded-2xl p-4 text-center space-y-2 backdrop-blur-sm hover:border-orange-500/20 transition duration-300">
                  <span className="text-xl block">{item.icon}</span>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">{item.label}</p>
                  <p className="text-[10px] font-bold text-orange-400 font-mono tracking-tight">{item.value}</p>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </div>
  )
}

