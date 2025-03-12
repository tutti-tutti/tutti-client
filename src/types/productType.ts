import { StaticImageData } from 'next/image';

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
}
