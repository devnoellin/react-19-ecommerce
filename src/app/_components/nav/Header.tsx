"use client";

import Link from 'next/link';
import Image from 'next/image'
import React, { useState } from 'react';

import { NavItem } from '@/app/_slices/nav/navTypes';
import UserButton from './UserButton';
import CartButton from './CartButton';

interface HeaderProps {
  list: NavItem[];
  logo: string;
}

export default function HeaderNav(props: HeaderProps) {
  const [dropdownVisible, setDropdownVisible] = useState<number | null>(null);
  const { list = [], logo = '' } = props;

  return (
    <nav className="flex justify-evenly items-center bg-gray-100 p-4 shadow-md fixed w-full min-w-70">
      {/* Logo */}
      {logo && (
        <Link href="/">
          <Image
            src={logo}
            className='mr-6'
            width={150}
            height={30}
            alt="Picture of the author"
          />
        </Link>
      )}
      {/* Dropdown Menu */}
      <ul className="flex space-x-5">
        {list.map(({ title, link, dropdowns }, index) => (
          <li
            key={index}
            className="relative"
            onMouseEnter={() => setDropdownVisible(index)}
          >
            <Link href={link} className="text-grey-500 hover:underline">
              {title}
            </Link>

            {/* Dropdown Menu Item */}
            {dropdowns && dropdowns.length > 0 && dropdownVisible === index && (
              <ul
                className="absolute max-w-60 min-w-48 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg"
                onMouseLeave={() => setDropdownVisible(null)}
              >
                {dropdowns.map(({ label, link }) => (
                  <li key={`${label}${link}`} className="p-2 hover:bg-gray-200">
                    <Link href={link} className="text-nowrap">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className="flex justify-evenly pl-2 w-20">
        <UserButton />
        <CartButton />
      </div>
    </nav>
  );
}