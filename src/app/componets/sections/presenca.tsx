// Arquivo de config @/app/data/presenca.ts
import presencaData from "@/app/data/presenca"
import Map from "../addons/map"
import Image from "next/image"
import MAP from "../../../../public/map/map.png"

export function Presenca(){
    return(
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-dark" id="presenca">
            <div className=" font-sans text-2xl text-gray-light m-24 w-[50%] text-center">Possuímos pontos de presença no sul e sudeste do Brasil, além de conexão até Miami/USA, interligando cidades estratégicas para oferecer a melhor experiência.</div>
            <div className=" center flex-1 gap-20">
                <div className="flex w-[50%] h-full">
                    <Image height={1080} width={1080} alt="imagem do mapa" src={MAP} />
                </div>
                <div className="w-[50%] flex flex-col">
                    { presencaData.map( (items) =>
                        <Map 
                        estado={items.estado} 
                        items={items.data}
                        />
                    )}             
                </div>
            </div>
        </div>
    )
}