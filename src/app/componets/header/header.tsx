// Extensões 
import Image from "next/image";

// Arquivos
import Logo from "../../../../public/logo/logo.png";

// Components
import Menu from "./menu";
import Hamburger from "./hamburger";

// ----> LINKS DO MENU DENTRO DO ARQUIVO data/menuData.ts <------- //

export default function Header() {

  return (
    <div className="flex bg-white w-screen h-24 fixed top-0 items-center justify-center z-50 overflow-visible">
      <div className="center-row flex flex-row flex-1 px-5">
        {/* Logotipo */}
        <div className="flex items-start w-[50%]">
          <a href="/" aria-label="Logo solutti">
            <Image src={Logo} alt="Logotipo Solutti Networks" className="overflow-hidden w-[10rem] bg-contain bg-center"/>
          </a>
        </div>
        <div className="flex w-[50%] items-center justify-end px-5">
          <Menu/>
          <Hamburger/>
        </div>
      </div>
    </div>
  );
}
