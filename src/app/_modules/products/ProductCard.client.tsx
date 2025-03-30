"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BsCartPlusFill } from "react-icons/bs";
import { BsFillCartDashFill } from "react-icons/bs";

import { RootState } from "@/app/_common/lib/store";
import { useAppDispatch, useAppSelector } from "@/app/_common/lib/hooks";
import { addCart, removeCart } from "@/app/_modules/cart/slices/cartActions";
import { ProductItem } from "@/app/_modules/products/types/productsTypes";

interface RecommendProductCardProps {
  item: ProductItem;
}

export default function RecommendProductCard({ item }: RecommendProductCardProps) {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    setIsInCart(cartItems.includes(item.product_id));
  }, [cartItems, item.product_id]);

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 max-w-[400px] p-2">
      <div className="flex flex-col relative hover:shadow-lg m-2">
        <Image
          src={item.image_url}
          className="h-auto w-full object-cover"
          width={200}
          height={120}
          alt={item.name}
        />
        <div className="flex-1 p-2 relative">
          {!isInCart && (
            <BsCartPlusFill
              className="absolute bottom-1 right-1 cursor-pointer"
              size={25}
              onClick={() => dispatch(addCart(item.product_id))}
            />
          )}

          {isInCart && (
            <BsFillCartDashFill
              className="absolute bottom-1 right-1 cursor-pointer"
              size={25}
              onClick={() => dispatch(removeCart(item.product_id))}
            />
          )}
          <p className="text-sm font-medium pb-1">{item.name}</p>
          <p className="text-gray-500 text-xs">{item.currency} ${item.price}</p>
        </div>
      </div>
    </div>
  );
}