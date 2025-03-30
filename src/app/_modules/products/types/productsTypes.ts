import { ApiResponse } from "@/app/_common/types/api";

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

export interface ProductItem {
  product_id: string;
  name: string;
  price: number;
  currency: string;
  image_url: string;
}

export interface ProductState {
  recommendProducts: Product[];
  loading: boolean;
}

export interface RecommendProductsResponse extends ApiResponse {
  list: Product[];
}