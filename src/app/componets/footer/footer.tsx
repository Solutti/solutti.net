"use client" // Renderizar componente do lado do cliente

import { cnpj, email, endereco, facebook, google, instagram, linkedin, slogan, telefone } from "@/app/config"; // Arquivo de configuração das páginas

// Extensões
import Image from "next/image";

// Icones
import { FaFacebookF, FaLinkedinIn, FaInstagram} from "react-icons/fa"; 
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

// Arquivos
import Logo from "../../../../public/logo/logo.png";
import FooterMenu from "../header/footer";

export default function Footer() {
  return (
    <div className="flex bg-gray-dark items-center justify-center flex-col w-screen">

      {/* INÍCIO - Redes sociais */}
      <div className="bg-lilas h-20 flex w-full flex-row justify-center">
        <div className="center w-full">
          <div className="flex items-center w-[50%]">
            <div className="text-lg cursor-default font-bold">Siga nas redes sociais:</div> {/* CTA - Título da section */}
          </div>
          <div className="flex items-center justify-end w-[50%] space-x-5">
            <a href={facebook} className={facebook != "" ? " block" : " hidden"} target="_blank"><FaFacebookF size={20}/></a> {/* Facebook */}
            <a href={instagram} className={instagram != "" ? " block" : " hidden"} target="_blank"><FaInstagram size={24}/></a> {/* Instagram */}
            <a href={linkedin} className={linkedin != "" ? " block" : " hidden"} target="_blank"><FaLinkedinIn size={24}/></a> {/* LinkedIn */}
          </div>
        </div>
      </div>
      {/* FIM - Redes sociais */}

      {/* Links */}
      <div className="flex w-full flex-row center container justify-between min-h-128">
        

        {/* INÍCIO - Info empresa */}
        <div className="flex flex-col py-5 relative">
          <div className=" max-h-20 h-20 flex flex-col justify-end">
            <Image src={Logo} alt="Logotipo Solutti Networks" className="overflow-hidden w-[7rem]"/> {/* Logo empresa */}
            <div className=" w-10 border-b-4 border-b-lilas my-2"/> {/* Divider */}
          </div>
          <div className="mt-5">
            <p className="text-gray-light cursor-default overflow-visible">{slogan}</p> {/* Slogan */}
            <p className="text-gray-light cursor-default overflow-visible">CNPJ {cnpj}</p> {/* CNPJ */}
          </div>
        </div>
        {/* INÍCIO - Info empresa */}

        {/* INÍCIO - Páginas importantes */}
        <div className="flex flex-col py-5 relative">
          <div className=" max-h-20 h-20 flex flex-col justify-end">
            <h2 className="text-lilas cursor-default font-bold">Links</h2>
            <div className=" w-10 border-b-4 border-b-lilas my-2"/> {/* Divider */}
          </div>
          <div className="mt-5">
            <FooterMenu/>
          </div>
        </div>
        {/* FIM - Páginas importantes */}

        {/* INÍCIO - Contato */}
        <div className="flex flex-col py-5 relative">
          <div className=" max-h-20 h-20 flex flex-col justify-end">
            <h2 className="text-lilas cursor-default font-bold">Contato</h2>
            <div className=" w-10 border-b-4 border-b-lilas my-2"/> {/* Divider */}
          </div>

          {/* INÍCIO - Links */}
          <div className="flex flex-col space-y-4 mt-5">
            <div className="flex flex-row space-x-2 justify-start items-center pr-20"> {/* Endereço */}
              <FaLocationDot size={20} className="text-gray-light"/> {/* Logo */}
              <a href={google} className={endereco != "" ? " block text-gray-light hover:text-lilas" : " hidden"} target="_blank">{endereco}</a> {/* Label */}
            </div>
            <div className="flex flex-row space-x-2 justify-start items-center"> {/* Fone */}
              <FaPhone size={20} className="text-gray-light"/> {/* Logo */}
              <a href={`callto:${telefone}`} className={telefone != "" ? " block text-gray-light hover:text-lilas" : " hidden"} target="_blank">{telefone}</a> {/* Label */}
            </div>
            <div className="flex flex-row space-x-2 justify-start items-center"> {/* E-mail */}
              <IoMdMail size={20} className="text-gray-light"/> {/* Logo */}
              <a href={`mailto:${email}`} className={email != "" ? " block text-gray-light hover:text-lilas" : " hidden"} target="_blank">{email}</a> {/* Label */}
            </div>
          </div>
          {/* FIM - Links */}

        </div>
        {/* FIM - Contato */}
      </div>

      {/* INÍCIO - Copyright */}
      <div className=" w-screen h-10 flex items-center justify-center">
        <p className=" font-normal text-sm text-gray-light cursor-default">&copy; 2023-{new Date().getFullYear()} Solutti Networks. Todos os direitos reservados.</p>
      </div>
      {/* FIM - Copyright */}
    </div>
  );
}
