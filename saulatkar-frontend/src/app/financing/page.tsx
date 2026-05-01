"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Link, CheckCircle, Shield, FileText, Calculator, ArrowRight, Download, Info, PenTool, Lock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Financing() {
  const [selectedPlan, setSelectedPlan] = useState("12")
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [showKFS, setShowKFS] = useState(false)
  const [digitalSignature, setDigitalSignature] = useState("")
  const [isSigning, setIsSigning] = useState(false)
  const [wakalahSigned, setWakalahSigned] = useState(false)
  const [signatureData, setSignatureData] = useState<any>(null)

  const financingPlans = [
    {
      id: "6",
      duration: "6 Months",
      monthlyPayment: "PKR 58,333",
      totalProfit: "PKR 50,000",
      apr: "8.5%",
      recommended: false
    },
    {
      id: "12", 
      duration: "12 Months",
      monthlyPayment: "PKR 29,167",
      totalProfit: "PKR 50,000",
      apr: "8.5%",
      recommended: true
    },
    {
      id: "18",
      duration: "18 Months", 
      monthlyPayment: "PKR 19,444",
      totalProfit: "PKR 50,000",
      apr: "8.5%",
      recommended: false
    }
  ]

  const orderDetails = {
    items: [
      { name: "iPhone 15 Pro 256GB", price: "PKR 299,999" },
      { name: "MacBook Air M2 512GB", price: "PKR 249,999" },
      { name: "Samsung 55\" QLED TV", price: "PKR 149,999" }
    ],
    totalAmount: "PKR 699,997",
    merchantFee: "PKR 0",
    totalFinanced: "PKR 699,997"
  }

  const kfsDetails = {
    profitRate: "8.5% per annum",
    murabahaPrice: "PKR 749,997",
    totalProfit: "PKR 50,000",
    effectiveRate: "8.5% APR",
    latePaymentFee: "PKR 500 per instance",
    earlySettlement: "No penalty",
    grievanceOfficer: "complaints@saulatkar.com",
    regulatoryBody: "SECP Pakistan"
  }

  const handleDigitalSignature = async () => {
    setIsSigning(true)
    
    // Simulate digital signature process
    setTimeout(() => {
      const signaturePayload = {
        signatureId: `sig-${Date.now()}`,
        userId: "user-123",
        documentId: "wakalah-agreement-001",
        signatureData: digitalSignature,
        timestamp: new Date().toISOString(),
        ipAddress: "192.168.1.1",
        deviceFingerprint: "fp-abc123",
        hash: "sha256-hash-placeholder",
        verified: true
      }
      
      setSignatureData(signaturePayload)
      setWakalahSigned(true)
      setIsSigning(false)
    }, 2000)
  }

  const generateWakalahPDF = () => {
    // Simulate PDF generation
    const pdfData = {
      documentId: `wakalah-${Date.now()}`,
      userId: "user-123",
      planId: selectedPlan,
      amount: orderDetails.totalFinanced,
      profitRate: kfsDetails.profitRate,
      signatureData: signatureData,
      generatedAt: new Date().toISOString()
    }
    
    // Store for download
    localStorage.setItem('wakalahPDF', JSON.stringify(pdfData))
    
    // Simulate download
    const link = document.createElement('a')
    link.href = '#'
    link.download = `wakalah-agreement-${Date.now()}.pdf`
    link.click()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
              </Link>
              <span className="text-xl font-bold text-gray-900">SahulatKar</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-400 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900">Shariah-Compliant Financing</h1>
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-green-600" />
              <span className="text-green-600 font-medium">Shariah Certified</span>
            </div>
          </div>
          <p className="text-gray-600">
            Review your financing options under the Agency Murabaha model
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-0 shadow-large">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Order Details</h3>
                
                <div className="space-y-4 mb-6">
                  {orderDetails.items.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-600">{item.name}</span>
                      <span className="font-medium">{item.price}</span>
                    </div>
                  ))}
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Amount</span>
                      <span className="font-semibold">{orderDetails.totalAmount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Merchant Fee</span>
                      <span className="font-semibold text-green-600">{orderDetails.merchantFee}</span>
                    </div>
                    <div className="flex justify-between text-lg">
                      <span className="font-bold">Total Financed</span>
                      <span className="font-bold text-orange-600">{orderDetails.totalFinanced}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-800">Shariah Compliance</span>
                  </div>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• No Riba (Interest)</li>
                    <li>• Agency Murabaha Model</li>
                    <li>• Transparent Profit Rate</li>
                    <li>• No Hidden Charges</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Financing Plans */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="border-0 shadow-large">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Choose Your Plan</h3>
                
                <div className="space-y-4 mb-8">
                  {financingPlans.map((plan) => (
                    <motion.div
                      key={plan.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div
                        className={`relative border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                          selectedPlan === plan.id
                            ? "border-orange-500 bg-orange-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => setSelectedPlan(plan.id)}
                      >
                        {plan.recommended && (
                          <div className="absolute -top-3 left-6">
                            <span className="bg-orange-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                              Recommended
                            </span>
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                              {plan.duration}
                            </h4>
                            <div className="space-y-1">
                              <div className="flex items-center space-x-2">
                                <Calculator className="w-4 h-4 text-gray-400" />
                                <span className="text-2xl font-bold text-orange-600">
                                  {plan.monthlyPayment}
                                </span>
                                <span className="text-gray-600">/month</span>
                              </div>
                              <div className="text-sm text-gray-600">
                                Total Profit: {plan.totalProfit}
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-lg font-semibold text-gray-900 mb-1">
                              {plan.apr}
                            </div>
                            <div className="text-sm text-gray-600">APR</div>
                            
                            {selectedPlan === plan.id && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="mt-2"
                              >
                                <CheckCircle className="w-6 h-6 text-orange-600" />
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Key Fact Statement */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-6 h-6 text-blue-600" />
                      <h4 className="text-lg font-semibold text-blue-900">Key Fact Statement (KFS)</h4>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowKFS(!showKFS)}
                    >
                      {showKFS ? "Hide" : "View"} Details
                    </Button>
                  </div>
                  
                  {showKFS && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-3"
                    >
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Profit Rate:</span>
                          <span className="font-medium ml-2">{kfsDetails.profitRate}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Murabaha Price:</span>
                          <span className="font-medium ml-2">{kfsDetails.murabahaPrice}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Total Profit:</span>
                          <span className="font-medium ml-2">{kfsDetails.totalProfit}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Effective Rate:</span>
                          <span className="font-medium ml-2">{kfsDetails.effectiveRate}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Late Payment Fee:</span>
                          <span className="font-medium ml-2">{kfsDetails.latePaymentFee}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Early Settlement:</span>
                          <span className="font-medium ml-2 text-green-600">{kfsDetails.earlySettlement}</span>
                        </div>
                      </div>
                      
                      <div className="border-t pt-3 mt-3">
                        <div className="text-sm text-gray-600">
                          <p><strong>Grievance Officer:</strong> {kfsDetails.grievanceOfficer}</p>
                          <p><strong>Regulatory Body:</strong> {kfsDetails.regulatoryBody}</p>
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Download KFS PDF
                      </Button>
                    </motion.div>
                  )}
                </div>

                {/* Wakalah Agreement */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <Info className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div className="text-sm text-yellow-800">
                      <p className="font-medium mb-1">Agency Wakalah Agreement</p>
                      <p className="text-yellow-700">
                        By proceeding, you authorize SahulatKar to act as your agent in purchasing the above products under the Murabaha financing model. The platform will purchase the items and resell them to you at a cost-plus-profit price.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Terms Acceptance */}
                <div className="mb-6">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      className="mt-1 w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                    />
                    <span className="text-sm text-gray-600">
                      I have read and understood the Key Fact Statement, terms of the Agency Wakalah Agreement, and agree to the Murabaha financing terms. I understand this is a Shariah-compliant financing arrangement.
                    </span>
                  </label>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <Button
                    size="xl"
                    className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!acceptedTerms}
                  >
                    Accept & Proceed
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    size="xl"
                    variant="outline"
                    className="px-8"
                  >
                    Save for Later
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
