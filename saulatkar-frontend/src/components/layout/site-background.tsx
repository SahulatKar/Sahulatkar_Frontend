"use client"

import { motion } from "framer-motion"

const BG_IMAGE =
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a5d8?auto=format&fit=crop&w=2400&q=80"

export function SiteBackground() {
  return (
    <div aria-hidden className="site-background pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat transition-opacity duration-700"
        style={{
          backgroundImage: `url('${BG_IMAGE}')`,
          opacity: "var(--site-photo-opacity)",
        }}
      />
      <div
        className="absolute inset-0 transition-[background] duration-700"
        style={{ background: "var(--site-overlay)" }}
      />
      <div
        className="absolute inset-0 transition-[background] duration-700"
        style={{ background: "var(--site-glow)" }}
      />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-24 top-1/4 h-96 w-96 rounded-full blur-3xl opacity-[var(--site-orb-opacity)]"
        style={{ background: "var(--site-orb-1)" }}
      />
      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 25, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-20 bottom-1/4 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-[var(--site-orb-opacity)]"
        style={{ background: "var(--site-orb-2)" }}
      />
    </div>
  )
}
