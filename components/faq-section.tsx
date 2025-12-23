"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "O DREAME H12 PRO realmente funciona ou é só propaganda?",
    answer:
      "Entendemos sua desconfiança — há muitos produtos ruins no mercado. Por isso oferecemos 7 dias para você testar. Se não funcionar exatamente como prometemos, devolvemos 100% do seu dinheiro. Já são mais de 50.000 unidades vendidas com 98.7% de satisfação. O risco é todo nosso.",
  },
  {
    question: "Quanto tempo dura a bateria na prática?",
    answer:
      "35 minutos no modo normal e 20 minutos no modo turbo. Na prática, isso é suficiente para limpar uma casa de 3 quartos inteira sem precisar recarregar. A bateria de lítio premium mantém a capacidade por anos de uso.",
  },
  {
    question: "Funciona bem em pelos de cachorro e gato?",
    answer:
      "SIM! A escova dupla rotativa com sistema anti-enrolamento foi desenvolvida especificamente para isso. A tecnologia de detecção inteligente remove pelos curtos e longos de sofás, tapetes, camas e qualquer superfície. É um dos nossos diferenciais mais elogiados pelos clientes.",
  },
  {
    question: "E se quebrar depois da garantia?",
    answer:
      "O motor brushless é projetado para durar 10+ anos com uso normal. Mesmo após a garantia, oferecemos suporte técnico brasileiro e peças de reposição a preço acessível. Você não fica desamparado.",
  },
  {
    question: "O frete é realmente grátis?",
    answer:
      "Sim, 100% grátis para todo o Brasil. Enviamos pelos Correios ou transportadora, dependendo da região. Prazo médio de 3-7 dias úteis para capitais e 7-12 dias para interior.",
  },
  {
    question: "Posso parcelar? Quais formas de pagamento?",
    answer:
      "Sim! Aceitamos cartão de crédito em até 12x sem juros (R$12,25/mês), PIX com 5% de desconto adicional e cartão de débito. Checkout 100% seguro e criptografado.",
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer:
      "Simples: receba, teste por 7 dias. Se não amar, entre em contato que organizamos a devolução sem custo. Assim que recebermos o produto, devolvemos 100% do valor. Sem burocracia, sem perguntas chatas.",
  },
]

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={cn(
        "bg-white border rounded-xl px-6 transition-colors",
        isOpen ? "border-primary/50 shadow-md" : "border-border",
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left text-foreground hover:text-primary font-semibold"
      >
        {question}
        <ChevronDown
          className={cn("w-5 h-5 text-muted-foreground transition-transform duration-200", isOpen && "rotate-180")}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-200 ease-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <p className="text-muted-foreground pb-6 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export function FaqSection() {
  return (
    <section className="py-20 px-6 bg-[#F5F7FA]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-[#00BFA6] font-semibold text-sm tracking-wider uppercase mb-4">
            DÚVIDAS FREQUENTES
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
            Ainda Tem <span className="text-primary">Dúvidas</span>?
          </h2>
          <p className="text-muted-foreground text-lg">Respondemos as perguntas mais comuns dos nossos clientes</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Ainda tem dúvidas? Fale com nosso time:</p>
          <a
            href="https://wa.me/5513981091137"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 bg-white">
              Falar com Atendimento
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
