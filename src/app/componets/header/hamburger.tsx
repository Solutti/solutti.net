"use client" // ---> Renderiza do lado do cliente 

// Extensões
import Link from 'next/link';
import { useState } from 'react';

// Arquivo de conf do menu "Links"
import menuData from '@/app/data/menuData';

// Icons
import { GrFormDown, GrFormUp } from 'react-icons/gr';
import { MdDensityMedium } from 'react-icons/md';

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
}

// ----> LINKS DO MENU DENTRO DO ARQUIVO data/menuData.ts <------- //

const Submenu: React.FC<SubmenuProps> = ({ items }) => (
  <ul
    className="w-full p-2 relative justify-center items-center flex flex-col"
  >
    {items?.map((item, index) => (
      <li key={index} className='w-full flex items-center justify-center'>
        <Link href={item.path} className='hover:text-lilas text-base py-5 w-full flex flex-col items-center justify-center bg-lilas'>
          {item.label}
          <div className=" w-full border-b-2 mt-2 border-b-lilas"/> {/* Divider */}
        </Link>
      </li>
    ))}
  </ul>
);

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  return (
    <li
      className='relative justify-center flex flex-col'
    >
      <div className='cursor-pointer justify-center'>
        {item.submenu ? (
        <div className='py-5 w-full flex flex-col items-center justify-center'>
            <div className='hover:text-lilas text-base flex flex-row items-center justify-center'
                    onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                >
                {item.label}
                {isSubmenuOpen ? (
                <GrFormUp className='ml-1' />
                ) : (
                <GrFormDown className='ml-1' />
                )}
                    
            </div>
            <div className="w-full border-b-2 mt-2 border-b-lilas"/> {/* Divider */}
        </div>
        ) : (
          <Link href={item.path} className='hover:text-lilas text-base py-5 w-full flex flex-col items-center justify-center'>
            {item.label}
            <div className="w-full border-b-2 mt-2 border-b-lilas"/> {/* Divider */}
          </Link>
        )}
      </div>
      {item.submenu && isSubmenuOpen && <Submenu items={item.submenu} />}
    </li>
  );
};

const MobileMenuButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <div className='cursor-pointer md:hidden'>
    <button onClick={onClick} className='focus:outline-none' aria-label="Menu" title='Menu'>
      <MdDensityMedium size={24} />
    </button>
  </div>
);

const Hamburger: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='flex flex-row hamburger'>
      {/* Botão de Hambúrguer para Versão Mobile */}
      <MobileMenuButton onClick={handleMobileMenuToggle} />

      {/* Menu para Desktop e Tablet */}
      <ul className='hidden md:flex flex-row space-x-5 justify-center items-center'>
        {menuData.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </ul>

      {/* Menu para Versão Mobile */}
      {isMobileMenuOpen && (
        <ul className='md:hidden flex flex-col absolute top-20 left-0 bg-gray-light pb-20 rounded-b-lg p-2 w-screen ease-in-out duration-700 pt-10'>
          {menuData.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Hamburger;
