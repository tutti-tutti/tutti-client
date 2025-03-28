import { NextResponse } from 'next/server';

import { axiosInstance } from '@/lib';
import { CART_ENDPOINTS } from '@/constants';
import { getAccessToken } from '@/services';

interface Params {
  params: Promise<{ cartItemId: number }>;
}

export const PATCH = async (_request: Request, { params }: Params) => {
  const { cartItemId } = await params;

  try {
    const accessToken = await getAccessToken();
    if (!accessToken) {
      return NextResponse.json(
        { success: false, message: '로그인이 필요합니다.' },
        { status: 401 },
      );
    }

    if (!cartItemId) {
      return NextResponse.json(
        { success: false, message: '장바구니 아이템 ID가 필요합니다.' },
        { status: 400 },
      );
    }

    await axiosInstance.patch(CART_ENDPOINTS.DETAIL(String(cartItemId)));

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
