"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart, X, Flame, Droplets, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"
import { sharedState } from "./urgency-top-bar"
import { CheckoutModal } from "./checkout-modal"

export function StickyCtaBar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const [stockCount, setStockCount] = useState(sharedState.stockCount)
  const [showCheckout, setShowCheckout] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!isDismissed) {
        setIsVisible(window.scrollY > 600)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  useEffect(() => {
    sharedState.init()
    setStockCount(sharedState.stockCount)

    const unsubscribe = sharedState.subscribe(() => {
      setStockCount(sharedState.stockCount)
    })
    
    return () => {
      unsubscribe()
    }
  }, [])

  if (!isVisible || isDismissed) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/98 to-white/95 backdrop-blur-2xl border-t-4 border-gradient-to-r from-[#E53935]/40 to-[#C62828]/40 pt-4 md:pt-6 pb-[calc(1rem+env(safe-area-inset-bottom))] md:pb-[calc(1.5rem+env(safe-area-inset-bottom))] px-4 md:px-6 z-[60] shadow-2xl shadow-black/20 animate-slide-in">
      {/* Linha decorativa superior com gradiente */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E53935] via-[#FF4444] to-[#C62828] opacity-80" />
      <button
        onClick={() => setIsDismissed(true)}
        className="absolute top-3 md:top-4 right-3 md:right-4 text-muted-foreground hover:text-[#E53935] transition-colors bg-white/80 hover:bg-white rounded-full p-1.5 shadow-md border border-border/20"
        aria-label="Fechar barra de oferta"
      >
        <X className="w-4 h-4 md:w-5 md:h-5" />
      </button>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6 pr-12 sm:pr-0">
        <div className="hidden sm:flex items-center gap-4 md:gap-6">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-white to-gray-50 rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0 border-2 border-primary/20 ring-2 ring-primary/10">
            <img
              src="https://images.seeklogo.com/logo-png/53/2/dreame-logo-png_seeklogo-536846.png"
              alt="DREAME"
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
          </div>
          <div>
            <p className="font-black text-foreground text-lg md:text-xl mb-1">DREAME H12 PRO</p>
            <div className="flex items-center gap-3 md:gap-4">
              <span className="line-through text-muted-foreground text-sm md:text-base font-medium">R$ 699</span>
              <span className="text-[#E53935] font-black text-2xl md:text-3xl">R$ 249,90</span>
              <span className="bg-gradient-to-r from-[#E53935] to-[#C62828] text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-black shadow-lg transform -rotate-2">
                -64% OFF
              </span>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4 bg-gradient-to-r from-[#E53935]/15 to-[#C62828]/15 border-2 border-[#E53935]/40 rounded-2xl px-6 py-4 shadow-xl backdrop-blur-sm">
          <div className="relative">
            <Flame className="w-7 h-7 text-[#E53935] animate-pulse" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#E53935] rounded-full animate-bounce" />
          </div>
          <div>
            <p className="text-foreground font-black text-base">Restam {stockCount} unidades</p>
            <p className="text-[#E53935] text-sm font-bold">🔥 Oferta por tempo limitado!</p>
          </div>
        </div>

        <div className="relative group">
          {/* Efeito de brilho de fundo */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#E53935] via-[#FF6B6B] to-[#C62828] rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-300 animate-pulse-slow" />
          
          <Button
            size="lg"
            className="relative w-full sm:w-auto bg-gradient-to-r from-[#E53935] via-[#FF4444] to-[#C62828] hover:from-[#C62828] hover:to-[#B71C1C] text-white font-black px-6 sm:px-8 md:px-12 py-5 sm:py-6 md:py-7 shadow-2xl shadow-[#E53935]/50 transition-all duration-500 hover:scale-[1.05] hover:shadow-[#E53935]/70 rounded-2xl text-sm sm:text-base md:text-lg leading-tight whitespace-nowrap flex items-center justify-center gap-3 border-2 border-white/20 ring-2 ring-[#E53935]/30 overflow-hidden group-hover:ring-[#E53935]/50"
            onClick={() => setShowCheckout(true)}
          >
            {/* Efeito de shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            
            {/* Conteúdo do botão */}
            <div className="relative flex items-center justify-center gap-3">
              <div className="relative">
                <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping" />
              </div>
              
              <span className="font-black group-hover:scale-105 transition-transform">
                QUERO MEU DREAME H12 PRO
              </span>
              
              <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full">
                <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                <span className="text-xs font-black">64% OFF</span>
              </div>
            </div>
          </Button>
        </div>
      </div>

      <CheckoutModal
        open={showCheckout}
        onClose={() => setShowCheckout(false)}
        onConfirm={({ withKit }) => {
          const url = withKit
            ? "https://seguro.dreamebrasil.com/api/public/shopify?product=1649147895347&store=16491"
            : "https://seguro.dreamebrasil.com/api/public/shopify?product=1649145998974&store=16491"
          window.location.href = url
        }}
      />
    </div>
  )
}
