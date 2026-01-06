"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Info, Check } from "lucide-react"

export function SpecsModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="border-2 border-primary text-primary hover:bg-primary/10 font-bold bg-transparent"
        >
          <Info className="w-5 h-5 mr-2" />
          Ver Todas as Especificações
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black text-foreground">
            Especificações Técnicas - DREAME H12 PRO
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-8 mt-6">
          {/* Características Especiais */}
          <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-6">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <Check className="w-6 h-6" />
              Características Especiais
            </h3>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-0.5" />
                <span>Autolimpeza com tecnologia de secagem ao ar quente</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-0.5" />
                <span>Design de limpeza de borda dupla face atualizado</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-0.5" />
                <span>Detecção e limpeza inteligentes de sujeira úmida e seca</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-0.5" />
                <span>Tanque de água limpa de alta capacidade de 900 ml, longo tempo de funcionamento</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-0.5" />
                <span>Visor LED vívido e instruções de voz</span>
              </li>
            </ul>
          </div>

          {/* Grid de Especificações */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Detalhes do Produto */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground border-b-2 border-primary pb-2">Detalhes do Produto</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Marca:</span>
                  <span className="font-semibold text-foreground">DREAME</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Modelo:</span>
                  <span className="font-semibold text-foreground">H12 Pro</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cor:</span>
                  <span className="font-semibold text-foreground">Cinza</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tipo:</span>
                  <span className="font-semibold text-foreground">Vertical (Sem Fio)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Capacidade:</span>
                  <span className="font-semibold text-foreground">900 ml</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tipo de Filtro:</span>
                  <span className="font-semibold text-foreground">Filtro HEPA</span>
                </div>
              </div>
            </div>

            {/* Performance */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground border-b-2 border-primary pb-2">Performance</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Número de Velocidades:</span>
                  <span className="font-semibold text-foreground">3 Modos</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tempo de Execução:</span>
                  <span className="font-semibold text-foreground">35 minutos</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tempo de Carga:</span>
                  <span className="font-semibold text-foreground">3 Horas</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tipo de Bateria:</span>
                  <span className="font-semibold text-foreground">Íon de Lítio</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Nível de Ruído:</span>
                  <span className="font-semibold text-foreground">68 Decibéis</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Potência do Motor:</span>
                  <span className="font-semibold text-foreground">1.88 HP</span>
                </div>
              </div>
            </div>

            {/* Especificações Elétricas */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground border-b-2 border-primary pb-2">
                Especificações Elétricas
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Voltagem:</span>
                  <span className="font-semibold text-foreground">220v-240v</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Potência:</span>
                  <span className="font-semibold text-foreground">1400 watts</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amperagem:</span>
                  <span className="font-semibold text-foreground">3,6 Amperes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fonte de Energia:</span>
                  <span className="font-semibold text-foreground">AC (Sem Fio)</span>
                </div>
              </div>
            </div>

            {/* Dimensões e Peso */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground border-b-2 border-primary pb-2">Dimensões</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Altura do Produto:</span>
                  <span className="font-semibold text-foreground">110 cm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dimensões (C-L-A):</span>
                  <span className="font-semibold text-foreground">27-23-110 cm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Peso:</span>
                  <span className="font-semibold text-foreground">4,8 kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Número de Rodas:</span>
                  <span className="font-semibold text-foreground">4 Rodas</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Portátil:</span>
                  <span className="font-semibold text-foreground">Sim</span>
                </div>
              </div>
            </div>
          </div>

          {/* Superfícies e Usos */}
          <div className="bg-[#F5F7FA] rounded-xl p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">Superfícies Recomendadas</h3>
            <div className="flex flex-wrap gap-3">
              {["Carpete", "Madeira", "Azulejo", "Cerâmica", "Laminado", "Pisos Duros"].map((surface) => (
                <span
                  key={surface}
                  className="bg-white border border-primary/30 px-4 py-2 rounded-lg text-sm font-medium text-foreground"
                >
                  {surface}
                </span>
              ))}
            </div>
          </div>

          {/* Componentes Incluídos */}
          <div className="bg-[#00BFA6]/5 border border-[#00BFA6]/20 rounded-xl p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">Componentes Incluídos</h3>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#27AE60]" />
                <span>Base de recarga</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#27AE60]" />
                <span>Corpo principal</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#27AE60]" />
                <span>Escova de limpeza</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#27AE60]" />
                <span>Filtro de substituição</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#27AE60]" />
                <span>Solução de limpeza</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
