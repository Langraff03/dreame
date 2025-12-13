import { Clock, Home, Sparkles, Shield, Smile, ArrowRight, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  {
    icon: Clock,
    title: "Economize 4 Horas por Semana",
    description: "O que antes levava 2 horas, agora leva 30 minutos. Mais tempo para você e sua família.",
    highlight: "208 horas/ano livres",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Droplets,
    title: "Aspira Sólidos e Líquidos",
    description: "Derramou café ou suco? O DREAME H12 PRO aspira líquidos em segundos sem esforço.",
    highlight: "Limpeza completa em 1 passada",
    color: "text-[#00BFA6]",
    bgColor: "bg-[#00BFA6]/10",
  },
  {
    icon: Home,
    title: "Alcança TODO Canto",
    description: "Design vertical passa embaixo de sofás, camas e móveis sem você se abaixar.",
    highlight: "Zero esforço",
    color: "text-[#00BFA6]",
    bgColor: "bg-[#00BFA6]/10",
  },
  {
    icon: Sparkles,
    title: "Detecção Inteligente",
    description: "Sensor ajusta automaticamente a potência. Mais eficiente em áreas com muita sujeira.",
    highlight: "Tecnologia smart",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Shield,
    title: "Construído para Durar",
    description: "Motor brushless de longa vida + bateria premium. Feito para anos de uso intenso.",
    highlight: "Garantia de 1 ano",
    color: "text-[#27AE60]",
    bgColor: "bg-[#27AE60]/10",
  },
  {
    icon: Smile,
    title: "Limpeza Sem Sofrimento",
    description: "Tão leve e silencioso que limpar deixa de ser uma obrigação chata.",
    highlight: "Zero dor nas costas",
    color: "text-[#00BFA6]",
    bgColor: "bg-[#00BFA6]/10",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-[#00BFA6] font-semibold text-xs md:text-sm tracking-wider uppercase mb-3 md:mb-4">
            TRANSFORMAÇÃO REAL
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-foreground mb-4 md:mb-6 text-balance px-2">
            O Que Vai <span className="text-primary">Mudar</span> na Sua Vida
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
            Não é só um aspirador. É uma <strong className="text-foreground">nova forma de viver.</strong>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="flex gap-3 md:gap-4">
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 ${benefit.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                >
                  <benefit.icon className={`w-6 h-6 md:w-7 md:h-7 ${benefit.color}`} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-1 md:mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base mb-1 md:mb-2">{benefit.description}</p>
                  <span className={`inline-block ${benefit.color} text-xs md:text-sm font-semibold`}>
                    {benefit.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA vermelho */}
        <div className="mt-12 md:mt-16 text-center">
          <Button
            size="lg"
            className="text-base md:text-lg px-6 md:px-8 py-6 md:py-7 bg-[#E53935] hover:bg-[#C62828] text-white font-bold shadow-lg shadow-[#E53935]/30 rounded-xl"
          >
            <span className="hidden sm:inline">QUERO O DREAME H12 PRO AGORA</span>
            <span className="sm:hidden">QUERO AGORA</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
