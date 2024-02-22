'use client'

// Arquivo de config @/app/data/servicos.ts
import servicesData from "@/app/data/servicos"

// Componentes
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { PorfolioServicos } from "../addons/servicos/carrossel"

//Framer Motion
import { AnimatePresence, motion } from "framer-motion";

export function Portfolio(){
    return(
        <div className="flex items-start justify-center mt-20" id="portfolio">
            <div className="center gap-2 flex flex-col items-center">
                <div className="flex flex-col w-[100%] lg:w-[50vw] gap-6 py-10 items-center justify-center">
                    <motion.div 
                    initial={{ opacity: 0, translateY: 40}}
                    whileInView={{opacity: 1, translateY: 0 }}
                    transition={{ duration: 1}}
                    className=" text-4xl  font-bold text-lilas normal-case" aria-label="Nossos serviços">Nossos Serviços</motion.div>
                    <motion.p 
                    initial={{ opacity: 0, translateY: 40}}
                    whileInView={{opacity: 1, translateY: 0 }}
                    transition={{ duration: 1, delay: .5}}
                    className="text-base  font-regular text-gray text-center max-w-[80%]" aria-label="Descrição da seção nossos serviços">Cada serviço da Solutti Networks é projetado para elevar sua experiência de conectividade, proporcionando eficiência, segurança e inovação.</motion.p>
                </div>
                <motion.div
                initial={{ opacity: 0, translateY: 40}}
                whileInView={{opacity: 1, translateY: 0}}
                transition={{ duration: 1, delay: .8}}
                >
                    <PorfolioServicos/>
                </motion.div>
                
                { /*
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
                */}
            </div>
            
        </div>
    )
}