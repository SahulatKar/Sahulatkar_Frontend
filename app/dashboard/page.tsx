'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Wallet, PieChart, CreditCard, Download, FileText, ArrowUpRight, Bell, Settings, User } from 'lucide-react'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <main className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-primary-500 selection:text-white flex flex-col">
      {/* Top Navigation */}
      <header className="w-full bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <Link href="/" className="text-xl font-black text-slate-900 tracking-tight">
          SahulatKar<span className="text-primary-500">.</span>
        </Link>
        <div className="flex items-center gap-6 text-slate-500">
          <button className="hover:text-primary-500 transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="hover:text-primary-500 transition-colors"><Settings className="w-5 h-5" /></button>
          <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white">
            <User className="w-4 h-4" />
          </div>
        </div>
      </header>

      <div className="flex-1 flex px-6 lg:px-12 py-8 max-w-[1400px] w-full mx-auto gap-8">
        {/* Sidebar */}
        <aside className="w-64 hidden lg:block flex-shrink-0">
          <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 sticky top-24">
            <div className="space-y-2">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`w-full text-left px-6 py-4 rounded-xl font-bold transition-all flex items-center gap-3 ${activeTab === 'overview' ? 'bg-primary-50 text-primary-600' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <PieChart className="w-5 h-5" /> Overview
              </button>
              <button 
                onClick={() => setActiveTab('payments')}
                className={`w-full text-left px-6 py-4 rounded-xl font-bold transition-all flex items-center gap-3 ${activeTab === 'payments' ? 'bg-primary-50 text-primary-600' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <Wallet className="w-5 h-5" /> Payments
              </button>
              <button 
                onClick={() => setActiveTab('contracts')}
                className={`w-full text-left px-6 py-4 rounded-xl font-bold transition-all flex items-center gap-3 ${activeTab === 'contracts' ? 'bg-primary-50 text-primary-600' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <FileText className="w-5 h-5" /> Contracts & KFS
              </button>
              <Link href="/product-extraction">
                <button className={`w-full text-left px-6 py-4 rounded-xl font-bold transition-all flex items-center gap-3 text-slate-600 hover:bg-slate-50 mt-8 border border-slate-100 border-dashed`}>
                  <CreditCard className="w-5 h-5" /> New Financing
                </button>
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 space-y-8">
          
          {/* Welcome Header */}
          <div className="flex items-center justify-between">
             <div>
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Welcome back, Abdullah!</h1>
                <p className="text-slate-500 mt-1">Here is the status of your Shariah-compliant portfolio.</p>
             </div>
             <div className="hidden sm:flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full border border-emerald-100">
               <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
               <span className="text-xs font-bold uppercase tracking-widest">Account Healthy</span>
             </div>
          </div>

          {/* Top Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {/* Credit Limit */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
               className="bg-slate-900 rounded-[2rem] p-8 shadow-2xl text-white relative overflow-hidden"
             >
               {/* Abstract glow */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/20 rounded-full blur-[40px]" />
               
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Available Limit</p>
               <h2 className="text-4xl font-black text-white mb-6">PKR 150,000</h2>
               
               <div className="space-y-2">
                 <div className="flex justify-between text-xs text-slate-400">
                   <span>Utilized: PKR 350,000</span>
                   <span>Total: PKR 500,000</span>
                 </div>
                 <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                   <div className="h-full bg-gradient-to-r from-primary-400 to-primary-600 w-[70%] rounded-full" />
                 </div>
               </div>
             </motion.div>

             {/* Upcoming Payment */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
               className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 relative"
             >
               <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6">
                 <Wallet className="w-6 h-6" />
               </div>
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Next Payment Due</p>
               <h2 className="text-3xl font-black text-slate-900 mb-2">PKR 45,000</h2>
               <p className="text-sm font-bold text-red-500 mb-4">Due in 3 days (15 May)</p>
               
               <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition-all text-sm">
                 Pay Now
               </button>
             </motion.div>

             {/* Auto Debit Setup */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
               className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100"
             >
               <div className="w-12 h-12 bg-primary-50 text-primary-500 rounded-2xl flex items-center justify-center mb-6">
                 <CreditCard className="w-6 h-6" />
               </div>
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Auto-Debit</p>
               <h2 className="text-xl font-bold text-slate-900 mb-2">HBL •••• 4829</h2>
               <p className="text-sm text-slate-500 mb-4">Active for all future installments.</p>
               
               <button className="w-full bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold py-3 rounded-xl transition-all text-sm border border-slate-200">
                 Manage Bank Account
               </button>
             </motion.div>
          </div>

          {/* Active Contracts */}
          <h2 className="text-xl font-bold text-slate-900 tracking-tight pt-4">Active Financings</h2>
          <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
             
             {/* Item 1 */}
             <div className="p-6 md:p-8 border-b border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-6 w-full md:w-auto">
                   <div className="w-20 h-20 bg-slate-100 rounded-xl overflow-hidden shrink-0">
                      <img src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover mix-blend-multiply" alt="iPhone" />
                   </div>
                   <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1">Apple iPhone 15 Pro Max</h3>
                      <p className="text-sm text-slate-500 mb-2">Purchased on 15 Feb 2024</p>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-primary-500 bg-primary-50 px-2 py-0.5 rounded-full uppercase tracking-widest">Active</span>
                        <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full uppercase tracking-widest">3/12 Paid</span>
                      </div>
                   </div>
                </div>
                
                <div className="flex items-center gap-6 w-full md:w-auto">
                   <div className="text-right">
                     <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Remaining Balance</p>
                     <p className="text-xl font-black text-slate-900">PKR 405,000</p>
                   </div>
                   <div className="w-px h-12 bg-slate-200 hidden md:block" />
                   <button className="text-primary-500 hover:text-primary-600 transition-colors flex flex-col items-center gap-1 group">
                      <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                        <Download className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest">KFS</span>
                   </button>
                   <button className="text-slate-400 hover:text-slate-600 transition-colors flex flex-col items-center gap-1 group">
                      <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-slate-100 transition-colors border border-slate-200">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest">Details</span>
                   </button>
                </div>
             </div>

             {/* Item 2 */}
             <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-6 w-full md:w-auto">
                   <div className="w-20 h-20 bg-slate-100 rounded-xl overflow-hidden shrink-0 flex items-center justify-center text-3xl">
                      💻
                   </div>
                   <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1">MacBook Pro M3 Max</h3>
                      <p className="text-sm text-slate-500 mb-2">Purchased on 01 Jan 2024</p>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full uppercase tracking-widest">Completed</span>
                        <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full uppercase tracking-widest">12/12 Paid</span>
                      </div>
                   </div>
                </div>
                
                <div className="flex items-center justify-end gap-6 w-full md:w-auto">
                   <button className="text-primary-500 hover:text-primary-600 transition-colors flex flex-col items-center gap-1 group">
                      <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                        <Download className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest">KFS</span>
                   </button>
                </div>
             </div>
             
          </div>

        </div>
      </div>
    </main>
  )
}
