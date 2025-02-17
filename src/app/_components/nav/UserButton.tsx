"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { VscAccount } from "react-icons/vsc";

export default function UserButton() {
  const [isOpen, setIsOpen] = useState(false);
  const list = [
    {
      link: '/',
      label: '訂單查詢',
    },
    {
      link: '/cart',
      label: '購物車',
    },
    {
      link: '/',
      label: '登入 / 註冊',
    },
  ];

  return (
    <div className="relative pr-4">
      <VscAccount
        className="cursor-pointer"
        size={24}
        onMouseEnter={() => setIsOpen(true)}
      />

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg"
          onMouseLeave={() => setIsOpen(false)}
        >
          <ul className="py-2 text-gray-700">
            {list.map(({link, label}) => (
              <li
                key={`${link}${label}`}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <Link href={link} className="text-nowrap">
                  {label}
                  </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};