"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"

export function Navbar() {
  const { items } = useCart()
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <nav className="bg-transparent">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Toko CaKSya Logo"
            width={75}
            height={50}
            className="object-contain"
          />
        </Link>

        <div className="flex items-center gap-8">
          <Link href="/about">
            About
          </Link>
          <Link href="/products">
            Products
          </Link>
          <Link href="/cart">
            <Button variant="ghost" className="relative">
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}