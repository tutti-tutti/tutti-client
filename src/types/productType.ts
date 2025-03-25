import { StaticImageData } from 'next/image';

export interface ProductOption {
  productItemId: number;
  firstOptionName: string | null;
  firstOptionValue: string | null;
  secondOptionName: string | null;
  secondOptionValue: string | null;
  additionalPrice: number | null;
}

export interface Product {
  productId: number;
  storeName: string;
  name: string;
  titleUrl: string | StaticImageData;
  description?: string;
  originalPrice: number;
  sellingPrice: number;
  adultOnly?: boolean;
  likes: number;
  createdAt: Date;
  updatedAt?: Date;
  freeDelivery?: boolean;
  almostOutOfStock?: boolean;
  productItems: ProductOption[];
  maxPurchaseQuantity: number;
}

export type ProductListAPISchema = ProductListAPISchemaData[];
export interface ProductListAPISchemaData {
  code: string;
  message: string;
  latestList: Product[];
}
