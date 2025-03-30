import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRecommendProducts } from "@/app/_modules/products/slices/productsService";

/**
 * 取得首頁推薦產品列表
 */
export const getRecommendedProducts = createAsyncThunk("products/fetchRecommendProducts",
  async () => {
    const list = await fetchRecommendProducts();

    return list;
  }
);