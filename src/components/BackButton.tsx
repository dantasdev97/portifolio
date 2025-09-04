"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export function BackButton() {
  const router = useRouter()
  
  return (
    <button
      onClick={() => router.back()}
      className="group flex items-center gap-2 text-sm text-white bg-green-600 hover:bg-green-700 active:bg-green-800 px-4 py-2.5 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl cursor-pointer border border-green-500/20 hover:border-green-400/30"
      aria-label="Voltar à página anterior"
    >
      <ArrowLeft 
        size={18} 
        className="transition-transform duration-300 group-hover:-translate-x-1 group-active:translate-x-0" 
      />
      <span className="font-medium">Voltar</span>
      
      {/* Efeito de brilho no hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -z-10" />
    </button>
  )
}
