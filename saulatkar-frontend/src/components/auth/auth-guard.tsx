"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

interface AuthGuardProps {
  children: React.ReactNode
  requireAdmin?: boolean
  requireUser?: boolean
}

export function AuthGuard({ children, requireAdmin = false, requireUser = false }: AuthGuardProps) {
  const router = useRouter()

  useEffect(() => {
    const checkAuth = () => {
      const isAuthenticated = localStorage.getItem('isAuthenticated')
      const isAdminAuthenticated = localStorage.getItem('isAdminAuthenticated')
      const userRole = localStorage.getItem('userRole')

      if (requireAdmin) {
        // Check admin authentication
        if (!isAdminAuthenticated || userRole !== 'admin') {
          router.push('/auth/login')
          return
        }
      } else if (requireUser) {
        // Check user authentication
        if (!isAuthenticated || userRole !== 'user') {
          router.push('/auth/login')
          return
        }
      }
    }

    checkAuth()
  }, [router])

  // For now, just render children (in real app, show loading while checking)
  return <>{children}</>
}

export function useAuth() {
  const router = useRouter()

  const logout = () => {
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('isAdminAuthenticated')
    localStorage.removeItem('userRole')
    router.push('/auth/login')
  }

  const isAdmin = () => {
    return localStorage.getItem('userRole') === 'admin'
  }

  const isUser = () => {
    return localStorage.getItem('userRole') === 'user'
  }

  const isAuthenticated = () => {
    return localStorage.getItem('isAuthenticated') === 'true' || 
           localStorage.getItem('isAdminAuthenticated') === 'true'
  }

  return {
    logout,
    isAdmin,
    isUser,
    isAuthenticated
  }
}
