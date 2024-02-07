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
import aboutData from "@/app/data/about"

export function Carrossel() {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-lg"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {aboutData.map((items, index) => (
          <CarouselItem key={index}>
            <div className="p-2">
              <Card>
                <CardContent className="flex flex-col aspect-square justify-center p-6 bg-lilas rounded-xl gap-6 w-full max-h-64">
                  <div className="text-2xl font-bold font-sans text-green">{items.name}</div>
                  <div className="text-base font-sans font-medium text-white">{items.description}</div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" bg-lilas"/>
      <CarouselNext className=" bg-lilas"/>
    </Carousel>
  )
}
