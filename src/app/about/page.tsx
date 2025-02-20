import Image from "next/image"
import { Clock, Calendar, Package, Award, Users, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[300px] md:h-[400px]">
        <Image
          src="/toko.jpg?height=400&width=1200"
          alt="Toko Sembako"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Kami</h1>
            <p className="text-lg md:text-xl">Melayani Sejak 1996</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Clock className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Jam Operasional</h3>
              <p className="text-muted-foreground">08:00 - 19:30 WIB</p>
              <p className="text-muted-foreground">Setiap Hari</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Package className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Waktu Pemrosesan</h3>
              <p className="text-muted-foreground">± 2 hari</p>
              <p className="text-muted-foreground">Pengiriman cepat & aman</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <MapPin className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Lokasi</h3>
              <p className="text-muted-foreground">Pasar Lawang</p>
              <p className="text-muted-foreground">Malang, Jawa Timur</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/jualan.jpg?height=400&width=600"
                alt="Toko Kami"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Perjalanan Kami</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Sejak 1996, kami telah menjadi bagian tak terpisahkan dari komunitas Pasar Lawang, melayani kebutuhan
                  pokok dan bahan kue untuk masyarakat Malang dan sekitarnya. Berawal dari sebuah kios kecil, kami terus
                  berkembang berkat kepercayaan dan dukungan pelanggan setia kami.
                </p>
                <p className="text-muted-foreground">
                  Kami mengutamakan kualitas dalam setiap produk yang kami jual. Mulai dari beras premium, tepung
                  berkualitas, hingga berbagai macam bahan kue, semuanya kami pilih dengan teliti untuk memastikan
                  kepuasan pelanggan. Harga yang kami tawarkan juga sangat kompetitif, menjadikan kami pilihan utama
                  untuk berbelanja kebutuhan sehari-hari.
                </p>
                <p className="text-muted-foreground">
                  Dengan pengalaman lebih dari 27 tahun, kami memahami betul kebutuhan pelanggan kami. Kami terus
                  berinovasi dalam pelayanan, termasuk menyediakan layanan pengiriman untuk memudahkan pelanggan
                  mendapatkan kebutuhan mereka. Komitmen kami adalah menjaga kualitas produk dan memberikan pelayanan
                  terbaik untuk kepuasan pelanggan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Calendar className="w-8 h-8 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">27+</div>
              <p>Tahun Pengalaman</p>
            </div>
            <div>
              <Users className="w-8 h-8 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">1000+</div>
              <p>Pelanggan Setia</p>
            </div>
            <div>
              <Package className="w-8 h-8 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">500+</div>
              <p>Produk Tersedia</p>
            </div>
            <div>
              <Award className="w-8 h-8 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">100%</div>
              <p>Kepuasan Pelanggan</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Siap Melayani Kebutuhan Anda</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Kunjungi toko kami di Pasar Lawang atau pesan secara online untuk mendapatkan berbagai produk berkualitas
            dengan harga terbaik
          </p>
          <Link href="/products">
            <Button size="lg">Lihat Produk Kami</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}