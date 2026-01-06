"use client"

import { AlertTriangle, Users, Package, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { sharedState } from "./urgency-top-bar"

export function ScarcitySection() {
  const [stockCount, setStockCount] = useState(sharedState.stockCount)
  const [viewerCount, setViewerCount] = useState(sharedState.viewerCount)
  const [initialStock, setInitialStock] = useState(sharedState.initialStock)

  useEffect(() => {
    sharedState.init()
    setStockCount(sharedState.stockCount)
    setViewerCount(sharedState.viewerCount)
    setInitialStock(sharedState.initialStock)

    return sharedState.subscribe(() => {
      setStockCount(sharedState.stockCount)
      setViewerCount(sharedState.viewerCount)
      setInitialStock(sharedState.initialStock)
    })
  }, [])

  const progressPercent =
    initialStock > 0 ? Math.max(0, Math.min(100, (stockCount / initialStock) * 100)) : 100

  return (
    <section className="py-12 md:py-16 px-4 md:px-6 bg-gradient-to-b from-[#E53935]/5 to-white border-y-2 border-[#E53935]/20">
      <div className="max-w-5xl mx-auto">
        {/* Main Stats */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {/* Stock Counter - vermelho para urgência */}
          <div className="bg-white border-2 border-[#E53935]/30 rounded-xl md:rounded-2xl p-5 md:p-6 text-center shadow-lg">
            <Package className="w-10 h-10 md:w-12 md:h-12 text-[#E53935] mx-auto mb-2 md:mb-3" />
            <p className="text-4xl md:text-5xl font-black text-[#E53935] mb-1">{stockCount}</p>
            <p className="text-foreground font-semibold text-sm md:text-base">Unidades Restantes</p>
            <div className="mt-2 md:mt-3 bg-[#E53935]/10 rounded-full h-2 overflow-hidden">
              <div
                className="bg-[#E53935] h-full transition-all duration-1000"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="text-[10px] md:text-xs text-muted-foreground mt-2">
              Estoque inicial: {initialStock} unidades
            </p>
          </div>

          {/* Live Viewers - azul */}
          <div className="bg-white border border-border rounded-xl md:rounded-2xl p-5 md:p-6 text-center hover:shadow-lg transition-shadow">
            <div className="relative">
              <Users className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-2 md:mb-3" />
              <span className="absolute top-0 right-1/2 translate-x-8 md:translate-x-10 w-2.5 h-2.5 md:w-3 md:h-3 bg-[#27AE60] rounded-full animate-pulse" />
            </div>
            <p className="text-4xl md:text-5xl font-black text-foreground mb-1">{viewerCount}</p>
            <p className="text-foreground font-semibold text-sm md:text-base">Pessoas Vendo Agora</p>
            <p className="text-[10px] md:text-xs text-muted-foreground mt-2">Atualizado em tempo real</p>
          </div>

          {/* Sales Today - verde */}
          <div className="bg-white border border-border rounded-xl md:rounded-2xl p-5 md:p-6 text-center hover:shadow-lg transition-shadow sm:col-span-2 md:col-span-1">
            <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-[#27AE60] mx-auto mb-2 md:mb-3" />
            <p className="text-4xl md:text-5xl font-black text-[#27AE60] mb-1">53</p>
            <p className="text-foreground font-semibold text-sm md:text-base">Vendas Hoje</p>
            <p className="text-[10px] md:text-xs text-muted-foreground mt-2">+23% em relação a ontem</p>
          </div>
        </div>

        {/* Warning Banner - vermelho para urgência */}
        <div className="bg-[#E53935]/10 border-2 border-[#E53935]/30 rounded-xl md:rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <div className="flex-shrink-0">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#E53935] rounded-full flex items-center justify-center animate-pulse">
              <AlertTriangle className="w-7 h-7 md:w-8 md:h-8 text-white" />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-black text-foreground mb-2">
              ATENÇÃO: O estoque está acabando rapidamente!
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Com <strong className="text-foreground">{viewerCount} pessoas</strong> vendo esta página agora e apenas{" "}
              <strong className="text-[#E53935]">{stockCount} unidades</strong> restantes, não podemos garantir que esta
              oferta estará disponível quando você voltar. Garanta o seu agora!
            </p>
          </div>

          <Button
            size="lg"
            className="w-full md:w-auto bg-[#E53935] hover:bg-[#C62828] text-white font-bold px-6 md:px-8 py-5 md:py-6 shadow-lg shadow-[#E53935]/30 flex-shrink-0 text-sm md:text-base"
          >
            GARANTIR MINHA UNIDADE
          </Button>
        </div>
      </div>
    </section>
  )
}
