"use client"

import { Button } from "@/components/ui/button"
import { Truck, ShieldCheck, Clock, Flame, CreditCard, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"
import { OrderBump } from "./order-bump"

const included = [
  "DREAME H12 PRO Aspirador Vertical",
  "Base de Carregamento Rápido",
  "Bocal Multi-Superfície",
  "Bocal para Frestas",
  "Escova Dupla Motorizada",
  "Escova para Estofados",
  "Filtro HEPA Extra (R$49 de bônus)",
  "Manual em Português",
  "Garantia Estendida de 1 Ano",
]

export function OfferSection() {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 47, seconds: 33 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="oferta"
      className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-white via-[#F5F7FA] to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-1.5 md:gap-2.5 bg-gradient-to-r from-[#E53935] to-[#C62828] text-white px-5 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-lg font-black mb-6 md:mb-8 shadow-premium-lg shadow-[#E53935]/30 animate-pulse-fast">
            <Flame className="w-5 h-5 md:w-6 md:h-6" />
            <span className="hidden sm:inline">OFERTA ESPECIAL — ÚLTIMAS HORAS</span>
            <span className="sm:hidden">OFERTA ESPECIAL</span>
            <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-foreground mb-4 tracking-tight text-balance px-2">
            Garanta o Seu <span className="text-gradient">DREAME H12 PRO</span> Agora
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Aproveite o desconto exclusivo antes que o estoque acabe
          </p>

          <div className="flex items-center justify-center gap-2 md:gap-3 mt-8 md:mt-10 px-2">
            <div className="bg-white border-2 border-[#E53935]/20 rounded-xl md:rounded-2xl p-3 md:p-6 min-w-[70px] md:min-w-[100px] shadow-premium hover:scale-105 transition-transform">
              <p className="text-2xl md:text-4xl font-black text-[#E53935] tabular-nums">
                {String(timeLeft.hours).padStart(2, "0")}
              </p>
              <p className="text-[10px] md:text-xs text-muted-foreground uppercase font-bold mt-1 tracking-wider">
                Horas
              </p>
            </div>
            <span className="text-xl md:text-3xl font-black text-[#E53935]">:</span>
            <div className="bg-white border-2 border-[#E53935]/20 rounded-xl md:rounded-2xl p-3 md:p-6 min-w-[70px] md:min-w-[100px] shadow-premium hover:scale-105 transition-transform">
              <p className="text-2xl md:text-4xl font-black text-[#E53935] tabular-nums">
                {String(timeLeft.minutes).padStart(2, "0")}
              </p>
              <p className="text-[10px] md:text-xs text-muted-foreground uppercase font-bold mt-1 tracking-wider">
                Min
              </p>
            </div>
            <span className="text-xl md:text-3xl font-black text-[#E53935]">:</span>
            <div className="bg-white border-2 border-[#E53935]/20 rounded-xl md:rounded-2xl p-3 md:p-6 min-w-[70px] md:min-w-[100px] shadow-premium hover:scale-105 transition-transform">
              <p className="text-2xl md:text-4xl font-black text-[#E53935] tabular-nums">
                {String(timeLeft.seconds).padStart(2, "0")}
              </p>
              <p className="text-[10px] md:text-xs text-muted-foreground uppercase font-bold mt-1 tracking-wider">
                Seg
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border-4 border-primary/30 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-premium-lg hover:shadow-2xl transition-shadow">
          <div className="bg-gradient-to-r from-primary to-secondary px-8 py-5 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 bg-white/10 animate-shimmer"
              style={{
                backgroundImage: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                backgroundSize: "1000px 100%",
              }}
            />
            <p className="text-white font-black text-xl tracking-wide relative z-10">
              53% DE DESCONTO + FRETE GRÁTIS + BRINDES EXCLUSIVOS
            </p>
          </div>

          <div className="p-6 md:p-10 lg:p-14">
            <div className="text-center mb-10 md:mb-12">
              <div className="inline-flex items-center gap-2 md:gap-3 mb-3 flex-wrap justify-center">
                <p className="text-muted-foreground line-through text-lg md:text-2xl">De R$ 699,00</p>
                <span className="bg-[#E53935] text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-base md:text-lg font-black shadow-lg">
                  -64%
                </span>
              </div>

              <div className="my-4 md:my-6">
                <div className="flex items-baseline justify-center gap-1 md:gap-2">
                  <span className="text-2xl md:text-4xl font-bold text-muted-foreground">R$</span>
                  <span className="text-6xl sm:text-7xl md:text-9xl font-black text-gradient tracking-tighter">
                    249,90
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 md:gap-2.5 text-sm md:text-lg bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl px-4 md:px-6 py-3 md:py-4 border border-primary/10">
                <CreditCard className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-center">
                  ou <strong className="text-foreground font-bold">12x de R$ 20,82</strong> sem juros
                </span>
              </div>
            </div>

            <div className="mb-8 md:mb-10">
              <OrderBump />
            </div>

            <div className="space-y-4 md:space-y-5">
              <Button
                size="lg"
                className="w-full text-lg md:text-2xl py-7 md:py-9 bg-gradient-to-r from-[#E53935] to-[#C62828] hover:from-[#C62828] hover:to-[#B71C1C] text-white font-black shadow-premium-lg shadow-[#E53935]/40 transition-all duration-300 hover:scale-[1.02] rounded-xl md:rounded-2xl"
              >
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                <span className="hidden sm:inline">SIM! QUERO MEU DREAME H12 PRO COM 53% OFF</span>
                <span className="sm:hidden">QUERO COM 53% OFF</span>
              </Button>

              <p className="text-center text-xs md:text-sm text-muted-foreground bg-[#E53935]/5 py-2.5 md:py-3 px-3 md:px-4 rounded-xl border border-[#E53935]/10">
                Estoque limitado: apenas <strong className="text-[#E53935] text-sm md:text-base">47 unidades</strong>{" "}
                disponíveis nesta oferta
              </p>
            </div>

            <div className="mt-10 md:mt-12 grid grid-cols-3 gap-4 md:gap-6">
              <div className="flex flex-col items-center gap-2 md:gap-3 group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#27AE60]/10 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Truck className="w-6 h-6 md:w-8 md:h-8 text-[#27AE60]" />
                </div>
                <span className="text-xs md:text-sm text-foreground font-bold text-center">Frete Grátis</span>
                <span className="text-[10px] md:text-xs text-muted-foreground text-center">Todo Brasil</span>
              </div>
              <div className="flex flex-col items-center gap-2 md:gap-3 group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#27AE60]/10 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-[#27AE60]" />
                </div>
                <span className="text-xs md:text-sm text-foreground font-bold text-center">Compra Segura</span>
                <span className="text-[10px] md:text-xs text-muted-foreground text-center">100% Protegida</span>
              </div>
              <div className="flex flex-col items-center gap-2 md:gap-3 group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <span className="text-xs md:text-sm text-foreground font-bold text-center">Entrega Rápida</span>
                <span className="text-[10px] md:text-xs text-muted-foreground text-center">3-7 dias úteis</span>
              </div>
            </div>

            <div className="mt-8 md:mt-10 pt-8 md:pt-10 border-t-2 border-border/50 text-center">
              <p className="text-xs md:text-sm text-muted-foreground font-semibold mb-4 md:mb-5 uppercase tracking-wide">
                Aceitamos todas as formas de pagamento:
              </p>
              <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap">
                {["Visa", "Mastercard", "Elo", "PIX"].map((method) => (
                  <span
                    key={method}
                    className="bg-gradient-to-br from-white to-[#F5F7FA] px-3 md:px-5 py-2 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm text-foreground font-bold border-2 border-border/50 hover:border-primary/30 transition-colors shadow-sm"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
