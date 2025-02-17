import axios from "@/app/_lib/_axios";
import { ApiResponse } from '@/app/_types/api';

export interface Product {
  name: string;
  price: number;
  currency: string;
  image_url: string;
  category: string;
  tags: string[];
  is_new: boolean;
  product_id: string;
}

export interface RecommendProductsResponse extends ApiResponse {
  list: Product[];
}

export const fetchRecommendProducts = async () => {
  const response: RecommendProductsResponse = await axios.get("http://localhost:8080/api/v1/recommend-products");

  if (response?.result === "ok") {
    return response.list;
  }

  throw new Error("Failed to fetch recommend products");
};
