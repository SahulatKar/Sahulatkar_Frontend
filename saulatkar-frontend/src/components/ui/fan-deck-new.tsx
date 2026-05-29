"use client"

import { motion } from "framer-motion"
import { CurveCarousel3D, type CarouselMediaItem } from "@/components/ui/curve-carousel-3d"
import { Sparkles, Shield, Zap, Store } from "lucide-react"

const carouselItems: CarouselMediaItem[] = [
  {
    id: 1,
    title: "Shopping",
    type: "image",
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a5d8?w=400&h=500&fit=crop&auto=format&q=80",
    href: "/shop/paste-go",
  },
  {
    id: 2,
    title: "Smartphones",
    type: "image",
    src: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=500&fit=crop&auto=format&q=80",
    href: "/financing",
  },
  {
    id: 3,
    title: "Laptops",
    type: "image",
    src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=500&fit=crop&auto=format&q=80",
    href: "/financing",
  },
  {
    id: 4,
    title: "Watches",
    type: "image",
    src: "https://images.unsplash.com/photo-1523275335684-e0f698d48a1a?w=400&h=500&fit=crop&auto=format&q=80",
    href: "/financing",
  },
  {
    id: 5,
    title: "Cameras",
    type: "image",
    src: "https://images.unsplash.com/photo-1516035069377-eab226bc8ace?w=400&h=500&fit=crop&auto=format&q=80",
    href: "/financing",
  },
  {
    id: 6,
    title: "Audio",
    type: "image",
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=500&fit=crop&auto=format&q=80",
    href: "/financing",
  },
  {
    id: 7,
    title: "Gaming",
    type: "image",
    src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=500&fit=crop&auto=format&q=80",
    href: "/financing",
  },
  {
    id: 8,
    title: "Fashion",
    type: "image",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&auto=format&q=80",
    href: "/financing",
  },
  {
    id: 9,
    title: "Lifestyle",
    type: "image",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop&auto=format&q=80",
    href: "/financing",
  },
  {
    id: 10,
    title: "Accessories",
    type: "image",
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802af7cc?w=400&h=500&fit=crop&auto=format&q=80",
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
    src: "https://images.unsplash.com/photo-1554224155-6af6b86a6295?w=400&h=500&fit=crop&auto=format&q=80",
    href: "/auth/register",
  },
]

const WELCOME_LETTERS = [
  { char: "W", className: "text-[#f97316]" },
  { char: "E", className: "text-[#ef4444]" },
  { char: "L", className: "text-[#84cc16]" },
  { char: "C", className: "text-[#a855f7]" },
  { char: "O", className: "text-[#3b82f6]" },
  { char: "M", className: "text-[#f97316]" },
  { char: "E", className: "text-[#ec4899]" },
]

const STATS = [
  { value: "0%", label: "Interest", icon: Shield },
  { value: "2 min", label: "Approval", icon: Zap },
  { value: "100+", label: "Stores", icon: Store },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeInOut" as const },
  }),
}

export function FanDeckNew() {
  return (
    <section className="theme-section relative overflow-hidden pb-12 pt-24 md:pt-28">
      {/* Soft ambient glow behind headline */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-24 h-[320px] w-[min(90vw,720px)] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(249,115,22,0.08) 0%, rgba(236,72,153,0.05) 40%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[100vw]">
        {/* ── Hero copy ── */}
        <div className="px-4 text-center">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-5 flex justify-center"
          >
            <span className="inline-flex items-center gap-2.5 rounded-full border border-orange-200/70 dark:border-orange-500/25 bg-gradient-to-r from-orange-50/90 to-amber-50/60 dark:from-orange-500/10 dark:to-amber-500/5 px-5 py-2 shadow-[0_4px_24px_rgba(249,115,22,0.1)] backdrop-blur-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/10">
                <Sparkles className="h-3.5 w-3.5 text-orange-500" strokeWidth={2.5} />
              </span>
              <span className="hero-badge-text text-[13px] font-semibold tracking-wide text-orange-800/90 dark:text-orange-300">
                Shariah-Compliant · Instant Financing
              </span>
            </span>
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-1"
          >
            <p
              className="flex flex-wrap items-center justify-center gap-0.5 md:gap-1"
              aria-label="Welcome"
            >
              {WELCOME_LETTERS.map((letter, i) => (
                <motion.span
                  key={`${letter.char}-${i}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className={`hero-welcome-letter font-sans text-[2rem] font-extrabold leading-none tracking-tight md:text-[2.75rem] ${letter.className}`}
                  style={{ fontFeatureSettings: '"ss01"' }}
                >
                  {letter.char}
                </motion.span>
              ))}
            </p>
          </motion.div>

          <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="font-sans text-[2.75rem] font-extrabold leading-[0.95] tracking-[-0.03em] md:text-[4.5rem] lg:text-[5.25rem]">
              <span
                className="hero-brand-title bg-gradient-to-r from-[#f97316] via-[#ec4899] to-[#7c3aed] bg-clip-text text-transparent"
                style={{
                  WebkitBackgroundClip: "text",
                  backgroundSize: "120% auto",
                }}
              >
                SAHULATKAR
              </span>
            </h1>
          </motion.div>

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="hero-subtitle mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-theme-muted md:mt-5 md:max-w-lg md:text-[17px]"
          >
            Instant shopping made beautiful — explore what you can finance today
          </motion.p>
        </div>

        {/* ── 3D carousel — flush under headline ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-1 md:mt-2"
        >
          <CurveCarousel3D
            items={carouselItems}
            autoplay
            autoplaySpeed={0.0035}
            direction={1}
            cardWidth={172}
            cardHeight={230}
            perspective={1050}
            anglePerCard={13}
            showControls={false}
            showCardLabels
            className="w-full"
          />
        </motion.div>

        {/* ── Stats strip ── */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto mt-10 max-w-2xl px-4 md:mt-12"
        >
          <div className="theme-panel flex items-stretch overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
            {STATS.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className={`flex flex-1 flex-col items-center gap-2 px-4 py-5 md:px-6 md:py-6 ${
                    i > 0 ? "border-l border-[var(--section-border)]" : ""
                  }`}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/10 to-pink-500/10">
                    <Icon className="h-4 w-4 text-orange-600 dark:text-orange-400" strokeWidth={2} />
                  </div>
                  <p className="text-xl font-bold tracking-tight text-theme md:text-2xl">
                    {stat.value}
                  </p>
                  <p className="text-[11px] font-medium uppercase tracking-widest text-theme-muted">
                    {stat.label}
                  </p>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
