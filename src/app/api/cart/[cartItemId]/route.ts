import { NextResponse } from 'next/server';

import { axiosInstance } from '@/lib';
import { CART_ENDPOINTS } from '@/constants';
import { getAccessToken } from '@/services/tokenService';

export const PATCH = async (
  request: Request,
  { params }: { params: { cartItemId: string } },
) => {
  try {
    const accessToken = await getAccessToken();
    if (!accessToken) {
      return NextResponse.json(
        { success: false, message: '로그인이 필요합니다.' },
        { status: 401 },
      );
    }

    const cartItemId = params.cartItemId;
    if (!cartItemId) {
      return NextResponse.json(
        { success: false, message: '장바구니 아이템 ID가 필요합니다.' },
        { status: 400 },
      );
    }

    await axiosInstance.patch(CART_ENDPOINTS.DETAIL(cartItemId));

    return NextResponse.json({
      success: true,
      message: '상품이 삭제되었습니다.',
    });
  } catch (error) {
    console.error('장바구니 상품 삭제에 실패했습니다.', error);
    return NextResponse.json(
      {
        success: false,
        message:
          (error as Error).message || '장바구니 상품 삭제에 실패했습니다.',
      },
      { status: 500 },
    );
  }
};
