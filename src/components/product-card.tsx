import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { formatPrice } from "@/lib/IdrFormatter"
import { ProductCardProps } from "@/types/entites"

export function ProductCard({ id, name, category, stock, price, image }: ProductCardProps) {
  return (
    <Link href={`/product/${id}`}>
      <Card className="h-full hover:shadow-lg transition-shadow">
        <div className="aspect-square relative">
          <Image src={image || "/logo.png"} alt={name} fill className="object-cover rounded-t-lg" />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground mb-2">Jumlah Stok: {stock}</p>
          <p className="text-sm text-muted-foreground">{category}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <p className="text-lg font-semibold text-primary">{formatPrice(price)}</p>
        </CardFooter>
      </Card>
    </Link>
  )
}