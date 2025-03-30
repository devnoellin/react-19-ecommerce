"use client";

import Link from "next/link";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";

import { NavItem } from "./types/navTypes";

interface NavItemsProps {
  list: NavItem[];
}

const MobileNavItems = ({ list }: NavItemsProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownsVisible, setDropdownsVisible] = useState<number[]>([]);

  const handleClickArrow = (index: number, isDropdownVisible: boolean) => {
    if (isDropdownVisible) {
      setDropdownsVisible(dropdownsVisible.filter((item) => item !== index));
    } else {
      setDropdownsVisible(dropdownsVisible?.concat(index));
    }
  };

  return (
    <div className="block md:hidden">
      <button
        className="p-2 text-gray-500"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>
      {/* Dropdown Menu Item */}
      {isMenuOpen && (
        <ul className="absolute top-[66px] left-0 w-full bg-white shadow-lg max-h-[80vh] overflow-y-auto">
          {list.map(({ title, link, dropdowns }, index) => {
            const isDropdownVisible = dropdownsVisible?.includes(index);
            const hasDropdowns = dropdowns && dropdowns.length > 0;

            return (
              <li
                key={link}
                className="border-b border-gray-200"
              >
                <div className="flex items-center justify-between p-4 text-gray-700 hover:bg-gray-100">
                  <Link href={link} className="block">
                    {title}
                  </Link>
                  {hasDropdowns && (
                    <FaChevronDown
                      className={`ml-2 transition-transform ${isDropdownVisible ? "rotate-180" : ""}`}
                      onClick={() => handleClickArrow(index, isDropdownVisible)}
                    />
                  )}
                </div>
                {hasDropdowns && isDropdownVisible && (
                  <ul className="bg-gray-50">
                    {dropdowns.map(({ label, link }) => (
                      <li key={`${label}${link}`} className="p-4 hover:bg-gray-200">
                        <Link href={link} className="block text-gray-700">
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

const DesktopNavItems = ({ list }: NavItemsProps) => {
  const [dropdownVisible, setDropdownVisible] = useState<number | null>(null);

  return (
    <ul className="hidden md:flex space-x-5">
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
  );
};

export default function NavItems(props: NavItemsProps) {
  return (
    <>
      <DesktopNavItems {...props} />
      <MobileNavItems {...props} />
    </>
  );

}