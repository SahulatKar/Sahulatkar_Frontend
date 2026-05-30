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
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "MacBook Air M2 512GB",
      store: "Amazon",
      price: "PKR 249,999", 
      rating: 4.9,
      reviews: 892,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Samsung 55\" QLED TV",
      store: "Naheed",
      price: "PKR 149,999",
      rating: 4.7,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80"
    }
  ]

  const handleExtract = async () => {
    if (!url) {
      setError("Please enter a product URL")
      return
    }

    setIsExtracting(true)
    setError("")

    // Simulate Vision-LLM extraction process
    setTimeout(() => {
      // Simulate DOM parsing and Vision-LLM analysis
      const extractedData = simulateVisionLLMExtraction(url)
      setExtractedProduct(extractedData)
      setIsExtracting(false)
    }, 3000)
  }

  const simulateVisionLLMExtraction = (productUrl: string) => {
    // Simulate 95% success rate
    const extractionSuccess = Math.random() > 0.05
    
    if (!extractionSuccess) {
      setError("Failed to extract product data. Please try again or enter manually.")
      return null
    }

    // Detect store from URL
    const detectedStore = detectStoreFromUrl(productUrl)
    
    // Simulate Vision-LLM analysis results
    const mockProduct = {
      id: Math.random().toString(36).substr(2, 9),
      name: generateProductName(detectedStore),
      price: generatePrice(detectedStore),
      originalPrice: generateOriginalPrice(),
      currency: "PKR",
      description: generateDescription(detectedStore),
      images: [
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80"
      ],
      store: detectedStore,
      rating: 4.5 + Math.random() * 0.5,
      reviews: Math.floor(100 + Math.random() * 2000),
      variants: generateVariants(detectedStore),
      specifications: generateSpecifications(detectedStore),
      availability: Math.random() > 0.1 ? "In Stock" : "Out of Stock",
      shipping: "Free delivery",
      extractedAt: new Date().toISOString(),
      extractionConfidence: 0.92 + Math.random() * 0.07, // 92-99% confidence
      extractionMethod: "Vision-LLM + DOM Parsing"
    }
    return mockProduct
  }

  const detectStoreFromUrl = (url: string): string => {
    const urlLower = url.toLowerCase()
    if (urlLower.includes('daraz')) return 'Daraz'
    if (urlLower.includes('amazon')) return 'Amazon'
    if (urlLower.includes('naheed')) return 'Naheed'
    if (urlLower.includes('foodpanda')) return 'Foodpanda'
    if (urlLower.includes('aliexpress')) return 'AliExpress'
    if (urlLower.includes('ebay')) return 'eBay'
    if (urlLower.includes('walmart')) return 'Walmart'
    if (urlLower.includes('target')) return 'Target'
    return 'Unknown Store'
  }

  const generateProductName = (store: string): string => {
    const products = {
      'Daraz': ['iPhone 15 Pro 256GB - Natural Titanium', 'Samsung Galaxy S24 Ultra', 'Sony WH-1000XM5 Headphones'],
      'Amazon': ['MacBook Air M2 512GB', 'iPad Pro 11" M2', 'Apple Watch Ultra 2'],
      'Naheed': ['Samsung 55" QLED TV', 'LG 65" OLED TV', 'Sony PlayStation 5'],
      'Foodpanda': ['Pizza Hut Large Pizza', 'KFC Family Bucket', 'Subway Footlong Combo'],
      'AliExpress': ['Xiaomi Robot Vacuum', 'Anker Power Bank 20000mAh', 'LED Strip Lights 5M'],
      'eBay': ['Vintage Camera Lens', 'Collectible Watch', 'Rare Book Collection'],
      'Walmart': ['Nintendo Switch OLED', 'Dyson V15 Vacuum', 'Instant Pot Duo'],
      'Target': ['LEGO Star Wars Set', 'Fitbit Charge 6', 'Keurig Coffee Maker']
    }
    const storeProducts = products[store as keyof typeof products] || products['Daraz']
    return storeProducts[Math.floor(Math.random() * storeProducts.length)]
  }

  const generatePrice = (store: string): number => {
    const basePrices = {
      'Daraz': 299999,
      'Amazon': 249999,
      'Naheed': 149999,
      'Foodpanda': 2999,
      'AliExpress': 19999,
      'eBay': 89999,
      'Walmart': 49999,
      'Target': 39999
    }
    const basePrice = basePrices[store as keyof typeof basePrices] || 299999
    return Math.floor(basePrice * (0.8 + Math.random() * 0.4))
  }

  const generateOriginalPrice = (): number => {
    return Math.floor(299999 * (1.1 + Math.random() * 0.3))
  }

  const generateDescription = (store: string): string => {
    const descriptions = {
      'Daraz': 'Premium quality product with advanced features and modern design. Perfect for everyday use.',
      'Amazon': 'High-quality product with excellent customer reviews and fast shipping available.',
      'Naheed': 'Trusted brand product with warranty and after-sales support included.',
      'Foodpanda': 'Delicious food item prepared with fresh ingredients and hygienic packaging.',
      'AliExpress': 'Affordable product with good value for money and international shipping options.',
      'eBay': 'Rare collectible item in good condition. Perfect for collectors and enthusiasts.',
      'Walmart': 'Everyday essential product with competitive pricing and quality guarantee.',
      'Target': 'Stylish product with modern features and excellent customer reviews.'
    }
    return descriptions[store as keyof typeof descriptions] || descriptions['Daraz']
  }

  const generateVariants = (store: string) => {
    if (store === 'Foodpanda') {
      return [
        { name: "Small", price: 1999, inStock: true },
        { name: "Medium", price: 2999, inStock: true },
        { name: "Large", price: 3999, inStock: true }
      ]
    }
    
    return [
      { name: "Standard", price: generatePrice(store), inStock: true },
      { name: "Premium", price: Math.floor(generatePrice(store) * 1.2), inStock: Math.random() > 0.2 },
      { name: "Deluxe", price: Math.floor(generatePrice(store) * 1.4), inStock: Math.random() > 0.5 }
    ]
  }

  const generateSpecifications = (store: string) => {
    const specs = {
      'Daraz': {
        "Display": "6.1-inch Super Retina XDR",
        "Processor": "A17 Pro chip",
        "Camera": "48MP Main camera",
        "Battery": "All-day battery life"
      },
      'Amazon': {
        "Display": "13.6-inch Liquid Retina",
        "Processor": "M2 chip",
        "Storage": "512GB SSD",
        "Battery": "Up to 18 hours"
      },
      'Naheed': {
        "Screen Size": "55 inches",
        "Resolution": "4K UHD",
        "Smart TV": "Yes",
        "Warranty": "2 years"
      },
      'Foodpanda': {
        "Size": "Large (12 inches)",
        "Serves": "3-4 people",
        "Preparation Time": "30-45 minutes",
        "Dietary": "Vegetarian options available"
      }
    }
    return specs[store as keyof typeof specs] || specs['Daraz']
  }

  const handleRetry = () => {
    setExtractedProduct(null)
    setError("")
    setUrl("")
  }

  return (
    <div className="min-h-screen">
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
                    <div className="aspect-square overflow-hidden rounded-2xl mb-4">
                      <img
                        src={extractedProduct.images?.[0]}
                        alt={extractedProduct.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {(extractedProduct.images || []).slice(0, 3).map((image: string, i: number) => (
                        <div
                          key={i}
                          className="aspect-square overflow-hidden rounded-lg cursor-pointer hover:border-2 hover:border-orange-500 transition-colors"
                        >
                          <img
                            src={image}
                            alt={`${extractedProduct.name} ${i + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
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
                    <div className="aspect-square overflow-hidden rounded-3xl">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
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
