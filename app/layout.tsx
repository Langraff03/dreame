import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
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
    "O aspirador vertical mais potente do mercado. Limpeza profunda em segundos. Mais de 50.000 familias satisfeitas. Por apenas R$147,00 com desconto especial.",
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
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '886513290695504');
            fbq('track', 'PageView');`}
        </Script>
      </head>
      <body className="font-sans antialiased">
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=886513290695504&ev=PageView&noscript=1" />',
          }}
        />
        <Protection />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
