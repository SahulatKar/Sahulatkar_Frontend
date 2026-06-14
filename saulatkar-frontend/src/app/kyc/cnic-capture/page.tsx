"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Camera, RotateCw, CheckCircle, AlertCircle, ArrowRight, Upload, X, User, Shield, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function CNICCapture() {
  const [capturedImage, setCapturedImage] = useState(false)
  const [extractedData, setExtractedData] = useState({
    fullName: "MUHAMMAD ARSALAN KHAN",
    cnicNumber: "42181-9283741-3",
    dateOfBirth: "15-08-1995",
    address: "House 123, Street 45, Lahore, Punjab",
    issueDate: "01-01-2020",
    expiryDate: "31-12-2030"
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [livenessStep, setLivenessStep] = useState(0)
  const [livenessComplete, setLivenessComplete] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const livenessSteps = [
    { instruction: "Look straight at the camera", icon: User },
    { instruction: "Smile naturally", icon: CheckCircle },
    { instruction: "Turn your head slowly to the right", icon: RotateCw },
    { instruction: "Turn your head slowly to the left", icon: RotateCw }
  ]

  const handleCapture = () => {
    setIsProcessing(true)
    // Simulate capture and processing
    setTimeout(() => {
      setCapturedImage(true)
      setIsProcessing(false)
    }, 2000)
  }

  const handleRetake = () => {
    setCapturedImage(false)
    setLivenessStep(0)
    setLivenessComplete(false)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setIsProcessing(true)
      setTimeout(() => {
        setCapturedImage(true)
        setIsProcessing(false)
      }, 2000)
    }
  }

  const handleLivenessStep = () => {
    setIsProcessing(true)
    setTimeout(() => {
      if (livenessStep < livenessSteps.length - 1) {
        setLivenessStep(prev => prev + 1)
      } else {
        setLivenessComplete(true)
      }
      setIsProcessing(false)
    }, 3000)
  }

  const handleCompleteKYC = () => {
    // Store KYC completion and redirect to dashboard
    localStorage.setItem('kycCompleted', 'true')
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen">
      {/* CNIC Capture Section */}
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Panel - Camera Interface */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Card className="border-0 shadow-large">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">CNIC Verification</h2>
                    <p className="text-gray-600">Capture or upload your CNIC for verification</p>
                  </div>

                  {/* Camera Frame */}
                  <div className="relative mb-6">
                    <div className="aspect-[3/2] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300">
                      {!capturedImage ? (
                        <div className="text-center">
                          <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-500">Position CNIC within frame</p>
                        </div>
                      ) : (
                        <div className="text-center">
                          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                          <p className="text-green-600 font-medium">CNIC Captured Successfully</p>
                        </div>
                      )}
                    </div>

                    {/* Processing overlay */}
                    {isProcessing && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-2xl">
                        <div className="text-center">
                          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4" />
                          <p className="text-white">Processing...</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    {!capturedImage ? (
                      <>
                        <Button
                          size="xl"
                          onClick={handleCapture}
                          disabled={isProcessing}
                          className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                        >
                          <Camera className="w-5 h-5 mr-2" />
                          Capture Photo
                        </Button>
                        
                        <Button
                          size="xl"
                          variant="outline"
                          onClick={() => fileInputRef.current?.click()}
                          disabled={isProcessing}
                          className="flex-1"
                        >
                          <Upload className="w-5 h-5 mr-2" />
                          Upload Image
                        </Button>
                        
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </>
                    ) : (
                      <>
                        <Button
                          size="xl"
                          variant="outline"
                          onClick={handleRetake}
                          className="flex-1"
                        >
                          <RotateCw className="w-5 h-5 mr-2" />
                          Retake Photo
                        </Button>
                        
                        <Button
                          size="xl"
                          className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                          onClick={() => setLivenessStep(0)}
                        >
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Confirm & Continue →
                        </Button>
                      </>
                    )}
                  </div>

                  {/* Instructions */}
                  {!capturedImage && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200"
                    >
                      <div className="flex items-start space-x-3">
                        <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div className="text-sm text-blue-800">
                          <p className="font-medium mb-1">Tips for best results:</p>
                          <ul className="space-y-1 text-blue-700">
                            <li>• Ensure good lighting and no glare</li>
                            <li>• Place CNIC on a flat, contrasting surface</li>
                            <li>• Make sure all corners are visible</li>
                            <li>• Avoid shadows or blurry images</li>
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Panel - Data Extraction */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="border-0 shadow-large">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Data Extraction</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm text-green-600 font-medium">95% Success</span>
                    </div>
                  </div>

                  {capturedImage ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="space-y-4"
                    >
                      <div className="p-4 bg-gray-50 rounded-xl">
                        <label className="text-sm font-medium text-gray-600 mb-2 block">
                          FULL NAME
                        </label>
                        <p className="text-lg font-semibold text-gray-900">
                          {extractedData.fullName}
                        </p>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-xl">
                        <label className="text-sm font-medium text-gray-600 mb-2 block">
                          CNIC NUMBER
                        </label>
                        <p className="text-lg font-semibold text-gray-900">
                          {extractedData.cnicNumber}
                        </p>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-xl">
                        <label className="text-sm font-medium text-gray-600 mb-2 block">
                          DATE OF BIRTH
                        </label>
                        <p className="text-lg font-semibold text-gray-900">
                          {extractedData.dateOfBirth}
                        </p>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-xl">
                        <label className="text-sm font-medium text-gray-600 mb-2 block">
                          ADDRESS
                        </label>
                        <p className="text-lg font-semibold text-gray-900">
                          {extractedData.address}
                        </p>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-200">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="text-green-800 font-medium">Verified</span>
                        </div>
                        <span className="text-sm text-green-600">Auto-extracted</span>
                      </div>

                      <Button
                        size="xl"
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                        onClick={() => setLivenessStep(0)}
                      >
                        Proceed to Facial Verification →
                      </Button>
                    </motion.div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Camera className="w-12 h-12 text-gray-400" />
                      </div>
                      <p className="text-gray-500">Capture CNIC to see extracted data</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facial Liveness Detection Section */}
      {capturedImage && (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <Card className="border-0 shadow-large">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Facial Verification</h2>
                    <p className="text-gray-600">Complete the liveness check to verify your identity</p>
                  </div>

                  {!livenessComplete ? (
                    <div className="space-y-6">
                      {/* Liveness Step */}
                      <motion.div
                        key={livenessStep}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                      >
                        <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                          <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {React.createElement(livenessSteps[livenessStep].icon, { 
                              className: "w-16 h-16 text-gray-600" 
                            })}
                          </motion.div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {livenessSteps[livenessStep].instruction}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          Step {livenessStep + 1} of {livenessSteps.length}
                        </p>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                          <motion.div
                            className="h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${((livenessStep + 1) / livenessSteps.length) * 100}%` }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>

                        <Button
                          size="xl"
                          onClick={handleLivenessStep}
                          disabled={isProcessing}
                          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                        >
                          {isProcessing ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                              Processing...
                            </>
                          ) : (
                            <>
                              Complete Step {livenessStep + 1}
                              <ArrowRight className="w-5 h-5 ml-2" />
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-center space-y-6"
                    >
                      <div className="w-32 h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <CheckCircle className="w-16 h-16 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Verification Complete!</h3>
                      <p className="text-gray-600">
                        Your identity has been successfully verified. You can now proceed to your dashboard.
                      </p>
                      
                      <Button
                        size="xl"
                        onClick={handleCompleteKYC}
                        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                      >
                        Go to Dashboard
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Privacy Notice */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="p-6 bg-orange-50 rounded-xl border border-orange-200">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                <div className="text-sm text-orange-800">
                  <p className="font-medium mb-1">Privacy & Security:</p>
                  <p className="text-orange-700">
                    Your CNIC data is encrypted and stored securely on Pakistan-based servers. We comply with all data protection regulations.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
