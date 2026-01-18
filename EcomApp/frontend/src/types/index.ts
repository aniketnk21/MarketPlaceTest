export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  brand: string;
  created: string;
  updated: string;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}