"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { CheckCircle, FileText, ArrowRight, Shield, Download, ShieldCheck, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function WakalaahAgreement() {
  const [signed, setSigned] = useState(false)
  const [isSigning, setIsSigning] = useState(false)
  const router = useRouter()

  const steps = [
    { label: "OTP Verification", status: "completed" },
    { label: "Stamp Duty", status: "completed" },
    { label: "Asset Inventory", status: "completed" },
    { label: "Wakalaah Sign", status: signed ? "completed" : "pending" },
  ]

  const handleSign = () => {
    setIsSigning(true)
    setTimeout(() => {
      setIsSigning(false)
      setSigned(true)
      localStorage.setItem('wakalaahSigned', 'true')
      router.push('/financing/murabaha-contract')
    }, 1200)
  }

  const handleContinue = () => {
    router.push('/financing/murabaha-contract')
  }

  const handleBack = () => {
    router.push('/financing/technical-review')
  }

  return (
    <div className="min-h-screen bg-[#f7f0e6]">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="grid gap-8 xl:grid-cols-[1.65fr_1fr]">
          <section className="overflow-hidden rounded-[2rem] bg-white shadow-[0_40px_90px_rgba(15,23,42,0.08)]">
            <div className="bg-[#16223f] px-10 py-8 text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/80">
                Elite V3 Protocol
              </div>
              <div className="mt-8 space-y-4">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-300">Shariah Compliant Financing</p>
                <h1 className="text-4xl font-semibold tracking-tight text-white">Wakalah Agency Agreement</h1>
                <p className="max-w-2xl text-sm text-slate-300">
                  This Wakalah Agreement is entered into between Heritage Financing (the “Principal”) and the undersigned Customer (the “Agent”). The Principal hereby appoints the Agent to negotiate and purchase the specific asset defined herein from the approved supplier on behalf of the Principal.
                </p>
              </div>
            </div>

            <div className="space-y-8 px-10 py-10">
              <div className="space-y-4 rounded-[1.5rem] bg-[#f8f4ed] p-6 shadow-sm ring-1 ring-slate-200/70">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm uppercase tracking-[0.28em] text-slate-500">01</span>
                  <h2 className="text-xl font-semibold text-slate-900">Appointment of Agent</h2>
                </div>
                <p className="text-sm leading-7 text-slate-700">
                  This Wakalah Agreement is entered into between Heritage Financing (the “Principal”) and the undersigned Customer (the “Agent”). The Principal hereby appoints the Agent to act as its representative to negotiate and purchase the specific asset defined herein from the approved supplier on behalf of the Principal.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-[#fffdf8] p-6 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Subject Asset</p>
                    <p className="mt-2 text-lg font-semibold text-slate-900">Samsung S24 Ultra</p>
                    <p className="text-sm text-slate-500">Titanium Gray | 512GB</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Purchase Price</p>
                    <p className="mt-2 text-xl font-semibold text-slate-900">PKR 425,000</p>
                    <p className="text-sm text-slate-500">Authorized Samsung Retail</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 rounded-[1.5rem] border border-slate-200 bg-[#fffdf8] p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-900">02</span>
                  <span className="text-sm uppercase tracking-[0.28em] text-slate-500">Asset Specification</span>
                </div>
                <div className="space-y-3">
                  <p className="text-base font-semibold text-slate-900">Shariah Compliance & Mandate</p>
                  <p className="text-sm leading-7 text-slate-700">The Agent agrees to conduct the purchase strictly within the guidelines of the Shariah Board of Heritage Financing. This appointment is specific to the “Murabaha” process, where ownership must first vest in the Principal before any sale to the Agent is initiated.</p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" /> Possession of asset must be physically or constructively verified.</li>
                    <li className="flex items-start gap-2"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" /> Risk transfer occurs upon confirmation of delivery to the Principals account.</li>
                  </ul>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
                <div className="rounded-[1.5rem] border border-slate-200 bg-[#fffdf8] p-6 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Digital Stamp</p>
                  <div className="mt-6 flex h-40 items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 text-slate-400">
                    <span className="text-xl">?</span>
                  </div>
                  <p className="mt-3 text-xs uppercase tracking-[0.28em] text-slate-400">Authenticated via NADRA integration</p>
                </div>

                <div className="rounded-[1.5rem] border border-slate-200 bg-[#f8f4ed] p-6 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Electronically signed by</p>
                  <p className="mt-4 text-lg font-semibold text-slate-900">Ahmed Bin Youse</p>
                  <p className="mt-2 text-sm text-slate-500">IP: 182.164.44.201 | OCT 24, 2023</p>
                </div>
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-[2rem] bg-white p-6 shadow-[0_30px_70px_rgba(15,23,42,0.08)] border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Contract Progress</p>
                  <h2 className="mt-3 text-2xl font-semibold text-slate-900">Wakalaah Sign</h2>
                </div>
                <div className="rounded-full bg-slate-100 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-600">Step 3</div>
              </div>

              <div className="mt-6 space-y-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-9 w-9 items-center justify-center rounded-2xl ${step.status === 'completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                        {step.status === 'completed' ? <CheckCircle className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{step.label}</p>
                      </div>
                    </div>
                    <span className={`text-sm ${step.status === 'completed' ? 'text-emerald-700' : 'text-slate-500'}`}>
                      {step.status === 'completed' ? 'Done' : 'Pending'}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                <Button
                  onClick={handleSign}
                  disabled={signed || isSigning}
                  className="w-full bg-[#1f4e8c] hover:bg-[#173d74] text-white py-3 rounded-2xl font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSigning ? 'Signing Agreement...' : signed ? 'Agreement Signed' : 'Sign Wakalaah Agreement'}
                </Button>
                <Button
                  onClick={handleContinue}
                  disabled={!signed}
                  variant="outline"
                  className="w-full border-slate-300 text-slate-900 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue to Murabaha Contract
                </Button>
                <Button
                  onClick={() => alert('Download draft PDF placeholder')}
                  variant="ghost"
                  className="w-full justify-center gap-2 text-slate-700"
                >
                  <Download className="w-4 h-4" /> Download Draft PDF
                </Button>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#f8f4ed] p-6 shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 text-slate-900">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
                <span className="font-semibold">Encrypted Session</span>
              </div>
              <p className="mt-3 text-sm text-slate-600">This session is protected by 256-bit AES encryption. Your digital signature is legally binding under the Electronic Transactions Ordinance, 2002.</p>
            </div>
          </aside>
        </div>

        <footer className="mt-10 rounded-[1.75rem] bg-[#16223f] px-8 py-6 text-slate-200 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="text-xl font-semibold text-orange-300">SahulatKar</div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-300">
              <span>Edhi Foundation Logo</span>
              <span>NADRA Verified</span>
              <span>SECP Regulated</span>
            </div>
          </div>
          <div className="mt-4 text-sm text-slate-400">© 2024 SahulatKar. Ethical Fintech Excellence.</div>
        </footer>
      </div>
    </div>
  )
}
