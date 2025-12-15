"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { Check, X, Sparkles, Clock, Star, Shield, Zap, TrendingUp } from "lucide-react"

type ColorOption = {
  key: string
  label: string
  image: string
}

const colorOptions: ColorOption[] = [
  { key: "branco", label: "Branco", image: "/images/cores/branco.jpg" },
  { key: "preto", label: "Preto", image: "/images/cores/preto.png" },
  { key: "vermelho", label: "Vermelho", image: "/images/cores/vermelhoo.jpg" },
]

type CheckoutModalProps = {
  open: boolean
  initialKitSelected?: boolean
  onClose: () => void
  onConfirm: (params: { color: string; withKit: boolean }) => void
}

export function CheckoutModal({ open, initialKitSelected = false, onClose, onConfirm }: CheckoutModalProps) {
  const [selectedColor, setSelectedColor] = useState<string>("")
  const [withKit, setWithKit] = useState<boolean>(initialKitSelected)
  const [mounted, setMounted] = useState(false)
  const [timer, setTimer] = useState(300) // 5 minutos em segundos
  const [showPerks, setShowPerks] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (open) {
      setSelectedColor("")
      setWithKit(initialKitSelected)
      setTimer(300)
      
      // Animação dos benefícios
      const timeout = setTimeout(() => setShowPerks(true), 500)
      
      // Timer countdown
      const interval = setInterval(() => {
        setTimer(prev => prev > 0 ? prev - 1 : 0)
      }, 1000)

      return () => {
        clearTimeout(timeout)
        clearInterval(interval)
      }
    }
  }, [open, initialKitSelected])

  if (!open || !mounted) return null

  const minutes = Math.floor(timer / 60)
  const seconds = timer % 60

  const modal = (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-3 md:px-4 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[95vh] relative flex flex-col animate-fade-in-up overflow-hidden">
        
        {/* Header com urgência */}
        <div className="bg-gradient-to-r from-[#E53935] to-[#C62828] px-6 md:px-8 py-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 animate-shimmer" 
               style={{
                 backgroundImage: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                 backgroundSize: "1000px 100%",
               }}
          />
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 rounded-full p-2">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Reserve sua escolha em:</p>
                <div className="flex items-center gap-1">
                  <span className="text-white font-black text-xl tabular-nums">
                    {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
                  </span>
                  <span className="text-white/90 text-sm">min</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors p-1"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6 md:p-8 overflow-y-auto flex-1">
          
          {/* Título principal */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-wide">Passo 1 • Escolha a Cor</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
              Seu <span className="text-gradient">DREAME H12 PRO</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto">
              Selecione a cor do seu aspirador. <strong>Todas as cores têm potência idêntica</strong> - escolha a que mais combina com você!
            </p>
          </div>

          {/* Seleção de cores melhorada */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {colorOptions.map((option, index) => {
              const active = selectedColor === option.key
              return (
                <div key={option.key} className="relative group">
                  <button
                    onClick={() => setSelectedColor(option.key)}
                    className={`relative rounded-2xl border-3 transition-all duration-300 overflow-hidden bg-white w-full ${
                      active 
                        ? "border-primary shadow-premium scale-105" 
                        : "border-border hover:border-primary/50 hover:shadow-lg"
                    }`}
                  >
                    <div className="relative bg-gradient-to-br from-muted/20 to-muted/40 h-44 sm:h-48 md:h-52">
                      <Image 
                        src={option.image} 
                        alt={`${option.label} - Mesma potência e qualidade`}
                        fill 
                        className="object-contain transition-transform group-hover:scale-105" 
                        sizes="(max-width: 768px) 33vw, 25vw" 
                      />
                      
                      {/* Overlay de seleção */}
                      {active && (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center animate-fade-in">
                          <div className="bg-primary rounded-full p-2 shadow-lg animate-scale-up">
                            <Check className="w-6 h-6 text-white font-bold" />
                          </div>
                        </div>
                      )}
                      
                      {/* Badge de popularidade */}
                      {index === 1 && (
                        <div className="absolute top-2 left-2">
                          <div className="bg-secondary text-white px-2 py-1 rounded-full text-[10px] font-bold flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            MAIS ESCOLHIDA
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="py-4 text-center">
                      <span className={`font-bold text-base transition-colors ${
                        active ? "text-primary" : "text-foreground"
                      }`}>
                        {option.label}
                      </span>
                      {active && (
                        <div className="text-xs text-primary font-semibold mt-1 animate-fade-in">
                          ✓ Selecionada
                        </div>
                      )}
                    </div>
                  </button>
                </div>
              )
            })}
          </div>

          {/* Order Bump simplificado */}
          <div className="bg-gradient-to-br from-[#27AE60]/5 to-white border-2 border-[#27AE60]/30 rounded-xl overflow-hidden mb-6">

            <div className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-base font-bold text-foreground">Passo 2 • Kit de Substituição Adicional</h3>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">
                Filtros, escovas e limpeza extra para 1 ano de uso sem preocupação. Valor adicional: <strong>R$ 97</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setWithKit(true)}
                  className={`flex-1 rounded-xl px-4 py-3 text-sm font-bold border transition-colors ${
                    withKit
                      ? "bg-[#27AE60] text-white border-[#27AE60]"
                      : "bg-white text-foreground border-border hover:border-[#27AE60]"
                  }`}
                >
                  Quero levar o kit (+R$ 97)
                </button>
                
                <button
                  onClick={() => setWithKit(false)}
                  className={`flex-1 rounded-xl px-4 py-3 text-sm font-bold border transition-colors ${
                    !withKit
                      ? "bg-muted text-foreground border-border"
                      : "bg-white text-muted-foreground border-border hover:border-muted"
                  }`}
                >
                  Sem kit agora
                </button>
              </div>
            </div>
          </div>

          {/* Resumo premium */}
          <div className="bg-gradient-to-br from-white to-[#F5F7FA] border-2 border-border/50 rounded-xl p-5 mb-6 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-foreground">Resumo do Pedido</h4>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-secondary fill-current" />
                <span className="text-xs font-semibold text-secondary">OFERTA PREMIUM</span>
              </div>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="flex items-center gap-2">
                  Cor: <strong>{selectedColor ? selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1) : "Escolha uma cor"}</strong>
                  {!selectedColor && <span className="text-[#E53935] text-xs">⚠️</span>}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>Kit de Substituição:</span>
                <span className={`font-semibold ${withKit ? "text-[#27AE60]" : "text-muted-foreground"}`}>
                  {withKit ? "✓ Incluído (+R$ 97)" : "Não incluído"}
                </span>
              </div>
              <div className="border-t border-border pt-2 flex justify-between items-center">
                <span className="font-bold text-base">Total Estimado:</span>
                <div className="text-right">
                  <div className="text-xl font-black text-[#E53935]">
                    R$ {withKit ? "346,90" : "249,90"}
                  </div>
                  <div className="text-xs text-muted-foreground">ou 12x sem juros</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            <button
              disabled={!selectedColor}
              onClick={() => onConfirm({ color: selectedColor, withKit })}
              className={`w-full rounded-xl py-4 font-black text-lg text-white flex items-center justify-center gap-3 transition-all duration-300 ${
                selectedColor
                  ? "bg-gradient-to-r from-[#E53935] to-[#C62828] hover:from-[#C62828] hover:to-[#B71C1C] shadow-premium-lg hover:shadow-2xl hover:scale-[1.02]"
                  : "bg-muted text-muted-foreground cursor-not-allowed"
              }`}
            >
              <Sparkles className="w-5 h-5" />
              {selectedColor ? "FINALIZAR PEDIDO COM 64% OFF" : "ESCOLHA UMA COR PARA CONTINUAR"}
              {selectedColor && <TrendingUp className="w-5 h-5" />}
            </button>
            
            <button
              onClick={onClose}
              className="w-full border border-border text-muted-foreground rounded-xl py-3 font-semibold hover:bg-muted/50 transition-colors text-sm"
            >
              Cancelar e voltar
            </button>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground">
              <Shield className="w-3 h-3 inline mr-1" />
              Compra 100% segura • Garantia total • Suporte em português
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}
