"use client"

import { motion } from "framer-motion"
import { useState, useRef } from "react"
import { ArrowRight, Camera, Upload, Shield, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function CNICFront() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.type.startsWith('image/')) {
        setSelectedFile(file)
        const reader = new FileReader()
        reader.onload = (e) => {
          setPreview(e.target?.result as string)
        }
        reader.readAsDataURL(file)
        setError("")
      } else {
        setError("Please select a valid image file")
      }
    }
  }

  const handleUpload = () => {
    fileInputRef.current?.click()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate upload and verification
    setTimeout(() => {
      if (selectedFile) {
        localStorage.setItem('cnicFrontUploaded', 'true')
        router.push('/auth/cnic-back')
      } else {
        setError("Please upload your CNIC front image")
        setIsLoading(false)
      }
    }, 2000)
  }

  const handleCameraCapture = () => {
    // In a real app, this would open camera
    alert("Camera feature would open here. For demo, please upload an image file.")
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - CNIC Upload Form */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white"
      >
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-8"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Upload CNIC Front</h1>
            <p className="text-gray-600">
              Please upload a clear image of your CNIC front side
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Upload Area */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                CNIC Front Image
              </label>
              <div
                onClick={handleUpload}
                className="relative border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-orange-500 transition-colors cursor-pointer bg-gray-50 hover:bg-orange-50"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                
                {preview ? (
                  <div className="space-y-4">
                    <img
                      src={preview}
                      alt="CNIC Front Preview"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="text-sm text-gray-600">
                      <p className="font-medium">{selectedFile?.name}</p>
                      <p>Click to change image</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
                      <Upload className="w-8 h-8 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-lg font-medium text-gray-700">
                        Click to upload CNIC front
                      </p>
                      <p className="text-sm text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Camera Option */}
            <div className="flex justify-center">
              <Button
                type="button"
                onClick={handleCameraCapture}
                variant="outline"
                className="flex items-center space-x-2"
              >
                <Camera className="w-4 h-4" />
                <span>Use Camera</span>
              </Button>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm"
              >
                {error}
              </motion.div>
            )}

            <Button
              type="submit"
              disabled={isLoading || !selectedFile}
              className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-pink-600 transition-all duration-200 disabled:opacity-50"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Uploading...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  Continue to CNIC Back
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              )}
            </Button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => router.push('/auth/otp')}
                className="text-gray-600 hover:text-gray-800 text-sm"
              >
                Back to OTP
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200"
          >
            <div className="flex items-center space-x-2 text-blue-700">
              <Shield className="w-5 h-5" />
              <p className="text-sm">
                <strong>Privacy Protected:</strong> Your CNIC data is encrypted and secure
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Panel - Visual */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden lg:flex lg:w-1/2 items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-600 p-8"
      >
        <div className="text-center text-white max-w-md">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8"
          >
            <FileText className="w-16 h-16" />
          </motion.div>
          <h2 className="text-4xl font-bold mb-4">Identity Verification</h2>
          <p className="text-xl opacity-90 mb-6">
            We need to verify your identity to ensure secure access to your account.
          </p>
          <div className="space-y-4 text-left">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>Upload CNIC front side</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>Upload CNIC back side</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>Facial recognition verification</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>Instant verification process</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
