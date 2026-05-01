'use client'

import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight, CheckCircle2, ChevronRight, ShieldCheck, MapPin, Map, Package, CreditCard, ChevronDown } from 'lucide-react'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <main className="bg-slate-50 min-h-screen font-sans selection:bg-primary-500 selection:text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-900 via-[#1A1C23] to-[#121318] text-white">
        {/* Abstract Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-500/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                <span className="text-xs font-medium tracking-wide uppercase text-white/80">Premium Shariah-Compliant Financing</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
                Your Ethical <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Financial Partner</span>
              </h1>
              
              <p className="text-lg text-slate-300 mb-10 leading-relaxed font-light">
                Buy the things you want today, pay them over time with SahulatKar. It's simple, smart, and fully Shariah compliant.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="relative w-full sm:w-auto flex-1 max-w-sm">
                  <input 
                    type="email" 
                    placeholder="Enter your email to join waitlist" 
                    className="w-full bg-white/5 border border-white/10 text-white px-6 py-4 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-slate-500"
                  />
                </div>
                <button className="w-full sm:w-auto bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-glow hover:shadow-glow-lg flex items-center justify-center gap-2 group">
                  Join Waitlist
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span>SECP Regulated</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>0% Riba</span>
                </div>
              </div>
            </motion.div>

            {/* Right Content - 3D Floating Grid */}
            <div className="relative h-[500px] lg:h-[600px] perspective-1000">
              <motion.div 
                style={{ y: y1 }}
                className="absolute top-[5%] right-[40%] w-48 lg:w-56 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-md p-4 group"
              >
                <img src="/3d_red_shoe.png" alt="Premium Shoe" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out" />
              </motion.div>

              <motion.div 
                style={{ y: y2 }}
                className="absolute top-[20%] right-[0%] w-48 lg:w-56 aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#151515] p-4 group"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img src="/3d_golden_headphones.png" alt="Headphones" className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700 ease-out" />
              </motion.div>

              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[10%] right-[30%] w-40 lg:w-48 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800/50 backdrop-blur-xl p-4 group z-20"
              >
                <img src="/3d_smart_watch.png" alt="Smart Watch" className="w-full h-full object-contain drop-shadow-2xl group-hover:rotate-12 transition-transform duration-700 ease-out" />
              </motion.div>
            </div>

          </div>
        </div>
        
        {/* Feature Bar */}
        <div className="absolute bottom-0 left-0 w-full bg-white/5 border-t border-white/10 backdrop-blur-md py-4">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-wrap justify-between items-center text-xs lg:text-sm font-medium tracking-wide text-slate-300 uppercase gap-4">
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary-500"/> Shop Everywhere</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary-500"/> Instant Approval</div>
            <div className="flex items-center gap-2"><CreditCard className="w-4 h-4 text-primary-500"/> Flexible Plans</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary-500"/> Halal Certified</div>
          </div>
        </div>
      </section>

      {/* TRANSPARENT & SIMPLE SECTION */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 tracking-tight">Transparent & Simple</h2>
            <div className="h-1 w-20 bg-primary-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600">Our process is designed to be straightforward, giving you full control over your finances without hidden fees.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-slate-100 z-0"></div>

            {[
              { num: '1', title: 'Download & Verify', desc: 'Quick digital onboarding with SECP-compliant identity verification.' },
              { num: '2', title: 'Shop Favorites', desc: 'Browse our partner network or paste any product URL to begin.' },
              { num: '3', title: 'Select Plan', desc: 'Choose a flexible installment plan tailored to your profile.' },
              { num: '4', title: 'Enjoy & Relax', desc: 'Receive your items and pay comfortably over time.' }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-slate-50 border-4 border-white shadow-xl flex items-center justify-center text-2xl font-bold text-primary-500 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOP EVERYWHERE SECTION */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 tracking-tight">Shop Everywhere. Pay Later.</h2>
            <p className="text-lg text-slate-600">The world is your shopping mall. From top tech to everyday essentials, finance it the halal way.</p>
          </div>

          {/* Central Showcase Graphic */}
          <div className="relative h-[400px] flex items-center justify-center mb-24">
            <motion.div 
               animate={{ rotateY: [0, 10, -10, 0] }}
               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
               className="relative z-20 w-64 h-96 perspective-1000"
            >
               <img src="/3d_credit_card.png" alt="SahulatKar Card" className="w-full h-full object-contain drop-shadow-2xl" />
            </motion.div>
            
            {/* Floating Brand Elements (Abstracted for now) */}
            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-[20%] left-[20%] w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-xl font-bold text-slate-800">A</motion.div>
            <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-[20%] right-[20%] w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center text-2xl font-bold text-slate-800">S</motion.div>
            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4.5, repeat: Infinity }} className="absolute top-[30%] right-[25%] w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center text-lg font-bold text-slate-800">N</motion.div>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Pro Workstation', price: '9,500/mo', img: 'https://images.unsplash.com/photo-1618365908648-e71bd5716cba?q=80&w=800&auto=format&fit=crop', type: 'Tech' },
              { name: 'Smart Cooling Series', price: '4,200/mo', img: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=800&auto=format&fit=crop', type: 'Appliance' },
              { name: 'Artisan Lounge Sofa', price: '6,000/mo', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop', type: 'Furniture' }
            ].map((product, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group cursor-pointer"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-800 shadow-sm">{product.type}</div>
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                  <div className="flex items-end gap-2">
                    <span className="text-primary-500 font-bold text-2xl">PKR {product.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Universal Cart / Paste URL Card */}
            <motion.div 
                whileHover={{ y: -10 }}
                className="bg-primary-600 rounded-3xl overflow-hidden shadow-xl text-white p-8 relative flex flex-col justify-center min-h-[350px] md:col-span-3 lg:col-span-1"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-20 -mt-20"></div>
                <Package className="w-12 h-12 mb-6 text-white/80" />
                <h3 className="text-3xl font-bold mb-4">Don't see what you need?</h3>
                <p className="text-primary-100 mb-8 leading-relaxed">Paste the URL of the product you want from any online store to see your financing options instantly.</p>
                <Link href="/product-extraction">
                  <button className="bg-white text-primary-600 px-6 py-4 rounded-xl font-bold w-full hover:bg-slate-50 transition-colors shadow-lg flex justify-center items-center gap-2">
                    Paste & Get Financing <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center text-slate-900 tracking-tight">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {[
              { q: 'What is a Mustahiq Fund & How it Works?', a: 'Our funds are designed following Islamic principles of Murabaha. We purchase the item on your behalf and sell it to you at an agreed-upon profit margin. There are no hidden fees or late payment penalties that constitute Riba.' },
              { q: 'Do you charge for payment fees?', a: 'No, we are fully transparent. The price you see at checkout includes our Murabaha profit. There are no compounding interests, late fees, or hidden processing charges.' },
              { q: 'How is my credit limit determined?', a: 'Your limit is determined instantly using our advanced AI models that analyze your digital footprint, KYC data, and financial behavior to offer you a customized, risk-adjusted limit safely.' }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-slate-50 rounded-2xl border border-slate-100 open:bg-white open:shadow-lg transition-all duration-300">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-bold text-lg text-slate-900 list-none">
                  {faq.q}
                  <span className="transition group-open:rotate-180 bg-slate-200 p-2 rounded-full">
                    <ChevronDown className="w-5 h-5 text-slate-600" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-gradient-to-br from-slate-900 to-[#121318] rounded-[3rem] overflow-hidden relative shadow-2xl">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-primary-500/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 p-12 lg:p-20 items-center gap-12">
              <div className="relative z-10 text-white">
                <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Ready to Accelerate Your Financial Freedom?</h2>
                <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light">Join thousands of ethical investors and shoppers building wealth and acquiring assets responsibly.</p>
                <Link href="/signup">
                  <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-glow hover:shadow-glow-lg flex items-center justify-center gap-2 group text-lg">
                    Join Waitlist Now
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
              
              <div className="relative z-10 hidden lg:flex justify-center perspective-1000">
                <motion.div 
                  animate={{ rotateY: [-5, 5, -5], rotateX: [5, -5, 5] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full max-w-md aspect-[1.6] rounded-3xl"
                >
                  <img src="/3d_credit_card.png" alt="Card" className="w-full h-full object-contain drop-shadow-2xl" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-16 border-t border-slate-100 bg-white">
        <div className="text-center">
          <p className="text-sm font-bold text-primary-500 tracking-widest uppercase mb-4">Shariah Board Approved</p>
          <h2 className="text-3xl font-bold text-slate-900">Secure Your Future with Shariah Principles.</h2>
        </div>
      </section>

      <Footer />
    </main>
  )
}

