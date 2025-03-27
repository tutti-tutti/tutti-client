import { NextResponse } from 'next/server';

import { addCart, fetchCart } from '@/services';

export const GET = async () => {
  try {
    const cart = await fetchCart();
    return NextResponse.json(cart);
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 },
    );
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();

    if (
      !body.cartItems ||
      !Array.isArray(body.cartItems) ||
      body.cartItems.length === 0
    ) {
      return NextResponse.json(
        { message: 'cartItems가 필요합니다.' },
        { status: 400 },
      );
    }

    const cartItem = body.cartItems[0];

    if (!cartItem.productItemId || !cartItem.quantity) {
      return NextResponse.json(
        { message: 'productItemId와 quantity가 필요합니다.' },
        { status: 400 },
      );
    }

    const products = await addCart(
      cartItem.productId,
      cartItem.productItemId,
      cartItem.quantity,
    );

    return NextResponse.json({
      success: true,
      message: '장바구니에 추가되었습니다.',
      data: products,
    });
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 },
    );
  }
};
