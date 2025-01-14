'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface Props {
  path: string;
  icon: React.ReactNode;
  title: string;
}

export const SidebarItem = ({ path, title, icon }: Props) => {
  const pathName = usePathname();

  return (
    <li>
      {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
      <Link
        href={path}
        className={`${
          pathName === path
            ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400 '
            : ''
        } relative px-4 py-3 flex items-center space-x-4 rounded-xl hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white`}
      >
        {icon}
        <span className='-mr-1 font-medium'>{title}</span>
      </Link>
    </li>
  );
};
