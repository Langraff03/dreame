"use client"

import { Check, Sparkles, Clock, Shield } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

type OrderBumpProps = {
  selected: boolean
  onToggle: (next: boolean) => void
}

export function OrderBump({ selected, onToggle }: OrderBumpProps) {
  const [showAnimation, setShowAnimation] = useState(false)

  useEffect(() => {
    // Animação inicial
    const timeout = setTimeout(() => setShowAnimation(true), 300)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="relative w-full">

      <div
        className={`relative w-full border-4 rounded-3xl overflow-visible transition-all duration-500 ${showAnimation ? 'animate-fade-in-up' : ''} ${
          selected
            ? "border-[#27AE60] bg-gradient-to-br from-[#27AE60]/5 via-white to-[#27AE60]/10 shadow-premium-xl transform scale-[1.02]"
            : "border-primary/30 bg-white hover:border-primary/60 hover:shadow-lg"
        }`}
      >
        
        {/* Badge destaque premium - ajustado para não sobrepor */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-gradient-to-r from-[#E53935] to-[#C62828] text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-black shadow-premium-lg flex items-center gap-1.5 md:gap-2">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden sm:inline">OFERTA ESPECIAL • 46% OFF</span>
            <span className="sm:hidden">46% OFF</span>
          </div>
        </div>

        <button
          onClick={() => onToggle(!selected)}
          aria-pressed={selected}
          className="w-full text-left p-5 sm:p-6 md:p-8 lg:p-10 pt-12 md:pt-14 cursor-pointer hover:bg-gradient-to-br hover:from-white hover:to-[#F5F7FA] transition-all duration-300 group"
        >
          <div className="flex flex-col gap-5 md:gap-6">
            
            {/* Header com checkbox animado */}
            <div className="flex items-start gap-4 md:gap-5">
              <div className="flex-shrink-0 mt-1">
                <div
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-xl border-3 flex items-center justify-center transition-all duration-300 ${
                    selected
                      ? "bg-[#27AE60] border-[#27AE60] scale-110 shadow-lg"
                      : "bg-white border-muted-foreground/30 hover:border-[#27AE60] group-hover:scale-105"
                  }`}
                >
                  {selected && <Check className="w-5 h-5 md:w-6 md:h-6 text-white font-bold animate-scale-up" />}
                </div>
              </div>
              
              <div className="min-w-0 space-y-2 md:space-y-3 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-foreground leading-tight">
                    Kit de Substituição Completo
                    <span className="block text-sm md:text-base font-semibold text-[#27AE60] mt-1">
                      ✨ Mantenha como novo por mais de 1 ano
                    </span>
                  </h3>
                  
                  {/* Badge de recomendação */}
                  <div className="bg-gradient-to-r from-secondary/20 to-[#FF6B35]/20 border border-secondary/30 rounded-full px-3 py-1 flex-shrink-0">
                    <span className="text-xs font-bold text-secondary">
                      <Shield className="w-3 h-3 inline mr-1" />
                      RECOMENDADO
                    </span>
                  </div>
                </div>
                
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">⚠️ IMPORTANTE:</strong> Evite a frustração de ficar sem filtros ou escovas! 
                  Este kit garante performance máxima e <span className="text-[#27AE60] font-semibold">economia de até R$ 84</span> 
                  comparado a comprar separadamente.
                </p>
              </div>
            </div>

            {/* Imagem do produto melhorada */}
            <div className="relative w-full h-48 sm:h-60 md:h-72 lg:h-80 bg-gradient-to-br from-white via-[#F5F7FA] to-white rounded-2xl border-2 border-border/50 overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
              <Image
                src="https://m.media-amazon.com/images/I/81GNCJRi0CL._AC_SX679_.jpg"
                alt="Kit de Substituição Completo DREAME H12 PRO"
                fill
                className="object-contain p-4 transition-transform group-hover:scale-105"
                sizes="(min-width: 1024px) 100vw, 100vw"
                priority
              />
              
              {/* Overlay com informações */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-border/50">
                <p className="text-xs font-bold text-foreground">Kit Original Dreame</p>
                <p className="text-[10px] text-muted-foreground">Qualidade Garantida</p>
              </div>
            </div>

            {/* Lista de benefícios aprimorada */}
            <div className="bg-gradient-to-r from-[#F5F7FA] to-white rounded-2xl p-5 md:p-6 border border-border/50 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm sm:text-base font-black text-foreground uppercase tracking-wide flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#27AE60]" />
                  O que você recebe:
                </p>
                <div className="text-xs bg-[#27AE60]/10 text-[#27AE60] px-2 py-1 rounded-full font-bold">
                  9 ITENS
                </div>
              </div>
              
              <div className="grid gap-3 md:gap-3.5">
                {[
                  { item: "4x Filtros HEPA de Alta Eficiência", value: "R$ 49 cada" },
                  { item: "2x Escovas Roladoras Duplas Premium", value: "R$ 39 cada" },
                  { item: "Kit de Limpeza e Manutenção", value: "R$ 25" },
                  { item: "Manual de Troca Ilustrado + Suporte", value: "R$ 15" },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center justify-between gap-3 group/item">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#27AE60]/15 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#27AE60]/25 transition-colors">
                        <Check className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#27AE60] font-bold" />
                      </div>
                      <span className="text-sm sm:text-base text-foreground font-medium flex-1">{benefit.item}</span>
                    </div>
                    <span className="text-xs text-muted-foreground font-semibold">{benefit.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Seção de preços e economia */}
            <div className="bg-gradient-to-br from-[#27AE60]/5 via-white to-[#27AE60]/5 rounded-2xl p-5 md:p-6 border-2 border-[#27AE60]/20">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
                
                {/* Preços */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <p className="text-lg md:text-xl text-muted-foreground line-through">De R$ 181,00</p>
                    <div className="bg-[#E53935] text-white px-3 py-1 rounded-full text-sm font-bold">
                      -46%
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-base md:text-lg font-bold text-muted-foreground">Por apenas</span>
                    <span className="text-4xl md:text-5xl font-black text-[#27AE60]">R$ 97</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">ou 6x de R$ 16,16 sem juros</p>
                </div>

                {/* Cards de economia */}
                <div className="flex gap-3">
                  <div className="bg-gradient-to-br from-[#E53935]/10 to-[#C62828]/10 px-4 py-3 rounded-xl border-2 border-[#E53935]/20 text-center flex-1">
                    <p className="text-sm md:text-base font-black text-[#E53935]">ECONOMIA</p>
                    <p className="text-lg md:text-xl font-black text-[#E53935]">R$ 84</p>
                    <p className="text-xs text-muted-foreground">46% desconto</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#27AE60]/10 to-[#229954]/10 px-4 py-3 rounded-xl border-2 border-[#27AE60]/20 text-center flex-1">
                    <p className="text-sm md:text-base font-black text-[#27AE60]">DURAÇÃO</p>
                    <p className="text-lg md:text-xl font-black text-[#27AE60]">1+ ANO</p>
                    <p className="text-xs text-muted-foreground">uso garantido</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Alerta de urgência simplificado */}
            <div className="bg-gradient-to-r from-[#E53935]/10 to-[#C62828]/10 border border-[#E53935]/20 rounded-xl p-4">
              <p className="text-sm font-bold text-foreground text-center">
                ⚡ Oferta válida apenas para compras feitas hoje junto com o aspirador
              </p>
            </div>

            {/* Benefício adicional premium */}
            <div className="flex items-start gap-3 bg-gradient-to-r from-primary/5 to-secondary/5 px-4 md:px-5 py-4 md:py-5 rounded-xl border border-primary/15 shadow-sm">
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm sm:text-base md:text-lg text-foreground font-bold leading-relaxed mb-1">
                  🎯 Garantia TOTAL de Performance
                </p>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Com o kit, você mantém a potência de sucção em <strong>99,7% da eficiência original</strong> por mais de um ano, 
                  garantindo limpeza profissional sempre!
                </p>
              </div>
            </div>
          </div>
        </button>

        {/* Indicador de seleção premium */}
        {selected && (
          <div className="bg-gradient-to-r from-[#27AE60] to-[#229954] text-white text-center py-4 px-6 font-bold text-sm md:text-base animate-fade-in shadow-inner">
            <div className="flex items-center justify-center gap-2">
              <Check className="w-5 h-5" />
              <span>✨ Kit de Substituição adicionado com sucesso!</span>
              <Sparkles className="w-5 h-5" />
            </div>
            <p className="text-xs mt-1 text-white/90">Você economizou R$ 84 e garantiu 1+ ano de uso otimizado</p>
          </div>
        )}
      </div>
    </div>
  )
}
