'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react'

export default function SignUp() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    referral: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
    } else {
      console.log('Form submitted:', formData)
    }
  }

  const testimonials = [
    { name: 'Ahmed Khan', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop' },
    { name: 'Fatima Ali', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop' },
    { name: 'Hassan Malik', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop' },
    { name: 'Zara Ahmed', image: 'https://images.unsplash.com/photo-1507842072343-583f20270319?w=150&h=150&fit=crop' },
    { name: 'Omar Hassan', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop' },
    { name: 'Noor Khan', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop' },
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
            <Link href="/" className="text-2xl font-black text-slate-900 mb-16 block tracking-tight">
              SahulatKar<span className="text-primary-500">.</span>
            </Link>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight text-slate-900">
              Begin Your <span className="text-primary-500">Halal</span> Wealth Journey
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Join thousands of investors growing their wealth through Shariah-compliant digital custody.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 mb-8">
              {step === 1 ? (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Abdullah Rahman"
                      className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all text-slate-900 placeholder:text-slate-400 shadow-sm"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                        MOBILE NUMBER
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+92 3001234567"
                        className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all text-slate-900 placeholder:text-slate-400 shadow-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                        REFERRAL (OPTIONAL)
                      </label>
                      <input
                        type="text"
                        name="referral"
                        value={formData.referral}
                        onChange={handleInputChange}
                        placeholder="KHAN786"
                        className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all text-slate-900 placeholder:text-slate-400 shadow-sm"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="abdullah@example.com"
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all text-slate-900 placeholder:text-slate-400 shadow-sm"
                    required
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-glow hover:shadow-glow-lg mt-4 group"
              >
                {step === 1 ? 'Next Step' : 'Create Secure Account'}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <p className="text-sm text-slate-600 font-medium">
              Already have an account?{' '}
              <Link href="/signin" className="text-primary-500 font-bold hover:text-primary-600 transition-colors">
                Sign in here
              </Link>
            </p>

            {/* Compliance Badges */}
            <div className="mt-16 pt-8 border-t border-slate-200 flex gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-primary-500">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Regulated by</p>
                  <p className="text-sm font-bold text-slate-900">SECP Licensed</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-primary-500">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Compliance</p>
                  <p className="text-sm font-bold text-slate-900">Shariah Certified</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-[80px] pointer-events-none" />
        </motion.div>

        {/* Right Side - Dark */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-slate-900 via-[#1A1C23] to-[#121318] text-white px-8 sm:px-12 lg:px-20 py-12 flex flex-col justify-center relative overflow-hidden"
        >
          {/* Abstract Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto">
            {/* Live Investment Activity Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-12">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-primary-400">Live Investment Activity</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">25,000+</span> Digital Investors.
            </h2>

            <p className="text-lg text-slate-300 mb-12 leading-relaxed font-light">
              Our "Digital Custodian" platform ensures your assets are held in segregated, Shariah-compliant vaults with institutional-grade security protocols.
            </p>

            {/* Testimonial Avatars */}
            <div className="flex items-center gap-4 mb-16">
              <div className="flex -space-x-4">
                {testimonials.map((person, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    className="w-14 h-14 rounded-full border-2 border-slate-900 overflow-hidden bg-slate-800 shadow-xl"
                  >
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all"
              >
                <p className="text-primary-500 font-bold text-2xl mb-1">99.9%</p>
                <p className="text-xs text-slate-400 font-medium">Platform Uptime</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all"
              >
                <p className="text-primary-500 font-bold text-2xl mb-1">PKR 4.2B</p>
                <p className="text-xs text-slate-400 font-medium">Assets Under Custody</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all"
              >
                <p className="text-primary-500 font-bold text-2xl mb-1">100%</p>
                <p className="text-xs text-slate-400 font-medium">Riba Policy</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
