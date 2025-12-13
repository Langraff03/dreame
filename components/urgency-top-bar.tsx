"use client"

import { useEffect, useState } from "react"
import { Clock, Eye, Flame } from "lucide-react"

type UrgencySnapshot = {
  endsAt: number
  viewerCount: number
  stockCount: number
  initialStock: number
  minStock: number
}

type Listener = () => void

const STORAGE_KEY = "dreame-urgency-state"

const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min

function createSnapshot(): UrgencySnapshot {
  const now = Date.now()
  const endsAt = now + rand(48, 82) * 60 * 1000 // 48–82 min de janela realista
  const initialStock = rand(36, 62)
  const stockCount = Math.max(initialStock - rand(3, 10), 12)
  const minStock = Math.max(4, Math.round(initialStock * 0.12))
  const viewerCount = rand(118, 207)

  return { endsAt, viewerCount, stockCount, initialStock, minStock }
}

const sharedState = {
  state: createSnapshot(),
  initialized: false,
  listeners: new Set<Listener>(),
  viewerPulseId: undefined as number | undefined,
  salesTimeoutId: undefined as number | undefined,

  get viewerCount() {
    return this.state.viewerCount
  },
  get stockCount() {
    return this.state.stockCount
  },
  get initialStock() {
    return this.state.initialStock
  },
  get minStock() {
    return this.state.minStock
  },

  init() {
    if (this.initialized) return
    if (typeof window === "undefined") return

    try {
      const persisted = localStorage.getItem(STORAGE_KEY)
      if (persisted) {
        const parsed = JSON.parse(persisted) as Partial<UrgencySnapshot>
        if (parsed && parsed.endsAt && parsed.initialStock) {
          const base = createSnapshot()
          const now = Date.now()
          const endsAt = parsed.endsAt > now ? parsed.endsAt : base.endsAt
          const initialStock = parsed.initialStock ?? base.initialStock
          const minStock = parsed.minStock ?? Math.max(4, Math.round(initialStock * 0.12))
          const stockCount =
            parsed.stockCount && parsed.stockCount > 0
              ? Math.max(minStock, Math.min(parsed.stockCount, initialStock))
              : Math.max(minStock + 1, initialStock - rand(2, 8))

          this.state = {
            ...base,
            ...parsed,
            endsAt,
            initialStock,
            minStock,
            stockCount,
            viewerCount: parsed.viewerCount ?? base.viewerCount,
          }
        }
      }
    } catch {
      this.state = createSnapshot()
    }

    this.initialized = true
    this.persist()
    this.startViewerPulse()
    this.startSalesLoop()
    this.notify()
  },

  persist() {
    if (typeof window === "undefined") return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state))
  },

  notify() {
    this.listeners.forEach((listener) => listener())
  },

  subscribe(listener: Listener) {
    this.listeners.add(listener)
    return () => this.listeners.delete(listener)
  },

  updateViewers(count: number) {
    this.state.viewerCount = Math.max(90, Math.min(240, count))
    this.persist()
    this.notify()
  },

  updateStock(nextCount: number) {
    const clamped = Math.max(this.state.minStock, Math.min(this.state.stockCount, nextCount))
    if (clamped === this.state.stockCount) return
    this.state.stockCount = clamped
    this.persist()
    this.notify()
  },

  startViewerPulse() {
    if (this.viewerPulseId) return
    this.viewerPulseId = window.setInterval(() => {
      const jitter = rand(-3, 4)
      this.updateViewers(this.state.viewerCount + jitter)
    }, 4000 + rand(-500, 800))
  },

  startSalesLoop() {
    if (this.salesTimeoutId) return

    const scheduleSale = () => {
      const delay = rand(22000, 55000)
      this.salesTimeoutId = window.setTimeout(() => {
        if (this.state.stockCount > this.state.minStock) {
          const saleSize = Math.random() < 0.28 ? 2 : 1
          this.updateStock(this.state.stockCount - saleSize)
        }
        scheduleSale()
      }, delay)
    }

    scheduleSale()
  },
}

function formatTimeLeft(target: number) {
  const now = Date.now()
  const diff = Math.max(0, target - now)
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)
  return { hours, minutes, seconds }
}

export function UrgencyTopBar() {
  const [isMounted, setIsMounted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(() => formatTimeLeft(sharedState.state.endsAt))
  const [viewerCount, setViewerCount] = useState(sharedState.viewerCount)
  const [stockCount, setStockCount] = useState(sharedState.stockCount)

  useEffect(() => {
    setIsMounted(true)
    sharedState.init()
    setViewerCount(sharedState.viewerCount)
    setStockCount(sharedState.stockCount)
    setTimeLeft(formatTimeLeft(sharedState.state.endsAt))

    const timer = window.setInterval(() => {
      setTimeLeft(formatTimeLeft(sharedState.state.endsAt))
    }, 1000)

    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    return sharedState.subscribe(() => {
      setViewerCount(sharedState.viewerCount)
      setStockCount(sharedState.stockCount)
    })
  }, [])

  if (!isMounted) return null

  return (
    <div className="fixed top-0 left-0 right-0 bg-[#E53935] z-[100] py-2 md:py-2.5 px-3 md:px-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 sm:gap-4 md:gap-8 flex-wrap text-white text-xs sm:text-sm">
        {/* Timer */}
        <div className="flex items-center gap-1.5 md:gap-2">
          <Flame className="w-3 h-3 md:w-4 md:h-4 animate-pulse flex-shrink-0" />
          <span className="font-bold whitespace-nowrap hidden sm:inline">OFERTA ENCERRA EM:</span>
          <span className="font-bold whitespace-nowrap sm:hidden">ENCERRA:</span>
          <div className="flex items-center gap-0.5 md:gap-1 font-mono font-bold bg-black/20 px-1.5 md:px-2 py-0.5 md:py-1 rounded">
            <span>{String(timeLeft.hours).padStart(2, "0")}</span>
            <span className="animate-pulse">:</span>
            <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
            <span className="animate-pulse">:</span>
            <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
          </div>
        </div>

        <div className="hidden sm:block w-px h-3 md:h-4 bg-white/30" />

        {/* Viewers */}
        <div className="flex items-center gap-1.5 md:gap-2">
          <Eye className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
          <span className="whitespace-nowrap">
            <strong>{viewerCount}</strong> <span className="hidden sm:inline">pessoas</span> vendo
          </span>
        </div>

        <div className="hidden md:block w-px h-4 bg-white/30" />

        {/* Stock warning */}
        <div className="hidden md:flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>
            Apenas <strong>{stockCount} unidades</strong> restantes
          </span>
        </div>
      </div>
    </div>
  )
}

export { sharedState }
