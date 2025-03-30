import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/app/_common/lib/store";

/**
 * localStorage 儲存購物車的key
 */
export const CART_KEY = "shopping_cart";

/**
 * 從 localStorage 讀取購物車資料
 */
export const loadCartFromStorage = (): string[] => {
  let storedCart = '';

  if (typeof window !== "undefined") {
    storedCart = localStorage.getItem(CART_KEY) || '';
  }

  return storedCart ? JSON.parse(storedCart) : [];
};

/**
 * 更新購物車項目
 * @param items 購物車項目
 */
export const updateCartItem = createAction<string[]>("cart/updateCartItem");

/**
 * 新增購物車項目
 * @param product_id 商品ID
 */
export const addCart = createAsyncThunk("cart/addCartItem",
  async (product_id: string, { dispatch, getState }) => {
    const state = getState() as RootState;
    const cartItems = state.cart.items as string[];

    if (!cartItems.includes(product_id)) {
      const newCartItems = cartItems.concat(product_id);

      localStorage.setItem(CART_KEY, JSON.stringify(newCartItems));
      dispatch(updateCartItem(newCartItems));
    }
  }
);

/**
 * 移除購物車項目
 * @param product_id 商品ID
 */
export const removeCart = createAsyncThunk("cart/removeCartItem",
  async (product_id: string, { dispatch, getState }) => {
    const state = getState() as RootState;
    const cartItems = state.cart.items as string[];

    if (cartItems.includes(product_id)) {
      const newCartItems = cartItems.filter((item) => item !== product_id);

      localStorage.setItem(CART_KEY, JSON.stringify(newCartItems));
      dispatch(updateCartItem(newCartItems));
    }
  }
);