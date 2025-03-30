"use client";

import Link from "next/link";
import React, { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { UserMenuItem } from "@/app/_modules/nav/types/navTypes";

interface UserMenuProps {
  list: UserMenuItem[];
}

const MobileUserMenu = ({ list }: UserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block md:hidden">
      <div
        className="cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <VscAccount size={24} />
      </div>
      {isOpen && (
        <>
          {/* Gray overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          />
          {/* Sidebar */}
          <div className="fixed right-0 top-0 h-full w-4/5 bg-white z-50 shadow-lg">
            <div className="p-4 flex justify-between items-center border-b border-gray-200">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>
            <ul className="py-4 text-gray-700">
              {list.map(({ link, label }) => (
                <li
                  key={`${link}${label}`}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <Link href={link} className="block">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

const DesktopUserMenu = ({ list }: UserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative pr-4 hidden md:block">
      <div
        className="cursor-pointer relative"
        onMouseEnter={() => setIsOpen(true)}
      >
        <VscAccount size={24} />
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
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

export default function UserMenu() {
  const list = [
    {
      link: "/",
      label: "訂單查詢",
    },
    {
      link: "/cart",
      label: "購物車",
    },
    {
      link: "/",
      label: "登入 / 註冊",
    },
  ];

  return (
    <>
      <MobileUserMenu list={list} />
      <DesktopUserMenu list={list} />
    </>
  );
};