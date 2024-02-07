'use client'
// Arquivo de conf @/app/data/about.ts
import aboutData from "@/app/data/about";

// Extenções
import Image from "next/image";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

// Arquivos
import Animation from "../../../../public/animation/animation_page.gif"
import { Carrossel } from "../addons/carrossel";


export function QuemSomos(){
    return(
        <div className="min-h-screen w-full flex items-center flex-col justify-center" id="quemSomos">
            {/*QUEM SOMOS*/}
            <div className=" flex flex-1 w-full items-center justify-center">
                <div className=" center flex flex-1 flex-row max-h-96 items-center gap-20">
                    <div className="w-[100%] lg:w-[50%]">
                        <Image src={Animation} width={800} alt="Animação de background" />
                    </div>
                    <div className=" flex flex-col gap-6 w-[100%] lg:w-[50%]">
                        <div className=" font-sans font-bold text-4xl text-lilas">Quem Somos</div>
                        <div className=" text-base font-sans font-regular text-gray">Bem-vindo à Solutti Networks, sua parceira em conectividade. Mais que um provedor de internet, garantimos soluções de alta qualidade para empresas e negócios de todos os portes e setores. Nosso compromisso é oferecer um atendimento de excelência, valorizando a satisfação do cliente e evoluindo constantemente para atender às demandas do mercado. </div>
                    </div>
                </div>
            </div>
            {/*O QUE FAZEMOS*/}
            <div className=" bg-lilas flex flex-1 w-full items-center justify-center" id="fazemos">
                <div className=" center flex flex-1 flex-row items-center gap-20">
                    <div className=" flex flex-col gap-6 w-[100%] lg:w-[50%]">
                        <div className=" font-sans font-bold text-4xl text-green">O que fazemos</div>
                        <div className=" text-base font-sans font-regular text-white">Com velocidade, performance, segurança, proteção e estabilidade, nosso diferencial é oferecer planos flexíveis e personalizados de acordo com a necessidade de cada empresa, elaborados sob medida para garantir o sucesso de todos.</div>
                    </div>
                    <div className="w-[100%] lg:w-[50%]">
                    <Player autoplay loop={false} src="https://lottie.host/422b6a97-c3dd-49e8-89b5-39180594de7e/ggdR1Fdd5B.json" style={{ height: '300px', width: '300px' }}/>
                    </div>
                </div>
            </div>
            {/*POR QUE ESCOLHER SOLUTTI NETWORKS?*/}
            <div className=" bg-gray-dark flex flex-1 w-full items-center justify-center py-24" id="escolher">
                <div className=" center flex flex-1 flex-row items-center gap-20">
                    <div className="flex flex-1 flex-row justify-center items-center">
                        <div className="w-[100%] lg:w-[50%] p-2 space-y-2">
                            <div className=" text-lilas font-sans font-medium text-4xl normal-case">Por que escolher</div>
                            <div className=" text-lilas font-sans font-bold text-4xl capitalize">solutti networks?</div>
                        </div>
                        <div className="w-[100%] lg:w-[50%] p-2 bg-green">
                            <Carrossel/>
                            {aboutData.map((items) =>
                                <div key={items.id} >{items.name}</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}