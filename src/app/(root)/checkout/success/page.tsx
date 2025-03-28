import { redirect } from 'next/navigation';

import { confirmPayApproveSuccess } from '@/services';
import { ROUTER_PATH } from '@/constants';

interface PaymentSuccessPageProps {
  searchParams: Promise<{
    paymentKey?: string;
    orderId?: string;
    amount?: string;
  }>;
}

const PaymentSuccessPage = async ({
  searchParams,
}: PaymentSuccessPageProps) => {
  const { paymentKey, orderId, amount } = await searchParams;

  if (!paymentKey || !orderId || !amount) {
    redirect(ROUTER_PATH.CHECKOUT_FAIL);
  }

  try {
    await confirmPayApproveSuccess({
      paymentKey,
      orderId,
      amount: Number(amount),
    });

    redirect(ROUTER_PATH.ORDERS_HISTORY);
  } catch (error) {
    console.error('결제 승인 중 오류가 발생했습니다', error);

    redirect(ROUTER_PATH.CHECKOUT_FAIL);
  }
};

export default PaymentSuccessPage;
