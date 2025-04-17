import { redirect } from 'next/navigation';

import { pageRouter } from '@/router';
import { confirmPayApproveSuccess } from '@/services';

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
    redirect(pageRouter.orderCheckoutSuccess);
  }

  const data = await confirmPayApproveSuccess({
    paymentKey,
    orderId: orderId,
    amount: Number(amount),
  });

  if (!data.orderId) {
    redirect(pageRouter.orderCheckoutFail);
  }

  redirect(pageRouter.orderDetail(data.orderId));
};

export default PaymentSuccessPage;
