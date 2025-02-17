import { createSlice } from "@reduxjs/toolkit";
import { getRecommendedProducts } from './productsActions';
import { ProductState  } from './productsTypes';

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
        console.log(action.payload)
        state.recommendProducts = action.payload;
        state.loading = false;
      })
      .addCase(getRecommendedProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default productSlice.reducer;