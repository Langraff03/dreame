"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { X, Clock, Gift, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

type ExitIntentModalProps = {
  isOpen: boolean
  onClose: () => void
  onAccept: () => void
}

export function ExitIntentModal({ isOpen, onClose, onAccept }: ExitIntentModalProps) {
  const [mounted, setMounted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes countdown

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          onClose()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isOpen, onClose])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  if (!mounted || !isOpen) return null

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 relative overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header with animated background */}
        <div className="bg-gradient-to-r from-[#E53935] to-[#C62828] p-6 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 animate-pulse" />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-6 h-6 text-yellow-300" />
              <span className="font-black text-lg">ESPERE!</span>
            </div>
            <h3 className="text-2xl font-black mb-1">Não Perca Essa Oportunidade!</h3>
            <p className="text-white/90 text-sm">Você estava quase garantindo seu DREAME H12 PRO</p>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {/* Special offer */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-[#00BFA6]/10 border border-[#00BFA6]/30 rounded-full px-4 py-2 mb-3">
              <Gift className="w-5 h-5 text-[#00BFA6]" />
              <span className="font-bold text-[#00BFA6] text-sm">OFERTA EXCLUSIVA</span>
            </div>
            
            <h4 className="text-xl font-black text-foreground mb-2">
              Desconto Extra de <span className="text-[#E53935]">7% OFF</span>
            </h4>
            <p className="text-muted-foreground text-sm">
              Use o cupom <span className="font-bold text-foreground bg-[#F5F7FA] px-2 py-1 rounded">DREAME10</span> e pague apenas
            </p>
            
            <div className="my-4">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-muted-foreground line-through text-lg">R$ 249,90</span>
                <span className="text-3xl font-black text-[#27AE60]">R$ 232,41</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">ou 12x de R$ 19,37 sem juros</p>
            </div>
          </div>

          {/* Countdown */}
          <div className="bg-[#E53935]/5 border border-[#E53935]/20 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-[#E53935]" />
              <span className="text-sm font-bold text-[#E53935]">Esta oferta expira em:</span>
            </div>
            <div className="text-2xl font-black text-[#E53935] font-mono">
              {formatTime(timeLeft)}
            </div>
          </div>

          {/* Benefits reminder */}
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#27AE60] rounded-full" />
              <span>Frete GRÁTIS para todo Brasil</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#27AE60] rounded-full" />
              <span>Garantia de 1 ano + Suporte em português</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#27AE60] rounded-full" />
              <span>Satisfação garantida ou seu dinheiro de volta</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 border-border text-muted-foreground hover:bg-muted"
            >
              Não, obrigado
            </Button>
            <Button
              onClick={onAccept}
              className="flex-1 bg-gradient-to-r from-[#27AE60] to-[#00BFA6] hover:from-[#00BFA6] hover:to-[#27AE60] text-white font-bold shadow-lg"
            >
              QUERO O DESCONTO!
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground mt-2">
            ⚡ Cupom válido apenas para esta sessão
          </p>
        </div>
      </div>
    </div>,
    document.body
  )
}