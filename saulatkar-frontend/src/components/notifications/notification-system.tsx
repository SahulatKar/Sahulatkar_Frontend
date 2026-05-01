"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Bell, X, CheckCircle, AlertCircle, Info, Calendar, CreditCard, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Notification {
  id: string
  type: 'payment' | 'order' | 'system' | 'promotion'
  title: string
  message: string
  timestamp: Date
  read: boolean
  action?: {
    label: string
    onClick: () => void
  }
}

export function NotificationSystem() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'payment',
      title: 'Payment Due Soon',
      message: 'Your installment payment of PKR 25,000 is due in 3 days for iPhone 15 Pro',
      timestamp: new Date(Date.now() - 1000 * 60 * 60),
      read: false,
      action: {
        label: 'Pay Now',
        onClick: () => console.log('Navigate to payment')
      }
    },
    {
      id: '2',
      type: 'order',
      title: 'Order Shipped',
      message: 'Your Samsung TV 55" has been shipped and will arrive in 2-3 days',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
      read: false,
      action: {
        label: 'Track Order',
        onClick: () => console.log('Navigate to order tracking')
      }
    },
    {
      id: '3',
      type: 'system',
      title: 'Credit Limit Increased',
      message: 'Your credit limit has been increased to PKR 75,000 based on your good payment history',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
      read: true
    },
    {
      id: '4',
      type: 'promotion',
      title: 'Special Offer',
      message: 'Get 0% processing fee on all electronics this week only',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48),
      read: true
    }
  ])

  const [isOpen, setIsOpen] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)

  useEffect(() => {
    const count = notifications.filter(n => !n.read).length
    setUnreadCount(count)
  }, [notifications])

  const markAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => 
      n.id === id ? { ...n, read: true } : n
    ))
  }

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })))
  }

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'payment': return <CreditCard className="w-5 h-5" />
      case 'order': return <ShoppingBag className="w-5 h-5" />
      case 'system': return <Info className="w-5 h-5" />
      case 'promotion': return <Bell className="w-5 h-5" />
      default: return <Bell className="w-5 h-5" />
    }
  }

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'payment': return "text-orange-600 bg-orange-100"
      case 'order': return "text-blue-600 bg-blue-100"
      case 'system': return "text-green-600 bg-green-100"
      case 'promotion': return "text-purple-600 bg-purple-100"
      default: return "text-gray-600 bg-gray-100"
    }
  }

  const formatTimestamp = (date: Date) => {
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const days = Math.floor(hours / 24)

    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`
    return 'Just now'
  }

  return (
    <>
      {/* Notification Bell */}
      <div className="relative">
        <Button
          variant="ghost"
          onClick={() => setIsOpen(!isOpen)}
          className="relative"
        >
          <Bell className="w-5 h-5" />
          {unreadCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center"
            >
              {unreadCount}
            </motion.span>
          )}
        </Button>

        {/* Notification Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 max-h-96 overflow-hidden"
            >
              {/* Header */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Notifications</h3>
                  {unreadCount > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={markAllAsRead}
                      className="text-xs"
                    >
                      Mark all as read
                    </Button>
                  )}
                </div>
              </div>

              {/* Notifications List */}
              <div className="overflow-y-auto max-h-80">
                {notifications.length === 0 ? (
                  <div className="p-8 text-center">
                    <Bell className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No notifications</p>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-100">
                    {notifications.map((notification) => (
                      <motion.div
                        key={notification.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                          !notification.read ? 'bg-blue-50' : ''
                        }`}
                        onClick={() => markAsRead(notification.id)}
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${getNotificationColor(notification.type)}`}>
                            {getNotificationIcon(notification.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <p className={`text-sm font-medium text-gray-900 ${!notification.read ? 'font-semibold' : ''}`}>
                                  {notification.title}
                                </p>
                                <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                                <p className="text-xs text-gray-500 mt-2">
                                  {formatTimestamp(notification.timestamp)}
                                </p>
                              </div>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  removeNotification(notification.id)
                                }}
                                className="ml-2 text-gray-400 hover:text-gray-600"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                            {notification.action && (
                              <div className="mt-3">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    notification.action?.onClick()
                                  }}
                                >
                                  {notification.action.label}
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-3 border-t border-gray-200">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-xs"
                  onClick={() => console.log('View all notifications')}
                >
                  View all notifications
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

// Payment Reminder Component
export function PaymentReminder({ dueDate, amount, productName }: {
  dueDate: string
  amount: string
  productName: string
}) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4"
    >
      <div className="flex items-start space-x-3">
        <Calendar className="w-5 h-5 text-orange-600 mt-0.5" />
        <div className="flex-1">
          <h4 className="font-semibold text-orange-900">Payment Reminder</h4>
          <p className="text-orange-800 text-sm mt-1">
            Your payment of <span className="font-semibold">{amount}</span> for {productName} is due on {dueDate}
          </p>
          <div className="flex space-x-3 mt-3">
            <Button
              size="sm"
              className="bg-orange-600 hover:bg-orange-700"
              onClick={() => console.log('Navigate to payment')}
            >
              Pay Now
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setIsVisible(false)}
            >
              Dismiss
            </Button>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-orange-400 hover:text-orange-600"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  )
}
