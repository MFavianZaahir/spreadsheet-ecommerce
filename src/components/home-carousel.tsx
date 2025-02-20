"use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { carouselImages } from "@/types/constants"

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
            <div className="relative h-[500px] w-full">
              <Image
                src={image.url || "/placeholder.svg"}
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