"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Link, Play, Pause, Square, RotateCcw, Eye, Code, Globe, Activity, CheckCircle, AlertCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ExecutionTask {
  id: string
  orderId: string
  merchant: string
  product: string
  status: 'running' | 'completed' | 'failed' | 'queued' | 'paused'
  progress: number
  startTime: Date
  estimatedCompletion?: Date
  currentStep: string
  steps: string[]
  logs: LogEntry[]
}

interface LogEntry {
  timestamp: Date
  level: 'info' | 'warning' | 'error' | 'success'
  message: string
  details?: string
}

export default function ExecutionMonitor() {
  const [tasks, setTasks] = useState<ExecutionTask[]>([
    {
      id: 'task-001',
      orderId: 'ORD-2024-001',
      merchant: 'Daraz',
      product: 'iPhone 15 Pro 256GB',
      status: 'running',
      progress: 65,
      startTime: new Date(Date.now() - 1000 * 60 * 5),
      currentStep: 'Processing payment',
      steps: [
        'Initializing browser',
        'Navigating to product page',
        'Adding to cart',
        'Filling shipping form',
        'Processing payment',
        'Confirming order'
      ],
      logs: [
        { timestamp: new Date(Date.now() - 1000 * 60 * 5), level: 'info', message: 'Task started' },
        { timestamp: new Date(Date.now() - 1000 * 60 * 4), level: 'success', message: 'Browser initialized successfully' },
        { timestamp: new Date(Date.now() - 1000 * 60 * 3), level: 'info', message: 'Navigated to product page' },
        { timestamp: new Date(Date.now() - 1000 * 60 * 2), level: 'success', message: 'Product added to cart' },
        { timestamp: new Date(Date.now() - 1000 * 60 * 1), level: 'info', message: 'Filling shipping information' },
        { timestamp: new Date(Date.now() - 1000 * 30), level: 'warning', message: 'Payment form detected, proceeding with caution' }
      ]
    },
    {
      id: 'task-002',
      orderId: 'ORD-2024-002',
      merchant: 'Amazon',
      product: 'MacBook Air M2',
      status: 'completed',
      progress: 100,
      startTime: new Date(Date.now() - 1000 * 60 * 15),
      estimatedCompletion: new Date(Date.now() - 1000 * 60 * 10),
      currentStep: 'Order confirmed',
      steps: [
        'Initializing browser',
        'Navigating to product page',
        'Adding to cart',
        'Filling shipping form',
        'Processing payment',
        'Confirming order'
      ],
      logs: [
        { timestamp: new Date(Date.now() - 1000 * 60 * 15), level: 'info', message: 'Task started' },
        { timestamp: new Date(Date.now() - 1000 * 60 * 14), level: 'success', message: 'Order completed successfully' },
        { timestamp: new Date(Date.now() - 1000 * 60 * 10), level: 'success', message: 'Confirmation received' }
      ]
    },
    {
      id: 'task-003',
      orderId: 'ORD-2024-003',
      merchant: 'Naheed',
      product: 'Samsung TV 55"',
      status: 'failed',
      progress: 40,
      startTime: new Date(Date.now() - 1000 * 60 * 8),
      currentStep: 'Payment failed',
      steps: [
        'Initializing browser',
        'Navigating to product page',
        'Adding to cart',
        'Filling shipping form',
        'Processing payment',
        'Confirming order'
      ],
      logs: [
        { timestamp: new Date(Date.now() - 1000 * 60 * 8), level: 'info', message: 'Task started' },
        { timestamp: new Date(Date.now() - 1000 * 60 * 7), level: 'success', message: 'Cart populated successfully' },
        { timestamp: new Date(Date.now() - 1000 * 60 * 5), level: 'error', message: 'Payment gateway error: Card declined' },
        { timestamp: new Date(Date.now() - 1000 * 60 * 5), level: 'error', message: 'Task failed - retry required' }
      ]
    }
  ])

  const [selectedTask, setSelectedTask] = useState<ExecutionTask | null>(null)
  const [isPaused, setIsPaused] = useState(false)

  // Simulate real-time updates
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setTasks(prev => prev.map(task => {
        if (task.status === 'running' && task.progress < 100) {
          const newProgress = Math.min(task.progress + Math.random() * 10, 100)
          const stepIndex = Math.floor((newProgress / 100) * task.steps.length)
          const newStatus = newProgress >= 100 ? 'completed' : 'running'
          
          return {
            ...task,
            progress: newProgress,
            status: newStatus,
            currentStep: task.steps[Math.min(stepIndex, task.steps.length - 1)],
            estimatedCompletion: newStatus === 'completed' ? new Date() : task.estimatedCompletion
          }
        }
        return task
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [isPaused])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return "text-blue-600 bg-blue-100"
      case 'completed': return "text-green-600 bg-green-100"
      case 'failed': return "text-red-600 bg-red-100"
      case 'queued': return "text-gray-600 bg-gray-100"
      case 'paused': return "text-orange-600 bg-orange-100"
      default: return "text-gray-600 bg-gray-100"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'running': return <Activity className="w-4 h-4" />
      case 'completed': return <CheckCircle className="w-4 h-4" />
      case 'failed': return <AlertCircle className="w-4 h-4" />
      case 'queued': return <Clock className="w-4 h-4" />
      case 'paused': return <Pause className="w-4 h-4" />
      default: return <Clock className="w-4 h-4" />
    }
  }

  const getLogLevelColor = (level: string) => {
    switch (level) {
      case 'success': return "text-green-600 bg-green-100"
      case 'warning': return "text-orange-600 bg-orange-100"
      case 'error': return "text-red-600 bg-red-100"
      default: return "text-blue-600 bg-blue-100"
    }
  }

  const formatDuration = (startTime: Date, endTime?: Date) => {
    const end = endTime || new Date()
    const duration = end.getTime() - startTime.getTime()
    const minutes = Math.floor(duration / (1000 * 60))
    const seconds = Math.floor((duration % (1000 * 60)) / 1000)
    return `${minutes}m ${seconds}s`
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/admin">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
              </Link>
              <span className="text-xl font-bold text-gray-900">Execution Engine Monitor</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant={isPaused ? "default" : "outline"}
                onClick={() => setIsPaused(!isPaused)}
                className="bg-orange-600 hover:bg-orange-700"
              >
                {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                {isPaused ? "Resume" : "Pause"}
              </Button>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-400 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-4 gap-6 mb-8"
        >
          {[
            { label: "Running Tasks", value: tasks.filter(t => t.status === 'running').length, color: "from-blue-500 to-blue-600" },
            { label: "Completed", value: tasks.filter(t => t.status === 'completed').length, color: "from-green-500 to-green-600" },
            { label: "Failed", value: tasks.filter(t => t.status === 'failed').length, color: "from-red-500 to-red-600" },
            { label: "Queued", value: tasks.filter(t => t.status === 'queued').length, color: "from-gray-500 to-gray-600" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="border-0 shadow-medium">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tasks List */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="border-0 shadow-large">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Active Tasks</h3>
                <div className="space-y-4">
                  {tasks.map((task, index) => (
                    <motion.div
                      key={task.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div
                        className={`border rounded-xl p-4 cursor-pointer transition-all duration-200 ${
                          selectedTask?.id === task.id ? "border-orange-500 bg-orange-50" : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => setSelectedTask(task)}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(task.status)}`}>
                              {getStatusIcon(task.status)}
                              <span>{task.status}</span>
                            </span>
                            <div>
                              <p className="font-medium text-gray-900">{task.product}</p>
                              <p className="text-sm text-gray-600">{task.orderId} • {task.merchant}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-600">{formatDuration(task.startTime, task.estimatedCompletion)}</p>
                            <p className="text-xs text-gray-500">{task.currentStep}</p>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full ${
                              task.status === 'completed' ? 'bg-green-500' :
                              task.status === 'failed' ? 'bg-red-500' :
                              task.status === 'running' ? 'bg-blue-500' : 'bg-gray-500'
                            }`}
                            initial={{ width: 0 }}
                            animate={{ width: `${task.progress}%` }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <p className="text-xs text-gray-600">{Math.round(task.progress)}% complete</p>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Code className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Task Details */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {selectedTask ? (
              <Card className="border-0 shadow-large">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Task Details</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(selectedTask.status)}`}>
                      {getStatusIcon(selectedTask.status)}
                      <span>{selectedTask.status}</span>
                    </span>
                  </div>

                  <div className="space-y-6">
                    {/* Task Info */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Information</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Order ID</span>
                          <span className="font-medium">{selectedTask.orderId}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Merchant</span>
                          <span className="font-medium">{selectedTask.merchant}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Product</span>
                          <span className="font-medium">{selectedTask.product}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Duration</span>
                          <span className="font-medium">{formatDuration(selectedTask.startTime)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Steps */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Execution Steps</h4>
                      <div className="space-y-2">
                        {selectedTask.steps.map((step, index) => (
                          <div
                            key={step}
                            className={`flex items-center space-x-3 p-2 rounded-lg ${
                              step === selectedTask.currentStep ? 'bg-blue-50' : 'bg-gray-50'
                            }`}
                          >
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                              index < selectedTask.steps.indexOf(selectedTask.currentStep)
                                ? 'bg-green-500 text-white'
                                : step === selectedTask.currentStep
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-300 text-gray-600'
                            }`}>
                              {index < selectedTask.steps.indexOf(selectedTask.currentStep) ? '✓' : index + 1}
                            </div>
                            <span className={`text-sm ${
                              step === selectedTask.currentStep ? 'font-medium text-blue-900' : 'text-gray-700'
                            }`}>
                              {step}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Controls */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Controls</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <Button variant="outline" size="sm">
                          <Pause className="w-4 h-4 mr-2" />
                          Pause
                        </Button>
                        <Button variant="outline" size="sm">
                          <Square className="w-4 h-4 mr-2" />
                          Stop
                        </Button>
                        <Button variant="outline" size="sm">
                          <RotateCcw className="w-4 h-4 mr-2" />
                          Retry
                        </Button>
                        <Button variant="outline" size="sm">
                          <Code className="w-4 h-4 mr-2" />
                          Debug
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-0 shadow-large">
                <CardContent className="p-6 text-center">
                  <Eye className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Select a task to view details</p>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>

        {/* Logs Section */}
        {selectedTask && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8"
          >
            <Card className="border-0 shadow-large">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Execution Logs</h3>
                <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm max-h-96 overflow-y-auto">
                  {selectedTask.logs.map((log, index) => (
                    <div key={index} className="mb-2">
                      <span className="text-gray-400">
                        [{log.timestamp.toLocaleTimeString()}]
                      </span>
                      <span className={`ml-2 px-2 py-1 rounded text-xs ${getLogLevelColor(log.level)}`}>
                        {log.level.toUpperCase()}
                      </span>
                      <span className="ml-2 text-gray-300">{log.message}</span>
                      {log.details && (
                        <div className="ml-6 mt-1 text-gray-400 text-xs">{log.details}</div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  )
}
