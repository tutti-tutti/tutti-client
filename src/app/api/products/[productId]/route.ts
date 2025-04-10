import { NextResponse } from 'next/server';

import { fetchProductById } from '@/services';
import { PRODUCT_API_ROUTE_MESSAGE } from '@/constants';

interface Params {
  params: Promise<{ productId: number }>;
}

export const GET = async (_request: Request, { params }: Params) => {
  const { productId } = await params;

  try {
    const product = await fetchProductById(String(productId));

    if (!product) {
      return NextResponse.json(
        { message: PRODUCT_API_ROUTE_MESSAGE.PRODUCT_NOT_FOUND },
        { status: 404 },
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 },
    );
  }
};
