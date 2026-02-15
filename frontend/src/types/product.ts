export interface Product {
  id: string;
  name: string;
  category: string;
  pricePerKg: number | null;
  pricePerUnit?: string;
  image: string;
  description?: string;
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
