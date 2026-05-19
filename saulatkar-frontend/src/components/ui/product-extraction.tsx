"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Link, Copy, Check, Sparkles, Eye, ShoppingCart } from "lucide-react"

interface ProductData {
  id: number
  name: string
  price: string
  originalPrice: string
  image: string
  store: string
  rating: number
  reviews: number
  description: string
  features: string[]
  url: string
}

const mockProducts: ProductData[] = [
  {
    id: 1,
    name: "iPhone 15 Pro Max 256GB",
    price: "PKR 319,999",
    originalPrice: "PKR 379,999",
    image: "https://images.unsplash.com/photo-1592286589213-73e0cda6d4b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
    store: "Daraz.pk",
    rating: 4.8,
    reviews: 1247,
    description: "Latest iPhone with A17 Pro chip, titanium design, and advanced camera system",
    features: ["A17 Pro Chip", "Titanium Design", "48MP Camera", "5G Ready"],
    url: "https://daraz.pk/p/iphone-15-pro-max"
  },
  {
    id: 2,
    name: "MacBook Air M2 13\"",
    price: "PKR 229,999",
    originalPrice: "PKR 279,999",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
    store: "Amazon.com",
    rating: 4.9,
    reviews: 892,
    description: "Ultra-thin laptop with M2 chip, 13.6\" Liquid Retina display, all-day battery",
    features: ["M2 Chip", "13.6\" Display", "18hr Battery", "8GB RAM"],
    url: "https://amazon.com/macbook-air-m2"
  },
  {
    id: 3,
    name: "Samsung Galaxy Watch 6",
    price: "PKR 45,999",
    originalPrice: "PKR 59,999",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
    store: "Naheed.pk",
    rating: 4.6,
    reviews: 423,
    description: "Advanced health monitoring, fitness tracking, and seamless smartphone integration",
    features: ["Health Monitor", "GPS Tracking", "Water Resistant", "Sleep Analysis"],
    url: "https://naheed.pk/samsung-watch-6"
  },
  {
    id: 4,
    name: "Sony WH-1000XM5 Headphones",
    price: "PKR 89,999",
    originalPrice: "PKR 119,999",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
    store: "Foodpanda Shops",
    rating: 4.7,
    reviews: 2156,
    description: "Industry-leading noise cancellation with exceptional sound quality",
    features: ["Noise Canceling", "30hr Battery", "HD Voice", "Multi-device"],
    url: "https://foodpanda.shops/sony-headphones"
  }
]

export function ProductExtraction() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0)
  const [isExtracting, setIsExtracting] = useState(false)
  const [extractionStep, setExtractionStep] = useState(0)
  const [copiedUrl, setCopiedUrl] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isExtracting) {
        setCurrentProductIndex((prev) => (prev + 1) % mockProducts.length)
      }
    }, 4000) // Change product every 4 seconds

    return () => clearInterval(interval)
  }, [isExtracting])

  const currentProduct = mockProducts[currentProductIndex]

  const simulateExtraction = () => {
    setIsExtracting(true)
    setExtractionStep(0)

    const steps = [
      "Analyzing URL...",
      "Extracting product data...",
      "Processing images...",
      "Comparing prices...",
      "Generating product card..."
    ]

    steps.forEach((step, index) => {
      setTimeout(() => {
        setExtractionStep(index + 1)
        if (index === steps.length - 1) {
          setTimeout(() => {
            setIsExtracting(false)
            setCurrentProductIndex((prev) => (prev + 1) % mockProducts.length)
          }, 1000)
        }
      }, (index + 1) * 800)
    })
  }

  const copyUrl = () => {
    navigator.clipboard.writeText(currentProduct.url)
    setCopiedUrl(true)
    setTimeout(() => setCopiedUrl(false), 2000)
  }

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-orange-50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Smart Product{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
              Extraction
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Paste any product URL and watch our AI extract all details instantly with magical animations
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProduct.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* URL Input Section */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <Link className="w-5 h-5 text-white" />
                      <input
                        type="text"
                        value={currentProduct.url}
                        readOnly
                        className="flex-1 bg-transparent text-white placeholder-white/70 outline-none"
                      />
                      <button
                        onClick={copyUrl}
                        className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                      >
                        {copiedUrl ? (
                          <Check className="w-4 h-4 text-white" />
                        ) : (
                          <Copy className="w-4 h-4 text-white" />
                        )}
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={simulateExtraction}
                    disabled={isExtracting}
                    className="px-6 py-3 bg-white text-orange-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    <Sparkles className="w-5 h-5" />
                    <span>{isExtracting ? "Extracting..." : "Extract Product"}</span>
                  </button>
                </div>
              </div>

              {/* Extraction Progress */}
              {isExtracting && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-orange-50 p-4 border-b border-orange-100"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-orange-800">Extraction Progress</span>
                    <span className="text-sm text-orange-600">{extractionStep}/5 steps</span>
                  </div>
                  <div className="w-full bg-orange-200 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: `${(extractionStep / 5) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              )}

              {/* Product Display */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Product Image */}
                  <div className="relative">
                    <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-400 opacity-20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <ShoppingCart className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                          <p className="text-gray-600 font-medium">{currentProduct.name}</p>
                        </div>
                      </div>
                      {isExtracting && (
                        <motion.div
                          className="absolute inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          <div className="text-center">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                              className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full mx-auto mb-4"
                            />
                            <p className="text-orange-600 font-medium">Processing...</p>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">{currentProduct.name}</h3>
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                          {currentProduct.store}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-4 h-4 rounded-full ${
                                i < Math.floor(currentProduct.rating)
                                  ? "bg-yellow-400"
                                  : "bg-gray-200"
                              }`}
                            />
                          ))}
                          <span className="text-sm text-gray-600 ml-2">
                            {currentProduct.rating} ({currentProduct.reviews} reviews)
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 mb-6">
                        <div>
                          <span className="text-3xl font-bold text-orange-600">{currentProduct.price}</span>
                          <span className="text-lg text-gray-400 line-through ml-2">{currentProduct.originalPrice}</span>
                        </div>
                        <span className="px-3 py-1 bg-red-100 text-red-600 font-semibold rounded-full">
                          Save {Math.round((parseInt(currentProduct.originalPrice.replace(/[^\d]/g, '')) - parseInt(currentProduct.price.replace(/[^\d]/g, ''))) / 1000)}K
                        </span>
                      </div>

                      <p className="text-gray-600 mb-6">{currentProduct.description}</p>

                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {currentProduct.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                            <div className="w-2 h-2 bg-orange-500 rounded-full" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex space-x-4">
                        <button className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-2">
                          <ShoppingCart className="w-5 h-5" />
                          <span>Add to Cart</span>
                        </button>
                        <button className="px-6 py-3 border border-orange-500 text-orange-600 rounded-xl font-semibold hover:bg-orange-50 transition-colors">
                          <Eye className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
