import { Star, CheckCircle } from "lucide-react"

export function VideoProofSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-[#F5F7FA]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-[#00BFA6] font-semibold text-sm tracking-wider uppercase mb-4">
            VEJA EM AÇÃO
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 text-balance">
            Cliente Real Usando o <span className="text-primary">DREAME H12 PRO</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Assista ao vídeo de apresentação mostrando o DREAME H12 PRO em ação real
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-[9/16] md:aspect-video bg-black rounded-3xl border-2 border-primary/30 overflow-hidden shadow-2xl hover:border-primary/60 transition-all duration-500">
            <iframe
              id="panda-059fbb58-9cf7-4dc3-b871-6d35532c35c9"
              style={{ border: "none" }}
              src="https://player-vz-e2ae5091-252.tv.pandavideo.com.br/embed/?v=059fbb58-9cf7-4dc3-b871-6d35532c35c9"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
              title="DREAME H12 PRO - Apresentação"
            />
            <div className="absolute top-4 left-4 bg-[#E53935] text-white px-3 py-1.5 rounded-full text-xs md:text-sm font-bold shadow-lg">
              RESULTADO REAL
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white border border-border rounded-2xl p-4 md:p-6 text-center hover:border-primary/30 transition-colors shadow-md">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-xl md:text-2xl font-black text-primary">5/5</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">Avaliação</p>
            </div>

            <div className="bg-white border border-border rounded-2xl p-4 md:p-6 text-center hover:border-primary/30 transition-colors shadow-md">
              <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-[#27AE60] mx-auto mb-2" />
              <p className="text-xl md:text-2xl font-black text-[#27AE60]">100%</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">Satisfação</p>
            </div>

            <div className="bg-white border border-border rounded-2xl p-4 md:p-6 text-center hover:border-primary/30 transition-colors shadow-md">
              <p className="text-xl md:text-2xl font-black text-[#00BFA6]">8 meses</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">De uso</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
