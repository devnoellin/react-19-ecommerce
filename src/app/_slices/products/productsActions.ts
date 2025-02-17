import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRecommendProducts } from "@/app/_apis/productsService";

/**
 * 取得首頁推薦產品列表
 */
export const getRecommendedProducts = createAsyncThunk("products/fetchRecommendProducts",
  async () => {
    return await fetchRecommendProducts();
  }
);