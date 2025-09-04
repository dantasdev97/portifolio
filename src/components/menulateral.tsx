"use client"

import { usePathname } from "next/navigation"
import { Card } from "@/components/ui/card"
import { House, UserCircle, MonitorCog, NotebookPen, Mail } from "lucide-react"

interface MenuLateralProps {
  onNavigate: (href: string) => void
}

const menuItems = [
  { icon: <House size={24} />, label: "Resumo", href: "/resumo" },
  { icon: <UserCircle size={24} />, label: "Sobre", href: "/sobre" },
  { icon: <MonitorCog size={24} />, label: "Portfólio", href: "/portfolio" },
  { icon: <NotebookPen size={24} />, label: "Blog", href: "/blog" },
  { icon: <Mail size={24} />, label: "Contato", href: "/contato" },
]

export function MenuLateral({ onNavigate }: MenuLateralProps) {
  const pathname = usePathname()

  return (
    <Card className="flex flex-col items-center gap-5 w-20 shadow-md bg-[#1D252B] text-white border-none py-4">
      {menuItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <button
            key={item.href}
            onClick={() => onNavigate(item.href)}
            className={`flex flex-col items-center gap-1 text-xs font-medium rounded-lg p-2 transition-all duration-300 ease-out
              hover:scale-110 hover:text-green-500 hover:bg-green-500/10
              ${isActive ? "text-green-500 scale-110 bg-green-500/10" : "text-white"}`}
          >
            <div className={`transition-transform duration-300 ${isActive ? 'rotate-12' : 'rotate-0'}`}>
              {item.icon}
            </div>
            <span className="font-poppins">{item.label}</span>
          </button>
        )
      })}
    </Card>
  )
}
