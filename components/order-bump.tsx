"use client"

import { Check, Sparkles } from "lucide-react"
import Image from "next/image"

type OrderBumpProps = {
  selected: boolean
  onToggle: (next: boolean) => void
}

export function OrderBump({ selected, onToggle }: OrderBumpProps) {
  return (
    <div
      className={`relative w-full border-4 rounded-2xl overflow-visible transition-all duration-300 ${
        selected
          ? "border-[#27AE60] bg-gradient-to-br from-[#27AE60]/5 to-[#27AE60]/10 shadow-premium-lg"
          : "border-primary/30 bg-white hover:border-primary/50"
      }`}
    >
      {/* Badge destaque */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
        <div className="bg-gradient-to-r from-[#E53935] to-[#C62828] text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-black shadow-premium-lg flex items-center gap-1.5 md:gap-2">
          <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
          OFERTA ESPECIAL
        </div>
      </div>

      <button
        onClick={() => onToggle(!selected)}
        aria-pressed={selected}
        className="w-full text-left p-4 sm:p-5 md:p-6 lg:p-8 pt-8 md:pt-10 cursor-pointer hover:bg-gradient-to-br hover:from-white hover:to-[#F5F7FA] transition-colors"
      >
        <div className="flex flex-col gap-4 md:gap-5">
          <div className="flex items-start gap-3 md:gap-4">
            <div className="flex-shrink-0 mt-1">
              <div
                className={`w-7 h-7 md:w-8 md:h-8 rounded-lg border-3 flex items-center justify-center transition-all duration-300 ${
                  selected
                    ? "bg-[#27AE60] border-[#27AE60] scale-110"
                    : "bg-white border-muted-foreground/30 hover:border-primary"
                }`}
              >
                {selected && <Check className="w-4 h-4 md:w-5 md:h-5 text-white font-bold" />}
              </div>
            </div>
            <div className="min-w-0 space-y-1 md:space-y-2">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-foreground leading-tight">
                Adicione o Kit de Substituição Completo
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Garanta a manutenção perfeita do seu DREAME H12 PRO por mais de 1 ano com o kit oficial de peças de
                reposição
              </p>
            </div>
          </div>

          <div className="relative w-full h-44 sm:h-56 md:h-64 lg:h-72 bg-gradient-to-br from-white to-[#F5F7FA] rounded-xl border-2 border-border/50 overflow-hidden shadow-md">
            <Image
              src="https://m.media-amazon.com/images/I/81GNCJRi0CL._AC_SX679_.jpg"
              alt="Conjunto de Substituicao H12 PRO"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 100vw, 100vw"
              priority
            />
          </div>

          {/* Conteudo */}
          <div className="flex-1 min-w-0 space-y-4 md:space-y-5">
            <div className="bg-gradient-to-r from-[#F5F7FA] to-white rounded-xl p-4 md:p-5 border border-border/50">
              <p className="text-xs sm:text-sm font-bold text-foreground mb-2 md:mb-3 uppercase tracking-wide">
                Inclui:
              </p>
              <div className="grid gap-2 md:gap-2.5">
                {[
                  "4x Filtros HEPA de Alta Eficiência",
                  "2x Escovas Roladoras Duplas",
                  "Kit de Limpeza e Manutenção",
                  "Manual de Troca Ilustrado",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#27AE60]/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#27AE60] font-bold" />
                    </div>
                    <span className="text-xs sm:text-sm text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Preço */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-6 flex-wrap">
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground line-through mb-1">De R$ 181,00</p>
                <div className="flex items-baseline gap-1.5 md:gap-2">
                  <span className="text-sm sm:text-base md:text-lg font-bold text-muted-foreground">Por apenas</span>
                  <span className="text-3xl md:text-4xl font-black text-[#27AE60]">R$ 97</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#E53935]/10 to-[#C62828]/10 px-3 sm:px-4 md:px-5 py-2 md:py-3 rounded-xl border-2 border-[#E53935]/20">
                <p className="text-[11px] sm:text-xs md:text-sm font-black text-[#E53935] uppercase tracking-wide">
                  Economia de R$ 84
                </p>
                <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5">46% de desconto</p>
              </div>
            </div>

            {/* Beneficio adicional */}
            <div className="flex items-start gap-2 md:gap-3 bg-gradient-to-r from-primary/5 to-secondary/5 px-3 md:px-4 py-2.5 md:py-3 rounded-lg border border-primary/10">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-secondary flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm md:text-base text-foreground font-semibold leading-relaxed">
                Mantenha seu aspirador funcionando como novo por muito mais tempo!
              </p>
            </div>
          </div>
        </div>
      </button>

      {/* Indicador de seleção */}
      {selected && (
        <div className="bg-gradient-to-r from-[#27AE60] to-[#229954] text-white text-center py-2.5 md:py-3 px-4 font-bold text-xs md:text-sm">
          Kit de Substituição adicionado ao seu pedido!
        </div>
      )}
    </div>
  )
}
