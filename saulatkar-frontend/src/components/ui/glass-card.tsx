"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: ReactNode
  className?: string
  blur?: string
  opacity?: number
  border?: boolean
}

export function GlassCard({ 
  children, 
  className = "",
  blur = "md",
  opacity = 10,
  border = true
}: GlassCardProps) {
  const blurClass = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md", 
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }[blur] || "backdrop-blur-md"

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        `bg-white/${opacity} ${blurClass} rounded-2xl border border-white/20 shadow-xl`,
        border && "border-white/20",
        className
      )}
    >
      {children}
    </motion.div>
  )
}
