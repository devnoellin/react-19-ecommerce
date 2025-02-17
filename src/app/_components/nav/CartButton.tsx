"use client";

import { useState } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";

export default function CartButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className="cursor-pointer relative z-50"
        onMouseEnter={() => setIsOpen(true)}
      >
        <RiShoppingCart2Line size={24} />
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      {/* 下拉選單 */}
      {isOpen && (
        <div
          onMouseLeave={() => setIsOpen(false)}
          className="absolute flex mt-2 w-64 bg-white border rounded-lg shadow-lg p-4 right-0 z-40"
        >
          <p className="text-gray-700">購物車內目前沒有商品</p>
        </div>
      )}
    </div>
  );
}