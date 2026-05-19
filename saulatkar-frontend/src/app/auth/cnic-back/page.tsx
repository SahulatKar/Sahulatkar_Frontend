"use client"

import { motion } from "framer-motion"
import { useState, useRef } from "react"
import { ArrowRight, Camera, Upload, Shield, FileText, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function CNICBack() {
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
        localStorage.setItem('cnicBackUploaded', 'true')
        router.push('/auth/facial-recognition')
      } else {
        setError("Please upload your CNIC back image")
        setIsLoading(false)
      }
    }, 2000)
  }

  const handleCameraCapture = () => {
    // In a real app, this would open camera
    alert("Camera feature would open here. For demo, please upload an image file.")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-purple-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Upload CNIC Back</h1>
          <p className="text-gray-600">
            Please upload a clear image of your CNIC back side
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-xs text-gray-600">Front uploaded</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-purple-500 rounded-full" />
              <span className="text-xs text-gray-600">Back side</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-gray-300 rounded-full" />
              <span className="text-xs text-gray-600">Face scan</span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-purple-500 h-2 rounded-full" style={{ width: '66%' }} />
          </div>
        </motion.div>

        {/* Upload Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
          <label className="block text-sm font-medium text-gray-700 mb-4">
            CNIC Back Image
          </label>
          <div
            onClick={handleUpload}
            className="relative border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-purple-500 transition-colors cursor-pointer bg-gray-50 hover:bg-purple-50"
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
                  alt="CNIC Back Preview"
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
                    Click to upload CNIC back
                  </p>
                  <p className="text-sm text-gray-500">
                    Make sure the QR code is visible
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Camera Option */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-6 flex justify-center"
        >
          <Button
            type="button"
            onClick={handleCameraCapture}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <Camera className="w-4 h-4" />
            <span>Use Camera</span>
          </Button>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm"
          >
            {error}
          </motion.div>
        )}

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-3"
        >
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading || !selectedFile}
            className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg font-semibold transition-colors disabled:opacity-50"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Uploading...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                Continue to Face Scan
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            )}
          </Button>

          <div className="text-center">
            <button
              type="button"
              onClick={() => router.push('/auth/cnic-front')}
              className="text-gray-600 hover:text-gray-800 text-sm"
            >
              Back to CNIC Front
            </button>
          </div>
        </motion.div>

        {/* Security Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200"
        >
          <div className="flex items-center space-x-2 text-purple-700">
            <Shield className="w-4 h-4" />
            <p className="text-sm">
              Ensure the QR code is clearly visible
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
