import { NextResponse } from 'next/server';

import { createCart } from '@/services';

export const POST = async (request: Request) => {
  try {
    const body = await request.json();

    if (!body.productItemId || !body.quantity) {
      return NextResponse.json(
        { message: 'productItemId와 quantity가 필요합니다.' },
        { status: 400 },
      );
    }

    const products = await createCart({
      productItemId: body.productItemId,
      quantity: body.quantity,
    });

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 },
    );
  }
};
