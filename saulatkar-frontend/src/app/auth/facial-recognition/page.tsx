"use client"

import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { ArrowRight, Camera, User, Shield, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function FacialRecognition() {
  const [isScanning, setIsScanning] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)
  const [error, setError] = useState("")
  const [cameraActive, setCameraActive] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (cameraActive) {
      startCamera()
    }
    return () => {
      stopCamera()
    }
  }, [cameraActive])

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: "user" } 
      })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
    } catch (err) {
      console.error("Camera access denied:", err)
      setError("Camera access denied. Please allow camera permissions and try again.")
      setCameraActive(false)
    }
  }

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream
      stream.getTracks().forEach(track => track.stop())
    }
  }

  const handleStartScanning = () => {
    setCameraActive(true)
    setError("")
  }

  const handleScan = () => {
    setIsScanning(true)
    setScanProgress(0)

    // Simulate facial recognition scan
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            localStorage.setItem('facialRecognitionComplete', 'true')
            router.push('/auth/verification-success')
          }, 500)
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  const handleRetake = () => {
    setIsScanning(false)
    setScanProgress(0)
    setError("")
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Facial Recognition */}
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
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Facial Recognition</h1>
            <p className="text-gray-600">
              Position your face in the frame for verification
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
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600">CNIC uploaded</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600">CNIC verified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 border-2 border-green-500 rounded-full" />
                <span className="text-sm text-gray-600">Face scan</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full" style={{ width: '85%' }} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Camera/Scan Area */}
            <div className="relative">
              <div className="relative w-full h-64 bg-gray-900 rounded-xl overflow-hidden">
                {!cameraActive ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-400 mb-4">Camera not active</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      muted
                      className="w-full h-full object-cover"
                    />
                    {isScanning && (
                      <div className="absolute inset-0 bg-green-500/20">
                        <div className="absolute inset-0 border-4 border-green-500 rounded-xl animate-pulse" />
                        <motion.div
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <div className="w-32 h-32 border-4 border-green-500 rounded-full" />
                        </motion.div>
                      </div>
                    )}
                  </>
                )}
                
                {/* Scan Progress */}
                {isScanning && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 left-4 right-4 bg-black/70 rounded-lg p-3"
                  >
                    <div className="text-white text-sm mb-2">Scanning... {scanProgress}%</div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-200"
                        style={{ width: `${scanProgress}%` }}
                      />
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm flex items-center space-x-2"
              >
                <AlertCircle className="w-4 h-4" />
                <span>{error}</span>
              </motion.div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              {!cameraActive ? (
                <Button
                  onClick={handleStartScanning}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-200"
                >
                  <div className="flex items-center justify-center">
                    <Camera className="w-5 h-5 mr-2" />
                    Start Camera
                  </div>
                </Button>
              ) : !isScanning ? (
                <Button
                  onClick={handleScan}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-200"
                >
                  <div className="flex items-center justify-center">
                    <User className="w-5 h-5 mr-2" />
                    Start Face Scan
                  </div>
                </Button>
              ) : (
                <Button
                  disabled
                  className="w-full bg-gray-400 text-white py-3 rounded-lg font-semibold"
                >
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Scanning...
                  </div>
                </Button>
              )}

              <div className="flex space-x-3">
                <button
                  onClick={handleRetake}
                  className="flex-1 text-gray-600 hover:text-gray-800 text-sm py-2"
                >
                  Retake Photo
                </button>
                <button
                  onClick={() => router.push('/auth/cnic-back')}
                  className="flex-1 text-gray-600 hover:text-gray-800 text-sm py-2"
                >
                  Back
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200"
          >
            <div className="flex items-center space-x-2 text-green-700">
              <Shield className="w-5 h-5" />
              <p className="text-sm">
                <strong>Privacy Protected:</strong> Your facial data is encrypted and never stored
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
        className="hidden lg:flex lg:w-1/2 items-center justify-center bg-gradient-to-br from-green-500 via-blue-500 to-purple-600 p-8"
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
            <User className="w-16 h-16" />
          </motion.div>
          <h2 className="text-4xl font-bold mb-4">Final Step!</h2>
          <p className="text-xl opacity-90 mb-6">
            Complete your identity verification with a quick facial scan.
          </p>
          <div className="space-y-4 text-left">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>✓ CNIC front uploaded</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>✓ CNIC back uploaded</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>Facial recognition scan</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>🎉 Account ready!</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
