'use client';

import { AllCancelButton } from '@/components';

interface OrderGroupHeaderProps {
  orderId: number;
  orderNumber: string;
  isCanceled: boolean;
  children: React.ReactNode;
}

const OrderGroupHeader = ({
  orderId,
  orderNumber,
  isCanceled,
  children,
}: OrderGroupHeaderProps) => {
  return (
    <header className="flex w-full items-center justify-between">
      {children}

      <AllCancelButton
        orderId={orderId}
        orderNumber={orderNumber}
        isCanceled={isCanceled}
      />
    </header>
  );
};

export default OrderGroupHeader;
