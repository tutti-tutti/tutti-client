import { NextResponse } from 'next/server';

import { requestRefundPayment } from '@/services';

export const POST = async (request: Request) => {
  try {
    const body = await request.json();

    const data = await requestRefundPayment(body);

    return NextResponse.json(data);
  } catch (error) {
    console.error('환불 요청 생성 중 오류가 발생했습니다: api route', error);

    const status =
      error instanceof Error && 'status' in error
        ? (error.status as number)
        : 500;

    return NextResponse.json(
      { message: (error as Error).message },
      { status: status },
    );
  }
};
