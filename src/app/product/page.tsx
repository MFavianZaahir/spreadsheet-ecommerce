import { Suspense } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { searchProducts } from "@/lib/actions/product-action"
import { ProductsGrid } from "@/components/products-grid"
import { PaginationControls } from "@/components/pagination"
import type { SearchParams } from "@/types/entities"

export default async function ProductsPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams;
  const { 
    page = "1", 
    name = "", 
    minPrice = "", 
    maxPrice = "", 
    minStock = "" 
  } = params;

  const { items, totalPages, currentPage } = await searchProducts({
    page: Number.parseInt(page, 10) || 1,
    name,
    minPrice: minPrice ? Number.parseInt(minPrice, 10) : undefined,
    maxPrice: maxPrice ? Number.parseInt(maxPrice, 10) : undefined,
    minStock: minStock ? Number.parseInt(minStock, 10) : undefined,
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Semua Produk</h1>

      <form action="/product" className="mb-8 space-y-4">
        <div className="flex flex-wrap gap-4">
          <Input name="name" placeholder="Cari produk..." className="flex-1" defaultValue={name} />
          <Input name="minPrice" type="number" placeholder="Harga min" className="w-32" defaultValue={minPrice} />
          <Input name="maxPrice" type="number" placeholder="Harga max" className="w-32" defaultValue={maxPrice} />
          <Input name="minStock" type="number" placeholder="Stok min" className="w-32" defaultValue={minStock} />
          <Button type="submit">Cari</Button>
          <Button type="reset" variant="outline">Reset Filter</Button>
        </div>
      </form>

      <Suspense fallback={<div>Loading...</div>}>
        <ProductsGrid items={items} />
      </Suspense>

      <PaginationControls
        totalPages={totalPages}
        currentPage={currentPage}
        searchParams={{
          name,
          minPrice,
          maxPrice,
          minStock,
        }}
      />
    </div>
  )
}