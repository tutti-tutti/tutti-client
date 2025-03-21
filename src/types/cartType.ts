export interface CartProductItem {
  cartItemId: number;
  storeName: string;
  productId: number;
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

export interface Cart {
  items: CartProductItem[];
}
