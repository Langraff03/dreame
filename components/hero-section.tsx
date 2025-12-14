"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Truck, Star, Zap, Award } from "lucide-react"
import { CheckoutModal } from "./checkout-modal"

export function HeroSection() {
  const [showCheckout, setShowCheckout] = useState(false)

  return (
    <section className="relative min-h-screen flex flex-col bg-gradient-to-b from-[#0B0F14] via-[#0D1117] to-[#0B0F14] pt-10 md:pt-10">
      <header className="w-full py-4 md:py-5 px-4 md:px-6 flex items-center justify-between border-b border-black bg-black sticky top-0 z-50">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="relative w-16 h-16 md:w-20 md:h-20">
            <Image
              src="/images/DREAME.jpg"
              alt="DREAME"
              fill
              className="object-contain"
              priority
              sizes="(min-width: 1024px) 80px, (min-width: 768px) 72px, 64px"
            />
          </div>
          <div>
            <span className="font-black text-lg md:text-xl tracking-tight text-white block leading-none">DREAME</span>
            <span className="text-[10px] md:text-xs text-[#AAB4C3] tracking-wide">H12 PRO SERIES</span>
          </div>
        </div>
        <div className="flex items-center gap-3 md:gap-6 text-xs md:text-sm">
          <div className="flex items-center gap-1.5 md:gap-2 bg-[#27AE60]/10 px-2 md:px-3 py-1 md:py-1.5 rounded-full border border-[#27AE60]/20">
            <Truck className="w-3 h-3 md:w-4 md:h-4 text-[#27AE60]" />
            <span className="text-white font-semibold hidden sm:inline">Frete Grátis</span>
            <span className="text-white font-semibold sm:hidden">Grátis</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-[#27AE60]/10 px-3 py-1.5 rounded-full border border-[#27AE60]/20">
            <ShieldCheck className="w-4 h-4 text-[#27AE60]" />
            <span className="text-white font-semibold">Garantia 1 Ano</span>
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-6 py-12 md:py-16 text-center">
        <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 md:px-5 py-2 md:py-2.5">
          <div className="flex -space-x-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400 drop-shadow-lg" />
            ))}
          </div>
          <span className="text-[#AAB4C3] text-xs md:text-sm font-medium">4.9/5</span>
          <div className="w-px h-3 md:h-4 bg-white/10" />
          <span className="text-white text-xs md:text-sm font-semibold">2.847 avaliações</span>
          <Award className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
        </div>

        <div className="inline-flex items-center gap-2 md:gap-2.5 bg-gradient-to-r from-[#E53935] to-[#C62828] border border-[#E53935]/40 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-bold mb-6 md:mb-8 shadow-lg shadow-[#E53935]/40">
          <Zap className="w-4 h-4 md:w-5 md:h-5" />
          <span className="hidden sm:inline">ÚLTIMAS 47 UNIDADES COM 64% OFF</span>
          <span className="sm:hidden">47 UNIDADES - 64% OFF</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white max-w-5xl leading-[1.1] text-balance mb-4 md:mb-6 px-2">
          Pare de <span className="text-gradient">Sofrer</span> com Aspiradores que <span className="text-gradient">Não Funcionam</span>
        </h1>

        <p className="mt-3 md:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-[#AAB4C3] max-w-3xl leading-relaxed text-pretty px-2">
          O <strong className="text-white font-bold">DREAME H12 PRO</strong> aspira líquidos, pelos de pet, migalhas e poeira em
          <strong className="text-[#00BFA6]"> segundos</strong> com escova dupla, secagem a ar quente e 35 minutos de autonomia.
        </p>

        <div className="mt-3 md:mt-4 flex items-center justify-center gap-2 md:gap-3 text-[#AAB4C3] px-2">
          <div className="flex items-center gap-1.5 md:gap-2 bg-white/5 px-3 md:px-4 py-1.5 md:py-2 rounded-lg border border-white/10">
            <Award className="w-4 h-4 md:w-5 md:h-5 text-[#00BFA6]" />
            <span className="text-white font-semibold text-xs sm:text-sm md:text-base">50.000+ famílias satisfeitas</span>
          </div>
        </div>

        <div className="mt-8 md:mt-12 w-full max-w-5xl aspect-[9/16] md:aspect-video rounded-2xl md:rounded-3xl border-2 border-[#202938] overflow-hidden shadow-premium-lg bg-black">
          <iframe
            id="panda-134d1f61-e2fd-4ec7-95db-7c86009187db"
            src="https://player-vz-e2ae5091-252.tv.pandavideo.com.br/embed/?v=134d1f61-e2fd-4ec7-95db-7c86009187db"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
            title="DREAME H12 PRO - Apresentacao"
            style={{ border: "none" }}
          />
        </div>

        <div className="mt-8 md:mt-12 flex flex-col gap-4 md:gap-5 w-full max-w-lg px-4">
          <Button
            size="lg"
            className="text-base md:text-xl px-8 md:px-10 py-6 md:py-8 bg-gradient-to-r from-[#E53935] to-[#C62828] hover:from-[#C62828] hover:to-[#B71C1C] text-white font-black shadow-premium-lg shadow-[#E53935]/40 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 rounded-xl"
            onClick={() => setShowCheckout(true)}
          >
            <span className="text-center">QUERO MEU DREAME H12 PRO COM 64% OFF</span>
          </Button>
          <div className="flex items-center justify-center gap-2 text-[#AAB4C3] text-xs md:text-sm bg-white/5 backdrop-blur-sm rounded-lg px-3 md:px-4 py-2.5 md:py-3 border border-white/10">
            <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-[#27AE60] flex-shrink-0" />
            <span className="text-center">Compra 100% segura - Satisfação garantida ou seu dinheiro de volta</span>
          </div>
        </div>

        <div className="mt-12 md:mt-16 animate-bounce-soft">
          <div className="w-6 h-10 md:w-8 md:h-12 border-2 border-[#AAB4C3]/30 rounded-full flex items-start justify-center p-1.5 md:p-2">
            <div className="w-1 h-2 md:w-1.5 md:h-3 bg-[#AAB4C3] rounded-full animate-pulse" />
          </div>
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
    </section>
  )
}


