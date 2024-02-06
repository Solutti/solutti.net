"use client" // ---> Renderiza do lado do cliente 

// Extensões 
import Link from 'next/link';
import { useState } from 'react';

// Arquivo de conf do menu "Links"
import menuData from '@/app/data/menuData';

// Icons
import { GrFormDown } from "react-icons/gr";

// Typagem
interface SubmenuProps {
  items: any;
}


// ----> LINKS DO MENU DENTRO DO ARQUIVO data/menuData.ts <------- //

const Submenu: React.FC<SubmenuProps> = ({ items }) => (
  <ul className='bg-secondary p-2 rounded-lg space-y-2 shadow-lg absolute'>
    {items.map((item: any, index: any) => (
      <li key={index}>
        <Link href={item.path} className='hover:text-lilas'>
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
);

const MenuItem: React.FC<{ item: any }> = ({ item }) => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsSubmenuOpen(true);
    };

    const handleMouseLeave = () => {
        setIsSubmenuOpen(false);
     };

return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="cursor-pointer">
            {item.submenu ? 
                <Link href={item.path} className='flex flex-row items-center hover:text-lilas'>
                    {item.label}
                    <GrFormDown className={isSubmenuOpen ? " rotate-180 duration-700" : "rotate-0 duration-700"}/>
                </Link> 
                :  
                <Link href={item.path} className='hover:text-lilas'>
                    {item.label}
                </Link>  
            }
            
        </div>
        {item.submenu && isSubmenuOpen && <Submenu items={item.submenu} />}
    </li>
     );
};

const Menu: React.FC = () => {
return (
    <nav className='flex flex-row menu'>
        <ul className='flex flex-row space-x-5 justify-center items-center'>
            {menuData.map((item, index) => (
                <MenuItem key={index} item={item} />
            ))}
        </ul>
    </nav>
    );
};

export default Menu;