// export interface Product {
//   id: string;
//   name: string;
//   category: string;
//   pricePerKg: number | null;
//   pricePerUnit?: string;
//   image: string;
//   description?: string;
//   active: boolean;
//   outOfStock: boolean;
// }
export interface ProductVariant {
  id: number;
  weight: string;
  price: number;
  is_default: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description?: string;
  active: boolean;
  outOfStock: boolean;
  pricePerUnit?: string; // For items without variants
  variants?: ProductVariant[]; // New Array
}
export interface CartItem extends Product {
  quantity: number;
  selectedWeight: string;
  totalPrice: number;
}

export interface CheckoutFormData {
  name: string;
  phone: string;
  address: string;
}
