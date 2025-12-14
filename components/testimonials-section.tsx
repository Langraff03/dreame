"use client"

import { Star, Quote, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Rafael Martins",
    location: "São Paulo, SP",
    image: "https://i.pinimg.com/736x/e3/13/37/e31337366d62981cf1b77dbeb56f4545.jpg",
    text: "Sou chato com eletrônicos e já tinha devolvido dois aspiradores. Esse foi o primeiro que realmente tira areia e pelos dos meus dois labradores sem empacar. A secagem quente evita que fique aquele piso úmido.",
    rating: 5,
    verified: true,
    highlight: "2 cães em casa, zero pelos no chão",
  },
  {
    name: "Patrícia Lima",
    location: "Recife, PE",
    image: "https://i.pinimg.com/1200x/a9/26/c1/a926c1774f6b8f31b73331b349f43699.jpg",
    text: "Tenho rinite e minha filha é asmática. O modo de detecção aumenta a potência nos tapetes e o ar fica menos carregado. Em 15 minutos a casa está limpa e sem cheiro de pó.",
    rating: 5,
    verified: true,
    highlight: "Adeus crise de rinite em casa",
  },
  {
    name: "Camila Duarte",
    location: "Porto Alegre, RS",
    image: "https://i.pinimg.com/736x/8c/6a/0f/8c6a0fd1890d78306b94c6817121d980.jpg",
    text: "Trabalho em home office e vivo derrubando café. Ele aspira o líquido e já seca em uma passada. Não preciso passar pano depois, salvou meu piso vinílico.",
    rating: 5,
    verified: true,
    highlight: "Café derramado? Resolve na hora",
  },
  {
    name: "Renata Barros",
    location: "Campinas, SP",
    image: "https://i.pinimg.com/736x/76/86/b1/7686b1d5c4d6483b957fac3ccdf477a1.jpg",
    text: "Operei a coluna e não aguentava arrastar balde e rodo. Ele é leve, o cabo gira bem e o piso já fica seco. Voltei a limpar sem sentir dor depois.",
    rating: 5,
    verified: true,
    highlight: "Leve e não dói a coluna",
  },
  {
    name: "Eduardo Nogueira",
    location: "Brasília, DF",
    image: "https://i.pinimg.com/736x/59/6c/22/596c22142d6b111ffa249b166e2f0e0c.jpg",
    text: "Apartamento com criança pequena é caos: leite, papinha, suco. Ele aspira e seca, não deixa cheiro e o tanque maior evita ficar esvaziando toda hora.",
    rating: 5,
    verified: true,
    highlight: "Pisos limpos mesmo com criança",
  },
  {
    name: "Marcelo Farias",
    location: "Belo Horizonte, MG",
    image: "https://i.pinimg.com/736x/e7/21/fa/e721faad19569f9186e3af5fc297f592.jpg",
    text: "Sou alérgico a pelos de gato. A sucção é forte e a autolimpeza impede cheiro no rolo. Em poucos dias parei de espirrar dentro de casa.",
    rating: 5,
    verified: true,
    highlight: "Pelos de gato não acumulam mais",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))

  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-[#F5F7FA] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-foreground mb-4 md:mb-6 text-balance px-2">
            +50.000 Famílias <span className="text-primary">Já Comprovaram</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg px-2">
            Veja o que pessoas REAIS estão dizendo sobre o DREAME H12 PRO
          </p>
        </div>

        <div className="mb-10 md:mb-12">
          <div className="bg-white border-2 border-primary/30 rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="relative w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary shadow-xl shadow-primary/20">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 160px, 120px"
                  />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <Quote className="w-10 h-10 md:w-12 md:h-12 text-primary/20 mb-3 md:mb-4 mx-auto md:mx-0" />

                <div className="flex gap-1 mb-3 md:mb-4 justify-center md:justify-start">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                <div className="bg-primary text-white rounded-full px-3 md:px-4 py-1.5 md:py-2 mb-4 md:mb-6 inline-block">
                  <span className="font-bold text-xs md:text-sm">{testimonials[currentIndex].highlight}</span>
                </div>

                <p className="text-base md:text-xl lg:text-2xl text-foreground mb-4 md:mb-6 leading-relaxed italic">
                  {testimonials[currentIndex].text}
                </p>

                <div className="flex items-center gap-2 md:gap-3 justify-center md:justify-start">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-base md:text-lg text-foreground">
                        {testimonials[currentIndex].name}
                      </p>
                      {testimonials[currentIndex].verified && (
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#27AE60]" />
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base">{testimonials[currentIndex].location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3 md:gap-4 mt-5 md:mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-primary/50 hover:border-primary hover:bg-primary/10 bg-white w-10 h-10 md:w-12 md:h-12"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </Button>

            <div className="flex items-center gap-1.5 md:gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-6 md:w-8" : "bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-primary/50 hover:border-primary hover:bg-primary/10 bg-white w-10 h-10 md:w-12 md:h-12"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </Button>
          </div>
        </div>

        {/* Cards inferiores removidos para evitar duplicação em mobile */}

        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
          {[
            { value: "50.847", label: "Unidades Vendidas", color: "text-primary" },
            { value: "4.9/5", label: "Avaliação Média", color: "text-[#00BFA6]" },
            { value: "98.7%", label: "Recomendam", color: "text-[#27AE60]" },
            { value: "2.847", label: "Avaliações 5 Estrelas", color: "text-primary" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white border border-border rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-primary/30 transition-colors hover:shadow-lg"
            >
              <p className={`text-2xl md:text-4xl font-black ${stat.color}`}>{stat.value}</p>
              <p className="text-muted-foreground mt-1 text-xs md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
