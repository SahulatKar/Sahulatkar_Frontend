"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Check, ArrowRight, Shield, Cpu, Activity, Truck, Calendar, MapPin, ExternalLink, HelpCircle } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function OrderTracking() {
  const [logs, setLogs] = useState<string[]>([])
  const router = useRouter()

  useEffect(() => {
    const trackingLogs = [
      "[08:24:12] Shariah compliance ledger entry verified: AAOIFI standards PASS.",
      "[09:12:44] Funds allocated securely via automated Murabaha contract.",
      "[11:30:15] Merchant processed shipment: MacBook Pro package sealed.",
      "[14:10:22] BlueEx Logistics node picked up package from Authorized Warehouse.",
      "[16:45:08] Transit check: Arrived at Central Logistics Hub - Sector A.",
      "[18:00:50] Telemetry status: Package sorted and assigned to delivery route.",
      "[19:15:33] Out for delivery: Courier dispatched to destination node.",
    ]

    let index = 0
    const interval = setInterval(() => {
      if (index < trackingLogs.length) {
        setLogs((prev) => [...prev, trackingLogs[index]])
        index++
      } else {
        clearInterval(interval)
      }
    }, 400)

    return () => clearInterval(interval)
  }, [])

  const timelineSteps = [
    { title: "Shariah Audit Passed", desc: "AAOIFI compliance logs cleared", date: "Today, 08:24 AM", status: "completed" },
    { title: "Smart Contract Verified", desc: "Murabaha fund lock secured", date: "Today, 09:12 AM", status: "completed" },
    { title: "Merchant Dispatched", desc: "Alpha Electronics warehouse handover", date: "Today, 11:30 AM", status: "completed" },
    { title: "Logistics Transit", desc: "BlueEx central hub sorting", date: "Today, 04:45 PM", status: "completed" },
    { title: "Out for Delivery", desc: "Local courier dispatched to destination", date: "Today, 07:15 PM", status: "active" },
    { title: "Delivered", desc: "Biometric sign-off verification clear", date: "Expected Tomorrow", status: "pending" }
  ]

  return (
    <div className="min-h-screen pt-28 pb-16 page-canvas">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* HUD Navigation bar */}
        <div className="flex items-center justify-between mb-8 border-b border-gray-200 dark:border-white/5 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-wider">SahulatKar</span>
            <span className="text-[10px] bg-orange-500/10 border border-orange-500/20 px-2.5 py-0.5 rounded-full text-orange-500 font-bold uppercase font-mono">
              Delivery Secure
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-gray-500 tracking-wider">
            <span>Tracking ID:</span>
            <span className="text-orange-500 font-bold uppercase">SAK-2948-HB</span>
          </div>
        </div>

        {/* Dynamic 2-column layout */}
        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          
          {/* Left Column (Timeline and Console Logs) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-8"
          >
            {/* Interactive Logistics Timeline */}
            <Card className="card-surface">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Active Order Progress</h3>
                    <p className="text-xs text-gray-500 mt-1">Institutional Shariah logistics verification & dispatch pipeline</p>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-xl px-4 py-2.5">
                    <Truck className="w-4 h-4 text-orange-500 animate-pulse" />
                    <span className="text-xs font-mono font-black text-orange-500">IN TRANSIT</span>
                  </div>
                </div>

                {/* Timeline display */}
                <div className="relative pl-6 border-l border-gray-200 dark:border-white/10 space-y-8 ml-3 text-left">
                  {timelineSteps.map((step, idx) => {
                    const isCompleted = step.status === "completed"
                    const isActive = step.status === "active"
                    return (
                      <div key={idx} className="relative group">
                        {/* Timeline Connector Dot */}
                        <div className={`absolute -left-[35px] top-1.5 w-5 h-5 rounded-full flex items-center justify-center border-4 ${
                          isCompleted
                            ? "bg-emerald-500 border-white dark:border-[#161413] shadow-md shadow-emerald-500/10"
                            : isActive
                            ? "bg-orange-500 border-white dark:border-[#161413] shadow-md shadow-orange-500/10 animate-pulse"
                            : "bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/10"
                        }`}>
                          {isCompleted && <Check className="w-2.5 h-2.5 text-white" />}
                        </div>

                        <div className="space-y-1 pl-2">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <h4 className={`text-sm font-bold ${
                              isActive 
                                ? "text-orange-500" 
                                : isCompleted
                                ? "text-gray-800 dark:text-gray-200"
                                : "text-gray-400"
                            }`}>
                              {step.title}
                            </h4>
                            <span className="text-[10px] text-gray-400 font-mono">{step.date}</span>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Monospace GPS Telemetry Console */}
            <Card className="card-surface">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4 border-b border-gray-100 dark:border-white/5 pb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping" />
                    <h3 className="text-sm font-extrabold text-gray-900 dark:text-white uppercase tracking-wider">
                      GPS LOGS TELEMETRY
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-gray-500">LIVE FEED</span>
                </div>

                <div className="bg-slate-950 border border-white/5 rounded-xl p-4 font-mono text-[11px] leading-relaxed space-y-2 text-emerald-400 text-left min-h-[160px] max-h-[220px] overflow-y-auto">
                  {logs.map((log, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-orange-500/70 select-none">❯</span>
                      <span>{log}</span>
                    </motion.div>
                  ))}
                  {logs.length < 7 && (
                    <div className="text-orange-500 animate-pulse pl-3 font-mono">▌</div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column (Product details summary pass) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 space-y-8"
          >
            <Card className="card-surface p-6 h-full flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-orange-950/20 text-white border-slate-800">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-6">
                <div className="border-b border-white/5 pb-4">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">Selected Merchant Package</span>
                  <h4 className="text-base font-bold text-slate-200 mt-1">MacBook Pro M3 Max</h4>
                  <p className="text-[10px] text-orange-400 font-mono tracking-wider mt-0.5">Alpha Electronics Store</p>
                </div>

                {/* Laptop render display */}
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900 relative group">
                  <img 
                    src="/images/macbook_luxury_render.png" 
                    alt="MacBook Pro luxury rendering"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent shimmer pointer-events-none" />
                </div>

                {/* Details layout */}
                <div className="space-y-4 pt-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Installment Period:</span>
                    <span className="font-bold text-slate-250">06 Months</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Total Purchase Value:</span>
                    <span className="font-extrabold text-slate-200 font-mono">Rs 85,000</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Service Commission:</span>
                    <span className="font-bold text-emerald-400 font-mono">Rs 0.00 (Halal)</span>
                  </div>
                </div>

                <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-2xl flex items-start gap-2.5 text-left">
                  <Shield className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="text-[10px] font-bold tracking-wider text-orange-300 uppercase">BlueEx Delivery Security</h5>
                    <p className="text-[10px] text-gray-400 leading-relaxed mt-0.5">
                      Secure verification code required upon arrival. Please prepare your biometric verified CNIC registry node.
                    </p>
                  </div>
                </div>
              </div>

              {/* Back controls */}
              <div className="space-y-3 pt-6 border-t border-white/5 mt-6">
                <Button
                  onClick={() => router.push("/dashboard")}
                  className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold h-11 shadow-md shadow-orange-500/10 btn-smooth"
                >
                  Return to Dashboard
                </Button>
                <Button
                  variant="outline"
                  className="w-full h-11 rounded-xl font-bold border-white/10 dark:hover:bg-white/5 hover:border-orange-500/30 text-white flex items-center justify-center gap-1.5"
                >
                  <HelpCircle className="w-4 h-4 text-gray-400" />
                  Support Desk
                </Button>
              </div>
            </Card>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
