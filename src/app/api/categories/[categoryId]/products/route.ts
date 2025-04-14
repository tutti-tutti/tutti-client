import { NextResponse } from 'next/server';

import { fetchCategoriesById } from '@/services';
import { PRODUCT_API_ROUTE_MESSAGE } from '@/constants';

interface Params {
  params: Promise<{ categoryId: number }>;
}

export const GET = async (_request: Request, { params }: Params) => {
  const { categoryId } = await params;

  try {
    const product = await fetchCategoriesById(String(categoryId));

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
