'use client'
import { useEffect, useRef, useState } from "react"
// Arquivo de config @/app/data/presenca.ts
import presencaData from "@/app/data/presenca"
import Map from "../addons/map"
import AnimationMap from "../../../../public/map/animationMap.json"

// Extensões
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useInView } from 'react-intersection-observer';

//Framer Motion
import { AnimatePresence, motion } from "framer-motion";

export function Presenca(){
    const mapRef:any = useRef<Player>(null);

    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.5, // Porcentagem da div visível para disparar a animação
    });

    // Se a div estiver visível, define isVisible como true
    if (inView) {
        mapRef.current.play();
        setTimeout(() => {
            mapRef.current.pause();
        }, 10500);
    }
    return(
        <div ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-dark py-20" id="presenca">
            <motion.div 
            initial={{ opacity: 0, translateY: 40}}
            whileInView={{opacity: 1, translateY: 0 }}
            transition={{ duration: 1}}
            className="  text-base lg:text-2xl text-gray-light lg:m-24 lg:w-[50%] w-[100%] m-8 p-2 text-center">Possuímos pontos de presença no sul e sudeste do Brasil, além de conexão até Miami/USA, interligando cidades estratégicas para oferecer a melhor experiência.</motion.div>
            <div className=" center flex flex-1 gap-20">
                <motion.div 
                initial={{ opacity: 0, translateX: -200}}
                whileInView={{opacity: 1, translateX: 0 }}
                transition={{ duration: 1, delay: 1}}
                className="flex sm:w-[100%] lg:w-[50%] h-full">
                    <Player loop={false} ref={mapRef} src={AnimationMap} />
                </motion.div>
                <motion.div 
                initial={{ opacity: 0, translateX: 200}}
                whileInView={{opacity: 1, translateX: 0 }}
                transition={{ duration: 1, delay: 1}}
                className="w-[100%] lg:w-[50%] pb-5 flex flex-col">
                    { presencaData.map( (items) =>
                        <Map
                        key={items.id} 
                        estado={items.estado} 
                        items={items.data}
                        />
                    )}             
                </motion.div>
            </div>
        </div>
    )
}