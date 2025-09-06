import { Space_Grotesk, Poppins } from 'next/font/google'
import { AuthProvider } from '@/contexts/AuthContext'

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

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${poppins.variable}`}>
      <body className="font-poppins">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
