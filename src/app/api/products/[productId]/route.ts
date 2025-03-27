import { NextResponse } from 'next/server';

import { fetchProductById } from '@/services';

interface Params {
  params: Promise<{ productId: number }>;
}

export const GET = async (_request: Request, { params }: Params) => {
  const { productId } = await params;

  try {
    const product = await fetchProductById(String(productId));

    if (!product) {
      return NextResponse.json(
        { message: '상품을 찾을 수 없습니다.' },
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
