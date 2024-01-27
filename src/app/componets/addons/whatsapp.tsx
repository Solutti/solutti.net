import { numero, whatsapp } from "@/app/config";
import Logo from "../../../../public/whatsapp/logo.png"
import Image from "next/image";



export function WhatsApp(){
    const animado = true; // Atere para "false" caso não deseje usar animation no botão
    return(
        // Altere esta configuração no arquivo config.tsx use "true" para exibir na página ou "false" para remover
        whatsapp == true ?

        <div className={animado == true ? "fixed bottom-5 right-5 w-20 h-20 flex items-center justify-center animate-bounce" : "fixed bottom-5 right-5 w-20 h-20 flex items-center justify-center"}>
            {/* Altere o número da empresa dentro do arquivo config.tsx na linha 3 "numero"*/}
            <a href={`https://api.whatsapp.com/send?phone=${numero}`} target="_blank">
                <Image src={Logo} alt="Logotipo WhatsApp" className=" max-w-20"/>
            </a>
        </div>

        :

        <>
        </>
    )
}