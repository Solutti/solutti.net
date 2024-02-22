'use client'

// Extenções
import Image from "next/image";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

// Arquivos
import Selo from "../../../../public/logo/selo.png"
import { Carrossel } from "../addons/carrossel/carrossel";
import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

//Framer Motion
import { AnimatePresence, motion } from "framer-motion";

export function QuemSomos(){

    const mapRef:any = useRef<Player>(null);

    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.5, // Porcentagem da div visível para disparar a animação
    });

    return(
        <div className="min-h-screen w-full flex items-center flex-col justify-center" id="quemSomos">
            {/*QUEM SOMOS*/}
            <AnimatePresence>
                <motion.div 
                initial={{ opacity: 0, translateX: -200}}
                whileInView={{opacity: 1, translateX: 0 }}
                transition={{ duration: 1}}
                className=" flex flex-1 w-full items-center justify-center">
                    <div className=" center flex flex-1 flex-row items-center gap-20 lg:h-96">
                        <div className="w-[100%] lg:w-[50%] lg:flex hidden">
                            <Image src={Selo} width={450} alt="Animação de background" />
                        </div>
                        <div className=" flex flex-col gap-6 w-[100%] lg:w-[50%]">
                            <div className=" font-bold text-4xl text-lilas">Quem Somos</div>
                            <div className=" text-base font-regular text-gray">Bem-vindo à Solutti Networks, sua parceira em conectividade. Mais que um provedor de internet, garantimos soluções de alta qualidade para empresas e negócios de todos os portes e setores. Nosso compromisso é oferecer um atendimento de excelência, valorizando a satisfação do cliente e evoluindo constantemente para atender às demandas do mercado. </div>
                        </div>
                    </div>
                </motion.div>
                {/*O QUE FAZEMOS*/}
                <motion.div ref={ref} className=" bg-lilas flex flex-1 w-full min-h-[520px] items-start justify-center about" id="fazemos">
                    <div className=" center flex flex-1 flex-row items-center gap-20 mt-20">
                        <motion.div 
                        initial={{ opacity: 0, translateY: 40}}
                        whileInView={{opacity: 1, translateY: 0 }}
                        transition={{ duration: 1}}
                        className=" flex flex-col gap-6 w-[100%] lg:w-[50%]">
                            <div className=" font-bold text-4xl text-green">O que fazemos</div>
                            <div className=" text-base font-regular text-white">Com velocidade, performance, segurança, proteção e estabilidade, nosso diferencial é oferecer planos flexíveis e personalizados de acordo com a necessidade de cada empresa, elaborados sob medida para garantir o sucesso de todos.</div>
                        </motion.div>
                        <div className="w-[100%] lg:w-[50%] ">
                        
                        </div>
                    </div>
                </motion.div>
                {/*POR QUE ESCOLHER SOLUTTI NETWORKS?*/}
                <motion.div className=" bg-gray-dark flex flex-1 w-full items-center justify-center py-24" id="escolher">
                    <div className=" center flex flex-1 flex-row items-center justify-center">
                            <motion.div
                            initial={{ opacity: 0, translateX: 200}}
                            whileInView={{opacity: 1, translateX: 0 }}
                            transition={{ duration: 1}}
                            className="w-[100%] lg:w-[50%] p-2 space-y-2">
                                <div className=" text-lilas font-medium text-4xl normal-case">Por que escolher</div>
                                <div className=" text-lilas font-bold text-4xl capitalize">solutti networks?</div>
                            </motion.div>
                            <motion.div
                            initial={{ opacity: 0, translateX: -200}}
                            whileInView={{opacity: 1, translateX: 0 }}
                            transition={{ duration: 1}}
                            className="flex flex-1 items-center justify-center w-[100%] lg:w-[50%] p-2 relative">
                                <Carrossel/>
                            </motion.div>
                        </div>
                </motion.div>
            </AnimatePresence>
        </div>
        
    )
}