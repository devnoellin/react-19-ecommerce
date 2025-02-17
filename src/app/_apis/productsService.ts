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
}

export interface RecommendProductsResponse extends ApiResponse {
  list: Product[];
}

export const fetchRecommendProducts = async () => {
  try {
    const response: RecommendProductsResponse = await axios.get("http://localhost:8080/api/v1/recommend-products");

    return response.list;
  } catch (error) {
    console.error("Failed to fetch recommended products:", error);
    return [];
  }
};