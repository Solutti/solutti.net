// Arquivo de config @/app/data/servicos.ts
import servicesData from "@/app/data/servicos"

// Componentes
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

export function Portfolio(){
    return(
        <div className="flex items-start justify-center my-20" id="portfolio">
            <div className="center gap-20">
                <div className="flex flex-col w-[100%] lg:w-[50vw] gap-6 py-10">
                    <div className=" text-4xl  font-bold text-lilas normal-case" aria-label="Nossos serviços">Nossos Serviços</div>
                    <p className="text-base  font-regular text-gray" aria-label="Descrição da seção nossos serviços">Cada serviço da Solutti Networks é projetado para elevar sua experiência de conectividade, proporcionando eficiência, segurança e inovação.</p>
                </div>
                <div className=" w-[100%] lg:w-[50vw] p-2 flex justify-start">
                    <Accordion type="single" collapsible className="flex-1">
                        { servicesData.map( (id) => 
                        <div key={id.id}>
                            <AccordionItem value={id.id}>
                                <AccordionTrigger className=" text-start">{id.name}</AccordionTrigger>
                                <AccordionContent className=" text-base  font-regular text-gray">
                                {id.description}
                                </AccordionContent>
                            </AccordionItem>
                        </div>
                        )}
                    </Accordion>
                </div>
            </div>
            
        </div>
    )
}