"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { NavItem } from '@/app/_slices/nav/navTypes';

interface HeaderNavProps {
  list: NavItem[];
}

export default function HeaderNav({ list }: HeaderNavProps) {
  const [dropdownVisible, setDropdownVisible] = useState<number | null>(null);

  return (
    <nav className="flex justify-center bg-gray-100 p-4 shadow-md fixed top-0 left-0 w-full z-50">
      <ul className="flex space-x-4">
        {list.map(({ title, link, dropdowns }, index) => (
          <li
            key={index}
            className="relative"
            onMouseEnter={() => setDropdownVisible(index)}
          >
            <Link href={link} className="text-blue-500">
              {title}
            </Link>

            {/* Dropdown Menu */}
            {dropdowns && dropdowns.length > 0 && dropdownVisible === index && (
              <ul
                className="absolute left-0 mt-2 w-48 bg-white border shadow-md rounded-lg"
                onMouseLeave={() => setDropdownVisible(null)}
              >
                {dropdowns.map(({ label, link }) => (
                  <li key={`${label}${link}`} className="p-2 hover:bg-gray-200">
                    <Link href={link} className="block">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}