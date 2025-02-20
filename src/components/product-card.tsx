import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatPrice } from "@/lib/IdrFormatter"
import type { ProductDetailProps } from "@/types/entities"

export function ProductCard({ id, name, category, stock, price, image }: ProductDetailProps) {
  return (
    <Link href={`/product/${id}`}>
      <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <div className="aspect-square relative overflow-hidden rounded-t-lg">
          <Image
            src={image || "/logo.png"}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
          />
          <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">{category}</Badge>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-1 line-clamp-2">{name}</h3>
          <p className="text-sm text-muted-foreground mb-2">Jumlah Stok: {stock}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <p className="text-lg font-semibold text-primary">{formatPrice(price)}</p>
          <Badge variant={stock > 0 ? "secondary" : "destructive"} className="text-xs">
            {stock > 0 ? `Tersedia: ${stock}` : "Stok Habis"}
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  )
}