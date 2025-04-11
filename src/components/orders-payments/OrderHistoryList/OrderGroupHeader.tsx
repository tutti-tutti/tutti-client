'use client';

import { AllCancelButton } from '@/components';

interface OrderGroupHeaderProps {
  orderId: number;
  orderSheetNo: string;
  isCanceled: boolean;
  children: React.ReactNode;
}

const OrderGroupHeader = ({
  orderId,
  orderSheetNo,
  isCanceled,
  children,
}: OrderGroupHeaderProps) => {
  return (
    <header className="flex w-full items-center justify-between">
      {children}

      <AllCancelButton
        orderId={orderId}
        orderSheetNo={orderSheetNo}
        isCanceled={isCanceled}
      />
    </header>
  );
};

export default OrderGroupHeader;
