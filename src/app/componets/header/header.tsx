import Image from "next/image";
import Logo from "../../../../public/logo/logo.png";

import { MdDensityMedium } from "react-icons/md";
import Menu from "./menu";
import Hamburger from "./hamburger";

export default function Header() {

  return (
    
    <div className="flex flex-row bg-gray-light w-screen h-24 fixed top-0 items-center justify-center z-50 overflow-visible">
      <div className="center flex-1 px-5">
        {/* Logotipo */}
        <div className="flex items-start w-[50%]">
          <Image src={Logo} alt="Logotipo Solutti Networks" className="overflow-hidden w-36"/>
        </div>
        <div className="flex w-[50%] items-center justify-end px-5">
          <Menu/>
          <Hamburger/>
        </div>
      </div>
    </div>
  );
}
