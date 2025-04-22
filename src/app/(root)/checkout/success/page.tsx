import { redirect } from 'next/navigation';

import { pagePath } from '@/navigator';
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
    redirect(pagePath.orderCheckoutSuccess);
  }

  const data = await confirmPayApproveSuccess({
    paymentKey,
    orderId: orderId,
    amount: Number(amount),
  });

  if (!data.orderId) {
    redirect(pagePath.orderCheckoutFail);
  }

  redirect(pagePath.orderDetail(data.orderId));
};

export default PaymentSuccessPage;
