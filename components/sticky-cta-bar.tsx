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

    return sharedState.subscribe(() => {
      setStockCount(sharedState.stockCount)
    })
  }, [])

  if (!isVisible || isDismissed) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-2xl border-t-4 border-primary/30 pt-3 md:pt-5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] md:pb-[calc(1.25rem+env(safe-area-inset-bottom))] px-3 md:px-6 z-[60] shadow-premium-lg animate-slide-in">
      <button
        onClick={() => setIsDismissed(true)}
        className="absolute top-2 md:top-3 right-2 md:right-3 text-muted-foreground hover:text-foreground transition-colors bg-white/50 rounded-full p-1"
      >
        <X className="w-4 h-4 md:w-5 md:h-5" />
      </button>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-6 pr-8 sm:pr-0">
        <div className="hidden sm:flex items-center gap-3 md:gap-5">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 border border-border">
            <img
              src="https://images.seeklogo.com/logo-png/53/2/dreame-logo-png_seeklogo-536846.png"
              alt="DREAME"
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
          </div>
          <div>
            <p className="font-black text-foreground text-base md:text-lg">DREAME H12 PRO</p>
            <div className="flex items-center gap-2 md:gap-3">
              <span className="line-through text-muted-foreground text-xs md:text-sm">R$ 699</span>
              <span className="text-primary font-black text-xl md:text-2xl">R$ 249,90</span>
              <span className="bg-[#E53935] text-white px-1.5 md:px-2 py-0.5 rounded-md text-[10px] md:text-xs font-bold">
                -64%
              </span>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3 bg-gradient-to-r from-[#E53935]/10 to-[#C62828]/10 border-2 border-[#E53935]/30 rounded-xl px-5 py-3 shadow-lg">
          <Flame className="w-6 h-6 text-[#E53935] animate-pulse-fast" />
          <div>
            <p className="text-foreground font-black text-sm">Restam {stockCount} unidades</p>
            <p className="text-muted-foreground text-xs font-semibold">Estoque acabando!</p>
          </div>
        </div>

        <Button
          size="lg"
          className="w-full sm:w-auto bg-gradient-to-r from-[#E53935] to-[#C62828] hover:from-[#C62828] hover:to-[#B71C1C] text-white font-black px-6 md:px-10 py-5 md:py-6 shadow-premium-lg shadow-[#E53935]/40 transition-all duration-300 hover:scale-[1.02] rounded-xl text-sm md:text-base"
          onClick={() => setShowCheckout(true)}
        >
          <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 mr-2" />
          <span className="hidden sm:inline">COMPRAR COM 64% OFF</span>
          <span className="sm:hidden">COMPRAR 64% OFF</span>
          <Sparkles className="w-3 h-3 md:w-4 md:h-4 ml-2" />
        </Button>
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
