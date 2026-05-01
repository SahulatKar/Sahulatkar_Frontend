'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, ArrowRight, ShieldCheck, CheckCircle2, FileText, ChevronRight, Calculator, AlertCircle, X } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Cart() {
  const [step, setStep] = useState(1) // 1: Cart, 2: Checkout/Contracts
  const [agreedWaad, setAgreedWaad] = useState(false)
  const [agreedMurabaha, setAgreedMurabaha] = useState(false)
  
  const product = {
    name: 'Apple iPhone 15 Pro Max',
    price: 450000,
    merchant: 'Daraz Pakistan',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop',
    color: 'Midnight Black',
    quantity: 1
  }

  const financing = {
    months: 12,
    downPayment: 90000, // 20%
    profitRate: 0.15, // 15% flat for 12 months
    processingFee: 1500,
  }

  const financedAmount = product.price - financing.downPayment
  const profitAmount = financedAmount * financing.profitRate
  const totalDeferredPrice = financedAmount + profitAmount
  const monthlyInstallment = totalDeferredPrice / financing.months

  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-primary-500 selection:text-white flex flex-col">
      <Navbar />

      <div className="flex-1 pt-32 pb-24 px-6 lg:px-12 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-12">
             <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-900">
               <ShoppingBag className="w-5 h-5" />
             </div>
             <div>
               <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Your Cart</h1>
               <p className="text-slate-500 text-sm">Review your items and proceed to Shariah-compliant financing</p>
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Cart Items & Contracts */}
            <div className="lg:col-span-2 space-y-8">
              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.div 
                    key="cart-items"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100 mb-8">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-6 mb-6">
                        <h2 className="font-bold text-slate-900 text-lg">Item Summary</h2>
                        <span className="text-sm font-bold text-slate-500 bg-slate-50 px-3 py-1 rounded-full">1 Item</span>
                      </div>
                      
                      <div className="flex gap-6 relative">
                        <button className="absolute -top-2 -right-2 w-8 h-8 bg-slate-50 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-full flex items-center justify-center transition-colors">
                          <X className="w-4 h-4" />
                        </button>
                        <div className="w-32 h-32 bg-slate-100 rounded-2xl overflow-hidden flex-shrink-0">
                           <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply" />
                        </div>
                        <div className="flex-1 py-2">
                           <div className="flex items-center gap-2 mb-2">
                              <span className="text-[10px] font-bold text-primary-500 bg-primary-50 px-2 py-0.5 rounded-full uppercase tracking-widest">{product.merchant}</span>
                           </div>
                           <h3 className="text-xl font-bold text-slate-900 mb-1">{product.name}</h3>
                           <p className="text-sm text-slate-500 mb-4">Color: {product.color} | Qty: {product.quantity}</p>
                           <p className="text-2xl font-black text-slate-900">PKR {product.price.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100">
                      <div className="flex items-center gap-3 mb-6">
                         <Calculator className="w-6 h-6 text-primary-500" />
                         <h2 className="font-bold text-slate-900 text-lg">Financing Configuration</h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Down Payment (20%)</label>
                            <p className="text-2xl font-bold text-slate-900">PKR {financing.downPayment.toLocaleString()}</p>
                            <input type="range" min="10" max="50" value="20" className="w-full mt-4 accent-primary-500" readOnly />
                            <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                               <span>10%</span>
                               <span>50%</span>
                            </div>
                         </div>
                         <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Tenure (Months)</label>
                            <div className="flex gap-2">
                               {[3, 6, 9, 12].map(m => (
                                 <button key={m} className={`flex-1 py-3 rounded-xl font-bold transition-all ${m === 12 ? 'bg-primary-500 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}>
                                   {m}
                                 </button>
                               ))}
                            </div>
                         </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="contracts"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100">
                       <div className="flex items-center gap-4 mb-6">
                         <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-500">
                           <FileText className="w-6 h-6" />
                         </div>
                         <div>
                           <h2 className="font-bold text-slate-900 text-xl tracking-tight">Islamic Contracts</h2>
                           <p className="text-sm text-slate-500">Review and accept the dual-contract agreement</p>
                         </div>
                       </div>

                       <div className="space-y-4">
                         {/* Contract 1 */}
                         <div className={`p-6 rounded-2xl border-2 transition-all ${agreedWaad ? 'border-primary-500 bg-primary-50/30' : 'border-slate-100 bg-slate-50'}`}>
                           <div className="flex items-start gap-4">
                             <div className="mt-1">
                               <input 
                                 type="checkbox" 
                                 id="waad" 
                                 checked={agreedWaad} 
                                 onChange={() => setAgreedWaad(!agreedWaad)}
                                 className="w-5 h-5 accent-primary-500 rounded cursor-pointer"
                               />
                             </div>
                             <div>
                               <label htmlFor="waad" className="font-bold text-slate-900 text-lg cursor-pointer block mb-2">1. Promise to Purchase (Wa'ad)</label>
                               <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                 I hereby promise to purchase the asset from SahulatKar once they have acquired it from the supplier, for the agreed total deferred price.
                               </p>
                               <button className="text-xs font-bold text-primary-500 uppercase tracking-widest hover:text-primary-600">View Full Terms</button>
                             </div>
                           </div>
                         </div>

                         {/* Contract 2 */}
                         <div className={`p-6 rounded-2xl border-2 transition-all ${agreedMurabaha ? 'border-primary-500 bg-primary-50/30' : 'border-slate-100 bg-slate-50'}`}>
                           <div className="flex items-start gap-4">
                             <div className="mt-1">
                               <input 
                                 type="checkbox" 
                                 id="murabaha" 
                                 checked={agreedMurabaha}
                                 onChange={() => setAgreedMurabaha(!agreedMurabaha)}
                                 disabled={!agreedWaad}
                                 className="w-5 h-5 accent-primary-500 rounded cursor-pointer disabled:opacity-50"
                               />
                             </div>
                             <div className={!agreedWaad ? 'opacity-50' : ''}>
                               <label htmlFor="murabaha" className="font-bold text-slate-900 text-lg cursor-pointer block mb-2">2. Murabaha Agreement (Sale Contract)</label>
                               <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                 I agree to enter into a Murabaha sale agreement where SahulatKar sells the asset to me at the stated cost plus the declared profit margin, payable in installments.
                               </p>
                               <button className="text-xs font-bold text-primary-500 uppercase tracking-widest hover:text-primary-600">View Full Terms</button>
                             </div>
                           </div>
                         </div>
                       </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Column: Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-slate-900 rounded-[2rem] p-8 shadow-2xl text-white sticky top-32">
                <h3 className="text-xl font-bold mb-8 tracking-tight">Order Summary</h3>

                <div className="space-y-4 mb-8 text-sm">
                   <div className="flex justify-between items-center text-slate-400">
                      <span>Cash Price</span>
                      <span className="text-white font-medium">PKR {product.price.toLocaleString()}</span>
                   </div>
                   <div className="flex justify-between items-center text-slate-400">
                      <span>Processing Fee</span>
                      <span className="text-white font-medium">PKR {financing.processingFee.toLocaleString()}</span>
                   </div>
                   <div className="w-full h-px bg-white/10 my-2" />
                   <div className="flex justify-between items-center">
                      <span className="text-slate-400">Down Payment (Due Today)</span>
                      <span className="text-primary-500 font-bold text-lg">PKR {(financing.downPayment + financing.processingFee).toLocaleString()}</span>
                   </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-8 backdrop-blur-md">
                   <div className="flex items-center gap-2 mb-4 text-emerald-400">
                     <ShieldCheck className="w-4 h-4" />
                     <span className="text-[10px] font-bold tracking-widest uppercase">Shariah Financing Details</span>
                   </div>
                   <div className="space-y-3 text-sm">
                      <div className="flex justify-between text-slate-400">
                        <span>Financed Amount</span>
                        <span className="text-white">PKR {financedAmount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Murabaha Profit (Fixed)</span>
                        <span className="text-white">PKR {profitAmount.toLocaleString()}</span>
                      </div>
                      <div className="w-full h-px bg-white/10 my-2" />
                      <div className="flex justify-between font-bold">
                        <span className="text-slate-300">Total Deferred Price</span>
                        <span className="text-white">PKR {totalDeferredPrice.toLocaleString()}</span>
                      </div>
                   </div>
                </div>

                <div className="text-center mb-8">
                   <p className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-2">Monthly Installment ({financing.months}x)</p>
                   <p className="text-4xl font-black text-white">PKR {Math.round(monthlyInstallment).toLocaleString()}</p>
                </div>

                {step === 1 ? (
                  <button 
                    onClick={() => setStep(2)}
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 rounded-xl transition-all shadow-glow flex items-center justify-center gap-2"
                  >
                    Proceed to Contracts <ArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <Link href="/dashboard">
                    <button 
                      disabled={!agreedWaad || !agreedMurabaha}
                      className="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-slate-700 disabled:text-slate-400 disabled:shadow-none text-white font-bold py-4 rounded-xl transition-all shadow-glow flex items-center justify-center gap-2"
                    >
                      Accept & Complete Purchase
                    </button>
                  </Link>
                )}

                {step === 2 && (
                  <button 
                    onClick={() => setStep(1)}
                    className="w-full mt-4 bg-transparent hover:bg-white/5 text-slate-400 font-bold py-4 rounded-xl transition-all text-sm"
                  >
                    &larr; Back to Cart
                  </button>
                )}

                <div className="mt-8 pt-8 border-t border-white/10 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-slate-500 shrink-0" />
                  <p className="text-xs text-slate-500 leading-relaxed">
                    By completing this purchase, you agree to the Murabaha terms. The asset will be purchased by SahulatKar and sold to you at the stated deferred price.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
