'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldCheck, CheckCircle2, ArrowRight, User, HelpCircle, Smartphone, CreditCard, ScanFace, CheckCircle } from 'lucide-react'

export default function KYCVerification() {
  const [step, setStep] = useState(1)
  const [otp, setOtp] = useState(['4', '8', '', '', '', ''])
  
  // Simulation states
  const [isScanning, setIsScanning] = useState(true)
  const [extractedData, setExtractedData] = useState<any>(null)

  useEffect(() => {
    if (step === 2 || step === 3) {
      setIsScanning(true)
      setExtractedData(null)
      
      const timer = setTimeout(() => {
        setIsScanning(false)
        if (step === 2) {
          setExtractedData({
            name: 'MUHAMMAD ARSALAN KHAN',
            cnic: '42101-9283741-3',
            status: 'verified'
          })
        } else if (step === 3) {
          setExtractedData({
            issueDate: '12-05-2020',
            expiryDate: '12-05-2030',
            status: 'verified'
          })
        }
      }, 2500)
      
      return () => clearTimeout(timer)
    }
  }, [step])

  const nextStep = () => {
    if (step < 5) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  return (
    <main className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-primary-500 selection:text-white flex flex-col">
      {/* Top App Bar */}
      <header className="w-full bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <Link href="/" className="text-xl font-black text-slate-900 tracking-tight">
          SahulatKar<span className="text-primary-500">.</span>
        </Link>
        <div className="flex items-center gap-4 text-slate-500">
          <button className="hover:text-primary-500 transition-colors"><HelpCircle className="w-6 h-6" /></button>
          <button className="hover:text-primary-500 transition-colors"><User className="w-6 h-6" /></button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative overflow-hidden">
        
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full pointer-events-none">
          <div className="absolute top-20 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="flex-1 overflow-y-auto py-12 px-6 relative z-10">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: OTP Verification */}
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-md mx-auto w-full"
              >
                <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 p-8 md:p-12 text-center">
                  <div className="w-16 h-16 bg-primary-50 text-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Verify Your Account</h2>
                  <p className="text-slate-500 text-sm mb-8">We've sent a 6-digit verification code to <span className="font-bold text-slate-700">+92 300 *** 123</span></p>
                  
                  <div className="flex justify-center gap-2 mb-8">
                    {otp.map((digit, idx) => (
                      <input 
                        key={idx}
                        type="text" 
                        maxLength={1}
                        value={digit}
                        onChange={() => {}}
                        className={`w-12 h-14 text-center text-xl font-bold rounded-xl border ${digit ? 'border-primary-500 bg-primary-50 text-primary-600' : 'border-slate-200 bg-slate-50 text-slate-900'} focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all`}
                      />
                    ))}
                  </div>

                  <button 
                    onClick={nextStep}
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 rounded-xl transition-all shadow-glow hover:shadow-glow-lg mb-6"
                  >
                    Verify Code
                  </button>

                  <p className="text-sm text-slate-500 mb-4">Didn't receive the code?</p>
                  <button className="text-primary-500 font-bold hover:text-primary-600 transition-colors text-sm flex items-center justify-center gap-2 mx-auto">
                    Resend code via SMS
                  </button>
                  <button className="text-emerald-500 font-bold hover:text-emerald-600 transition-colors text-sm flex items-center justify-center gap-2 mx-auto mt-3">
                    Get code on WhatsApp
                  </button>
                  <button className="text-slate-400 font-medium hover:text-slate-600 transition-colors text-xs flex items-center justify-center gap-2 mx-auto mt-6 underline">
                    Change mobile number?
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: CNIC Front */}
            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-5xl mx-auto w-full"
              >
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Capture CNIC Front</h2>
                  <p className="text-slate-500">Position your Identity Card within the frame for automatic data extraction</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Camera Feed */}
                  <div className="bg-slate-900 rounded-[2rem] p-4 shadow-2xl relative overflow-hidden aspect-[4/3] flex flex-col">
                    <div className="flex justify-between items-center mb-4 px-2">
                      <div className="flex items-center gap-2 bg-red-500/20 text-red-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-red-500/30">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Live Feed
                      </div>
                      <div className="text-slate-400 text-xs font-mono uppercase">Auto-Capture: ON</div>
                    </div>
                    
                    <div className="flex-1 relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700">
                      <div className="absolute inset-0 opacity-50 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1620600552766-3d2b27ccaf63?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center" />
                      
                      {/* Scanning Overlay */}
                      <div className="absolute inset-8 border-2 border-primary-500/50 rounded-xl">
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary-500 rounded-tl-xl" />
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary-500 rounded-tr-xl" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary-500 rounded-bl-xl" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary-500 rounded-br-xl" />
                      </div>

                      {isScanning && (
                        <motion.div 
                          animate={{ y: ['0%', '100%', '0%'] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          className="absolute left-8 right-8 top-8 h-1 bg-primary-500 shadow-[0_0_20px_rgba(232,76,33,0.8)] z-10"
                        />
                      )}
                    </div>
                    
                    <button className="mt-4 mx-auto bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-8 rounded-full transition-colors text-sm border border-white/10 backdrop-blur-md">
                      Retake Photo
                    </button>
                  </div>

                  {/* Data Extraction Panel */}
                  <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100 h-full flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="font-bold text-slate-900 text-lg">Data Extraction</h3>
                      {isScanning ? (
                        <div className="text-xs font-bold text-primary-500 bg-primary-50 px-3 py-1 rounded-full animate-pulse">EXTRACTING...</div>
                      ) : (
                        <div className="text-xs font-bold text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> REAL-TIME</div>
                      )}
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className={`p-4 rounded-xl border transition-all duration-500 ${extractedData ? 'border-emerald-200 bg-emerald-50/30' : 'border-slate-100 bg-slate-50'}`}>
                        <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mb-1">Full Name</p>
                        <div className="flex items-center justify-between">
                          <p className={`font-bold transition-all duration-500 ${extractedData ? 'text-slate-900' : 'text-slate-300'}`}>
                            {extractedData ? extractedData.name : 'Scanning...'}
                          </p>
                          {extractedData && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                        </div>
                      </div>
                      
                      <div className={`p-4 rounded-xl border transition-all duration-500 ${extractedData ? 'border-emerald-200 bg-emerald-50/30' : 'border-slate-100 bg-slate-50'}`}>
                        <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mb-1">CNIC Number</p>
                        <div className="flex items-center justify-between">
                          <p className={`font-mono text-lg font-bold transition-all duration-500 ${extractedData ? 'text-slate-900' : 'text-slate-300'}`}>
                            {extractedData ? extractedData.cnic : '_____-_______-_'}
                          </p>
                          {extractedData && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                        </div>
                      </div>
                    </div>

                    <AnimatePresence>
                      {extractedData && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="bg-primary-50 border border-primary-100 rounded-xl p-4 mb-8"
                        >
                          <div className="flex items-start gap-3">
                            <ShieldCheck className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-bold text-primary-700 text-sm mb-1">Card Verified</p>
                              <p className="text-xs text-primary-600 leading-relaxed">Identity document matches the database format and security features are intact.</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button 
                      onClick={nextStep}
                      disabled={isScanning}
                      className="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-slate-300 text-white font-bold py-4 rounded-xl transition-all shadow-glow hover:shadow-glow-lg flex justify-center items-center gap-2 mt-auto"
                    >
                      Confirm & Continue <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 3: CNIC Back */}
            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-5xl mx-auto w-full"
              >
                {/* Similar to Step 2, slightly modified for back */}
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Capture CNIC Back</h2>
                  <p className="text-slate-500">Position the back of your Identity Card within the frame for automatic data extraction</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div className="bg-slate-900 rounded-[2rem] p-4 shadow-2xl relative overflow-hidden aspect-[4/3] flex flex-col">
                    <div className="flex justify-between items-center mb-4 px-2">
                      <div className="flex items-center gap-2 bg-red-500/20 text-red-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-red-500/30">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Live Scanning
                      </div>
                    </div>
                    
                    <div className="flex-1 relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700">
                      {/* Scanning Overlay */}
                      <div className="absolute inset-8 border-2 border-primary-500/50 rounded-xl">
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary-500 rounded-tl-xl" />
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary-500 rounded-tr-xl" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary-500 rounded-bl-xl" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary-500 rounded-br-xl" />
                      </div>
                      {isScanning && (
                        <motion.div 
                          animate={{ y: ['0%', '100%', '0%'] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          className="absolute left-8 right-8 top-8 h-1 bg-primary-500 shadow-[0_0_20px_rgba(232,76,33,0.8)] z-10"
                        />
                      )}
                    </div>
                    <div className="flex justify-between items-center mt-4 px-4 text-xs text-slate-400">
                      <button onClick={prevStep} className="hover:text-white transition-colors">&larr; Back</button>
                      <p>Position the back of your CNIC within the frame for auto-capture.</p>
                      <div className="w-8"></div>
                    </div>
                  </div>

                  <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100 h-full flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="font-bold text-slate-900 text-lg">Data Extraction</h3>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className={`p-4 rounded-xl border transition-all duration-500 ${extractedData ? 'border-emerald-200 bg-emerald-50/30' : 'border-slate-100 bg-slate-50'}`}>
                        <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mb-1">Issue Date</p>
                        <p className={`font-bold transition-all duration-500 ${extractedData ? 'text-slate-900' : 'text-slate-300'}`}>
                          {extractedData ? extractedData.issueDate : 'DD-MM-YYYY'}
                        </p>
                      </div>
                      
                      <div className={`p-4 rounded-xl border transition-all duration-500 ${extractedData ? 'border-emerald-200 bg-emerald-50/30' : 'border-slate-100 bg-slate-50'}`}>
                        <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mb-1">Expiry Date</p>
                        <p className={`font-bold transition-all duration-500 ${extractedData ? 'text-slate-900' : 'text-slate-300'}`}>
                           {extractedData ? extractedData.expiryDate : 'DD-MM-YYYY'}
                        </p>
                      </div>
                    </div>

                    <button 
                      onClick={nextStep}
                      disabled={isScanning}
                      className="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-slate-300 text-white font-bold py-4 rounded-xl transition-all shadow-glow hover:shadow-glow-lg flex justify-center items-center gap-2 mt-auto"
                    >
                      Continue to Liveness <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Steps 4 and 5 omitted for brevity, but easily expandable */}
            {step > 3 && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="max-w-md mx-auto text-center pt-20"
              >
                <div className="w-24 h-24 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">KYC Verified</h2>
                <p className="text-slate-500 mb-8">Your identity has been successfully verified. You can now access your full credit limit.</p>
                <Link href="/">
                  <button className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-glow w-full">
                    Go to Dashboard
                  </button>
                </Link>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Step Indicator */}
      <div className="bg-white border-t border-slate-200 py-4 px-6 fixed bottom-0 w-full z-50">
        <div className="max-w-3xl mx-auto flex justify-between items-center relative">
          {/* Progress Line */}
          <div className="absolute top-4 left-6 right-6 h-0.5 bg-slate-100 -z-10" />
          <div 
            className="absolute top-4 left-6 h-0.5 bg-primary-500 -z-10 transition-all duration-500" 
            style={{ width: `${((step - 1) / 4) * 100}%` }} 
          />

          {[
            { id: 1, label: 'PHONE', icon: Smartphone },
            { id: 2, label: 'CNIC FRONT', icon: CreditCard },
            { id: 3, label: 'CNIC BACK', icon: CreditCard },
            { id: 4, label: 'LIVENESS', icon: ScanFace },
            { id: 5, label: 'SUCCESS', icon: CheckCircle2 },
          ].map((s) => {
            const Icon = s.icon;
            const isActive = step === s.id;
            const isPast = step > s.id;
            
            return (
              <div key={s.id} className="flex flex-col items-center gap-2 bg-white px-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isActive ? 'bg-primary-500 text-white shadow-glow' : isPast ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                  {isPast ? <CheckCircle2 className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                </div>
                <span className={`text-[10px] font-bold tracking-widest uppercase transition-colors duration-300 hidden md:block ${isActive ? 'text-primary-500' : isPast ? 'text-emerald-500' : 'text-slate-400'}`}>
                  {s.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
