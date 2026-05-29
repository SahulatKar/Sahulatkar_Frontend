"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface CarouselMediaItem {
  id: string | number
  title: string
  description?: string
  href?: string
  type: "image" | "video"
  src: string
  poster?: string
}

interface CurveCarousel3DProps {
  items: CarouselMediaItem[]
  autoplay?: boolean
  autoplaySpeed?: number
  direction?: 1 | -1
  cardWidth?: number
  cardHeight?: number
  perspective?: number
  anglePerCard?: number
  showControls?: boolean
  showLabels?: boolean
  className?: string
}

const FRICTION = 0.94
const MIN_VELOCITY = 0.02

function wrapOffset(offset: number, count: number): number {
  let o = offset % count
  if (o > count / 2) o -= count
  if (o < -count / 2) o += count
  return o
}

export function CurveCarousel3D({
  items,
  autoplay = true,
  autoplaySpeed = 0.004,
  direction = 1,
  cardWidth = 168,
  cardHeight = 224,
  perspective = 1100,
  anglePerCard = 14,
  showControls = false,
  showLabels = false,
  className,
}: CurveCarousel3DProps) {
  const count = items.length
  const [rotation, setRotation] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [wasDragging, setWasDragging] = useState(false)
  const [dims, setDims] = useState({ w: cardWidth, h: cardHeight, angle: anglePerCard })

  const rotationRef = useRef(0)
  const velocityRef = useRef(0)
  const dragStartRef = useRef({ x: 0, rotation: 0 })
  const rafRef = useRef(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const update = () => {
      const mobile = window.innerWidth < 768
      setDims({
        w: mobile ? cardWidth * 0.78 : cardWidth,
        h: mobile ? cardHeight * 0.78 : cardHeight,
        angle: mobile ? anglePerCard * 1.1 : anglePerCard,
      })
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [cardWidth, cardHeight, anglePerCard])

  useEffect(() => {
    const tick = () => {
      if (!isDragging && autoplay && !isHovered) {
        if (Math.abs(velocityRef.current) < MIN_VELOCITY) {
          velocityRef.current = autoplaySpeed * direction
        }
      }
      if (!isDragging && Math.abs(velocityRef.current) >= MIN_VELOCITY) {
        rotationRef.current += velocityRef.current
        velocityRef.current *= FRICTION
        if (Math.abs(velocityRef.current) < MIN_VELOCITY) velocityRef.current = 0
        setRotation(rotationRef.current)
      } else if (!isDragging && autoplay && !isHovered && Math.abs(velocityRef.current) < MIN_VELOCITY) {
        rotationRef.current += autoplaySpeed * direction
        setRotation(rotationRef.current)
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [isDragging, isHovered, autoplay, autoplaySpeed, direction])

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true)
    setWasDragging(false)
    velocityRef.current = 0
    dragStartRef.current = { x: e.clientX, rotation: rotationRef.current }
    containerRef.current?.setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return
    if (Math.abs(e.movementX) > 2) setWasDragging(true)
    const delta = (e.clientX - dragStartRef.current.x) / (dims.w * 0.55)
    rotationRef.current = dragStartRef.current.rotation - delta
    velocityRef.current = -(e.movementX || 0) / (dims.w * 0.55) * 0.15
    setRotation(rotationRef.current)
  }

  const handlePointerUp = () => setIsDragging(false)

  const getCardStyle = (offset: number): React.CSSProperties => {
    const abs = Math.abs(offset)
    const rotateY = offset * dims.angle
    const translateX = offset * (dims.w * 0.48)
    const translateZ = -abs * 38
    const scale = Math.max(0.8, 1 - abs * 0.048)
    const opacity = Math.max(0.55, 1 - abs * 0.07)

    return {
      position: "absolute",
      left: "50%",
      top: "50%",
      width: dims.w,
      height: dims.h,
      marginLeft: -dims.w / 2,
      marginTop: -dims.h / 2,
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex: Math.round(100 - abs * 10),
      transformStyle: "preserve-3d",
    }
  }

  const activeIndex = ((Math.round(rotation) % count) + count) % count

  const renderCard = (item: CarouselMediaItem, index: number) => {
    const offset = wrapOffset(index - rotation, count)
    if (Math.abs(offset) > 6) return null

    const isCenter = Math.abs(offset) < 0.5
    const style = getCardStyle(offset)

    const card = (
      <article
        className={cn(
          "relative h-full w-full overflow-hidden rounded-[22px] bg-neutral-200 dark:bg-neutral-800",
          "shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.45)] will-change-transform"
        )}
      >
        {item.type === "video" ? (
          <video
            src={item.src}
            poster={item.poster}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        ) : (
          <Image
            src={item.src}
            alt={item.title}
            fill
            sizes={`${dims.w}px`}
            className="object-cover"
            draggable={false}
          />
        )}

        {showLabels && isCenter && (
          <motion.div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-3">
            <p className="text-sm font-semibold text-white">{item.title}</p>
          </motion.div>
        )}
      </article>
    )

    if (item.href) {
      return (
        <Link
          key={item.id}
          href={item.href}
          style={style}
          className="block"
          onClick={(e) => wasDragging && e.preventDefault()}
          draggable={false}
        >
          {card}
        </Link>
      )
    }

    return (
      <div key={item.id} style={style}>
        {card}
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full cursor-grab touch-none active:cursor-grabbing", className)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative mx-auto w-full overflow-hidden"
        style={{
          height: dims.h + 48,
          perspective: `${perspective}px`,
          perspectiveOrigin: "50% 42%",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {items.map((item, index) => renderCard(item, index))}
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-[#FFF7ED]/80 via-[#FFF7ED]/40 to-transparent dark:from-[#231E1C]/80 dark:via-[#231E1C]/40 md:w-28"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-[#FFF7ED]/80 via-[#FFF7ED]/40 to-transparent dark:from-[#161413]/80 dark:via-[#161413]/40 md:w-28"
          aria-hidden
        />
      </div>

      {showControls && (
        <div className="mt-4 flex justify-center gap-1.5">
          {items.map((item, i) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Go to ${item.title}`}
              className={cn(
                "h-1 rounded-full transition-all duration-300",
                i === activeIndex ? "w-6 bg-neutral-800" : "w-1 bg-neutral-300"
              )}
              onClick={() => {
                rotationRef.current = i
                velocityRef.current = 0
                setRotation(i)
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

