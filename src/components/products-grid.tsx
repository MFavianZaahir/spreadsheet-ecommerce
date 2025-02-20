import { ProductsGridProps } from "@/types/entities"
import { ProductCard } from "./product-card"

export function ProductsGrid({ items }: ProductsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
      {items.map((item) => (
        <ProductCard
          key={String(item[0])}
          id={Number(item[0])}
          name={String(item[1])}
          category={String(item[3])}
          stock={Number(item[11])}
          variant={String(item[6])}
          price={Number.parseInt(String(item[8]))}
          image="/logo.png?height=200&width=200"
        />
      ))}
    </div>
  )
}