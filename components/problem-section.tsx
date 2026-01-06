import { X, AlertTriangle } from "lucide-react"

const problems = [
  {
    text: "Passa HORAS limpando e a casa nunca fica realmente limpa?",
    emotion: "frustração",
  },
  {
    text: "Aspirador PESADO que causa dor nas costas e nos braços?",
    emotion: "dor",
  },
  {
    text: "FIO que enrosca, não alcança os cantos e limita seus movimentos?",
    emotion: "irritação",
  },
  {
    text: "Sujeira que o aspirador comum SIMPLESMENTE não consegue puxar?",
    emotion: "decepção",
  },
  {
    text: "Pelos de PET espalhados pelo sofá, cama e tapetes?",
    emotion: "vergonha",
  },
  {
    text: "ALERGIAS constantes por causa de ácaros e poeira no ar?",
    emotion: "preocupação",
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[#E53935]/10 border border-[#E53935]/30 text-[#E53935] px-4 py-2 rounded-full text-sm font-medium mb-6">
          <AlertTriangle className="w-4 h-4" />
          ATENÇÃO: ISSO PODE ESTAR ACONTECENDO COM VOCÊS
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 text-balance">
          Você <span className="text-primary">Reconhece</span> Alguma Dessas Situações?
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          Se você marcou "sim" para pelo menos UMA dessas, continue lendo...
        </p>

        <div className="grid gap-4 max-w-2xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-[#F5F7FA] border border-border hover:border-primary/50 rounded-xl p-5 text-left transition-colors group"
            >
              <div className="w-10 h-10 bg-[#E53935]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#E53935]/20 transition-colors">
                <X className="w-5 h-5 text-[#E53935]" />
              </div>
              <span className="text-foreground text-lg">{problem.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            Se você disse <span className="text-[#E53935]">"SIM"</span> para qualquer uma dessas...
          </p>
          <p className="text-xl text-muted-foreground mt-2">
            A culpa <strong className="text-foreground">NÃO É SUA.</strong> É do seu aspirador atual.
          </p>
        </div>
      </div>
    </section>
  )
}
