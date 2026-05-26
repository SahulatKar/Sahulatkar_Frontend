"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Zap } from "lucide-react"

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
        setTimeout(() => {
          router.push("/payments/guardian-console")
        }, 2000)
      }
    }, 400)

    return () => clearInterval(interval)
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        {/* Navigation */}
        <div className="flex items-center gap-4 mb-12">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest">SahulatKar</p>
          <span className="text-xs text-slate-500">ETHICAL FINTECH</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          {/* Left Section */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-orange-500 font-bold mb-2">LIVE ENGINE ACTIVE</p>
              <h1 className="text-5xl font-bold text-white leading-tight">
                Autonomous
                <br />
                <span className="text-orange-500">Ethical</span>
                <br />
                Intelligence
              </h1>
            </div>

            <p className="text-slate-300 leading-relaxed text-lg">
              Your SahulatKar agent is processing real-time shariah-compliant transactions with millisecond precision.
            </p>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-sm text-slate-300 uppercase tracking-wider">Halal Compliance</span>
              </div>
              <div className="text-2xl font-bold text-emerald-500">99.98%</div>
              <p className="text-xs text-slate-400">Ethical Process Adherence</p>
            </div>

            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition">
                <Zap className="w-4 h-4" /> Optimize Flow
              </button>
              <button className="px-6 py-3 rounded-xl font-semibold border border-slate-600 text-slate-300 hover:border-slate-500 transition">
                View Log
              </button>
            </div>
          </div>

          {/* Right Section - Console */}
          <div className="space-y-6">
            {/* Processing Speed */}
            <div className="absolute top-8 right-8">
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 text-right space-y-2">
                <p className="text-xs uppercase tracking-widest text-slate-400">Processing Speed</p>
                <p className="text-4xl font-bold text-white">1.2ms</p>
              </div>
            </div>

            {/* Terminal */}
            <div className="bg-slate-950 border border-slate-700 rounded-2xl p-6 font-mono text-sm space-y-3 overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 pb-4 border-b border-slate-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="ml-auto text-xs text-slate-500">SAULAT_ENGINE_LOG_V2</span>
              </div>

              {/* Logs */}
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {logs.map((log, idx) => (
                  <div key={idx} className={`text-xs ${log.includes("error") ? "text-red-400" : "text-emerald-400"}`}>
                    {log}
                  </div>
                ))}
                {logs.length < 7 && (
                  <div className="text-slate-600 animate-pulse">
                    <span className="text-emerald-500">▌</span>
                  </div>
                )}
              </div>
            </div>

            {/* Performance Cards */}
            <div className="grid grid-cols-4 gap-4">
              {[
                { icon: "📈", label: "Mudarabah", value: "ACTIVE_CONTRACT" },
                { icon: "📋", label: "Sukuk Bonds", value: "8_PORTFOLIOS" },
                { icon: "📊", label: "Halal Index", value: "GLOBAL_MARKET" },
                { icon: "💹", label: "Yield AI", value: "+4.2% GROWTH" },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-800 border border-slate-700 rounded-2xl p-4 text-center space-y-2">
                  <span className="text-2xl block">{item.icon}</span>
                  <p className="text-xs font-semibold text-slate-300">{item.label}</p>
                  <p className="text-xs text-slate-500">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
