"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ShoppingBag, Smartphone, Laptop, Watch, Headphones, Camera, Gamepad2, Tablet } from "lucide-react"

interface ProductItem {
  icon: React.ReactNode
  name: string
  price: string
  discount?: string
}

const products: ProductItem[] = [
  { icon: <Smartphone className="w-6 h-6" />, name: "iPhone 15 Pro", price: "PKR 299,999", discount: "15% OFF" },
  { icon: <Laptop className="w-6 h-6" />, name: "MacBook Air M2", price: "PKR 249,999", discount: "20% OFF" },
  { icon: <Watch className="w-6 h-6" />, name: "Apple Watch Ultra", price: "PKR 149,999", discount: "10% OFF" },
  { icon: <Headphones className="w-6 h-6" />, name: "AirPods Pro", price: "PKR 49,999", discount: "25% OFF" },
  { icon: <Camera className="w-6 h-6" />, name: "Canon EOS R5", price: "PKR 459,999", discount: "12% OFF" },
  { icon: <Gamepad2 className="w-6 h-6" />, name: "PlayStation 5", price: "PKR 89,999", discount: "18% OFF" },
  { icon: <Tablet className="w-6 h-6" />, name: "iPad Pro 12.9", price: "PKR 199,999", discount: "15% OFF" },
  { icon: <ShoppingBag className="w-6 h-6" />, name: "Samsung TV 55\"", price: "PKR 129,999", discount: "30% OFF" },
]

export function MovingBanner() {
  const [duplicatedProducts, setDuplicatedProducts] = useState<ProductItem[]>([])

  useEffect(() => {
    // Duplicate products for seamless loop
    setDuplicatedProducts([...products, ...products, ...products])
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-orange-50 via-white to-orange-50 py-8">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-100/20 to-transparent pointer-events-none" />
      
      {/* Moving Banner */}
      <div className="relative">
        <motion.div
          className="flex space-x-8"
          animate={{
            x: [0, -products.length * 320] // 320px per item width + spacing
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20, // 20 seconds for full loop
              ease: "linear",
            },
          }}
        >
          {duplicatedProducts.map((product, index) => (
            <motion.div
              key={`${product.name}-${index}`}
              className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 border border-orange-100"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center text-white">
                  {product.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg">{product.name}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-2xl font-bold text-orange-600">{product.price}</span>
                    {product.discount && (
                      <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-bold rounded-full">
                        {product.discount}
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-orange-400">
                  <ShoppingBag className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Gradient Overlays for Fade Effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-orange-50 via-orange-50/90 to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-orange-50 via-orange-50/90 to-transparent pointer-events-none z-10" />
    </div>
  )
}
