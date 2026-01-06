"use client"

import { useEffect, useState } from "react"
import { ShoppingCart, MapPin, Clock } from "lucide-react"
import { createPortal } from "react-dom"

const mockPurchases = [
  { name: "Carlos R.", city: "São Paulo, SP", timeAgo: "3 min" },
  { name: "Maria L.", city: "Rio de Janeiro, RJ", timeAgo: "5 min" },
  { name: "João S.", city: "Belo Horizonte, MG", timeAgo: "7 min" },
  { name: "Ana P.", city: "Porto Alegre, RS", timeAgo: "8 min" },
  { name: "Pedro M.", city: "Brasília, DF", timeAgo: "2 min" },
  { name: "Lucia F.", city: "Salvador, BA", timeAgo: "4 min" },
  { name: "Roberto K.", city: "Curitiba, PR", timeAgo: "6 min" },
  { name: "Fernanda T.", city: "Fortaleza, CE", timeAgo: "9 min" },
]

export function LivePurchasePopup() {
  const [currentPurchase, setCurrentPurchase] = useState<typeof mockPurchases[0] | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Show first notification after 10 seconds
    const initialDelay = setTimeout(() => {
      showRandomPurchase()
    }, 10000)

    // Then show every 60-90 seconds (reduced frequency)
    const interval = setInterval(() => {
      if (Math.random() > 0.5) { // 50% chance to show
        showRandomPurchase()
      }
    }, 60000 + Math.random() * 30000)

    return () => {
      clearTimeout(initialDelay)
      clearInterval(interval)
    }
  }, [mounted])

  const showRandomPurchase = () => {
    const randomPurchase = mockPurchases[Math.floor(Math.random() * mockPurchases.length)]
    setCurrentPurchase(randomPurchase)
    setIsVisible(true)

    // Hide after 6 seconds
    setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => setCurrentPurchase(null), 300) // Wait for animation
    }, 6000)
  }

  if (!mounted || !currentPurchase) return null

  return createPortal(
    <div
      className={`fixed bottom-20 md:bottom-4 left-2 md:left-4 z-[50] max-w-[200px] md:max-w-[240px] transition-all duration-300 ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <div className="bg-white border border-[#27AE60]/30 rounded-lg shadow-md p-2.5 flex items-center gap-2 hover:shadow-lg transition-shadow">
        <div className="w-6 h-6 bg-[#27AE60]/10 rounded-full flex items-center justify-center flex-shrink-0">
          <ShoppingCart className="w-3 h-3 text-[#27AE60]" />
        </div>
        
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold text-foreground leading-tight">
            <span className="text-[#27AE60]">{currentPurchase.name}</span> comprou
          </p>
          <p className="text-[10px] text-muted-foreground">há {currentPurchase.timeAgo}</p>
        </div>

        <div className="w-1.5 h-1.5 bg-[#27AE60] rounded-full animate-pulse flex-shrink-0" />
      </div>
    </div>,
    document.body
  )
}
