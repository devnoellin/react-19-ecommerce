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

export interface ProductState {
  recommendProducts: Product[];
  loading: boolean;
}