import { redirect } from 'next/navigation';

import { confirmPayApproveSuccess } from '@/services';
import { ROUTER_PATH } from '@/constants';

export default async function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const paymentKey = searchParams.paymentKey as string;
  const orderId = searchParams.orderId as string;
  const amount = searchParams.amount as string;

  if (!paymentKey || !orderId || !amount) {
    redirect(ROUTER_PATH.CHECKOUT_FAIL);
  }

  try {
    // 결제 승인 API 호출
    await confirmPayApproveSuccess({
      paymentKey,
      orderId,
      amount: Number(amount),
    });

    redirect(`/`);
  } catch (error) {
    console.error('결제 승인 중 오류가 발생했습니다', error);

    redirect(ROUTER_PATH.CHECKOUT_FAIL);
  }
}
