"use client"

import { useEffect, useState } from "react"
import { ShoppingBag, MapPin } from "lucide-react"

const recentBuyers = [
  { name: "Maria S.", city: "São Paulo", time: "2 min" },
  { name: "João P.", city: "Rio de Janeiro", time: "5 min" },
  { name: "Ana L.", city: "Belo Horizonte", time: "8 min" },
  { name: "Carlos M.", city: "Curitiba", time: "12 min" },
  { name: "Fernanda R.", city: "Salvador", time: "15 min" },
  { name: "Pedro H.", city: "Brasília", time: "18 min" },
]

export function SocialProofBar() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % recentBuyers.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const buyer = recentBuyers[currentIndex]

  return (
    <section className="bg-card border-y border-border py-4">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-center gap-4 text-sm">
          <div className="flex items-center gap-2 animate-pulse">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">{buyer.name}</span>
            <span className="text-muted-foreground">de</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-foreground">{buyer.city}</span>
            </span>
            <span className="text-muted-foreground">comprou há</span>
            <span className="text-primary font-bold">{buyer.time}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
