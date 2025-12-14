"use client"

import { useEffect, useState } from "react"
import { CheckCircle, X, MapPin } from "lucide-react"
import Image from "next/image"

const recentPurchases = [
  { name: "Maria S.", city: "São Paulo, SP", time: "agora mesmo", image: "/brazilian-woman-profile-photo.jpg" },
  { name: "João P.", city: "Rio de Janeiro, RJ", time: "1 min atrás", image: "/brazilian-man-profile-photo.jpg" },
  { name: "Ana L.", city: "Belo Horizonte, MG", time: "2 min atrás", image: "/brazilian-woman-smiling-profile.jpg" },
  { name: "Carlos M.", city: "Curitiba, PR", time: "3 min atrás", image: "/brazilian-man-middle-aged-profile.jpg" },
  { name: "Fernanda R.", city: "Salvador, BA", time: "5 min atrás", image: "/brazilian-young-woman-profile.jpg" },
  { name: "Pedro H.", city: "Brasília, DF", time: "6 min atrás", image: "/brazilian-man-professional-profile.jpg" },
  {
    name: "Juliana O.",
    city: "Porto Alegre, RS",
    time: "8 min atrás",
    image: "/brazilian-woman-professional-profile.jpg",
  },
  { name: "Ricardo S.", city: "Fortaleza, CE", time: "10 min atrás", image: "/brazilian-man-casual-profile.jpg" },
]

export function LivePurchasePopup() {
  const [currentPurchase, setCurrentPurchase] = useState<(typeof recentPurchases)[0] | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const showPopup = () => {
      const randomIndex = Math.floor(Math.random() * recentPurchases.length)
      setCurrentPurchase(recentPurchases[randomIndex])
      setIsVisible(true)

      setTimeout(() => {
        setIsVisible(false)
      }, 5000)
    }

    const initialTimeout = setTimeout(showPopup, 8000)

    const interval = setInterval(
      () => {
        showPopup()
      },
      Math.random() * 10000 + 15000,
    )

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [])

  if (!isVisible || !currentPurchase) return null

  return (
    <div className="fixed bottom-24 left-4 md:left-6 z-[90] animate-slide-in">
      <div className="bg-white border border-[#27AE60]/30 rounded-xl p-4 shadow-2xl max-w-xs">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary flex-shrink-0">
            <Image
              src={currentPurchase.image || "/placeholder.svg"}
              alt={currentPurchase.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle className="w-4 h-4 text-[#27AE60] flex-shrink-0" />
              <span className="text-[#27AE60] text-xs font-bold uppercase">Compra Verificada</span>
            </div>
            <p className="text-foreground font-semibold truncate">{currentPurchase.name}</p>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {currentPurchase.city}
            </p>
            <p className="text-primary text-xs mt-1">Comprou {currentPurchase.time}</p>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Acabou de garantir o <strong className="text-foreground">DREAME H12 PRO</strong> com 64% OFF
          </p>
        </div>
      </div>
    </div>
  )
}
