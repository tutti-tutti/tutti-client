import { NextResponse } from 'next/server';

import { axiosInstance } from '@/lib';
import { CART_API_ROUTE_MESSAGE, CART_ENDPOINTS } from '@/constants';
import { getAccessToken } from '@/services';

interface Params {
  params: Promise<{ cartItemId: number }>;
}

const {
  NEED_LOGIN,
  NEED_CART_ITEM_ID,
  PATCH_SUCCESS_MESSAGE,
  PATCH_FAIL_MESSAGE,
} = CART_API_ROUTE_MESSAGE;

export const PATCH = async (_request: Request, { params }: Params) => {
  const { cartItemId } = await params;

  try {
    const accessToken = await getAccessToken();
    if (!accessToken) {
      return NextResponse.json(
        { success: false, message: NEED_LOGIN },
        { status: 401 },
      );
    }

    if (!cartItemId) {
      return NextResponse.json(
        { success: false, message: NEED_CART_ITEM_ID },
        { status: 400 },
      );
    }

    await axiosInstance.patch(CART_ENDPOINTS.DETAIL(String(cartItemId)));

    return NextResponse.json({
      success: true,
      message: PATCH_SUCCESS_MESSAGE,
    });
  } catch (error) {
    console.error(PATCH_FAIL_MESSAGE, error);
    return NextResponse.json(
      {
        success: false,
        message: (error as Error).message || PATCH_FAIL_MESSAGE,
      },
      { status: 500 },
    );
  }
};
