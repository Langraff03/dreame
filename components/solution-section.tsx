import { Check, Zap, Battery, Sparkles, Wind, Feather, Droplets, Thermometer, RotateCw } from "lucide-react"
import { SpecsModal } from "./specs-modal"

const features = [
  {
    icon: Droplets,
    title: "Escova Dupla Rotativa",
    description: "Sistema de escova dupla que aspira sólidos e líquidos em uma só passada",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Thermometer,
    title: "Secagem a Ar Quente",
    description: "Seca automaticamente após o uso, evitando odores e bactérias",
    color: "text-[#E53935]",
    bgColor: "bg-[#E53935]/10",
  },
  {
    icon: Battery,
    title: "35 Min de Autonomia",
    description: "Bateria de longa duração sem fio para limpar toda a casa",
    color: "text-[#00BFA6]",
    bgColor: "bg-[#00BFA6]/10",
  },
  {
    icon: Wind,
    title: "3 Modos de Limpeza",
    description: "Ajuste a potência conforme o tipo de sujeira: eco, normal e turbo",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Sparkles,
    title: "Tanque de 900ml",
    description: "Grande capacidade para limpar áreas extensas sem esvaziar",
    color: "text-[#00BFA6]",
    bgColor: "bg-[#00BFA6]/10",
  },
  {
    icon: Zap,
    title: "Detecção de Sujeira",
    description: "Sensor inteligente ajusta automaticamente a potência conforme a sujeira",
    color: "text-[#27AE60]",
    bgColor: "bg-[#27AE60]/10",
  },
  {
    icon: RotateCw,
    title: "Anti-Enrolamento",
    description: "Tecnologia que evita que cabelos e pelos enrolem na escova",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Feather,
    title: "Design Vertical",
    description: "Ergonômico e leve, perfeito para uso prolongado sem cansaço",
    color: "text-[#00BFA6]",
    bgColor: "bg-[#00BFA6]/10",
  },
]

export function SolutionSection() {
  return (
    <section className="py-20 px-6 bg-[#F5F7FA]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-[#00BFA6] font-semibold text-sm tracking-wider uppercase mb-4">
            A SOLUÇÃO DEFINITIVA
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 text-balance">
            Apresentamos o <span className="text-primary">DREAME H12 PRO</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            O aspirador vertical que <strong className="text-foreground">mais de 50.000 famílias brasileiras</strong>{" "}
            escolheram para transformar sua rotina de limpeza.
          </p>
        </div>

        {/* Product Image Placeholder with badges */}
        <div className="relative mb-16">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              MAIS VENDIDO 2024
            </span>
          </div>
          <div className="aspect-[16/9] max-w-4xl mx-auto bg-white rounded-3xl border-2 border-primary/20 flex items-center justify-center overflow-hidden shadow-xl">
            <div className="text-center p-8">
              <div className="w-40 h-40 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="w-20 h-20 text-primary" />
              </div>
              <p className="text-foreground text-xl font-bold">DREAME H12 PRO</p>
              <p className="text-muted-foreground mt-2">Aspirador Vertical Sem Fio (Cinza)</p>
              <p className="text-sm text-muted-foreground mt-1">220v-240v</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <SpecsModal />
        </div>

        {/* Checkmarks - verde */}
        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4">
          {["Sem Fio", "Aspira Líquidos", "Fácil de Limpar", "Garantia de 1 Ano", "Suporte em Português"].map(
            (item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#27AE60]" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
