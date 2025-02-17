import React from "react";
import Image from 'next/image';

interface ProductItem {
  name: string;
  price: number;
  image_url: string;
  currency: string;
  product_id: string;
}

interface ProductCardProps {
  item: ProductItem;
}

export default function ProductCard({ item }: ProductCardProps) {
  return (
    <div key={item.product_id} className="flex justify-center w-1/3 max-w-[400px] space-x-3">
      <div className="flex-col w-3/5 hover:shadow-lg m-5">
        <Image
            src={item.image_url}
            className='mr-6 h-fit w-full'
            width={200}
            height={120}
            alt={item.name}
          />
        <div className="flex-1 p-2">
          <p className="text-sm font-medium pb-1">{item.name}</p>
          <p className="text-gray-500 text-xs">{item.currency} ${item.price}</p>
        </div>
      </div>
    </div>
  );
}