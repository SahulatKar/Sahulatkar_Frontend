"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useState, useRef } from "react"
import { ShoppingBag, Smartphone, Laptop, Watch, Camera, Headphones, Gamepad2, Tablet, CreditCard, Package, Zap } from "lucide-react"

interface Card {
  id: number
  title: string
  icon: React.ReactNode
  color: string
  description: string
}

const cards: Card[] = [
  { 
    id: 1, 
    title: "Shopping", 
    icon: <ShoppingBag className="w-8 h-8" />, 
    color: "from-orange-400 to-orange-600",
    description: "Shop anywhere, pay later"
  },
  { 
    id: 2, 
    title: "Smartphones", 
    icon: <Smartphone className="w-8 h-8" />, 
    color: "from-blue-400 to-blue-600",
    description: "Latest phones with easy financing"
  },
  { 
    id: 3, 
    title: "Laptops", 
    icon: <Laptop className="w-8 h-8" />, 
    color: "from-purple-400 to-purple-600",
    description: "Professional laptops for work"
  },
  { 
    id: 4, 
    title: "Watches", 
    icon: <Watch className="w-8 h-8" />, 
    color: "from-green-400 to-green-600",
    description: "Smart watches for active lifestyle"
  },
  { 
    id: 5, 
    title: "Cameras", 
    icon: <Camera className="w-8 h-8" />, 
    color: "from-red-400 to-red-600",
    description: "Capture moments with ease"
  },
  { 
    id: 6, 
    title: "Audio", 
    icon: <Headphones className="w-8 h-8" />, 
    color: "from-yellow-400 to-yellow-600",
    description: "Premium audio experience"
  },
  { 
    id: 7, 
    title: "Gaming", 
    icon: <Gamepad2 className="w-8 h-8" />, 
    color: "from-pink-400 to-pink-600",
    description: "Gaming consoles and accessories"
  },
  { 
    id: 8, 
    title: "Tablets", 
    icon: <Tablet className="w-8 h-8" />, 
    color: "from-indigo-400 to-indigo-600",
    description: "Tablets for productivity"
  },
  { 
    id: 9, 
    title: "Credit", 
    icon: <CreditCard className="w-8 h-8" />, 
    color: "from-teal-400 to-teal-600",
    description: "Virtual credit cards"
  },
  { 
    id: 10, 
    title: "Delivery", 
    icon: <Package className="w-8 h-8" />, 
    color: "from-cyan-400 to-cyan-600",
    description: "Fast delivery service"
  }
]

export function FanDeck() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Mouse tracking for interactive effects
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [5, -5]), {
    damping: 25,
    stiffness: 700
  })
  
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-5, 5]), {
    damping: 25,
    stiffness: 700
  })

  // Arc configuration
  const arcRadius = 200
  const cardWidth = 280
  const cardHeight = 180
  const overlapDistance = 120
  const arcDepth = 30
  const liftDistance = -30
  const pushForce = 15

  const calculateCardPosition = (index: number, totalCards: number) => {
    // Calculate angle for arc distribution
    const startAngle = -60
    const endAngle = 60
    const angle = startAngle + (endAngle - startAngle) * (index / (totalCards - 1))
    
    // Convert angle to radians
    const angleRad = (angle * Math.PI) / 180
    
    // Calculate position on arc
    const x = Math.sin(angleRad) * arcRadius
    const y = -Math.cos(angleRad) * arcDepth
    
    // Calculate rotation for each card
    const rotation = angle
    
    // Calculate z-index based on position (center cards on top)
    const zIndex = Math.abs(index - Math.floor(totalCards / 2)) + 1
    
    return { x, y, rotation, zIndex }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Background animated elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      {/* Fan Deck Container */}
      <div 
        ref={containerRef}
        className="relative w-full max-w-6xl mx-auto px-4"
        style={{ perspective: "1000px" }}
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400">
              SAHULATKAR
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Your Premium Financial Partner for Instant Shopping
          </p>
        </motion.div>

        {/* Arc Fan Deck */}
        <div className="relative flex items-center justify-center" style={{ height: "400px" }}>
          {cards.map((card, index) => {
            const { x, y, rotation, zIndex } = calculateCardPosition(index, cards.length)
            const isHovered = hoveredIndex === index
            const isAdjacent = hoveredIndex !== null && Math.abs(index - hoveredIndex) === 1
            
            // Calculate push effect for adjacent cards
            const pushX = isAdjacent ? (index < hoveredIndex ? -pushForce : pushForce) : 0
            const pushY = isAdjacent ? -10 : 0
            
            return (
              <motion.div
                key={card.id}
                className="absolute"
                initial={{ 
                  opacity: 0, 
                  scale: 0.8,
                  x: x * 2,
                  y: y * 2,
                  rotate: rotation * 2
                }}
                animate={{ 
                  opacity: 1, 
                  scale: isHovered ? 1.05 : 1,
                  x: x + pushX,
                  y: y + (isHovered ? liftDistance : pushY),
                  rotate: rotation,
                  zIndex: isHovered ? 100 : zIndex
                }}
                transition={{ 
                  duration: 0.4,
                  ease: "easeOut",
                  scale: { duration: 0.2 }
                }}
                style={{
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  style={{
                    rotateX,
                    rotateY,
                    transformPerspective: 800,
                  }}
                  className={`w-full h-full bg-gradient-to-br ${card.color} rounded-2xl shadow-2xl border-2 border-white/20 relative overflow-hidden cursor-pointer`}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                  }}
                >
                  {/* Card Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div>
                      <div className="text-white mb-3">
                        {card.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-white/80 text-sm">
                      {card.description}
                    </p>
                  </div>
                  
                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-30 blur-xl`}
                    animate={{ 
                      scale: isHovered ? [1, 1.2, 1] : 1
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: isHovered ? Infinity : 0,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            Get Started Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/30 transition-colors"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/40 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
            }}
            animate={{
              y: -100,
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
    </section>
  )
}
