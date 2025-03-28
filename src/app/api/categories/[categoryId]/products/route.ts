import { NextResponse } from 'next/server';

import { fetchCategoriesById } from '@/services';

interface Params {
  params: Promise<{ categoryId: number }>;
}

export const GET = async (_request: Request, { params }: Params) => {
  const { categoryId } = await params;

  try {
    const product = await fetchCategoriesById(String(categoryId));

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
