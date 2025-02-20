import { Suspense } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { searchProducts } from "@/lib/actions/product-action"
import { ProductsGrid } from "@/components/products-grid"
import { PaginationControls } from "@/components/pagination"
import type { Filters } from "@/types/entities"
import { ProductCardSkeleton } from "@/components/product-card-skeleton"
import { categories } from "@/types/constants"

export default async function ProductsPage({ searchParams }: { searchParams: Promise<Filters> }) {
  const { page = 1, category = "ALL", name = "", minPrice, maxPrice, minStock } = await searchParams

  const { items, totalPages, currentPage } = await searchProducts({
    page,
    name,
    category,
    minPrice: minPrice ? Number(minPrice) : undefined,
    maxPrice: maxPrice ? Number(maxPrice) : undefined,
    minStock: minStock ? Number(minStock) : undefined,
  })

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-secondary/10 to-background">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary">Explore Our Products</h1>

      <form action="/product" className="mb-8 space-y-4 bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-wrap gap-4">
          <Input name="name" placeholder="Search products..." className="flex-1" defaultValue={name} />
          <Select name="category" defaultValue={category}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input name="minPrice" type="number" placeholder="Min price" className="w-32" defaultValue={minPrice} />
          <Input name="maxPrice" type="number" placeholder="Max price" className="w-32" defaultValue={maxPrice} />
          <Input name="minStock" type="number" placeholder="Min stock" className="w-32" defaultValue={minStock} />
          <Button type="submit" className="bg-primary hover:bg-primary/90">
            Search
          </Button>
          <Button type="reset" variant="outline">
            Reset
          </Button>
        </div>
      </form>

      <Suspense fallback={<ProductCardSkeleton />}>
        {items.length > 0 ? (
          <ProductsGrid items={items} />
        ) : (
          <div className="text-center py-10">
            <h2 className="text-2xl font-semibold mb-2">No products found</h2>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </Suspense>

      {totalPages > 1 && (
        <PaginationControls
          totalPages={totalPages}
          currentPage={currentPage}
          searchParams={{
            name,
            category,
            minPrice: minPrice?.toString(),
            maxPrice: maxPrice?.toString(),
            minStock: minStock?.toString(),
          }}
        />
      )}
    </div>
  )
}