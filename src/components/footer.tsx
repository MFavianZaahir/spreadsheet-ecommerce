import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Toko CaKSya</h3>
            <p className="text-muted-foreground">
              Menyediakan berbagai kebutuhan pokok untuk keluarga Anda dengan harga terjangkau dan kualitas terjamin.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Kontak</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+62 123-456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@tokocaksya.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Jl. Contoh No. 123, Kota, Indonesia</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Menu</h3>
            <div className="space-y-2">
              <Link href="/" className="block hover:text-primary">
                Beranda
              </Link>
              <Link href="/product" className="block hover:text-primary">
                Produk
              </Link>
              <Link href="/cart" className="block hover:text-primary">
                Keranjang
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Ikuti Kami</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-primary">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Toko CaKSya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}