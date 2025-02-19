"use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const carouselImages = [
  {
    url: "/hero.jpg",
    title: "Kebutuhan Pokok Lengkap",
    description: "Temukan berbagai kebutuhan sehari-hari untuk keluarga Anda",
  },
  {
    url: "/hero2.jpg",
    title: "Produk Berkualitas",
    description: "Kami menyediakan produk-produk terbaik untuk Anda",
  },
  {
    url: "/hero3.jpg",
    title: "Harga Bersaing",
    description: "Dapatkan harga terbaik untuk setiap pembelian",
  },
  {
    url: "/hero4.jpg",
    title: "Harga Bersaing",
    description: "Dapatkan harga terbaik untuk setiap pembelian",
  },
]

export function HomeCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {carouselImages.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[600px] w-full">
              <Image
                src={image.url || "/logo.png"}
                alt={image.title}
                fill
                className="object-cover brightness-50"
                priority={index === 0}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{image.title}</h2>
                <p className="text-lg md:text-xl max-w-2xl">{image.description}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden md:block">
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
      </div>
    </Carousel>
  )
}