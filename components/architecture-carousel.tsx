"use client"

import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function ArchitectureCarousel({
  images,
  title,
}: {
  images: string[]
  title: string
}) {
  return (
    <Carousel className="mt-6" opts={{ align: "start" }}>
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={src}>
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-background">
              <Image
                src={src}
                alt={`${title} — architecture diagram ${index + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {images.length > 1 ? (
        <>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </>
      ) : null}
    </Carousel>
  )
}
