import type { ProductReviewInfo } from '@/types';
import { StaticImageData } from 'next/image';

export interface ProductOption {
  productItemId: number;
  firstOptionName: string | null;
  firstOptionValue: string | null;
  secondOptionName: string | null;
  secondOptionValue: string | null;
  sellingPrice: number;
  discountPrice: number;
  additionalPrice: number;
}

export interface Product {
  productId: number;
  storeName: string;
  name: string;
  titleUrl: string | StaticImageData;
  description?: string;
  originalPrice: number;
  sellingPrice?: number;
  adultOnly?: boolean;
  likes: number;
  createdAt: Date;
  updatedAt?: Date;
  freeDelivery?: boolean;
  almostOutOfStock?: boolean;
  productOptionItems: ProductOption[];
  maxPurchaseQuantity: number;
  productReviewInfo?: ProductReviewInfo;
}

export interface PaginatedProductsResponseAPISchema {
  hasNext: boolean;
  nextCursorId: number | null;
  contentSize: number;
  content: Product[];
}
