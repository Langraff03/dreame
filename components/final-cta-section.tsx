"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Truck, Star } from "lucide-react"
import { CheckoutModal } from "./checkout-modal"

export function FinalCtaSection() {
  const [showCheckout, setShowCheckout] = useState(false)

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-[#F5F7FA]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 text-balance px-1">
          Você Tem <span className="text-primary">2 Opções</span> Agora
        </h2>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 my-10 sm:my-12">
          {/* Option 1 - Bad Choice */}
          <div className="bg-white border border-border rounded-2xl p-6 sm:p-8 text-left opacity-60">
            <h3 className="text-lg sm:text-xl font-bold text-muted-foreground mb-4">Opção 1: Fechar esta página</h3>
            <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <li>Continuar perdendo horas limpando</li>
              <li>Continuar com dor nas costas</li>
              <li>Continuar com alergias e poeira</li>
              <li>Continuar gastando com aspiradores ruins</li>
              <li>Perder esta oferta de 64% OFF</li>
            </ul>
          </div>

          {/* Option 2 - Good Choice - borda azul */}
          <div className="bg-white border-2 border-primary rounded-2xl p-6 sm:p-8 text-left relative shadow-lg">
            <div className="absolute -top-4 sm:-top-3 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-white px-5 sm:px-6 py-1.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap shadow-md">
                ESCOLHA INTELIGENTE
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">Opção 2: Garantir seu DREAME H12 PRO</h3>
            <ul className="space-y-3 sm:space-y-4 text-foreground text-sm sm:text-base">
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#00BFA6]" />
                Limpar a casa em metade do tempo
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#00BFA6]" />
                Zero dor e zero esforço
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#00BFA6]" />
                Ar mais limpo e saudável
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#00BFA6]" />
                Produto que dura anos
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#00BFA6]" />
                64% OFF + Frete Grátis + Brindes
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-md mx-auto">
          <Button
            size="lg"
            className="w-full text-sm sm:text-lg md:text-xl py-6 sm:py-7 md:py-8 px-5 sm:px-8 min-h-[64px] sm:min-h-[72px] bg-[#E53935] hover:bg-[#C62828] text-white font-black shadow-lg shadow-[#E53935]/30 transition-all duration-300 hover:scale-[1.02] text-center leading-tight whitespace-normal flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 rounded-xl"
            onClick={() => setShowCheckout(true)}
          >
            <span className="text-center">QUERO MEU DREAME H12 PRO COM 64% OFF</span>
            <ArrowRight className="w-6 h-6 sm:ml-1 flex-shrink-0" />
          </Button>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6 text-xs sm:text-sm text-muted-foreground text-center">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#27AE60]" />7 dias de garantia
            </span>
            <span className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#27AE60]" />
              Frete grátis
            </span>
          </div>
        </div>

        <p className="mt-12 text-muted-foreground text-sm max-w-xl mx-auto">
          P.S.: Esta oferta com <strong className="text-[#E53935]">64% de desconto</strong> é válida apenas enquanto
          durar o estoque promocional. Não sabemos quando teremos novamente. Se você está lendo isso, ainda dá tempo -
          mas não deixe para depois.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <div className="bg-white border border-border rounded-lg p-2 shadow-sm">
              <img
                src="https://www.profissionaldeecommerce.com.br/wp-content/uploads/2022/08/gsb-3-300x126.png"
                alt="Site seguro - Google Safe Browsing"
                loading="lazy"
                className="h-12 object-contain"
              />
            </div>
            <div className="bg-white border border-border rounded-lg p-2 shadow-sm">
              <img
                src="https://blog.mundolipedema.com.br/wp-content/uploads/2022/06/certificado1-1024x1024.png"
                alt="Certificado de segurança"
                loading="lazy"
                className="h-12 w-12 object-contain"
              />
            </div>
          </div>

          <a
            href="https://www.instagram.com/dreamebrasil/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <img
              src="/images/instagram/instagram%20logo.png"
              alt="Instagram Dreame Brasil"
              className="w-8 h-8 object-contain"
              loading="lazy"
            />
            <span>@dreamebrasil</span>
          </a>
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
    </section>
  )
}
