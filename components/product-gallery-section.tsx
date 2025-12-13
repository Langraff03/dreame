"use client"

import { useState } from "react"

const galleryItems = [
  { src: "https://m.media-amazon.com/images/I/619MiWnGTAL._AC_SY879_.jpg" },
  { src: "https://m.media-amazon.com/images/I/81qQNe1x4nL._AC_SY879_.jpg" },
  { src: "https://m.media-amazon.com/images/I/81a07NICy-L._AC_SY879_.jpg" },
  { src: "https://m.media-amazon.com/images/I/413zfufilqL._AC_SY879_.jpg" },
  { src: "https://m.media-amazon.com/images/I/41qWzWbsxKL._AC_SY879_.jpg" },
]

export function ProductGallerySection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block text-[#00BFA6] font-semibold text-xs md:text-sm tracking-wider uppercase mb-3">
            veja de perto
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-3 text-balance">
            Detalhes do <span className="text-primary">DREAME H12 PRO</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[220px_1fr] items-start">
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2">
            {galleryItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`min-w-[120px] lg:w-full rounded-xl border ${
                  idx === activeIndex ? "border-primary" : "border-border"
                } overflow-hidden shadow-sm hover:shadow-md transition`}
              >
                <div className="aspect-square bg-muted">
                  <img src={item.src} alt="DREAME H12 PRO" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-border overflow-hidden shadow-lg bg-gradient-to-br from-white to-muted/40">
            <div className="w-full h-[420px] md:h-[520px] bg-white flex items-center justify-center">
              <img
                src={galleryItems[activeIndex].src}
                alt="DREAME H12 PRO"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
