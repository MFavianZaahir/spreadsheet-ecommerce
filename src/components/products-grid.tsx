import { ProductsGridProps } from "@/types/entites"
import { ProductCard } from "./product-card"

export function ProductsGrid({ items }: ProductsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
      {items.map((item, index: number) => (
          <ProductCard
          key={index}
          id={index +3}
          name={item[1]}
          category={item[3]}
          stock={item[11]}
          variant={item[6]}
          price={Number.parseInt(item[8])}
          image="/logo.png?height=200&width=200"
        />
      ))}
    </div>
  )
}

