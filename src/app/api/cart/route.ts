import { NextResponse } from 'next/server';

import { addCart, fetchCart } from '@/services';
import { CART_API_ROUTE_MESSAGE, CART_CONSTANTS } from '@/constants';

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
        { message: CART_API_ROUTE_MESSAGE.NEED_CART_ITEMS },
        { status: 400 },
      );
    }

    for (const cartItem of body.cartItems) {
      if (!cartItem.productItemId || !cartItem.quantity) {
        return NextResponse.json(
          { message: CART_API_ROUTE_MESSAGE.NEED_PRODUCT_INFO },
          { status: 400 },
        );
      }
    }

    const products = await addCart(body.productId, body.cartItems);

    return NextResponse.json({
      success: true,
      message: CART_CONSTANTS.ADD_SUCCESS_MESSAGE,
      data: products,
    });
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 },
    );
  }
};
