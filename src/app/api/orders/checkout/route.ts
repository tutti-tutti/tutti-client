import { NextResponse } from 'next/server';

import { checkoutOrder } from '@/services';

export const POST = async (request: Request) => {
  try {
    const body = await request.json();

    const orderProducts = await checkoutOrder(body.orderItems);

    return NextResponse.json(orderProducts);
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 },
    );
  }
};
