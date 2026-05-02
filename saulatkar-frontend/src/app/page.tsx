"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, Clock, CreditCard, Star, CheckCircle, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/layout/header"
import { ChatbotWidget } from "@/components/chatbot/chatbot-widget"
import { MovingBanner } from "@/components/ui/moving-banner"
import { ProductExtraction } from "@/components/ui/product-extraction"
import { ProductShowcase } from "@/components/ui/product-showcase"
import { FAQSection } from "@/components/ui/faq-section"
import { HeroBrandCarousel } from "@/components/ui/hero-brand-carousel"
import { FanDeckNew } from "@/components/ui/fan-deck-new"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      <Header />
      
      {/* Fan Deck Hero Section */}
      <FanDeckNew />

      {/* Moving Banner Section */}
      <MovingBanner />

      {/* Product Extraction Section */}
      <ProductExtraction />

      {/* Product Showcase Section */}
      <ProductShowcase />

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
              { 
                step: 1, 
                title: "Sign Up", 
                description: "Create your account in minutes with instant verification",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a5d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80"
              },
              { 
                step: 2, 
                title: "Browse Products", 
                description: "Paste any product URL from your favorite stores",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a5d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80"
              },
              { 
                step: 3, 
                title: "Get Approved", 
                description: "Instant credit assessment with transparent terms",
                image: "https://images.unsplash.com/photo-1554224155-6af6b86a6295?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80"
              },
              { 
                step: 4, 
                title: "Shop Now", 
                description: "We purchase and deliver, you pay in easy installments",
                image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80"
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 border-0 shadow-medium hover:shadow-large transition-shadow duration-300">
                  <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white text-xl font-bold">
                        {item.step}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      
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
              { 
                name: "iPhone 15 Pro", 
                price: "PKR 299,999", 
                monthly: "PKR 25,000",
                image: "https://images.unsplash.com/photo-1592286589213-73e0cda6d4b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
              },
              { 
                name: "MacBook Air M2", 
                price: "PKR 249,999", 
                monthly: "PKR 20,833",
                image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
              },
              { 
                name: "Samsung TV 55\"", 
                price: "PKR 149,999", 
                monthly: "PKR 12,500",
                image: "https://images.unsplash.com/photo-1465146634735-9e3ecd5c0bf0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
              }
            ].map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-0 shadow-medium hover:shadow-large transition-all duration-300 hover:scale-[1.02]">
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                      <span className="text-sm text-green-600 font-medium">{product.monthly}/mo</span>
                    </div>
                    <Button 
                      className="w-full"
                      onClick={() => window.location.href = '/auth/login'}
                    >
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
              <Button 
                size="xl" 
                variant="secondary" 
                className="bg-white text-orange-600 hover:bg-gray-100"
                onClick={() => router.push('/auth/register')}
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="xl" 
                variant="ghost" 
                className="text-white border-white hover:bg-white/10"
                onClick={() => router.push('/financing')}
              >
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
                <li><Link href="/financing" className="hover:text-white transition-colors">How It Works</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/shop/paste-go" className="hover:text-white transition-colors">Shop Now</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/shariah" className="hover:text-white transition-colors">Shariah Compliance</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SahulatKar. All rights reserved. SECP Registered & Shariah Certified.</p>
          </div>
        </div>
      </footer>
      
      {/* Chatbot Widget */}
      <ChatbotWidget />
    </div>
  )
}
