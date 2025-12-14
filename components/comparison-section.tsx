import { X, Check } from "lucide-react"

const comparisons = [
  { feature: "Sem fio", dreame: true, others: false },
  { feature: "Escova Dupla Rotativa", dreame: true, others: false },
  { feature: "Secagem a Ar Quente", dreame: true, others: false },
  { feature: "35 min de Autonomia", dreame: true, others: false },
  { feature: "Tanque 900ml", dreame: true, others: false },
  { feature: "Detecção de Sujeira", dreame: true, others: false },
  { feature: "Anti-Enrolamento", dreame: true, others: false },
  { feature: "Garantia de 1 ano", dreame: true, others: false },
]

export function ComparisonSection() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-block text-primary font-semibold text-xs md:text-sm tracking-wider uppercase mb-3 md:mb-4">
            COMPARATIVO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-foreground mb-4 md:mb-6 text-balance px-2">
            Por Que o DREAME é <span className="text-primary">Diferente</span>?
          </h2>
        </div>

        <div className="bg-white rounded-2xl md:rounded-3xl border border-border/80 overflow-hidden shadow-premium">
          {/* Header */}
          <div className="grid grid-cols-3 gap-2 md:gap-4 p-4 md:p-6 border-b border-border/80 bg-gradient-to-r from-[#0B0F14] to-[#0D1117] text-white">
            <div className="font-bold text-xs md:text-base text-left">Recurso</div>
            <div className="font-bold text-center text-xs md:text-base bg-[#27AE60]/10 border border-[#27AE60]/30 rounded-lg py-2">
              DREAME H12 PRO
            </div>
            <div className="font-bold text-center text-xs md:text-base bg-[#E53935]/10 border border-[#E53935]/30 rounded-lg py-2 text-white/80">
              Aspiradores Comuns
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-2 md:gap-4 p-3 md:p-4 border-b border-border/70 last:border-0 hover:bg-muted transition-colors"
            >
              <div className="text-foreground text-xs md:text-base font-semibold">{item.feature}</div>
              <div className="flex justify-center">
                <div className="w-7 h-7 md:w-9 md:h-9 bg-[#27AE60]/15 border border-[#27AE60]/30 rounded-full flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#27AE60]" />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-7 h-7 md:w-9 md:h-9 bg-[#E53935]/15 border border-[#E53935]/30 rounded-full flex items-center justify-center">
                  <X className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#E53935]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 md:mt-8 text-center text-muted-foreground text-xs md:text-sm px-2">
          *Baseado em análise de 50+ aspiradores disponíveis no mercado brasileiro
        </p>
      </div>
    </section>
  )
}
