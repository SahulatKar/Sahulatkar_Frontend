"use client"

import { motion } from "framer-motion"
import { CurveCarousel3D, type CarouselMediaItem } from "@/components/ui/curve-carousel-3d"
import { Sparkles } from "lucide-react"

/** Verified image URLs — portrait 4:5 crop for the 3D arc */
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
  { char: "W", color: "text-orange-500" },
  { char: "E", color: "text-pink-500" },
  { char: "L", color: "text-purple-500" },
  { char: "C", color: "text-blue-500" },
  { char: "O", color: "text-emerald-500" },
  { char: "M", color: "text-amber-500" },
  { char: "E", color: "text-rose-500" },
]

export function FanDeckNew() {
  return (
    <section className="relative overflow-hidden bg-white pb-10 pt-24 md:pt-28">
      <div className="relative z-10 mx-auto max-w-[100vw] px-4">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-white px-4 py-1.5 text-sm font-medium text-orange-700 shadow-sm">
            <Sparkles className="h-4 w-4 text-orange-500" />
            Shariah-Compliant · Instant Financing
          </span>
        </motion.div>

        {/* Welcome */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-2 text-center"
        >
          <div className="flex flex-wrap justify-center gap-1 md:gap-1.5">
            {WELCOME_LETTERS.map((letter, i) => (
              <motion.span
                key={`${letter.char}-${i}`}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                  y: { repeat: Infinity, duration: 2.8, delay: i * 0.12 },
                }}
                className={`text-3xl font-black md:text-5xl ${letter.color}`}
              >
                {letter.char}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Title — tight margin before carousel */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-0 text-center"
        >
          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
              SAHULATKAR
            </span>
          </h1>
          <p className="mx-auto mt-2 max-w-lg text-base text-gray-500 md:text-lg">
            Instant shopping made beautiful — explore what you can finance today
          </p>
        </motion.div>

        {/* 3D Curve Carousel — full bleed, no extra gap */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="-mx-4 mt-2 md:-mx-8 md:mt-3"
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
            showLabels={false}
            className="w-full"
          />
        </motion.div>

        {/* Stats — compact, close to carousel */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mx-auto mt-8 grid max-w-2xl grid-cols-3 gap-3 rounded-2xl border border-neutral-100 bg-neutral-50/80 px-4 py-4 md:mt-10 md:gap-6 md:px-8"
        >
          {[
            { value: "0%", label: "Interest" },
            { value: "2 min", label: "Approval" },
            { value: "100+", label: "Stores" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-xl font-bold text-gray-900 md:text-2xl">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
