'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react'

export default function SignIn() {
  const [phone, setPhone] = useState('')
  const [pin, setPin] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Handle login
    console.log('Login:', { phone, pin })
    setTimeout(() => setIsLoading(false), 2000)
  }

  const testimonials = [
    { name: 'Ahmed Khan', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop' },
    { name: 'Fatima Ali', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop' },
    { name: 'Hassan Malik', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop' },
  ]

  return (
    <main className="min-h-screen font-sans selection:bg-primary-500 selection:text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Side - Light */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#FDFBF7] px-8 sm:px-12 lg:px-20 py-12 flex flex-col justify-center relative"
        >
          <div className="max-w-md w-full mx-auto relative z-10">
            <Link href="/" className="text-2xl font-black text-slate-900 mb-20 block tracking-tight">
              SahulatKar<span className="text-primary-500">.</span>
            </Link>

            <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-[1.1] tracking-tight text-slate-900">
              Welcome Back
            </h1>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Enter your credentials to manage your portfolio.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 mb-8">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                  PHONE NO
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-slate-500 font-medium">📞</span>
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+92 300 1234567"
                    className="w-full pl-12 pr-5 py-4 bg-[#F5F4F0] border border-transparent rounded-xl focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">
                    SECURITY PIN
                  </label>
                  <button type="button" className="text-primary-500 font-bold text-xs hover:text-primary-600 transition-colors">
                    Forgot?
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-slate-500 font-medium">🔒</span>
                  </div>
                  <input
                    type="password"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    placeholder="••••"
                    maxLength={4}
                    className="w-full pl-12 pr-5 py-4 bg-[#F5F4F0] border border-transparent rounded-xl focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400 tracking-widest"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary-600 hover:bg-primary-700 disabled:opacity-70 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-glow hover:shadow-glow-lg mt-6 group"
              >
                {isLoading ? 'Signing In...' : 'Sign In to Dashboard'}
                {!isLoading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>

            <p className="text-sm text-slate-600 font-medium mb-24">
              New to SahulatKar?{' '}
              <Link href="/signup" className="text-primary-500 font-bold hover:text-primary-600 transition-colors">
                Sign up
              </Link>
            </p>

            {/* Compliance Badges */}
            <div className="pt-8 border-t border-slate-200 flex gap-6">
               <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">SECP Regulated</p>
               <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">NADRA Verified</p>
               <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">Shariah Compliant</p>
            </div>
          </div>
          
          {/* Subtle background decoration */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500/5 rounded-full blur-[80px] pointer-events-none" />
        </motion.div>

        {/* Right Side - Dark */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-[#282B34] via-[#1E2129] to-[#16181D] text-white px-8 sm:px-12 lg:px-20 py-12 flex flex-col justify-center relative overflow-hidden"
        >
          {/* Watermark */}
          <div className="absolute -bottom-10 -right-10 text-[20rem] font-black text-white/[0.02] leading-none pointer-events-none">
            SK
          </div>

          <div className="relative z-10 max-w-lg mx-auto w-full flex flex-col items-center">
            
            {/* 3D Avatar Profile */}
            <div className="relative mb-12">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="w-64 h-64 rounded-full p-2 bg-gradient-to-b from-white/10 to-transparent border border-white/5 relative z-10"
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 shadow-2xl relative">
                  <div className="absolute inset-0 bg-primary-500/20 mix-blend-overlay"></div>
                  <img src="/3d_avatar_businessman.png" alt="Profile" className="w-full h-full object-cover" />
                </div>
              </motion.div>
              
              {/* Abstract Rings */}
              <div className="absolute inset-[-15%] border border-white/5 rounded-full animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-[-30%] border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />

              {/* Certified Badge */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary-500 text-white text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full shadow-glow z-20 flex items-center gap-2 border border-white/10"
              >
                 <ShieldCheck className="w-4 h-4" /> CERTIFIED
              </motion.div>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 leading-tight tracking-tight">
              Invest with Confidence
            </h2>

            <p className="text-center text-slate-400 text-lg mb-12 leading-relaxed font-light max-w-sm">
              Join 50,000+ Pakistanis building ethical wealth through our Shariah-compliant digital custodian platform.
            </p>

            {/* Highly Rated */}
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/5">
              <div className="flex -space-x-3">
                {testimonials.map((person, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#1E2129] overflow-hidden bg-slate-800">
                    <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase ml-2">Highly Rated by Users</span>
            </div>

          </div>
        </motion.div>
      </div>
    </main>
  )
}
