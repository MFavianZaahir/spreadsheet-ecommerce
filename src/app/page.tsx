import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { HomeCarousel } from "@/components/home-carousel"
import { featuredProducts } from "./product/featured-products"

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative">
        <HomeCarousel />
        <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
          <Link href="/product">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Lihat Produk
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Produk Unggulan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square relative">
                  <Image src={product.image || "/logo.png"} alt={product.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-primary">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}