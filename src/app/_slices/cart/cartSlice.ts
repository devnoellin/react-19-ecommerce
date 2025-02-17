import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const CART_KEY = "shopping_cart";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

// 從 localStorage 讀取購物車資料
const loadCartFromStorage = (): CartItem[] => {
  let storedCart = '';

  if (typeof window !== "undefined") {
    storedCart = localStorage.getItem(CART_KEY) || '';
  }

  return storedCart ? JSON.parse(storedCart) : [];
};

const initialState: CartState = {
  items: loadCartFromStorage(),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      if (typeof window !== "undefined") {
        localStorage.setItem(CART_KEY, JSON.stringify(state.items));
      }

    },
    removeCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      if (typeof window !== "undefined") {
        localStorage.setItem(CART_KEY, JSON.stringify(state.items));
      }
    },
    clearCart: (state) => {
      state.items = [];
      if (typeof window !== "undefined") {
        localStorage.removeItem(CART_KEY);
      }

    },
  },
});

export const { addCart, removeCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;