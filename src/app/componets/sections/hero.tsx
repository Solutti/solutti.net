import Image from "next/image";
import HERO from "../../../../public/hero/hero.png";
import LOGO from "../../../../public/logo/logoBranco.png";

export function Hero(){
    return(
        <div className="w-full flex items-center mt-24 justify-center bg-primary overflow-hidden">
            <div className=" center-row flex-1 flex items-center justify-center">
                <div className="w-full flex flex-row">
                    <div className="w-[50%] flex items-center p-4">
                        <div className=" font-sans lg:text-3xl sm:text-xl text-green w-[90%] lg:w-[60%]">Criando conexões, simplificando soluções.</div>
                    </div>
                    <div className="w-[50%] sm:h-96 md:h-128 lg:h-144 flex justify-end items-center overflow-hidden">
                    <Image src={HERO} className="center right-0" alt="Textura hero"/>
                        <div className="flex justify-end items-center absolute w-[40%] md:w-[30%] lg:w-[25%]">
                            <Image src={LOGO} className="w-[100%]" alt="Textura hero"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}