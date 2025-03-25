export interface CartItem {
  productItemId: number;
  quantity: number;
}

export interface LocalCartItem extends CartItem {
  productId: number;
}

export interface CartAddRequestSchema {
  cartItems: CartItem[];
}

export interface CartProductItem {
  cartItemId: number;
  storeName: string;
  productItemId: number;
  productImgUrl: string;
  productItemName: string;
  originalPrice: number;
  sellingPrice: number;
  quantity: number;
  firstOptionName?: string;
  firstOptionValue?: string;
  secondOptionName?: string;
  secondOptionValue?: string;
  soldOut?: boolean;
  maxQuantity: number;
}
