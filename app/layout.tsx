import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

export const metadata: Metadata = {
  title: "Raízes Makeup | Beleza Natural Brasileira",
  description:
    "Descubra a beleza natural brasileira com Raízes Makeup. Cosméticos inspirados na biodiversidade, sustentáveis e feitos para celebrar toda a diversidade da pele brasileira.",
}

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} ${cormorantGaramond.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
