"use client"

import { ShieldCheck, Headphones, Truck, BadgeCheck } from "lucide-react"

const reasons = [
  {
    icon: ShieldCheck,
    title: "Garantia Oficial e Risco Zero",
    desc: "Compre com a certeza de um produto original, com garantia total da Dreame Brasil e devolução simples, sem burocracia.",
  },
  {
    icon: Truck,
    title: "Entrega Rápida e Rastreamento",
    desc: "Produtos já no Brasil, prontos para envio. Receba seu Dreame em tempo recorde com rastreamento completo do pedido até sua casa.",
  },
  {
    icon: BadgeCheck,
    title: "Suporte Técnico Local e Peças",
    desc: "Acesse a rede de assistência técnica autorizada no Brasil. Garantia de manutenção, troca e peças originais sempre que precisar.",
  },
  {
    icon: Headphones,
    title: "Seu Suporte em Português",
    desc: "Equipe brasileira pronta para ajudar. Tire dúvidas, receba suporte pós-venda e acompanhe seu pedido com atendimento humano e dedicado.",
  },
]

export function BrandSection() {
  return (
    <section className="py-14 px-4 md:px-6 bg-card border-y border-border/60">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block text-primary font-semibold text-xs md:text-sm tracking-wider uppercase mb-3">
            Por que Dreame Brasil
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground text-balance px-2">
            Compra oficial, suporte local e entrega segura
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-border rounded-2xl p-5 md:p-6 flex items-start gap-3 md:gap-4 shadow-sm"
            >
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <item.icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base md:text-lg font-bold text-foreground leading-snug">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
