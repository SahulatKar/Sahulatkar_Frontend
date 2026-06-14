"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { CurveCarousel3D, type CarouselMediaItem } from "@/components/ui/curve-carousel-3d"
import { Shield, Zap, Store, Link2, ArrowRight, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

const HERO_SHIMMER_CSS = `
@keyframes gradient-move {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes sweep-gold {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

@keyframes pulse-soft {
  0%, 100% { opacity: 0.18; transform: scale(1); }
  50% { opacity: 0.28; transform: scale(1.08); }
}

@keyframes float-sparkle {
  0% { transform: translateY(110%) translateX(0) scale(1); opacity: 0; }
  20% { opacity: 0.8; }
  80% { opacity: 0.5; }
  100% { transform: translateY(-10%) translateX(35px) scale(0.4); opacity: 0; }
}

.premium-metallic-gold {
  background: linear-gradient(
    135deg, 
    #ffedd5 0%, 
    #fef08a 20%, 
    #f97316 45%, 
    #ea580c 65%, 
    #7c2d12 85%, 
    #ffedd5 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  animation: sweep-gold 4.5s linear infinite;
}

.cyber-grid {
  background-image: 
    linear-gradient(rgba(249, 115, 22, 0.08) 1.5px, transparent 1.5px),
    linear-gradient(90deg, rgba(249, 115, 22, 0.08) 1.5px, transparent 1.5px);
  background-size: 50px 50px;
}
`

const carouselItems: CarouselMediaItem[] = [
  {
    id: 1,
    title: "Shopping",
    type: "image",
    src: "https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804_1280.jpg",
    href: "/shop/paste-go",
  },
  {
    id: 2,
    title: "Smartphones",
    type: "image",
    src: "https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_1280.jpg",
    href: "/financing",
  },
  {
    id: 3,
    title: "Laptops",
    type: "image",
    src: "https://cdn.pixabay.com/photo/2016/11/21/15/46/computer-1846056_1280.jpg",
    href: "/financing",
  },
  {
    id: 4,
    title: "Watches",
    type: "image",
    src: "https://cdn.pixabay.com/photo/2015/10/09/13/55/pocket-watch-979240_1280.jpg",
    href: "/financing",
  },
  {
    id: 5,
    title: "Cameras",
    type: "image",
    src: "https://cdn.pixabay.com/photo/2017/03/30/00/17/camera-2186901_1280.png",
    href: "/financing",
  },
  {
    id: 6,
    title: "Audio",
    type: "image",
    src: "https://cdn.pixabay.com/photo/2020/04/15/14/45/microphone-5046876_1280.jpg",
    href: "/financing",
  },
  {
    id: 7,
    title: "Gaming",
    type: "image",
    src: "https://cdn.pixabay.com/photo/2017/04/04/18/10/video-game-console-2202592_1280.jpg",
    href: "/financing",
  },
  {
    id: 8,
    title: "Fashion",
    type: "image",
    src: "https://cdn.pixabay.com/photo/2017/07/25/14/50/shoes-2538424_1280.jpg",
    href: "/financing",
  },
  {
    id: 9,
    title: "Lifestyle",
    type: "image",
    src: "https://cdn.pixabay.com/photo/2014/07/15/20/09/wristwatch-394204_1280.jpg",
    href: "/financing",
  },
  {
    id: 10,
    title: "Accessories",
    type: "image",
    src: "https://cdn.pixabay.com/photo/2011/11/16/11/28/earrings-10332_1280.jpg",
    href: "/financing",
  },
  {
    id: 11,
    title: "Electronics",
    type: "image",
    src: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400&h=500&fit=crop&auto=format&q=80",
    href: "/financing",
  },
  {
    id: 12,
    title: "Instant Approval",
    type: "image",
    src: "https://cdn.pixabay.com/photo/2020/05/01/07/59/flatlay-5115827_1280.jpg",
    href: "/auth/register",
  },
]

const WELCOME_LETTERS = [
  { char: "W" },
  { char: "E" },
  { char: "L" },
  { char: "C" },
  { char: "O" },
  { char: "M" },
  { char: "E" },
]

const STATS = [
  { value: "0%", label: "Interest", icon: Shield },
  { value: "2 min", label: "Approval", icon: Zap },
  { value: "100+", label: "Stores", icon: Store },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function FanDeckNew() {
  const router = useRouter()
  
  // 3D Parallax & Spotlight states
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [isHoveringCard, setIsHoveringCard] = useState(false)
  const [isInputFocused, setIsInputFocused] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const xPct = x / rect.width
    const yPct = y / rect.height
    
    // Smooth 3D tilt calculations
    const rX = (yPct - 0.5) * -10 // rotate X based on Y coordinate
    const rY = (xPct - 0.5) * 10  // rotate Y based on X coordinate
    
    setMousePos({ x, y })
    setRotate({ x: rX, y: rY })
  }

  const handleMouseEnter = () => {
    setIsHoveringCard(true)
  }

  const handleMouseLeave = () => {
    setIsHoveringCard(false)
    setRotate({ x: 0, y: 0 })
  }

  return (
    <section className="theme-section relative overflow-hidden pb-8 pt-16 md:pb-10 md:pt-20">
      <style dangerouslySetInnerHTML={{ __html: HERO_SHIMMER_CSS }} />

      {/* Cyber Grid Pattern Background Overlay */}
      <div className="absolute inset-0 -z-20 bg-[#fffcf9] dark:bg-[#0c0908] transition-colors duration-500" />
      <div className="pointer-events-none absolute inset-0 -z-10 cyber-grid opacity-90" />

      {/* Drifting Background Sparkles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[
          { id: 1, left: "6%", size: 5, delay: "0s", duration: "10s" },
          { id: 2, left: "19%", size: 4, delay: "3s", duration: "13s" },
          { id: 3, left: "29%", size: 7, delay: "1.2s", duration: "11s" },
          { id: 4, left: "43%", size: 5, delay: "4.5s", duration: "12s" },
          { id: 5, left: "57%", size: 6, delay: "0.5s", duration: "9s" },
          { id: 6, left: "71%", size: 4, delay: "5.2s", duration: "14s" },
          { id: 7, left: "83%", size: 8, delay: "1.8s", duration: "10s" },
          { id: 8, left: "93%", size: 5, delay: "6.1s", duration: "12s" }
        ].map(p => (
          <div
            key={p.id}
            className="absolute rounded-full bg-orange-400/20"
            style={{
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animation: `float-sparkle ${p.duration} infinite linear`,
              animationDelay: p.delay,
              bottom: "-20px"
            }}
          />
        ))}
      </div>

      {/* Shimmering Ambient Spotlight Mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Soft Sunset Radial Orbs */}
        <div 
          className="absolute w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-orange-500/20 via-amber-600/15 to-yellow-600/10 blur-3xl -left-[10%] -top-[10%]"
          style={{ animation: "pulse-soft 15s infinite ease-in-out" }}
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-amber-500/15 via-[#7c2d12]/12 to-orange-700/10 blur-3xl -right-[5%] -bottom-[5%]"
          style={{ animation: "pulse-soft 18s infinite ease-in-out", animationDelay: "2s" }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-orange-400/12 via-amber-600/10 to-yellow-500/8 blur-3xl left-[25%] top-[15%]"
          style={{ animation: "pulse-soft 20s infinite ease-in-out", animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10">
        <div className="relative z-10 mx-auto max-w-[100vw] px-4 sm:px-6 lg:px-8">
          
          {/* Welcome Container Wrapper - housing refractive orbs behind the glass */}
          <div className="relative mx-auto max-w-[920px]">
            
            {/* Under-the-Glass Custom Color Orbs */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-visible select-none">
              <div 
                className="absolute -left-20 -top-20 w-[450px] h-[450px] rounded-full bg-yellow-300/30 dark:bg-yellow-300/20 blur-3xl opacity-80"
                style={{ animation: "pulse-soft 14s infinite ease-in-out" }}
              />
              <div 
                className="absolute -right-20 -bottom-20 w-[450px] h-[450px] rounded-full bg-orange-600/22 dark:bg-orange-600/18 blur-3xl opacity-80"
                style={{ animation: "pulse-soft 16s infinite ease-in-out", animationDelay: "2s" }}
              />
              <div 
                className="absolute left-[15%] top-[10%] w-[600px] h-[400px] rounded-full bg-[#5c2a18]/25 dark:bg-[#27120a]/40 blur-3xl opacity-90"
                style={{ animation: "pulse-soft 18s infinite ease-in-out", animationDelay: "1s" }}
              />
            </div>

            {/* Floating Premium Objects (sitting on top of corners for 3D overlay, z-20) */}
            <div className="absolute inset-0 pointer-events-none overflow-visible z-20">
              {/* Floating Glass Credit Card 1 (Top-Left overlaying border) */}
              <motion.div
                initial={{ x: -30, y: 20, rotate: -15, opacity: 0 }}
                animate={{ 
                  x: [0, 8, -5, 0], 
                  y: [0, -12, 8, 0],
                  rotate: [-15, -12, -18, -15],
                  opacity: 1 
                }}
                transition={{ 
                  duration: 15, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -left-10 -top-6 hidden lg:block w-44 h-26 rounded-xl border border-orange-500/40 bg-gradient-to-br from-[#7c2d12]/90 via-[#c2410c]/45 to-amber-500/20 backdrop-blur-xl shadow-[0_15px_35px_rgba(249,115,22,0.25)] p-3.5 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/20 via-transparent to-yellow-500/10" />
                <div className="w-9 h-6.5 rounded bg-amber-400/35 border border-amber-400/25 mb-3" />
                <div className="h-2.5 w-28 bg-white/45 rounded mb-1.5" />
                <div className="h-2.5 w-14 bg-white/30 rounded" />
                <div className="absolute bottom-3 right-3 flex gap-1">
                  <div className="w-4.5 h-4.5 rounded-full bg-orange-500/50" />
                  <div className="w-4.5 h-4.5 rounded-full bg-amber-500/50 -ml-2.5" />
                </div>
              </motion.div>

              {/* Floating Glass Credit Card 2 (Bottom-Right overlaying border) */}
              <motion.div
                initial={{ x: 30, y: 30, rotate: 12, opacity: 0 }}
                animate={{ 
                  x: [0, -8, 5, 0], 
                  y: [0, 12, -8, 0],
                  rotate: [12, 15, 8, 12],
                  opacity: 1
                }}
                transition={{ 
                  duration: 17, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -right-10 -bottom-8 hidden lg:block w-46 h-28 rounded-xl border border-amber-500/35 bg-gradient-to-br from-[#451a03]/95 via-[#7c2d12]/50 to-[#231e1c]/85 backdrop-blur-xl shadow-[0_15px_35px_rgba(124,45,18,0.3)] p-3.5 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/15 via-transparent to-orange-500/10" />
                <div className="flex justify-between items-start mb-4">
                  <div className="w-9 h-6.5 rounded bg-orange-400/35 border border-orange-400/20" />
                  <span className="text-[10px] font-black text-amber-300/60 tracking-wider">HALAL</span>
                </div>
                <div className="h-2.5 w-32 bg-white/40 rounded mb-2" />
                <div className="h-3 w-16 bg-gradient-to-r from-orange-500/50 to-amber-500/50 rounded" />
              </motion.div>

              {/* Floating Shariah compliance geometric star */}
              <motion.div
                animate={{ 
                  y: [0, -15, 10, 0],
                  rotate: [0, 120, 240, 360]
                }}
                transition={{ 
                  duration: 25, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute left-[4%] bottom-[4%] hidden xl:block text-orange-400/40 dark:text-orange-400/25"
              >
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
                </svg>
              </motion.div>

              {/* Floating Sparkle/Star shape top right */}
              <motion.div
                animate={{ 
                  y: [0, 15, -15, 0],
                  rotate: [0, -180, -360]
                }}
                transition={{ 
                  duration: 30, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute right-[6%] top-[6%] hidden xl:block text-amber-500/40 dark:text-amber-500/25"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0l2.5 7.5 7.5 2.5-7.5 2.5-2.5 7.5-2.5-7.5-7.5-2.5 7.5-2.5z" />
                </svg>
              </motion.div>
            </div>

            {/* Frosted Glassmorphic Shield Card */}
            <div 
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="group/card relative z-10 overflow-hidden rounded-[2rem] border border-white/20 dark:border-white/10 bg-white/10 dark:bg-black/25 py-6 md:py-8 px-10 shadow-[0_50px_100px_rgba(0,0,0,0.12)] dark:shadow-[0_50px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl ring-1 ring-white/10 dark:ring-white/5 transition-all duration-300 hover:border-orange-500/30"
              style={{
                transform: isHoveringCard
                  ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.01, 1.01, 1.01)`
                  : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                transformStyle: "preserve-3d",
                transition: isHoveringCard ? "none" : "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              
              {/* Blended high-quality background wave image under absolute mask */}
              <div
                className="pointer-events-none absolute inset-0 bg-cover bg-center blur-sm opacity-[0.45] dark:opacity-[0.2] mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80')",
                  maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 dark:from-black/30 dark:via-transparent dark:to-black/20" />

              {/* Dynamic spotlight gradient inside card */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-[2rem]"
                style={{
                  background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(249, 115, 22, 0.16), transparent 75%)`,
                }}
              />

              {/* Ambient gold-yellow and red glowing orbs inside container edges */}
              <div className="pointer-events-none absolute -left-12 -top-12 w-48 h-48 bg-yellow-300/10 rounded-full blur-3xl animate-pulse" />
              <div className="pointer-events-none absolute -right-12 -bottom-12 w-48 h-48 bg-red-600/8 rounded-full blur-3xl" />

              {/* ── Hero copy ── */}
              <div className="relative z-10 text-center">
              
              {/* Premium Shariah Fintech pill badge with rotating gradient border */}
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="relative p-[1.5px] rounded-full overflow-hidden mb-5 inline-block group/badge shadow-[0_4px_20px_rgba(249,115,22,0.15)] select-none"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-amber-500 to-[#7c2d12] animate-[spin_5s_linear_infinite] opacity-85 group-hover/badge:opacity-100 transition-opacity duration-300" />
                <div className="relative px-4 py-1.5 rounded-full bg-orange-100/90 dark:bg-[#161413]/90 backdrop-blur-md flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-orange-500 dark:text-orange-400 animate-pulse" />
                  <span className="text-[10px] md:text-xs font-bold tracking-[0.18em] uppercase text-orange-700 dark:text-orange-300">
                    SEC Regulated · 100% Shariah Compliant
                  </span>
                </div>
              </motion.div>

              {/* WELCOME staggered letter reveal with elastic hover spring */}
              <motion.div
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mb-1.5"
              >
                <h1
                  className="flex flex-wrap items-center justify-center gap-1 md:gap-2.5"
                  aria-label="Welcome"
                >
                  {WELCOME_LETTERS.map((letter, i) => (
                    <motion.span
                      key={`${letter.char}-${i}`}
                      initial={{ opacity: 0, y: 22, scale: 0.8, filter: "blur(3px)" }}
                      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                      whileHover={{ 
                        y: -8, 
                        scale: 1.18,
                        filter: "drop-shadow(0 12px 24px rgba(249,115,22,0.55))",
                        transition: { type: "spring", stiffness: 450, damping: 10 }
                      }}
                      transition={{ duration: 0.65, delay: 0.2 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                      className="premium-metallic-gold font-sans text-[2.25rem] font-black leading-none tracking-[0.08em] md:text-[3.65rem] select-none inline-block drop-shadow-[0_8px_30px_rgba(249,115,22,0.3)] cursor-default"
                      style={{ fontFeatureSettings: '"ss01"' }}
                    >
                      {letter.char}
                    </motion.span>
                  ))}
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mx-auto mt-2 max-w-2xl text-[13.5px] leading-relaxed text-slate-800/90 dark:text-slate-100/90 md:mt-2.5 md:text-[15px] font-medium tracking-wide select-none"
              >
                Instant shopping made beautiful. Explore and finance what you love today with ethical, cost-plus-profit Murabaha contracts.
              </motion.p>

              {/* High-End Frosted Search Bar Container with dynamic focus styling */}
              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mx-auto mt-6 max-w-2xl px-4"
              >
                <div 
                  className={cn(
                    "rounded-[2rem] border transition-all duration-300 p-2.5 backdrop-blur-md",
                    isInputFocused
                      ? "border-orange-500 bg-white/90 dark:bg-black/60 shadow-[0_30px_70px_rgba(249,115,22,0.3)] ring-2 ring-orange-500/20"
                      : "border-slate-200/50 dark:border-white/10 bg-white/70 dark:bg-black/45 shadow-[0_30px_70px_rgba(249,115,22,0.18)] dark:shadow-[0_30px_70px_rgba(0,0,0,0.5)]"
                  )}
                >
                  <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between relative">
                    <label htmlFor="product-url" className="sr-only">Product URL</label>
                    <div className="relative flex-1 flex items-center">
                      <Link2 className="absolute left-4 h-5 w-5 text-orange-500 dark:text-orange-400" />
                      <input
                        id="product-url"
                        type="url"
                        placeholder="Paste any online store product link..."
                        onFocus={() => setIsInputFocused(true)}
                        onBlur={() => setIsInputFocused(false)}
                        className="w-full rounded-2xl border-none bg-transparent pl-12 pr-4 py-3.5 text-base text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 outline-none transition sm:text-lg font-medium"
                      />
                    </div>
                    
                    <button
                      type="button"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-600 via-amber-600 to-[#7c2d12] px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-orange-600/20 hover:shadow-orange-600/45 transition-all duration-300 hover:brightness-105 active:scale-[0.98] sm:w-auto sm:min-w-[160px]"
                      onClick={() => router.push('/auth/register')}
                    >
                      <span>Explore</span>
                      <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </button>
                  </div>
                </div>

                {/* Supported Stores Ticker/Pills */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3.5 select-none opacity-80 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] md:text-xs font-bold tracking-[0.12em] uppercase text-slate-500 dark:text-slate-400">
                    Supported:
                  </span>
                  {[
                    { name: "Amazon", color: "hover:text-yellow-500 hover:border-yellow-500/30" },
                    { name: "Daraz", color: "hover:text-orange-500 hover:border-orange-500/30" },
                    { name: "eBay", color: "hover:text-blue-500 hover:border-blue-500/30" },
                    { name: "Shopify", color: "hover:text-green-500 hover:border-green-500/30" },
                    { name: "Alibaba", color: "hover:text-red-500 hover:border-red-500/30" },
                  ].map((store) => (
                    <span 
                      key={store.name}
                      className={cn(
                        "text-[10px] md:text-xs font-bold px-3 py-1 rounded-full border border-slate-200 dark:border-white/5 bg-slate-100/40 dark:bg-white/5 text-slate-600 dark:text-slate-300 transition-all duration-300 cursor-default",
                        store.color
                      )}
                    >
                      {store.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Luxury Curved Showcase Pedestal Stage for 3D Carousel */}
        <div className="relative mt-8 md:mt-10 w-full flex flex-col items-center">
          
          {/* The Pedestal 3D Surface Glow Line */}
          <div className="absolute top-[200px] md:top-[250px] w-[92vw] max-w-[1050px] h-[60px] border border-orange-500/20 dark:border-orange-500/10 rounded-full [transform:rotateX(75deg)] bg-gradient-to-b from-orange-500/5 to-transparent blur-[2px] shadow-[0_25px_50px_rgba(249,115,22,0.12)] z-0" />
          <div className="absolute top-[200px] md:top-[250px] w-[90vw] max-w-[1000px] h-[60px] border-[2px] border-orange-500/40 dark:border-orange-500/20 rounded-full [transform:rotateX(75deg)] filter drop-shadow-[0_0_12px_rgba(249,115,22,0.5)] z-0 animate-pulse" />
          
          <div className="absolute top-[215px] md:top-[265px] w-[88vw] max-w-[1000px] h-[2px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent z-0" />
          <div className="absolute top-[215px] md:top-[265px] w-[70vw] max-w-[700px] h-[30px] bg-gradient-to-b from-orange-500/8 to-transparent blur-md rounded-full z-0" />

          {/* 3D revolving category cards deck */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full z-10"
          >
            <CurveCarousel3D
              items={carouselItems}
              autoplay
              autoplaySpeed={0.0035}
              direction={1}
              cardWidth={245}
              cardHeight={326}
              perspective={1050}
              anglePerCard={13}
              showControls={false}
              showCardLabels
              className="w-full"
            />
          </motion.div>
        </div>

        {/* ── Stats Strip ── */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto mt-12 max-w-2xl px-4 md:mt-16 relative z-25"
        >
          <div className="theme-panel flex items-stretch overflow-hidden rounded-[20px] shadow-[0_20px_50px_rgba(249,115,22,0.06)] border border-slate-200/50 dark:border-white/5 bg-white/40 dark:bg-black/20 backdrop-blur-md">
            {STATS.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className={`flex flex-1 flex-col items-center gap-2 px-4 py-5 md:px-6 md:py-6 ${
                    i > 0 ? "border-l border-slate-200/40 dark:border-white/5" : ""
                  }`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 dark:bg-orange-500/15 shadow-inner">
                    <Icon className="h-5 w-5 text-orange-600 dark:text-orange-400" strokeWidth={2.25} />
                  </div>
                  <p className="text-xl font-black tracking-tight text-slate-800 dark:text-slate-100 md:text-2xl">
                    {stat.value}
                  </p>
                  <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 select-none">
                    {stat.label}
                  </p>
                </div>
              )
            })}
          </div>
        </motion.div>

      </div>
      </div>
    </section>
  )
}
