"use client"
import { motion } from "framer-motion"
import { CurveCarousel3D, type CarouselMediaItem } from "@/components/ui/curve-carousel-3d"
import { Shield, Zap, Store } from "lucide-react"
const carouselItems: CarouselMediaItem[] = [
  {
    id: 1,
    title: "Shopping",
    type: "image",
    src: " https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804_1280.jpg",
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
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeInOut" as const },
  }),
}
export function FanDeckNew() {
  return (
    <section className="theme-section relative overflow-hidden pb-16 pt-28 md:pb-20 md:pt-32">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundColor: "#FFEDDE",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.14),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.1),_transparent_24%)] blur-2xl opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/25 to-transparent" />
      <div className="relative z-10">
      {/* Soft ambient glow behind headline */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-24 h-[320px] w-[min(90vw,720px)] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(249,115,22,0.08) 0%, rgba(236,72,153,0.05) 40%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[100vw] px-4 sm:px-6 lg:px-8">
        <div
          className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/50 bg-white/10 p-8 shadow-[0_32px_90px_rgba(15,23,42,0.14)] backdrop-blur-2xl ring-1 ring-white/60"
          style={{
            backgroundImage:
              "url(' https://cdn.pixabay.com/photo/2017/09/10/14/26/shopping-2735735_1280.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "overlay",
          }}
        >
          {/* ── Hero copy ── */}
          <div className="text-center">
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
                  className="hero-welcome-letter font-sans text-[2rem] font-extrabold leading-none tracking-tight md:text-[2.75rem] bg-gradient-to-r from-[#f97316] via-[#ec4899] to-[#7c3aed] bg-clip-text text-transparent"
                  style={{ fontFeatureSettings: '"ss01"' }}
                >
                  {letter.char}
                </motion.span>
              ))}
            </p>
          </motion.div>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="hero-subtitle mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-theme-muted md:mt-5 md:max-w-lg md:text-[17px]"
          >
            Instant shopping made beautiful explore what you can finance today
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto mt-8 max-w-2xl px-4"
          >
            <div className="rounded-[2rem] border border-white/40 bg-white/85 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-sm sm:p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <label htmlFor="product-url" className="sr-only">Product URL</label>
                <input
                  id="product-url"
                  type="url"
                  placeholder="Enter a product URL"
                  className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-base text-slate-900 shadow-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200 sm:text-lg"
                />
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-fuchsia-500 px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-500/15 transition hover:brightness-105 sm:w-auto sm:min-w-[160px] sm:text-base"
                >
                  Explore
                </button>
              </div>
            </div>
          </motion.div>
        </div>

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
            cardWidth={208}
            cardHeight={276}
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
    </div>
    </section>
  )
}
