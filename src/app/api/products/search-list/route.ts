import { NextResponse } from 'next/server';

import { PRODUCT_API_ROUTE_MESSAGE } from '@/constants';
import { fetchSearchProductsWithPagination } from '@/services';

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const { keyword, cursorId, size } = body;

    const response = await fetchSearchProductsWithPagination(
      keyword || '',
      cursorId || null,
      size || 20,
    );

    return NextResponse.json(response);
  } catch (error) {
    console.error(PRODUCT_API_ROUTE_MESSAGE.SEARCH_PRODUCT_ERROR, error);

    const status =
      error instanceof Error && 'status' in error
        ? (error.status as number)
        : 500;

    return NextResponse.json(
      { message: (error as Error).message },
      { status: status },
    );
  }
};
