import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
// Arquivo de config @/app/data/servicos.ts
import servicesData from "@/app/data/servicos"
import Image from "next/image"

export function PorfolioServicos() {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="relative w-[90%] max-w-4xl ml-12 p-6"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="flex flex-1">
        {servicesData.map((items, index) => (
          <CarouselItem key={index}>
            <div className="w-full">
              <Card className="border-none shadow-none">
                <CardContent className="center flex flex-1 pt-6 justify-center items-center">
                  <div className="lg:max-w-[40%] w-[100%]">
                    <Image src={`/svg/${items.img}`} alt={`Imagem ${items.name}`} width="420" height="420" className="text-lilas"/>
                  </div>
                  <div className="lg:max-w-[60%] w-[100%]">
                    <div className="text-3xl font-bold text-lilas">{items.name}</div>
                    <div className="text-base  font-regular text-gray">{items.description}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:flex w-20 h-20 border-none shadow-none bg-opacity-0"/>
      <CarouselNext className="hidden lg:flex w-20 h-20 border-none shadow-none bg-opacity-0"/>
    </Carousel>
  )
}
