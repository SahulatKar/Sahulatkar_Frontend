"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ShoppingBag, Smartphone, Laptop, Watch, Camera, Headphones, Gamepad2, Tablet, CreditCard, Package, Zap } from "lucide-react"

interface Card {
  id: number
  title: string
  icon: React.ReactNode
  color: string
  description: string
  x: number
  y: number
  rotation: number
  zIndex: number
}

const cards: Card[] = [
  { 
    id: 1, 
    title: "Shopping", 
    icon: <ShoppingBag className="w-8 h-8" />, 
    color: "from-orange-100 to-orange-200",
    description: "Shop anywhere, pay later",
    x: -180,
    y: -20,
    rotation: -30,
    zIndex: 1
  },
  { 
    id: 2, 
    title: "Smartphones", 
    icon: <Smartphone className="w-8 h-8" />, 
    color: "from-blue-100 to-blue-200",
    description: "Latest phones with easy financing",
    x: -120,
    y: -25,
    rotation: -18,
    zIndex: 2
  },
  { 
    id: 3, 
    title: "Laptops", 
    icon: <Laptop className="w-8 h-8" />, 
    color: "from-purple-100 to-purple-200",
    description: "Professional laptops for work",
    x: -60,
    y: -28,
    rotation: -6,
    zIndex: 3
  },
  { 
    id: 4, 
    title: "Watches", 
    icon: <Watch className="w-8 h-8" />, 
    color: "from-green-100 to-green-200",
    description: "Smart watches for active lifestyle",
    x: 0,
    y: -30,
    rotation: 0,
    zIndex: 4
  },
  { 
    id: 5, 
    title: "Cameras", 
    icon: <Camera className="w-8 h-8" />, 
    color: "from-red-100 to-red-200",
    description: "Capture moments with ease",
    x: 60,
    y: -28,
    rotation: 6,
    zIndex: 3
  },
  { 
    id: 6, 
    title: "Audio", 
    icon: <Headphones className="w-8 h-8" />, 
    color: "from-yellow-100 to-yellow-200",
    description: "Premium audio experience",
    x: 120,
    y: -25,
    rotation: 18,
    zIndex: 2
  },
  { 
    id: 7, 
    title: "Gaming", 
    icon: <Gamepad2 className="w-8 h-8" />, 
    color: "from-pink-100 to-pink-200",
    description: "Gaming consoles and accessories",
    x: 180,
    y: -20,
    rotation: 30,
    zIndex: 1
  }
]

export function FanDeckNew() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const handleCardHover = (index: number) => {
    setHoveredIndex(index)
  }

  const handleCardLeave = () => {
    setHoveredIndex(null)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-orange-50 to-pink-50">
      {/* Background animated elements */}
      <div className="absolute inset-0">
        {/* Online Image */}
        <img 
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a5d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 via-orange-50/80 to-pink-50/70" />
        
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
      <div className="relative w-full max-w-7xl mx-auto px-4">
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

        {/* Vertical Fan Deck */}
        <div className="relative flex items-center justify-center" style={{ height: "700px", perspective: "1000px" }}>
          {cards.map((card, index) => {
            const isHovered = hoveredIndex === index
            const isAdjacent = hoveredIndex !== null && Math.abs(index - hoveredIndex) === 1
            
            // Calculate hover effects
            let hoverX = card.x
            let hoverY = card.y
            let hoverRotation = card.rotation
            let hoverScale = 1
            let hoverZIndex = card.zIndex
            
            if (isHovered) {
              hoverScale = 1.05
              hoverY = card.y - 30 // Lift up
              hoverZIndex = 100
            } else if (isAdjacent) {
              // Push adjacent cards away
              if (index < hoveredIndex) {
                hoverX = card.x - 25
              } else {
                hoverX = card.x + 25
              }
              hoverY = card.y - 15
            }
            
            return (
              <motion.div
                key={card.id}
                className="absolute"
                initial={{ 
                  opacity: 0, 
                  scale: 0.8,
                  x: card.x * 2,
                  y: card.y * 2,
                  rotate: card.rotation * 2
                }}
                animate={{ 
                  opacity: 1, 
                  scale: hoverScale,
                  x: hoverX,
                  y: hoverY,
                  rotate: hoverRotation,
                  zIndex: hoverZIndex
                }}
                transition={{ 
                  duration: 0.4,
                  ease: "easeOut",
                  scale: { duration: 0.2 }
                }}
                style={{
                  width: "220px",
                  height: "400px",
                }}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={handleCardLeave}
              >
                <motion.div
                  className={`w-full h-full bg-gradient-to-br ${card.color} rounded-2xl shadow-2xl border-2 border-white/20 relative overflow-hidden cursor-pointer`}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                  }}
                >
                  {/* Card Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={`/api/placeholder/300/200?text=${card.title}&bg=${card.color.replace('from-', '').replace(' to-', '')}`}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10" />
                  </div>
                  
                  {/* Card Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="text-white">
                      <div className="flex items-center mb-2">
                        {card.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        {card.title}
                      </h3>
                      <p className="text-white/80 text-xs">
                        {card.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Glow Effect */}
                  {isHovered && (
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-30 blur-xl`}
                      animate={{ 
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
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

        {/* Static decorative elements */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-orange-400/60 rounded-full" />
        <div className="absolute top-20 right-10 w-6 h-6 bg-blue-400/60 rounded-full" />
        <div className="absolute bottom-20 left-20 w-5 h-5 bg-purple-400/60 rounded-full" />
        <div className="absolute bottom-30 right-30 w-3 h-3 bg-pink-400/60 rounded-full" />
      </div>
    </section>
  )
}
