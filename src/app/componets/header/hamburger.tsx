"use client"
import Link from 'next/link';
import { useState } from 'react';
import menuData from '@/app/data/menuData';
import { GrFormDown, GrFormUp } from 'react-icons/gr';
import { MdDensityMedium } from 'react-icons/md';

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

const Submenu: React.FC<SubmenuProps> = ({ items, isOpen }) => (
  <ul
    className={` p-2 rounded-lg shadow-lg relative ${
      isOpen ? 'block' : 'hidden'
    }`}
  >
    {items?.map((item, index) => (
      <li key={index}>
        <Link href={item.path} className='hover:text-lilas'>
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
);

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsSubmenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='relative'
    >
      <div className='cursor-pointer'>
        {item.submenu ? (
          <div
            className='flex flex-row items-center hover:text-lilas'
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
          <Link href={item.path} className='hover:text-lilas'>
            {item.label}
          </Link>
        )}
      </div>
      {item.submenu && isSubmenuOpen && <Submenu items={item.submenu} isOpen={isSubmenuOpen} />}
    </li>
  );
};

const MobileMenuButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <div className='cursor-pointer md:hidden'>
    <button onClick={onClick} className='focus:outline-none'>
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
      <ul className='hidden md:flex flex-row space-x-5 justify-center items-center '>
        {menuData.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </ul>

      {/* Menu para Versão Mobile */}
      {isMobileMenuOpen && (
        <ul className='md:hidden flex flex-col absolute top-20 left-0 bg-gray-light p-2 w-screen ease-in-out duration-700'>
          {menuData.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Hamburger;
