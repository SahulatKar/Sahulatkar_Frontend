"use client"

import { useRouter } from "next/navigation"
import { CheckCircle, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PurchaseConfirmed() {
  const router = useRouter()

  const handleDashboard = () => {
    router.push('/dashboard')
  }

  const handleDownload = () => {
    // placeholder: trigger a download or open PDF
    alert('Download Contract PDF - placeholder')
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white rounded-2xl p-10 shadow-lg text-center">
        <div className="mx-auto mb-6 w-28 h-28 rounded-full bg-orange-50 flex items-center justify-center">
          <CheckCircle className="w-12 h-12 text-orange-600" />
        </div>
        <h1 className="text-3xl font-semibold mb-3">Purchase Confirmed Successfully!</h1>
        <p className="text-slate-600 mb-8">Your Shariah-compliant financing agreement has been executed. Your digital credit limit is updated and ready for use.</p>

        <div className="grid gap-4 sm:grid-cols-2">
          <Button onClick={handleDashboard} className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg">
            Go to Dashboard
          </Button>
          <Button onClick={handleDownload} variant="outline" className="w-full">
            <Download className="mr-2" /> Download Contract PDF
          </Button>
        </div>
      </div>
    </div>
  )
}
