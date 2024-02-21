"use client" // ---> Renderiza do lado do cliente 

// Extensões 
import Link from 'next/link';
import { useState } from 'react';

// Arquivo de conf do menu "Links"
import menuData from '@/app/data/menuData';

// Icons
import { GrFormDown, GrFormUp } from 'react-icons/gr';

// Typagem
interface SubmenuItem {
  label: string;
  path: string;
}

interface MenuItemProps {
  item: {
    label: string;
    path: string;
    submenu?: SubmenuItem[];
  };
}

interface SubmenuProps {
  items?: SubmenuItem[];
  isOpen: boolean;
}

// ----> LINKS DO MENU DENTRO DO ARQUIVO data/menuData.ts <------- //

const Submenu: React.FC<SubmenuProps> = ({ items, isOpen }) => (
  <ul
    className="p-2 rounded-lg shadow-lg relative"
  >
    {items?.map((item, index) => (
      <li key={index}>
        <Link href={item.path} className='text-gray-dark hover:text-lilas text-base'>
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
);

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  return (
    <li
      className='relative'
    >
      <div className='cursor-pointer'>
        {item.submenu ? (
          <div
            className='flex flex-row items-center text-gray-dark hover:text-lilas text-base'
            onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
          >
            {item.label}
            {isSubmenuOpen ? (
              <GrFormUp className='ml-1' />
            ) : (
              <GrFormDown className='ml-1' />
            )}
          </div>
        ) : (
          <Link href={item.path} className=' text-gray-dark hover:text-lilas text-base'>
            {item.label}
          </Link>
        )}
      </div>
      {item.submenu && isSubmenuOpen && <Submenu items={item.submenu} isOpen={isSubmenuOpen} />}
    </li>
  );
};

// Importações omitidas por brevidade

const FooterMenu: React.FC = () => {
    return (
      <nav className='flex flex-col items-start w-60'>
        <ul className='flex flex-col space-y-2'>
          {menuData.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </ul>
      </nav>
    );
  };
export default FooterMenu;
  
