import Image from 'next/image';
import Link from 'next/link';
import { CiLogout } from 'react-icons/ci';
import { SidebarItem } from './SidebarItem';
import React from 'react';
import {
  IoCalendarOutline,
  IoCartOutline,
  IoCheckboxOutline,
  IoListOutline,
} from 'react-icons/io5';
import { PiCookieDuotone } from 'react-icons/pi';

interface MenuItems {
  path: string;
  icon: React.ReactNode;
  title: string;
}

const menuItems: MenuItems[] = [
  {
    path: '/dashboard',
    icon: <IoCalendarOutline size={30} />,
    title: 'Dashboard',
  },
  {
    path: '/dashboard/rest-todos',
    icon: <IoCheckboxOutline size={30} />,
    title: 'Rest TODOS',
  },
  {
    path: '/dashboard/server-todos',
    icon: <IoListOutline size={30} />,
    title: 'Server Actions',
  },
  {
    path: '/dashboard/cookies',
    icon: <PiCookieDuotone size={30} />,
    title: 'Cookies',
  },
  {
    path: '/dashboard/products',
    icon: <IoCartOutline size={30} />,
    title: 'Products',
  },
];

export const Sidebar = () => {
  return (
    <aside className='ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]'>
      <div>
        <div className='-mx-6 px-6 py-4'>
          <Link href='#' title='home'>
            <Image
              src='https://oxymor-yv.tailus.io/wordmark.svg'
              className='w-32'
              alt='tail logo'
              width={150}
              height={150}
            />
          </Link>
        </div>

        <div className='mt-8 text-center'>
          <Image
            src='https://randomuser.me/api/portraits/men/4.jpg'
            alt=''
            className='w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28'
            width={40}
            height={40}
          />
          <h5 className='hidden mt-4 text-xl font-semibold text-gray-600 lg:block'>
            Cynthia J. Watts
          </h5>
          <span className='hidden text-gray-400 lg:block'>Admin</span>
        </div>

        <ul className='space-y-2 tracking-wide mt-8'>
          {/* TODO: src/components <SidebarItem /> */}
          {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
          {menuItems.map((sidebarItem) => (
            <SidebarItem key={sidebarItem.title} {...sidebarItem} />
          ))}
        </ul>
      </div>
      s
      <div className='px-6 -mx-6 pt-4 flex justify-between items-center border-t'>
        <button className='px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group'>
          <CiLogout />
          <span className='group-hover:text-gray-700'>Logout</span>
        </button>
      </div>
    </aside>
  );
};
