"use client"

import { motion } from "framer-motion"

const LAYERS = {
  light: [
    {
      url: "/images/site-light-1.svg",
      position: "center",
      opacity: 0.2,
      scale: 1.08,
    },
    {
      url: "/images/site-light-2.svg",
      position: "right bottom",
      opacity: 0.12,
      scale: 1.15,
    },
    {
      url: "/images/site-light-2.svg",
      position: "left top",
      opacity: 0.1,
      scale: 1.1,
    },
  ],
  dark: [
    {
      url: "/images/site-dark-1.svg",
      position: "center",
      opacity: 0.14,
      scale: 1.1,
    },
    {
      url: "/images/site-dark-2.svg",
      position: "right center",
      opacity: 0.1,
      scale: 1.12,
    },
    {
      url: "/images/site-dark-2.svg",
      position: "left bottom",
      opacity: 0.08,
      scale: 1.08,
    },
  ],
}

function positionClass(pos: string) {
  if (pos.includes("left")) return "object-left"
  if (pos.includes("right")) return "object-right"
  if (pos.includes("top")) return "object-top"
  if (pos.includes("bottom")) return "object-bottom"
  return "object-center"
}

export function SiteBackground() {
  return (
    <div aria-hidden className="site-background pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Photo layers — light */}
      {LAYERS.light.map((layer, i) => (
        <div
          key={`light-${i}`}
          className={`absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-700 dark:hidden ${positionClass(layer.position)}`}
          style={{
            backgroundImage: `url('${layer.url}')`,
            opacity: layer.opacity,
            transform: `scale(${layer.scale})`,
          }}
        />
      ))}

      {/* Photo layers — dark */}
      {LAYERS.dark.map((layer, i) => (
        <div
          key={`dark-${i}`}
          className={`absolute inset-0 hidden bg-cover bg-no-repeat transition-opacity duration-700 dark:block ${positionClass(layer.position)}`}
          style={{
            backgroundImage: `url('${layer.url}')`,
            opacity: layer.opacity,
            transform: `scale(${layer.scale})`,
          }}
        />
      ))}

      <div
        className="absolute inset-0 transition-[background] duration-700"
        style={{ background: "var(--site-overlay)" }}
      />
      <div
        className="absolute inset-0 transition-[background] duration-700"
        style={{ background: "var(--site-glow)" }}
      />
      <div
        className="absolute inset-0 opacity-[var(--site-vignette-opacity)] transition-opacity duration-700"
        style={{ background: "var(--site-vignette)" }}
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
      <motion.div
        animate={{ opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[linear-gradient(105deg,transparent_42%,rgba(255,255,255,0.05)_50%,transparent_58%)] dark:bg-[linear-gradient(105deg,transparent_42%,rgba(255,255,255,0.03)_50%,transparent_58%)]"
      />
    </div>
  )
}
