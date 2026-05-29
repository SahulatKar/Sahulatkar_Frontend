"use client"

import { motion } from "framer-motion"

const BG_IMAGE =
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a5d8?auto=format&fit=crop&w=2400&q=80"

export function SiteBackground() {
  return (
    <div aria-hidden className="site-background pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat opacity-[0.22] dark:opacity-[0.14] transition-opacity duration-700"
        style={{ backgroundImage: `url('${BG_IMAGE}')` }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF7ED]/92 via-[#FFF7ED]/86 to-orange-100/70 dark:from-[#231E1C]/96 dark:via-[#231E1C]/92 dark:to-[#161413]/98 transition-colors duration-700" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(249,115,22,0.18),transparent_50%),radial-gradient(ellipse_at_80%_20%,rgba(236,72,153,0.1),transparent_45%),radial-gradient(ellipse_at_50%_100%,rgba(251,146,60,0.12),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_15%_10%,rgba(249,115,22,0.12),transparent_45%),radial-gradient(ellipse_at_85%_15%,rgba(168,85,247,0.08),transparent_40%),radial-gradient(ellipse_at_50%_90%,rgba(251,146,60,0.06),transparent_50%)]" />

      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-orange-400/20 blur-3xl dark:bg-orange-500/10"
      />
      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 25, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-20 bottom-1/4 h-[28rem] w-[28rem] rounded-full bg-pink-400/15 blur-3xl dark:bg-purple-500/8"
      />
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.04)_50%,transparent_60%)] dark:bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.02)_50%,transparent_60%)]"
      />
    </div>
  )
}
