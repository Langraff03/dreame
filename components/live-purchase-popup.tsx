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

    // Then show every 25-45 seconds
    const interval = setInterval(() => {
      if (Math.random() > 0.3) { // 70% chance to show
        showRandomPurchase()
      }
    }, 25000 + Math.random() * 20000)

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
      className={`fixed bottom-24 md:bottom-6 left-3 md:left-6 z-[9999] max-w-[280px] md:max-w-sm transition-all duration-300 ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <div className="bg-white border-2 border-[#27AE60]/30 rounded-xl shadow-xl p-4 flex items-center gap-3 hover:shadow-2xl transition-shadow">
        <div className="w-10 h-10 bg-[#27AE60]/10 rounded-full flex items-center justify-center flex-shrink-0">
          <ShoppingCart className="w-5 h-5 text-[#27AE60]" />
        </div>
        
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-foreground">
            <span className="text-[#27AE60]">{currentPurchase.name}</span> acabou de comprar
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="w-3 h-3" />
            <span>{currentPurchase.city}</span>
            <span>•</span>
            <Clock className="w-3 h-3" />
            <span>há {currentPurchase.timeAgo}</span>
          </div>
        </div>

        <div className="w-2 h-2 bg-[#27AE60] rounded-full animate-pulse flex-shrink-0" />
      </div>
    </div>,
    document.body
  )
}
