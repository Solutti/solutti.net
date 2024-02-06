// Arquivo de config @/app/data/presenca.ts
import presencaData from "@/app/data/presenca"
import Map from "../addons/map"
import Image from "next/image"
import MAP from "../../../../public/map/map.png"

export function Presenca(){
    return(
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-dark" id="presenca">
            <div className=" font-sans text-base lg:text-2xl text-gray-light lg:m-24 lg:w-[50%] w-[100%] m-8 p-2 text-center pt-20">Possuímos pontos de presença no sul e sudeste do Brasil, além de conexão até Miami/USA, interligando cidades estratégicas para oferecer a melhor experiência.</div>
            <div className=" center flex flex-1 gap-20">
                <div className="flex sm:w-[100%] lg:w-[50%] h-full">
                    <Image alt="imagem do mapa" className=" flex flex-1" src={MAP} />
                </div>
                <div className="w-[100%] lg:w-[50%] pb-5 flex flex-col">
                    { presencaData.map( (items) =>
                        <Map
                        key={items.id} 
                        estado={items.estado} 
                        items={items.data}
                        />
                    )}             
                </div>
            </div>
        </div>
    )
}