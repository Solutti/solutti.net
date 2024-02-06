// Arquivo de config @/app/data/servicos.ts
import servicesData from "@/app/data/servicos"

// Componentes
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

export function Portfolio(){
    return(
        <div className="min-h-screen flex items-center justify-center" id="portfolio">
            <div className="center gap-20">
                <div className="flex flex-col w-[50vw] gap-6 py-10">
                    <h2 className=" text-4xl font-sans font-bold text-gray-dark" aria-label="Nossos serviços">NOSSOS SERVIÇOS</h2>
                    <p className="text-base font-sans font-regular text-gray" aria-label="Descrição da seção nossos serviços">Cada serviço da Solutti Networks é projetado para elevar sua experiência de conectividade, proporcionando eficiência, segurança e inovação.</p>
                </div>
                <div className="w-full p-2">
                    <Accordion type="single" collapsible className=" w-full">
                        { servicesData.map( (id) =>
                            <AccordionItem value={id.id}>
                                <AccordionTrigger className=" text-start">{id.name}</AccordionTrigger>
                                <AccordionContent className=" text-base font-sans font-regular text-gray">
                                {id.description}
                                </AccordionContent>
                            </AccordionItem>
                        )}
                    </Accordion>
                </div>
            </div>
            
        </div>
    )
}