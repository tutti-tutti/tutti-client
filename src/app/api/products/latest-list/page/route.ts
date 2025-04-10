import { NextRequest, NextResponse } from 'next/server';

import { PRODUCTS_ENDPOINTS } from '@/constants';
import { axiosInstance } from '@/lib';

export const GET = async (request: NextRequest) => {
  try {
    const url = new URL(request.url);
    const cursorId = url.searchParams.get('cursorId');
    const size = url.searchParams.get('size') || '20';

    const response = await axiosInstance.get(PRODUCTS_ENDPOINTS.PAGINATION, {
      params: {
        cursorId: cursorId || undefined,
        size: size,
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 },
    );
  }
};
