"use client"

import { motion } from "framer-motion"
import { useState, useRef } from "react"
import { Camera, RotateCw, CheckCircle, AlertCircle, ArrowRight, Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CNICCapture() {
  const [capturedImage, setCapturedImage] = useState(false)
  const [extractedData, setExtractedData] = useState({
    fullName: "MUHAMMAD ARSALAN KHAN",
    cnicNumber: "42181-9283741-3"
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">SahulatKar</span>
            </div>
            <div className="flex items-center space-x-2">
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
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Capture CNIC Front
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Position your Identity Card within the frame for automatic data extraction
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Panel - Camera/Upload */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="overflow-hidden border-0 shadow-large">
              <CardContent className="p-8">
                {/* Camera Frame */}
                <div className="relative mb-6">
                  <div className="aspect-[3/2] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden relative">
                    {capturedImage ? (
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-32 h-20 bg-white/50 rounded-lg mb-4 mx-auto" />
                          <p className="text-gray-600">CNIC Image Captured</p>
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <Camera className="w-16 h-16 text-gray-400 mb-4" />
                          <p className="text-gray-500">Position CNIC here</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Corner indicators */}
                    {!capturedImage && (
                      <>
                        <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-orange-500 rounded-tl-lg" />
                        <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-orange-500 rounded-tr-lg" />
                        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-orange-500 rounded-bl-lg" />
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-orange-500 rounded-br-lg" />
                      </>
                    )}

                    {/* Processing overlay */}
                    {isProcessing && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4" />
                          <p className="text-white">Processing...</p>
                        </div>
                      </div>
                    )}
                  </div>
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
                    >
                      Confirm & Continue →
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </motion.div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Camera className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-500 mb-2">No image captured yet</p>
                    <p className="text-sm text-gray-400">
                      Capture or upload your CNIC to begin data extraction
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-6 p-4 bg-orange-50 rounded-xl border border-orange-200"
            >
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                <div className="text-sm text-orange-800">
                  <p className="font-medium mb-1">Privacy & Security:</p>
                  <p className="text-orange-700">
                    Your CNIC data is encrypted and stored securely on Pakistan-based servers. We comply with all data protection regulations.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="container mx-auto">
          <div className="flex items-center justify-around">
            <button className="flex flex-col items-center space-y-1 p-2 text-gray-600 hover:text-orange-600 transition-colors">
              <div className="w-6 h-6 bg-gray-200 rounded" />
              <span className="text-xs">Home</span>
            </button>
            <button className="flex flex-col items-center space-y-1 p-2">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <Camera className="w-6 h-6 text-white" />
              </div>
            </button>
            <button className="flex flex-col items-center space-y-1 p-2 text-gray-600 hover:text-orange-600 transition-colors">
              <div className="w-6 h-6 bg-gray-200 rounded" />
              <span className="text-xs">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
