'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Link as LinkIcon, Search, CheckCircle2, ShoppingBag, ShieldCheck, Loader2, Plus, Minus } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PasteAndGo() {
  const [url, setUrl] = useState('')
  const [isExtracting, setIsExtracting] = useState(false)
  const [extractedProduct, setExtractedProduct] = useState<any>(null)
  const [selectedColor, setSelectedColor] = useState('Midnight Black')
  const [quantity, setQuantity] = useState(1)

  const handleExtract = (e: React.FormEvent) => {
    e.preventDefault()
    if (!url) return

    setIsExtracting(true)
    setExtractedProduct(null)

    // Simulate extraction delay
    setTimeout(() => {
      setIsExtracting(false)
      setExtractedProduct({
        name: 'Apple iPhone 15 Pro Max',
        price: 450000,
        merchant: 'Daraz Pakistan',
        merchantLogo: 'D',
        description: 'Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and a more versatile Pro camera system.',
        images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop'],
        variants: {
          colors: ['Midnight Black', 'Natural Titanium', 'Blue Titanium']
        }
      })
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-primary-500 selection:text-white flex flex-col">
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center pt-32 pb-24 px-6 lg:px-12 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-slate-900/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl w-full mx-auto relative z-10">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-600 mb-6">
              <ShoppingBag className="w-4 h-4" />
              <span className="text-xs font-bold tracking-widest uppercase">Universal Cart</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight text-slate-900">
              Paste. Verify. <span className="text-primary-500">Finance.</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Found something you love? Paste the link from any major retailer and get instant Shariah-compliant financing options.
            </p>
          </div>

          <form onSubmit={handleExtract} className="relative max-w-2xl mx-auto mb-16">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <LinkIcon className="w-6 h-6 text-slate-400" />
            </div>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://www.daraz.pk/products/..."
              className="w-full pl-16 pr-48 py-6 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all text-lg text-slate-900 placeholder:text-slate-400 shadow-xl"
              required
            />
            <button
              type="submit"
              disabled={isExtracting || !url}
              className="absolute inset-y-2 right-2 bg-slate-900 hover:bg-slate-800 disabled:opacity-70 text-white font-bold px-8 rounded-xl transition-all flex items-center gap-2"
            >
              {isExtracting ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> Extracting</>
              ) : (
                <><Search className="w-5 h-5" /> Fetch Product</>
              )}
            </button>
          </form>

          <AnimatePresence mode="wait">
            {isExtracting && (
              <motion.div 
                key="extracting"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-[2rem] p-12 text-center shadow-xl border border-slate-100 max-w-2xl mx-auto"
              >
                <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                   <div className="absolute inset-0 border-4 border-primary-500 rounded-full animate-[spin_2s_linear_infinite] border-t-transparent"></div>
                   <Search className="w-8 h-8 text-primary-500 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Analyzing Product Page...</h3>
                <p className="text-slate-500">Our Vision-LLM is extracting images, metadata, and verifying stock availability.</p>
              </motion.div>
            )}

            {extractedProduct && (
              <motion.div 
                key="product"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Product Image */}
                  <div className="bg-slate-100 relative h-64 md:h-auto">
                    <img src={extractedProduct.images[0]} alt="Product" className="w-full h-full object-cover mix-blend-multiply" />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                       <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold">{extractedProduct.merchantLogo}</div>
                       <span className="text-xs font-bold text-slate-700 tracking-wide">{extractedProduct.merchant}</span>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-emerald-500 text-xs font-bold uppercase tracking-widest mb-4 bg-emerald-50 w-fit px-3 py-1 rounded-full">
                      <CheckCircle2 className="w-3 h-3" /> Extracted Successfully
                    </div>

                    <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{extractedProduct.name}</h2>
                    <p className="text-slate-500 mb-8 line-clamp-2">{extractedProduct.description}</p>

                    <div className="mb-8">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Select Color</p>
                      <div className="flex flex-wrap gap-2">
                        {extractedProduct.variants.colors.map((c: string) => (
                          <button 
                            key={c}
                            onClick={() => setSelectedColor(c)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedColor === c ? 'bg-slate-900 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-10 pb-10 border-b border-slate-100">
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Total Price</p>
                        <p className="text-3xl font-black text-slate-900">PKR {extractedProduct.price.toLocaleString()}</p>
                      </div>
                      
                      <div className="flex items-center bg-slate-100 rounded-xl p-1">
                         <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-white rounded-lg transition-colors"><Minus className="w-4 h-4" /></button>
                         <span className="w-12 text-center font-bold text-slate-900">{quantity}</span>
                         <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-white rounded-lg transition-colors"><Plus className="w-4 h-4" /></button>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button className="flex-1 bg-primary-50 border border-primary-200 text-primary-600 font-bold py-4 rounded-xl transition-all hover:bg-primary-100 flex items-center justify-center gap-2">
                         <ShoppingBag className="w-5 h-5" /> Add to Cart
                      </button>
                      <Link href="/cart" className="flex-1">
                        <button className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 rounded-xl transition-all shadow-glow flex items-center justify-center gap-2">
                          View Plans <ArrowRight className="w-5 h-5" />
                        </button>
                      </Link>
                    </div>

                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Supported Stores Logos */}
          <div className="mt-24 text-center">
             <p className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-8">Works seamlessly with top retailers</p>
             <div className="flex justify-center gap-8 opacity-50 grayscale">
                <div className="text-2xl font-black text-slate-900">Daraz</div>
                <div className="text-2xl font-black text-slate-900">Amazon</div>
                <div className="text-2xl font-black text-slate-900">Naheed</div>
                <div className="text-2xl font-black text-slate-900">AliExpress</div>
             </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
