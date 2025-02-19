import { fetchSheetData } from "@/lib/api/sheet"
import { ProductCard } from "@/components/product-card"

export default async function ProductsPage() {
  const data = await fetchSheetData()
  const products = data.props.items.slice(2) 

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Semua Produk</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item, index) => (
          <ProductCard
            key={index}
            id={item[0]}
            name={item[1]}
            category={item[3]}
            stock={item[11]}
            variant={item[6]}
            price={Number.parseInt(item[8])}
            image="/logo.png?height=200&width=200"
          />
        ))}
      </div>
    </div>
  )
}