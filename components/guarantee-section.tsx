import { ShieldCheck, RotateCcw, HeartHandshake } from "lucide-react"

export function GuaranteeSection() {
  return (
    <section className="py-20 px-6 bg-[#F5F7FA]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-[#27AE60] font-semibold text-sm tracking-wider uppercase mb-4">
            GARANTIA TRIPLA
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 text-balance">
            Sua Compra é <span className="text-[#27AE60]">100% Protegida</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-border rounded-2xl p-8 text-center hover:border-[#27AE60]/50 transition-colors hover:shadow-lg">
            <div className="w-20 h-20 bg-[#27AE60]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <RotateCcw className="w-10 h-10 text-[#27AE60]" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">7 Dias para Testar</h3>
            <p className="text-muted-foreground">
              Use o Clean Pro por 7 dias. Se não amar, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
            </p>
          </div>

          <div className="bg-white border-2 border-[#27AE60] rounded-2xl p-8 text-center relative shadow-lg">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-[#27AE60] text-white px-3 py-1 rounded-full text-xs font-bold">MAIS POPULAR</span>
            </div>
            <div className="w-20 h-20 bg-[#27AE60]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-10 h-10 text-[#27AE60]" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">1 Ano de Garantia</h3>
            <p className="text-muted-foreground">
              Garantia total contra defeitos de fabricação. Qualquer problema, trocamos sem custo adicional.
            </p>
          </div>

          <div className="bg-white border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors hover:shadow-lg">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <HeartHandshake className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Suporte Vitalício</h3>
            <p className="text-muted-foreground">
              Equipe brasileira pronta para ajudar. Dúvidas, assistência técnica, peças — estamos aqui para você.
            </p>
          </div>
        </div>

        <p className="mt-12 text-center text-lg text-foreground">
          Ou seja: <strong className="text-[#27AE60]">o risco é TODO nosso.</strong> Você só ganha.
        </p>
      </div>
    </section>
  )
}
