import { NextResponse } from 'next/server';

import { requestPayment } from '@/services';

export const POST = async (request: Request) => {
  try {
    const body = await request.json();

    const data = await requestPayment(body);

    return NextResponse.json(data);
  } catch (error) {
    console.error('결제 요청 생성 중 오류가 발생했습니다: api route - ', error);

    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 },
    );
  }
};
