import Image from "next/image";
import Logo from "../../../../public/logo/logo.png";

import { MdDensityMedium } from "react-icons/md";

export default function Header() {
  const items = [
    {
      key: "new",
      label: "New file",
    },
    {
      key: "copy",
      label: "Copy link",
    },
    {
      key: "edit",
      label: "Edit file",
    },
    {
      key: "delete",
      label: "Delete file",
    }
  ];

  return (
    
    <div className="flex min-w-screen bg-gray-light w-screen h-24 absolute top-0 items-center justify-center overflow-hidden z-50">
      <div className="center flex-1 px-5">
        {/* Logotipo */}
        <div className="flex items-start w-[50%]">
          <Image src={Logo} alt="Logotipo Solutti Networks" className="overflow-hidden w-36"/>
        </div>
{/*
        Menu Hamburger
        <div className="flex w-[50%] items-center justify-end">
          <button className="flex flex-row">
            <p className="mx-4">Menu</p>
            <MdDensityMedium size={24}/>
          </button>
        </div>
*/}

        {/* Menu */}
        <div>
        
        </div>
      </div>
    </div>
  );
}
