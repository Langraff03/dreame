import { TrendingDown, Clock, DollarSign, Heart } from "lucide-react"

const consequences = [
  {
    icon: Clock,
    title: "Tempo Perdido",
    description:
      "Você perde em média 4 horas por semana lutando com aspiradores ruins. São 208 horas por ano – quase 9 DIAS da sua vida.",
  },
  {
    icon: DollarSign,
    title: "Dinheiro Jogado Fora",
    description: "Aspiradores baratos quebram em meses. Você já gastou R$ 500+ em aparelhos que não duraram.",
  },
  {
    icon: Heart,
    title: "Saúde em Risco",
    description: "Ácaros e poeira causam alergias, rinite e problemas respiratórios. Sua família merece ar limpo.",
  },
  {
    icon: TrendingDown,
    title: "Qualidade de Vida",
    description: "Em vez de descansar ou estar com a família, você passa o fim de semana limpando.",
  },
]

export function AgitationSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 text-balance">
            O <span className="text-primary">Preço Real</span> de Continuar Com Um Aspirador Ruim
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada dia que passa, você está pagando um preço invisível...
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {consequences.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            Mas existe uma <span className="text-primary">solução simples</span> para tudo isso...
          </p>
        </div>
      </div>
    </section>
  )
}
