import { NextResponse } from 'next/server';

import { axiosInstance } from '@/lib';
import { PRODUCT_API_ROUTE_MESSAGE, PRODUCTS_ENDPOINTS } from '@/constants';

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const { keyword, cursorId, size } = body;

    const response = await axiosInstance.post(PRODUCTS_ENDPOINTS.SEARCH, {
      keyword: keyword || '',
      cursorId: cursorId || null,
      size: size || 20,
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error(PRODUCT_API_ROUTE_MESSAGE.SEARCH_PRODUCT_ERROR, error);
    return NextResponse.json(
      { message: PRODUCT_API_ROUTE_MESSAGE.SEARCH_PRODUCT_ERROR },
      { status: 500 },
    );
  }
};
