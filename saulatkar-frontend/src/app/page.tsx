"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, Clock, CreditCard, Star, CheckCircle, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/layout/header"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/30 via-transparent to-blue-100/30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full mb-6">
                <Shield className="w-4 h-4 text-orange-600 mr-2" />
                <span className="text-orange-800 font-medium text-sm">Shariah Compliant Financing</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Ethical
                <span className="text-orange-600"> Financial</span> Partner
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Shop everywhere, pay later with our Shariah-compliant financing solutions. 
                Get instant approval for your favorite products with transparent terms.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="xl" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="xl">
                  How It Works
                  <ArrowUpRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              
              <div className="flex items-center gap-8">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white flex items-center justify-center text-white text-sm font-medium"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">Trusted by 25,000+ users</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center">
                      <CreditCard className="w-12 h-12 text-orange-600" />
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                      <Clock className="w-12 h-12 text-blue-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="text-sm text-gray-600">Credit Limit</span>
                      <span className="font-bold text-gray-900">PKR 50,000</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="text-sm text-gray-600">Monthly Payment</span>
                      <span className="font-bold text-gray-900">PKR 4,167</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
                      <span className="text-sm text-green-600">Approval Status</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -right-10 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl shadow-lg opacity-80"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -left-10 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-lg opacity-80"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transparent & Simple Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transparent & Simple
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our four-step process makes getting financing quick and hassle-free
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Sign Up", description: "Create your account in minutes with instant verification" },
              { step: 2, title: "Browse Products", description: "Paste any product URL from your favorite stores" },
              { step: 3, title: "Get Approved", description: "Instant credit assessment with transparent terms" },
              { step: 4, title: "Shop Now", description: "We purchase and deliver, you pay in easy installments" }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 border-0 shadow-medium hover:shadow-large transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Everywhere Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Shop Everywhere. <span className="text-orange-600">Pay Later.</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                From local favorites like Daraz and Naheed to international giants like Amazon and AliExpress - shop anywhere with our universal financing solution.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Daraz", "Naheed", "Foodpanda", "Amazon", 
                  "AliExpress", "eBay", "Walmart", "Target"
                ].map((store) => (
                  <div
                    key={store}
                    className="bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-2" />
                    <p className="text-sm font-medium text-gray-700">{store}</p>
                  </div>
                ))}
              </div>
              
              <Button size="xl" className="bg-gradient-to-r from-orange-500 to-orange-600">
                Start Shopping Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl mb-6 flex items-center justify-center">
                  <CreditCard className="w-24 h-24 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Virtual Credit Card</h3>
                <p className="text-gray-600 mb-6">
                  Get instant access to your virtual credit card upon approval. Use it anywhere online with complete security.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Card Number</span>
                    <span className="font-mono text-gray-900">•••• •••• •••• 1234</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Available Limit</span>
                    <span className="font-bold text-green-600">PKR 50,000</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our customers are financing with flexible payment plans
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "iPhone 15 Pro", price: "PKR 299,999", monthly: "PKR 25,000" },
              { name: "MacBook Air M2", price: "PKR 249,999", monthly: "PKR 20,833" },
              { name: "Samsung TV 55\"", price: "PKR 149,999", monthly: "PKR 12,500" }
            ].map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-0 shadow-medium hover:shadow-large transition-all duration-300 hover:scale-[1.02]">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200" />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                      <span className="text-sm text-green-600 font-medium">{product.monthly}/mo</span>
                    </div>
                    <Button className="w-full">
                      Finance Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Financial Freedom Awaits
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have found their perfect financing solution with SahulatKar
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="xl" variant="ghost" className="text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="text-2xl font-bold">SahulatKar</span>
              </div>
              <p className="text-gray-400">
                Secure Your Future with Shariah Principles
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Merchants</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shariah Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SahulatKar. All rights reserved. SECP Registered & Shariah Certified.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
