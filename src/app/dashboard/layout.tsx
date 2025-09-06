"use client";

import { Space_Grotesk, Poppins } from 'next/font/google'
import { AuthProvider } from '@/contexts/AuthContext'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { DashboardSidebar } from '@/components/DashboardSidebar'

// Configuração das fontes
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${poppins.variable}`}>
      <body className="font-poppins bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <AuthProvider>
          <ProtectedRoute>
            <div className="flex h-screen w-screen bg-gray-50 dark:bg-gray-900">
              {/* Sidebar */}
              <DashboardSidebar />
              
              {/* Main Content - Ocupa todo o espaço restante */}
              <div className="flex-1 flex flex-col overflow-hidden min-w-0">
                {children}
              </div>
            </div>
          </ProtectedRoute>
        </AuthProvider>
      </body>
    </html>
  )
}
