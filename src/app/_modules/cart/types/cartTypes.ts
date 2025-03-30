export interface CartItem {
  name: string;
  price: number;
  currency: string;
  image_url: string;
  category: string;
  tags: string[];
  is_new: boolean;
  product_id: string;
}

export interface CartState {
  items: string[];
}