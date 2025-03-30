import axios from "@/app/_common/lib/axios";
import { RecommendProductsResponse } from "@/app/_modules/products/types/productsTypes";

/**
 * 取得首頁推薦產品列表 API
 */
export const fetchRecommendProducts = async () => {
  const response: RecommendProductsResponse = await axios.get("/v1/recommend-products");

  if (response?.result === "ok") {
    return response.list;
  }

  throw new Error("Failed to fetch recommend products");
};
