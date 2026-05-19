"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { CheckCircle, Package, Search, ArrowRight, Star, Shield, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function ProductDetails() {
  const [isFetching, setIsFetching] = useState(false)
  const [fetchProgress, setFetchProgress] = useState(0)
  const [productData, setProductData] = useState<any>(null)
  const [fetchComplete, setFetchComplete] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Start fetching product details
    setIsFetching(true)
    
    const interval = setInterval(() => {
      setFetchProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsFetching(false)
          setFetchComplete(true)
          // Mock product data
          setProductData({
            name: "iPhone 15 Pro Max 256GB",
            price: 299999,
            rating: 4.8,
            reviews: 1247,
            availability: "In Stock",
            features: ["A17 Pro Chip", "Titanium Design", "Pro Camera System", "All-Day Battery"],
            financing: {
              monthlyPayment: 24999,
              duration: "12 months",
              interestRate: "0%"
            }
          })
          return 100
        }
        return prev + 10
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  const handleContinue = () => {
    router.push('/financing/product-extracted')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="w-8 h-8 text-purple-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Product Details</h1>
          <p className="text-gray-600">
            Fetching product information and pricing
          </p>
        </motion.div>

        {/* Fetching Progress */}
        {isFetching && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Search className="w-5 h-5 text-purple-600 animate-pulse" />
              <span className="text-gray-600">Fetching product details...</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-purple-500 h-2 rounded-full"
                animate={{ width: `${fetchProgress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <p className="text-center text-gray-500 text-sm mt-2">
              {fetchProgress}% Complete
            </p>
          </motion.div>
        )}

        {/* Product Information */}
        {fetchComplete && productData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-6"
          >
            {/* Product Image */}
            <div className="w-full h-48 bg-gray-100 rounded-xl flex items-center justify-center">
              <Package className="w-16 h-16 text-gray-400" />
            </div>

            {/* Product Details */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {productData.name}
              </h3>
              
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(productData.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {productData.rating} ({productData.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="text-2xl font-bold text-gray-900">
                  PKR {productData.price.toLocaleString()}
                </div>
                <div className="text-sm text-green-600">
                  {productData.availability}
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {productData.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Financing Options */}
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">Financing Available:</h4>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Monthly Payment:</span>
                    <span className="font-semibold text-purple-900">
                      PKR {productData.financing.monthlyPayment.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold text-purple-900">
                      {productData.financing.duration}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Interest Rate:</span>
                    <span className="font-semibold text-green-600">
                      {productData.financing.interestRate}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Action Button */}
        {fetchComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Button
              onClick={handleContinue}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              <div className="flex items-center justify-center">
                Continue to Extraction
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </Button>
          </motion.div>
        )}

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-6 flex justify-around"
        >
          <div className="text-center">
            <Shield className="w-6 h-6 text-green-600 mx-auto mb-1" />
            <span className="text-xs text-gray-600">Secure</span>
          </div>
          <div className="text-center">
            <Truck className="w-6 h-6 text-blue-600 mx-auto mb-1" />
            <span className="text-xs text-gray-600">Fast Delivery</span>
          </div>
          <div className="text-center">
            <CheckCircle className="w-6 h-6 text-purple-600 mx-auto mb-1" />
            <span className="text-xs text-gray-600">Verified</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
