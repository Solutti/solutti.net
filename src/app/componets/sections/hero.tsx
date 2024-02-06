import Image from "next/image";
import HERO from "../../../../public/hero/hero.png";
import LOGO from "../../../../public/logo/logoBranco.png";

export function Hero(){
    return(
        <div className="w-full flex items-center mt-24 justify-center bg-primary overflow-hidden">
            <div className=" center-row flex-1 flex items-center">
                <Image src={HERO} objectFit="contain" alt="Textura hero"/>
                <div className=" absolute w-full flex flex-row">
                    <div className=" left w-[40%] flex items-center">
                        <div className=" font-sans text-xl text-green w-52">Criando conexões, simplificando soluções.</div>
                    </div>
                    <div className=" right w-[50%]">
                        <Image src={LOGO} objectFit="contain" width={400} height={400} alt="Textura hero"/>
                    </div>
                </div>
            </div>
        </div>
    )
}