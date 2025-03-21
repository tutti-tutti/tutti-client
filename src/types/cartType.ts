export interface CartProductItem {
  cartItemId: number;
  storeName: string;
  productId: number;
  productImgUrl: string;
  productName: string;
  originalPrice: number;
  sellingPrice: number;
  quantity: number;
  optionName1?: string;
  optionValue1?: string;
  optionName2?: string;
  optionValue2?: string;
  soldOut?: boolean;
  maxQuantity: number;
}

export interface Cart {
  items: CartProductItem[];
}
