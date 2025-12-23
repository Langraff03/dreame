"use client"

import { useEffect, useState } from "react"
import { TrendingDown, Calculator, Sparkles } from "lucide-react"

type SavingsCalculatorProps = {
  originalPrice?: number
  currentPrice?: number
  pixDiscount?: number
  showAnimation?: boolean
}

export function SavingsCalculator({
  originalPrice = 699,
  currentPrice = 147,
  pixDiscount = 5,
  showAnimation = true,
}: SavingsCalculatorProps) {
  const [displaySavings, setDisplaySavings] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const baseSavings = originalPrice - currentPrice
  const pixSavingsAmount = (currentPrice * pixDiscount) / 100
  const totalSavings = baseSavings + pixSavingsAmount
  const discountPercentage = Math.round((baseSavings / originalPrice) * 100)

  useEffect(() => {
    if (!showAnimation) {
      setDisplaySavings(totalSavings)
      return
    }

    setIsAnimating(true)
    const duration = 2000 // 2 seconds animation
    const steps = 60
    const increment = totalSavings / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= totalSavings) {
        setDisplaySavings(totalSavings)
        setIsAnimating(false)
        clearInterval(timer)
      } else {
        setDisplaySavings(current)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [totalSavings, showAnimation])

  return (
    <div className="bg-gradient-to-br from-[#27AE60]/10 to-[#00BFA6]/10 border-2 border-[#27AE60]/30 rounded-xl p-4 md:p-6 text-center relative overflow-hidden">
      {/* Background animation */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-transform duration-1000 ${
          isAnimating ? "translate-x-full" : "-translate-x-full"
        }`}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Calculator className="w-5 h-5 text-[#27AE60]" />
          <span className="text-sm font-bold text-[#27AE60] uppercase tracking-wide">
            Sua Economia Total
          </span>
          <Sparkles className="w-4 h-4 text-[#27AE60]" />
        </div>

        <div className="space-y-2">
          {/* Main savings display */}
          <div className="text-3xl md:text-4xl font-black text-[#27AE60]">
            R$ {displaySavings.toFixed(2).replace(".", ",")}
          </div>

          {/* Breakdown */}
          <div className="space-y-1 text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <TrendingDown className="w-4 h-4 text-[#E53935]" />
              <span>Desconto de {discountPercentage}%: R$ {baseSavings.toFixed(2).replace(".", ",")}</span>
            </div>
            {pixDiscount > 0 && (
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-[#00BFA6] rounded-full" />
                <span>PIX adicional ({pixDiscount}%): R$ {pixSavingsAmount.toFixed(2).replace(".", ",")}</span>
              </div>
            )}
          </div>

          {/* Value proposition */}
          <div className="mt-3 pt-3 border-t border-[#27AE60]/20">
            <p className="text-xs font-semibold text-foreground">
              💰 Você está economizando <span className="text-[#27AE60]">mais de {Math.round(totalSavings)}</span> reais nesta compra!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
