import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Protection } from "@/components/protection"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "DREAME H12 PRO - Aspirador Vertical Potente | Limpeza Profissional",
  description:
    "O aspirador vertical mais potente do mercado. Limpeza profunda em segundos. Mais de 50.000 familias satisfeitas. Por apenas R$249,90 com desconto especial.",
  generator: "v0.app",
  keywords: ["aspirador vertical", "dreame h12 pro", "limpeza profissional", "aspirador potente"],
  icons: {
    icon: [{ url: "/icon.png" }],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${geistMono.variable}`}>
      <head>
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async
          defer
        />
      </head>
      <body className="font-sans antialiased">
        <Protection />
        {children}
        <Analytics />
      </body>
    </html>
  )
}


