"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { Check, X, Sparkles } from "lucide-react"

type ColorOption = {
  key: string
  label: string
  image: string
}

const colorOptions: ColorOption[] = [
  { key: "branco", label: "Branco", image: "/images/cores/branco.jpg" },
  { key: "preto", label: "Preto", image: "/images/cores/preto.png" },
  { key: "vermelho", label: "Vermelho", image: "/images/cores/vermelhoo.jpg" },
]

type CheckoutModalProps = {
  open: boolean
  initialKitSelected?: boolean
  onClose: () => void
  onConfirm: (params: { color: string; withKit: boolean }) => void
}

export function CheckoutModal({ open, initialKitSelected = false, onClose, onConfirm }: CheckoutModalProps) {
  const [selectedColor, setSelectedColor] = useState<string>("")
  const [withKit, setWithKit] = useState<boolean>(initialKitSelected)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (open) {
      setSelectedColor("")
      setWithKit(initialKitSelected)
    }
  }, [open, initialKitSelected])

  if (!open || !mounted) return null

  const modal = (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-3 md:px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] relative flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8 overflow-y-auto">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-primary" />
            <p className="text-xs font-semibold text-primary uppercase">Passo 1 • Escolha a cor</p>
          </div>
          <h3 className="text-2xl font-black text-foreground mb-2">Seu DREAME H12 PRO</h3>
          <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
            Selecione a cor abaixo. Em seguida, você pode incluir o kit de substituição oficial por R$ 97 para 1 ano de
            uso sem preocupação.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {colorOptions.map((option) => {
              const active = selectedColor === option.key
              return (
                <button
                  key={option.key}
                  onClick={() => setSelectedColor(option.key)}
                  className={`relative rounded-xl border-2 ${
                    active ? "border-primary shadow-lg shadow-primary/20" : "border-border"
                  } overflow-hidden bg-white transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/50`}
                >
                  <div className="relative bg-muted/40" style={{ aspectRatio: "3 / 4" }}>
                    <Image src={option.image} alt={option.label} fill className="object-contain" />
                    {active && (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                        <Check className="w-7 h-7 text-primary drop-shadow" />
                      </div>
                    )}
                  </div>
                  <div className="py-3 text-center font-semibold text-foreground text-sm">{option.label}</div>
                  {active && (
                    <span className="absolute top-2 right-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                      Selecionada
                    </span>
                  )}
                </button>
              )
            })}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex flex-col gap-3 mb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <p className="font-bold text-foreground text-sm md:text-base">Passo 2 • Adicionar Kit de Substituição</p>
            </div>
            <p className="text-muted-foreground text-xs md:text-sm">
              Filtros, escovas e limpeza extra para 1 ano de uso sem preocupação. Valor adicional: <strong>R$ 97</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => setWithKit(true)}
                className={`flex-1 rounded-full px-3 py-2 text-sm font-bold border transition-colors ${
                  withKit ? "bg-[#27AE60] text-white border-[#27AE60]" : "bg-white text-foreground border-border"
                }`}
              >
                Quero levar o kit
              </button>
              <button
                onClick={() => setWithKit(false)}
                className={`flex-1 rounded-full px-3 py-2 text-sm font-bold border transition-colors ${
                  !withKit ? "bg-[#F5F7FA] text-foreground border-border" : "bg-white text-foreground border-border"
                }`}
              >
                Sem kit agora
              </button>
            </div>
          </div>

          <div className="border border-border rounded-xl p-4 bg-white mb-4 shadow-sm">
            <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">Resumo rápido</p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-foreground">
              <span className="flex items-center gap-1 font-bold">
                Cor: {selectedColor ? selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1) : "não selecionada"}
              </span>
              <span className="h-4 w-px bg-border" />
              <span className="flex items-center gap-1">
                Kit: {withKit ? "incluído (+R$ 97)" : "não incluso"}
              </span>
              <span className="h-4 w-px bg-border" />
              <span className="font-bold">
                Total estimado: {withKit ? "R$ 346,90" : "R$ 249,90"}
              </span>
            </div>
            <p className="text-[11px] text-muted-foreground mt-2">
              Estoque e tempo da oferta permanecem salvos neste dispositivo para manter a consistência da sua sessão.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-4 sticky bottom-0 bg-white pb-2">
            <button
              onClick={onClose}
              className="flex-1 border border-border text-foreground rounded-xl py-3 font-semibold hover:bg-muted transition-colors"
            >
              Cancelar
            </button>
            <button
              disabled={!selectedColor}
              onClick={() => onConfirm({ color: selectedColor, withKit })}
              className={`flex-1 rounded-xl py-3 font-bold text-white flex items-center justify-center gap-2 ${
                selectedColor
                  ? "bg-gradient-to-r from-[#E53935] to-[#C62828] hover:from-[#C62828] hover:to-[#B71C1C]"
                  : "bg-muted text-muted-foreground cursor-not-allowed"
              } transition-colors`}
            >
              <Sparkles className="w-4 h-4" />
              Continuar para o checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}
