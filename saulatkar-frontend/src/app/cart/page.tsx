"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Link, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Shield, CreditCard, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "iPhone 15 Pro 256GB",
      store: "Daraz",
      price: 299999,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
      variant: "256GB",
      monthlyPayment: 25000,
      merchantId: "daraz-pk-001",
      shippingEstimate: "3-5 days",
      availability: "In Stock",
      riskLevel: "Low"
    },
    {
      id: 2,
      name: "MacBook Air M2 512GB",
      store: "Amazon",
      price: 249999,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80",
      variant: "512GB",
      monthlyPayment: 20833,
      merchantId: "amazon-global-002",
      shippingEstimate: "7-10 days",
      availability: "In Stock",
      riskLevel: "Low"
    },
    {
      id: 3,
      name: "Samsung 55\" QLED TV",
      store: "Naheed",
      price: 149999,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
      variant: "55\"",
      monthlyPayment: 12500,
      merchantId: "naheed-lk-003",
      shippingEstimate: "2-4 days",
      availability: "Limited Stock",
      riskLevel: "Medium"
    }
  ])
  const [isVerifying, setIsVerifying] = useState(false)
  const [verificationResults, setVerificationResults] = useState<any[]>([])
  const [selectedFinancingPlan, setSelectedFinancingPlan] = useState("unified")

  const updateQuantity = (id: number, change: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change)
        return { ...item, quantity: newQuantity }
      }
      return item
    }))
  }

  const verifyCartItems = async () => {
    setIsVerifying(true)
    
    // Simulate real-time verification of product availability and pricing
    setTimeout(() => {
      const results = cartItems.map(item => ({
        itemId: item.id,
        merchantId: item.merchantId,
        originalPrice: item.price,
        currentPrice: item.price * (0.95 + Math.random() * 0.1), // ±5% price fluctuation
        availability: Math.random() > 0.1 ? item.availability : "Out of Stock",
        stockLevel: Math.floor(Math.random() * 100),
        lastChecked: new Date().toISOString(),
        priceChange: Math.random() > 0.7,
        riskAssessment: calculateItemRisk(item)
      }))
      
      setVerificationResults(results)
      setIsVerifying(false)
    }, 2000)
  }

  const calculateItemRisk = (item: any) => {
    const riskFactors = {
      merchantReliability: item.store === 'Daraz' ? 0.1 : item.store === 'Amazon' ? 0.05 : 0.15,
      priceVolatility: Math.random() * 0.1,
      stockRisk: item.availability === 'Limited Stock' ? 0.2 : 0.05,
      shippingRisk: item.shippingEstimate.includes('7-10') ? 0.1 : 0.05
    }
    
    const totalRisk = Object.values(riskFactors).reduce((sum, risk) => sum + risk, 0)
    
    if (totalRisk < 0.2) return 'Low'
    if (totalRisk < 0.4) return 'Medium'
    return 'High'
  }

  const getUnifiedFinancingSummary = () => {
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    const totalMonthlyPayment = cartItems.reduce((sum, item) => sum + (item.monthlyPayment * item.quantity), 0)
    const merchantCount = new Set(cartItems.map(item => item.merchantId)).size
    const averageRisk = cartItems.filter(item => item.riskLevel === 'Low').length / cartItems.length * 100
    
    return {
      totalPrice,
      totalMonthlyPayment,
      merchantCount,
      averageRisk,
      profitRate: 0.08, // 8% Murabaha profit
      totalProfit: totalPrice * 0.08,
      installmentPeriod: 12 // 12 months
    }
  }

  const proceedToCheckout = () => {
    // Store cart data for financing module
    const financingData = getUnifiedFinancingSummary()
    localStorage.setItem('cartData', JSON.stringify({
      items: cartItems,
      verification: verificationResults,
      financing: financingData
    }))
    
    // Redirect to financing
    window.location.href = '/financing'
  }

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const totalMonthlyPayment = cartItems.reduce((sum, item) => sum + (item.monthlyPayment * item.quantity), 0)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 pt-28 pb-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Universal Cart</h1>
          <p className="text-gray-600">
            All your selected products from multiple stores in one place
          </p>
        </motion.div>

        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-20"
          >
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-16 h-16 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Start adding products from your favorite stores to see them here
            </p>
            <Button size="xl" className="bg-gradient-to-r from-orange-500 to-orange-600">
              Start Shopping
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="space-y-4">
                <AnimatePresence>
                  {cartItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Card className="border-0 shadow-medium hover:shadow-large transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex space-x-4">
                            {/* Product Image */}
                            <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            
                            {/* Product Details */}
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <h3 className="font-semibold text-gray-900 mb-1">
                                    {item.name}
                                  </h3>
                                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                                    <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                                      {item.store}
                                    </span>
                                    <span>•</span>
                                    <span>{item.variant}</span>
                                  </div>
                                </div>
                                <button
                                  onClick={() => removeItem(item.id)}
                                  className="text-gray-400 hover:text-red-500 transition-colors"
                                >
                                  <Trash2 className="w-5 h-5" />
                                </button>
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <div className="flex items-center border border-gray-200 rounded-lg">
                                    <button
                                      onClick={() => updateQuantity(item.id, -1)}
                                      className="p-2 hover:bg-gray-100 transition-colors"
                                    >
                                      <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="px-3 py-1 font-medium">
                                      {item.quantity}
                                    </span>
                                    <button
                                      onClick={() => updateQuantity(item.id, 1)}
                                      className="p-2 hover:bg-gray-100 transition-colors"
                                    >
                                      <Plus className="w-4 h-4" />
                                    </button>
                                  </div>
                                </div>
                                
                                <div className="text-right">
                                  <div className="font-bold text-gray-900">
                                    PKR {(item.price * item.quantity).toLocaleString()}
                                  </div>
                                  <div className="text-sm text-green-600">
                                    PKR {(item.monthlyPayment * item.quantity).toLocaleString()}/mo
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Add More Products */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-8"
              >
                <Card className="border-2 border-dashed border-gray-300 bg-gray-50/50">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Plus className="w-8 h-8 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Add More Products
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Continue shopping from your favorite stores
                    </p>
                    <Button variant="outline" className="bg-white">
                      <ShoppingBag className="w-5 h-5 mr-2" />
                      Continue Shopping
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24">
                <Card className="border-0 shadow-large">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Order Summary
                    </h3>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal ({totalItems} items)</span>
                        <span className="font-semibold">PKR {totalPrice.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Processing Fee</span>
                        <span className="font-semibold">PKR 0</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Delivery</span>
                        <span className="font-semibold text-green-600">FREE</span>
                      </div>
                      <div className="border-t pt-4">
                        <div className="flex justify-between text-lg">
                          <span className="font-bold">Total</span>
                          <span className="font-bold text-orange-600">
                            PKR {totalPrice.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Financing Summary */}
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Unified Financing Plan
                      </h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Monthly Payment</span>
                          <span className="font-semibold text-orange-600">
                            PKR {totalMonthlyPayment.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Duration</span>
                          <span className="font-semibold">12 Months</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Profit Rate</span>
                          <span className="font-semibold">8.5% APR</span>
                        </div>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3 text-sm">
                        <Shield className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">Shariah Compliant</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <Truck className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">Free Delivery</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <CreditCard className="w-5 h-5 text-purple-600" />
                        <span className="text-gray-700">Instant Approval</span>
                      </div>
                    </div>

                    <Button
                      size="xl"
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg"
                    >
                      Proceed to Financing
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>

                    <p className="text-xs text-gray-500 text-center mt-4">
                      By proceeding, you agree to our terms and Shariah compliance guidelines
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}
