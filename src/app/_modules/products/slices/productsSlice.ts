import { createSlice } from "@reduxjs/toolkit";
import { getRecommendedProducts } from "@/app/_modules/products/slices/productsActions";
import { ProductState  } from "@/app/_modules/products/types/productsTypes";

const initialState: ProductState = {
  recommendProducts: [],
  loading: false,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecommendedProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRecommendedProducts.fulfilled, (state, action) => {
        state.recommendProducts = action.payload;
        state.loading = false;
      })
      .addCase(getRecommendedProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default productSlice.reducer;