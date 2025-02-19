"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAtom } from "jotai"
import { addToCartAtom } from "@/store/cart-store"
import { formatPrice } from "@/lib/IdrFormatter"
import type { ProductDetailProps } from "@/types/entities"

export function ProductDetail({
  id,
  name,
  category,
  brand,
  description,
  variant,
  price,
  stock,
  image,
}: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const [, addItem] = useAtom(addToCartAtom)

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price,
      variant,
      quantity,
      image,
    })
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="relative aspect-square">
        <Image src={image || "/logo.png"} alt={name} fill className="object-cover rounded-lg" />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-2">{name}</h1>
        <p className="text-lg text-muted-foreground mb-4">{brand}</p>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-1">Kategori</h3>
            <p>{category}</p>
          </div>
          {description && (
            <div>
              <h3 className="font-semibold mb-1">Deskripsi</h3>
              <p>{description}</p>
            </div>
          )}
          <div>
            <h3 className="font-semibold mb-1">Varian</h3>
            <p>{variant}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Harga</h3>
            <p className="text-2xl text-primary font-bold">{formatPrice(price)}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-24">
              <Input
                type="number"
                min="1"
                max={stock}
                value={quantity}
                onChange={(e) => setQuantity(Number.parseInt(e.target.value))}
              />
            </div>
            <Button onClick={handleAddToCart} className="flex-1" disabled={stock === 0}>
              {stock === 0 ? "Stok Habis" : "Masukkan Keranjang"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}