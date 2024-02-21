import { numero, whatsapp } from "@/app/config"; //----> Arquivo de conf do site 

// Arquivos
import Logo from "../../../../public/whatsapp/logo.png"
import Image from "next/image";



export function WhatsApp(){
    const animado:any = false; // Atere para "false" caso não deseje usar animation no botão
    return(
        <div className={whatsapp == true ? "fixed" : " hidden"}> {/* Altere esta configuração no arquivo config.tsx use "true" para exibir na página ou "false" para remover*/}
            <div className={animado == true ? "z-30 fixed bottom-5 right-5 w-15 h-15 flex items-center justify-center duration-200 transition-all animate-bounce hover:animate-none" : "z-30 fixed bottom-5 right-5 w-20 h-20 flex items-center justify-center"}>
                {/* Altere o número da empresa dentro do arquivo config.tsx na linha 3 "numero"*/}
                <a href={`https://api.whatsapp.com/send?phone=${numero}`} target="_blank" aria-label="Entre em contato via WhatsApp">
                    <Image src={Logo} alt="Logotipo WhatsApp" className=" max-w-[3rem] bg-contain bg-center hover:scale-110 transition-all duration-200"/>
                </a>
            </div>
        </div>
    )
}