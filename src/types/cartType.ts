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
  productItemName: string;
  productImgUrl: string;
  firstOptionName?: string;
  firstOptionValue?: string;
  secondOptionName?: string;
  secondOptionValue?: string;
  originalPrice: number;
  sellingPrice: number;
  quantity: number;
  maxQuantity: number;
  soldOut?: boolean;
  checked: boolean;
}
