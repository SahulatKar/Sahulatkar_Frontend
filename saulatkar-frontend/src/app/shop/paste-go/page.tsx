"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Link, Search, ShoppingCart, Star, Package, AlertCircle, CheckCircle, ArrowRight, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function PasteAndGo() {
  const [url, setUrl] = useState("")
  const [isExtracting, setIsExtracting] = useState(false)
  const [extractedProduct, setExtractedProduct] = useState<any>(null)
  const [error, setError] = useState("")
  const [selectedVariant, setSelectedVariant] = useState("")

  const supportedStores = [
    "Daraz", "Naheed", "Foodpanda", "Amazon", 
    "AliExpress", "eBay", "Walmart", "Target"
  ]

  const sampleProducts = [
    {
      name: "iPhone 15 Pro 256GB",
      store: "Daraz",
      price: "PKR 299,999",
      rating: 4.8,
      reviews: 1234,
      image: "phone"
    },
    {
      name: "MacBook Air M2 512GB",
      store: "Amazon",
      price: "PKR 249,999", 
      rating: 4.9,
      reviews: 892,
      image: "laptop"
    },
    {
      name: "Samsung 55\" QLED TV",
      store: "Naheed",
      price: "PKR 149,999",
      rating: 4.7,
      reviews: 567,
      image: "tv"
    }
  ]

  const handleExtract = async () => {
    if (!url) {
      setError("Please enter a product URL")
      return
    }

    setIsExtracting(true)
    setError("")
    
    // Simulate extraction process
    setTimeout(() => {
      setExtractedProduct({
        name: "iPhone 15 Pro 256GB - Natural Titanium",
        price: "PKR 299,999",
        originalPrice: "PKR 349,999",
        description: "The iPhone 15 Pro features a stunning titanium design, A17 Pro chip, and advanced camera system.",
        images: ["phone1", "phone2", "phone3"],
        variants: [
          { name: "128GB", price: "PKR 249,999" },
          { name: "256GB", price: "PKR 299,999" },
          { name: "512GB", price: "PKR 399,999" }
        ],
        store: "Daraz",
        rating: 4.8,
        reviews: 1234,
        inStock: true
      })
      setIsExtracting(false)
    }, 2000)
  }

  const handleRetry = () => {
    setExtractedProduct(null)
    setError("")
    setUrl("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
              </Link>
              <span className="text-xl font-bold text-gray-900">SahulatKar</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-600 rounded-full text-white text-xs flex items-center justify-center">
                  2
                </span>
              </Button>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-400 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Paste & Go Shopping
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Copy any product URL from your favorite store and paste it below. We'll extract all details and create your financing plan instantly.
          </p>
        </motion.div>

        {/* URL Input Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <Card className="border-0 shadow-large p-8">
            <div className="space-y-6">
              <div>
                <label className="text-lg font-semibold text-gray-900 mb-3 block">
                  Product URL
                </label>
                <div className="flex space-x-4">
                  <Input
                    placeholder="https://www.daraz.pk/product-url..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="flex-1 h-14 text-lg"
                    leftIcon={<Link className="w-5 h-5 text-gray-400" />}
                  />
                  <Button
                    size="xl"
                    onClick={handleExtract}
                    disabled={isExtracting || !url}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8"
                  >
                    {isExtracting ? (
                      <>
                        <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                        Extracting...
                      </>
                    ) : (
                      <>
                        <Search className="w-5 h-5 mr-2" />
                        Extract Product
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 rounded-xl border border-red-200"
                >
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <p className="text-red-800 font-medium">Extraction Failed</p>
                      <p className="text-red-700 text-sm">{error}</p>
                      <div className="mt-3 space-x-3">
                        <Button size="sm" variant="outline" onClick={handleRetry}>
                          Try Again
                        </Button>
                        <Button size="sm" variant="ghost">
                          Manual Entry
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Supported Stores */}
              <div>
                <p className="text-sm text-gray-600 mb-3">Supported stores:</p>
                <div className="flex flex-wrap gap-2">
                  {supportedStores.map((store) => (
                    <span
                      key={store}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {store}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Extracted Product Display */}
        {extractedProduct && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Product Images */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border-0 shadow-large overflow-hidden">
                  <CardContent className="p-6">
                    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-4" />
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg cursor-pointer hover:border-2 hover:border-orange-500 transition-colors"
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Product Details */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="lg:col-span-2"
              >
                <Card className="border-0 shadow-large">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                          {extractedProduct.name}
                        </h2>
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="flex items-center space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`w-4 h-4 ${
                                  star <= Math.floor(extractedProduct.rating)
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                            <span className="text-sm text-gray-600 ml-1">
                              {extractedProduct.rating} ({extractedProduct.reviews} reviews)
                            </span>
                          </div>
                          <span className="text-sm text-green-600 font-medium">
                            ✓ In Stock
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-orange-600">
                          {extractedProduct.price}
                        </div>
                        {extractedProduct.originalPrice && (
                          <div className="text-lg text-gray-500 line-through">
                            {extractedProduct.originalPrice}
                          </div>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">
                      {extractedProduct.description}
                    </p>

                    {/* Variants */}
                    {extractedProduct.variants && (
                      <div className="mb-6">
                        <label className="text-sm font-medium text-gray-700 mb-3 block">
                          Storage Capacity
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {extractedProduct.variants.map((variant: any) => (
                            <button
                              key={variant.name}
                              onClick={() => setSelectedVariant(variant.name)}
                              className={`p-3 rounded-xl border-2 transition-all duration-200 ${
                                selectedVariant === variant.name
                                  ? "border-orange-500 bg-orange-50"
                                  : "border-gray-200 hover:border-gray-300"
                              }`}
                            >
                              <div className="font-medium text-gray-900">{variant.name}</div>
                              <div className="text-sm text-gray-600">{variant.price}</div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Financing Summary */}
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Financing Summary
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Product Price</p>
                          <p className="font-semibold text-gray-900">{extractedProduct.price}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Monthly Payment</p>
                          <p className="font-semibold text-green-600">PKR 25,000/mo</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Duration</p>
                          <p className="font-semibold text-gray-900">12 Months</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Profit Rate</p>
                          <p className="font-semibold text-orange-600">8.5% APR</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <Button
                        size="xl"
                        className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                      >
                        <ShoppingCart className="w-5 h-5 mr-2" />
                        Add to Cart
                      </Button>
                      <Button
                        size="xl"
                        variant="outline"
                        className="px-8"
                      >
                        Save for Later
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Sample Products (when no product extracted) */}
        {!extractedProduct && !isExtracting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-6xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Popular Products Right Now
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {sampleProducts.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-medium hover:shadow-large transition-all duration-300 hover:scale-[1.02] overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200" />
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-orange-600 font-medium">{product.store}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600">{product.rating}</span>
                        </div>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{product.name}</h4>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xl font-bold text-gray-900">{product.price}</span>
                        <span className="text-sm text-gray-500">{product.reviews} reviews</span>
                      </div>
                      <Button className="w-full">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
