"use client"
import Link from 'next/link';
import { useState } from 'react';
import menuData from '@/app/data/menuData';
import { GrFormDown, GrFormUp } from "react-icons/gr";

interface SubmenuProps {
  items: any;
}

const Submenu: React.FC<SubmenuProps> = ({ items }) => (
  <ul className='bg-secondary p-2 rounded-lg shadow-lg absolute'>
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