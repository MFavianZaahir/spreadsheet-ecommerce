import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/components/cart-provider"
import type { Metadata } from 'next'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Toko Cak Sya' - Sembako & Bahan Kue di Pasar Lawang",
  description: "Temukan berbagai sembako dan bahan kue berkualitas dengan harga terbaik di Pasar Lawang.",
  keywords: "sembako, bahan kue, toko sembako, pasar lawang, toko bahan kue",
  openGraph: {
    title: "Toko Cak Sya'",
    description: "Temukan berbagai sembako dan bahan kue berkualitas dengan harga terbaik di Pasar Lawang.",
    url: "https://tokocaksya.com",
    type: "website",
    images: [{ url: "https://images.tokopedia.net/img/cache/215-square/GAnVPX/2022/8/4/8f5a399a-15f6-4109-b4c9-d9ea82e3b903.jpg" }],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  )
}