"use client"

import { useEffect, useState } from "react"
import { ShoppingBag, MapPin } from "lucide-react"

const recentBuyers = [
  { name: "Maria S.", city: "São Paulo", time: "2 min" },
  { name: "João P.", city: "Rio de Janeiro", time: "4 min" },
  { name: "Ana L.", city: "Belo Horizonte", time: "6 min" },
  { name: "Carlos M.", city: "Curitiba", time: "7 min" },
  { name: "Fernanda R.", city: "Salvador", time: "9 min" },
  { name: "Pedro H.", city: "Brasília", time: "11 min" },
  { name: "Juliana T.", city: "Porto Alegre", time: "13 min" },
  { name: "Rafael D.", city: "Recife", time: "14 min" },
  { name: "Camila V.", city: "Fortaleza", time: "16 min" },
  { name: "Bruno A.", city: "Florianópolis", time: "17 min" },
  { name: "Larissa F.", city: "Campinas", time: "19 min" },
  { name: "Diego N.", city: "Goiânia", time: "21 min" },
  { name: "Patrícia C.", city: "Vitória", time: "22 min" },
  { name: "Leonardo R.", city: "São Luís", time: "24 min" },
  { name: "Bianca M.", city: "João Pessoa", time: "26 min" },
  { name: "Eduardo G.", city: "Maceió", time: "27 min" },
  { name: "Marina K.", city: "Uberlândia", time: "28 min" },
  { name: "André V.", city: "Belém", time: "29 min" },
]

export function SocialProofBar() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % recentBuyers.length)
    }, 3000 + Math.floor(Math.random() * 2000)) // 3-5s para maior naturalidade
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
