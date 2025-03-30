import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "@/app/_modules/cart/types/cartTypes";
import { loadCartFromStorage, updateCartItem } from "@/app/_modules/cart/slices/cartActions";

const initialState: CartState = {
  items: loadCartFromStorage(),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateCartItem, (state, action) => {
      state.items = action.payload;
    });
  }
});

export default cartSlice.reducer;