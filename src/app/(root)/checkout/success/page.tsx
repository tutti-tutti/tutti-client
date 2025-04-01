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

  const data = await confirmPayApproveSuccess({
    paymentKey,
    orderId: orderId,
    amount: Number(amount),
  });

  if (!data.orderId) {
    redirect(ROUTER_PATH.CHECKOUT_FAIL);
  }

  redirect(ROUTER_PATH.ORDERS_DETAIL(data.orderId));
};

export default PaymentSuccessPage;
