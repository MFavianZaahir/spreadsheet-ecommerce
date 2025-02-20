import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { HomeCarousel } from "@/components/home-carousel"
import { featuredProducts } from "@/types/constants"
import { Clock, Package, ShoppingCart, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative">
        <HomeCarousel />
        <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
          <Link href="/product">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Belanja Sekarang
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Produk Unggulan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square relative">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
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

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Pengiriman Tepat Waktu</h3>
              <p className="text-muted-foreground">Kami berkomitmen untuk mengirimkan pesanan Anda tepat waktu</p>
            </div>
            <div className="text-center p-6">
              <Package className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Produk Berkualitas</h3>
              <p className="text-muted-foreground">Semua produk kami dijamin berkualitas dan fresh</p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Pelayanan Terbaik</h3>
              <p className="text-muted-foreground">Tim kami siap membantu Anda 24/7</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <ShoppingCart className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Belanja Kebutuhan Pokok Lebih Mudah</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Dapatkan semua kebutuhan pokok berkualitas dengan harga terbaik dan pengiriman cepat ke rumah Anda
          </p>
          <Link href="/product">
            <Button size="lg" variant="secondary">
              Mulai Belanja
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}