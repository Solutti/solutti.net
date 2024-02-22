
'use client'

import Image from "next/image";
import HERO from "../../../../public/hero/hero.png";
import LOGO from "../../../../public/logo/logoBranco.png";

//Framer Motion
import { AnimatePresence, motion } from "framer-motion";

export function Hero(){
    return(
        <div className="hero w-full flex items-center mt-24 justify-center overflow-hidden">
            <div className=" center-row flex-1 flex items-center justify-center">
                <div className="w-full flex flex-row">
                    <motion.div
                    initial={{ opacity: 0, translateY: 40}}
                    whileInView={{opacity: 1, translateY: 0 }}
                    transition={{ duration: 1}}
                    className="w-[50%] flex items-center p-4">
                        <div className=" lg:text-3xl sm:text-xl text-green w-[90%] lg:w-[60%]">Criando conexões, simplificando soluções.</div>
                    </motion.div>
                    <div className="w-[50%] sm:h-96 md:h-128 lg:h-144 flex justify-end items-center overflow-hidden">
                    <Image src={HERO} className="center right-0" alt="Textura hero"/>
                        <motion.div 
                        initial={{ opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{ duration: 1}}
                        className="flex justify-end items-center absolute w-[40%] md:w-[30%] lg:w-[25%]">
                            <Image src={LOGO} className="w-[100%]" alt="Textura hero"/>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}