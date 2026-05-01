'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { LayoutDashboard, Users, Activity, ShieldAlert, FileText, ArrowUpRight, Search, Filter, MoreVertical, ShieldCheck, Shield, CheckCircle2 } from 'lucide-react'

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <main className="min-h-screen bg-[#0B0C10] font-sans selection:bg-primary-500 selection:text-white flex flex-col text-slate-300">
      
      {/* Top Navigation */}
      <header className="w-full bg-[#121318] border-b border-white/5 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-8">
           <Link href="/" className="text-xl font-black text-white tracking-tight">
             SahulatKar<span className="text-primary-500">.</span> <span className="text-xs font-bold text-primary-500 bg-primary-500/10 px-2 py-1 rounded-md ml-2 uppercase tracking-widest">Admin</span>
           </Link>
           <div className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/5">
              <button onClick={() => setActiveTab('overview')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${activeTab === 'overview' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'}`}>Overview</button>
              <button onClick={() => setActiveTab('kyc')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors flex items-center gap-2 ${activeTab === 'kyc' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'}`}>KYC Queue <span className="bg-primary-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">12</span></button>
              <button onClick={() => setActiveTab('transactions')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${activeTab === 'transactions' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'}`}>Murabaha Logs</button>
              <button onClick={() => setActiveTab('risk')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${activeTab === 'risk' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'}`}>Risk & AML</button>
           </div>
        </div>
        
        <div className="flex items-center gap-4">
           <div className="relative hidden md:block">
             <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
             <input type="text" placeholder="Search CNIC, Name..." className="w-64 bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-primary-500 transition-colors" />
           </div>
           <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full border-2 border-white/10 flex items-center justify-center text-white font-bold shadow-glow">
             A
           </div>
        </div>
      </header>

      <div className="flex-1 p-6 lg:p-8 w-full max-w-[1600px] mx-auto relative">
        {/* Abstract Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 relative z-10">
          
          {/* Main Dashboard Area */}
          <div className="xl:col-span-3 space-y-8">
             
             {/* Key Metrics */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#121318] rounded-3xl p-6 border border-white/5 relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                     <Activity className="w-12 h-12 text-primary-500" />
                   </div>
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Total Murabaha Volume</p>
                   <h2 className="text-3xl font-black text-white mb-2">PKR 1.2B</h2>
                   <p className="text-sm text-emerald-500 font-bold flex items-center gap-1"><ArrowUpRight className="w-4 h-4" /> +15.4% this month</p>
                </div>

                <div className="bg-[#121318] rounded-3xl p-6 border border-white/5 relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                     <Users className="w-12 h-12 text-emerald-500" />
                   </div>
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Active Investors</p>
                   <h2 className="text-3xl font-black text-white mb-2">25,492</h2>
                   <p className="text-sm text-emerald-500 font-bold flex items-center gap-1"><ArrowUpRight className="w-4 h-4" /> +2.1% this week</p>
                </div>

                <div className="bg-[#121318] rounded-3xl p-6 border border-white/5 relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                     <ShieldAlert className="w-12 h-12 text-red-500" />
                   </div>
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Non-Performing Asset (NPA)</p>
                   <h2 className="text-3xl font-black text-white mb-2">0.8%</h2>
                   <p className="text-sm text-emerald-500 font-bold flex items-center gap-1">Below industry average (1.5%)</p>
                </div>
             </div>

             {/* Recent Transactions / Logs */}
             <div className="bg-[#121318] rounded-3xl border border-white/5 overflow-hidden">
                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                   <h3 className="font-bold text-white text-lg">Real-time Murabaha Logs</h3>
                   <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                     <Filter className="w-4 h-4" /> Filter
                   </button>
                </div>
                <div className="overflow-x-auto">
                   <table className="w-full text-left text-sm">
                      <thead className="bg-white/5 text-slate-500 text-xs uppercase tracking-widest font-bold">
                         <tr>
                            <th className="px-6 py-4">Transaction ID</th>
                            <th className="px-6 py-4">User</th>
                            <th className="px-6 py-4">Asset</th>
                            <th className="px-6 py-4">Amount</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Action</th>
                         </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                         {[
                           { id: 'MUR-8892', user: 'Abdullah Rahman', asset: 'iPhone 15 Pro Max', amount: '450,000', status: 'Completed', color: 'emerald' },
                           { id: 'MUR-8891', user: 'Fatima Ali', asset: 'Samsung S24 Ultra', amount: '380,000', status: 'Processing', color: 'primary' },
                           { id: 'MUR-8890', user: 'Ahmed Khan', asset: 'MacBook Pro', amount: '850,000', status: 'Pending Review', color: 'amber' },
                           { id: 'MUR-8889', user: 'Zara Hassan', asset: 'Sony A7IV', amount: '620,000', status: 'Completed', color: 'emerald' },
                         ].map((tx) => (
                           <tr key={tx.id} className="hover:bg-white/[0.02] transition-colors">
                              <td className="px-6 py-4 font-mono text-white">{tx.id}</td>
                              <td className="px-6 py-4 font-medium text-slate-300">{tx.user}</td>
                              <td className="px-6 py-4 text-slate-400">{tx.asset}</td>
                              <td className="px-6 py-4 text-white">PKR {tx.amount}</td>
                              <td className="px-6 py-4">
                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                                  tx.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                                  tx.color === 'primary' ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20' :
                                  'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                }`}>
                                  {tx.color === 'emerald' && <CheckCircle2 className="w-3 h-3" />}
                                  {tx.color === 'primary' && <Activity className="w-3 h-3" />}
                                  {tx.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-slate-500">
                                <button className="hover:text-white transition-colors"><MoreVertical className="w-4 h-4" /></button>
                              </td>
                           </tr>
                         ))}
                      </tbody>
                   </table>
                </div>
             </div>

          </div>

          {/* Right Sidebar: KYC & Risk Scoring */}
          <div className="space-y-8">
             
             {/* AI Risk Scoring Mock */}
             <div className="bg-[#121318] rounded-3xl p-6 border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-primary-500 to-red-500" />
                <h3 className="font-bold text-white text-lg mb-6 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary-500" /> AI Risk Engine
                </h3>
                
                <div className="space-y-6">
                   <div>
                     <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                        <span>Portfolio Risk Score</span>
                        <span className="text-emerald-400">Low (12)</span>
                     </div>
                     <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-emerald-500 w-[12%] rounded-full" />
                     </div>
                   </div>

                   <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                      <h4 className="text-sm font-bold text-white mb-3">Anomaly Detection Alerts</h4>
                      <div className="space-y-3">
                         <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5" />
                            <div>
                               <p className="text-xs text-slate-300">Unusual login velocity detected for 3 accounts.</p>
                               <span className="text-[10px] text-slate-500">10 mins ago</span>
                            </div>
                         </div>
                         <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5" />
                            <div>
                               <p className="text-xs text-slate-300">Daily reconciliation complete. Zero discrepancies.</p>
                               <span className="text-[10px] text-slate-500">2 hours ago</span>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>

             {/* KYC Manual Queue */}
             <div className="bg-[#121318] rounded-3xl p-6 border border-white/5">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-white text-lg flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary-500" /> KYC Queue
                  </h3>
                  <span className="bg-primary-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">12 Pending</span>
                </div>

                <div className="space-y-4">
                   {[
                     { name: 'Usman Tariq', type: 'High Risk Flag', time: '10m' },
                     { name: 'Ayesha Bibi', type: 'Blurry CNIC', time: '25m' },
                     { name: 'Zainab Noor', type: 'Liveness Failed', time: '1h' },
                   ].map((item, i) => (
                     <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-white">
                             {item.name.charAt(0)}
                           </div>
                           <div>
                             <p className="text-sm font-bold text-slate-200">{item.name}</p>
                             <p className="text-[10px] text-red-400 uppercase tracking-widest">{item.type}</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-2">
                           <span className="text-xs text-slate-500">{item.time}</span>
                           <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                        </div>
                     </div>
                   ))}
                </div>
                
                <button className="w-full mt-4 py-3 rounded-xl border border-white/10 text-sm font-bold text-slate-400 hover:text-white hover:bg-white/5 transition-all">
                  View All Queue
                </button>
             </div>

          </div>
        </div>
      </div>
    </main>
  )
}
