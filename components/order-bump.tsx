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
        className={`relative w-full border-2 rounded-3xl overflow-hidden transition-all duration-300 ${
          selected
            ? "border-[#27AE60]/60 bg-gradient-to-br from-[#27AE60]/5 via-white to-[#27AE60]/10 shadow-lg"
            : "border-border bg-white hover:border-primary/40 hover:shadow-md"
        }`}
      >
        
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
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-xl border-2 flex items-center justify-center transition-all duration-300 ${
                    selected
                      ? "bg-[#27AE60] border-[#27AE60] shadow-md"
                      : "bg-white border-muted-foreground/30 hover:border-[#27AE60] group-hover:scale-105"
                  }`}
                >
                  {selected && <Check className="w-5 h-5 md:w-6 md:h-6 text-white font-bold animate-scale-up" />}
                </div>
              </div>
              
              <div className="min-w-0 space-y-2 md:space-y-3 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl md:text-2xl font-black text-foreground leading-tight">
                    Kit de Substituição Completo (opcional)
                    <span className="block text-sm md:text-base font-semibold text-muted-foreground mt-1">
                      Use se quiser manutenção prolongada sem pensar em reposições
                    </span>
                  </h3>
                  
                  {/* Badge de recomendação */}
                  <div className="bg-muted text-foreground/80 border border-border rounded-full px-3 py-1 flex-shrink-0 text-xs font-semibold">
                    <Shield className="w-3 h-3 inline mr-1" />
                    Opcional
                  </div>
                </div>
                
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  O aspirador já vem pronto para uso. Adicione o kit apenas se quiser manter a performance máxima por 1 ano sem se preocupar em comprar filtros/escovas depois.
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
              
              {/* Overlay com informações - reposicionado para não cobrir a imagem */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-lg px-2.5 py-1.5 border border-border/30 shadow-sm text-center min-w-[140px]">
                <p className="text-[11px] font-bold text-foreground leading-tight">Kit Original Dreame</p>
                <p className="text-[10px] text-muted-foreground leading-tight">Qualidade garantida</p>
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
            <div className="bg-gradient-to-br from-[#27AE60]/5 via-white to-[#27AE60]/5 rounded-2xl p-5 md:p-6 border border-[#27AE60]/20">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
                
                {/* Preços */}
                <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                    <p className="text-lg md:text-xl text-muted-foreground line-through">De R$ 37,90</p>
                    <div className="bg-[#E53935] text-white px-3 py-1 rounded-full text-sm font-bold">
                      -46%
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-base md:text-lg font-bold text-muted-foreground">Por apenas</span>
                    <span className="text-4xl md:text-5xl font-black text-[#27AE60]">R$ 19,90</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">ou 6x de R$ 3,32 sem juros</p>
                </div>

                {/* Cards de economia */}
                <div className="flex gap-3">
                  <div className="bg-gradient-to-br from-[#E53935]/10 to-[#C62828]/10 px-4 py-3 rounded-xl border-2 border-[#E53935]/20 text-center flex-1">
                    <p className="text-sm md:text-base font-black text-[#E53935]">ECONOMIA</p>
                    <p className="text-lg md:text-xl font-black text-[#E53935]">R$ 18</p>
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
            <div className="bg-muted/50 border border-border rounded-xl p-4">
              <p className="text-sm font-bold text-foreground text-center">
                Oferta opcional: adicione agora ou siga apenas com o aspirador.
              </p>
            </div>

            {/* Benefício adicional premium */}
            <div className="flex items-start gap-3 bg-gradient-to-r from-primary/5 to-secondary/5 px-4 md:px-5 py-4 md:py-5 rounded-xl border border-primary/15 shadow-sm">
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm sm:text-base md:text-lg text-foreground font-bold leading-relaxed mb-1">
                  Garantia de performance (opcional)
                </p>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  O kit ajuda a manter até 99,7% da eficiência por mais de um ano. Sem o kit, o aspirador já chega pronto para uso imediato.
                </p>
              </div>
            </div>
          </div>
        </button>

        {/* Indicador de seleção premium */}
        {selected && (
          <div className="bg-muted text-foreground text-center py-4 px-6 font-bold text-sm md:text-base animate-fade-in rounded-b-3xl border-t border-border">
            <span>Kit adicionado. Você pode remover a qualquer momento antes de finalizar.</span>
          </div>
        )}
      </div>
    </div>
  )
}
