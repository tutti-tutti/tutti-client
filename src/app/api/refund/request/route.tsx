import { NextResponse } from 'next/server';

import { ORDER_CONSTANT } from '@/constants';
import { requestRefundPayment } from '@/services';

const { ERROR_MESSAGES } = ORDER_CONSTANT;

export const POST = async (request: Request) => {
  try {
    const body = await request.json();

    const data = await requestRefundPayment(body);

    return NextResponse.json(data);
  } catch (error) {
    console.error(`${ERROR_MESSAGES.REFUND}: api route`, error);

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
