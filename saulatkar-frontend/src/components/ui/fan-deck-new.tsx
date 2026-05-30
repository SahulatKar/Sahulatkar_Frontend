"use client"

import { motion } from "framer-motion"
import { CurveCarousel3D, type CarouselMediaItem } from "@/components/ui/curve-carousel-3d"
import { Shield, Zap, Store, Link2, ArrowRight, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"

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
  0%, 100% { opacity: 0.15; transform: scale(1); }
  50% { opacity: 0.25; transform: scale(1.08); }
}

.premium-metallic-gold {
  background: linear-gradient(
    135deg, 
    #fffbeb 0%, 
    #fef3c7 20%, 
    #f59e0b 45%, 
    #ec4899 65%, 
    #d946ef 80%, 
    #fffbeb 100%
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
    linear-gradient(rgba(249, 115, 22, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(249, 115, 22, 0.04) 1px, transparent 1px);
  background-size: 40px 40px;
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

  return (
    <section className="theme-section relative overflow-hidden pb-20 pt-28 md:pb-24 md:pt-36">
      <style dangerouslySetInnerHTML={{ __html: HERO_SHIMMER_CSS }} />

      {/* Cyber Grid Pattern Background Overlay */}
      <div className="absolute inset-0 -z-20 bg-[#fffcf9] dark:bg-[#0c0908] transition-colors duration-500" />
      <div className="pointer-events-none absolute inset-0 -z-10 cyber-grid opacity-85" />

      {/* Shimmering Ambient Spotlight Mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Soft Sunset Radial Orb 1 */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-orange-400/10 to-pink-500/8 blur-3xl -left-[10%] -top-[10%]"
          style={{ animation: "pulse-soft 15s infinite ease-in-out" }}
        />
        {/* Soft Sunset Radial Orb 2 */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-fuchsia-400/6 to-violet-500/8 blur-3xl -right-[5%] -bottom-[5%]"
          style={{ animation: "pulse-soft 18s infinite ease-in-out", animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10">
        <div className="relative z-10 mx-auto max-w-[100vw] px-4 sm:px-6 lg:px-8">
          
          {/* Main Glassmorphic Welcome Card */}
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-white/20 dark:border-white/10 bg-white/20 dark:bg-black/30 p-6 md:p-8 shadow-[0_45px_100px_rgba(249,115,22,0.12)] dark:shadow-[0_45px_100px_rgba(0,0,0,0.5)] backdrop-blur-3xl ring-1 ring-white/10 dark:ring-white/5 transition-all duration-300 hover:border-orange-500/25">
            
            {/* Smooth blended background image under absolute mask */}
            <div
              className="pointer-events-none absolute inset-0 bg-cover bg-center blur-sm opacity-[0.55] dark:opacity-[0.25] mix-blend-overlay"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80')",
                maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
              }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 dark:from-black/40 dark:via-transparent dark:to-black/30" />

            {/* Glowing gold and pink ambient background highlight */}
            <div className="pointer-events-none absolute -left-12 -top-12 w-48 h-48 bg-orange-400/20 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute -right-12 -bottom-12 w-48 h-48 bg-pink-500/15 rounded-full blur-3xl" />

            {/* ── Hero copy ── */}
            <div className="relative z-10 text-center">
              
              {/* Premium Shariah Fintech pill badge */}
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-md mb-6 shadow-sm select-none"
              >
                <Sparkles className="h-3.5 w-3.5 text-orange-500 dark:text-orange-400 animate-pulse" />
                <span className="text-[10px] md:text-xs font-bold tracking-[0.18em] uppercase text-orange-700 dark:text-orange-300">
                  SEC Regulated · 100% Shariah Compliant
                </span>
              </motion.div>

              {/* WELCOME staggered letter reveal */}
              <motion.div
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mb-2"
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
                      transition={{ duration: 0.65, delay: 0.2 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                      className="premium-metallic-gold font-sans text-[2.75rem] font-black leading-none tracking-[0.1em] md:text-[4.5rem] select-none inline-block drop-shadow-[0_8px_30px_rgba(249,115,22,0.3)]"
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
                className="mx-auto mt-4 max-w-xl text-[14px] leading-relaxed text-slate-800/90 dark:text-slate-100/90 md:mt-5 md:text-[16px] font-medium tracking-wide select-none"
              >
                Instant shopping made beautiful. Explore and finance what you love today with ethical, cost-plus-profit Murabaha contracts.
              </motion.p>

              {/* High-End Frosted Search Bar Container */}
              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mx-auto mt-7 max-w-2xl px-4"
              >
                <div className="rounded-[2rem] border border-slate-200/50 dark:border-white/10 bg-white/70 dark:bg-black/45 p-2.5 shadow-[0_30px_70px_rgba(249,115,22,0.18)] dark:shadow-[0_30px_70px_rgba(0,0,0,0.5)] backdrop-blur-md">
                  <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between relative">
                    <label htmlFor="product-url" className="sr-only">Product URL</label>
                    <div className="relative flex-1 flex items-center">
                      <Link2 className="absolute left-4 h-5 w-5 text-orange-500 dark:text-orange-400" />
                      <input
                        id="product-url"
                        type="url"
                        placeholder="Paste any online store product link..."
                        className="w-full rounded-2xl border-none bg-transparent pl-12 pr-4 py-3.5 text-base text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 outline-none transition sm:text-lg font-medium"
                      />
                    </div>
                    
                    <button
                      type="button"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:brightness-105 active:scale-[0.98] sm:w-auto sm:min-w-[160px]"
                      onClick={() => router.push('/auth/register')}
                    >
                      <span>Explore</span>
                      <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Luxury Curved Showcase Pedestal Stage for 3D Carousel */}
          <div className="relative mt-16 md:mt-24 w-full flex flex-col items-center">
            
            {/* The Pedestal Spotlight Track Line - adjusted for larger cards */}
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

