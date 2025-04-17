import Link from 'next/link';

import { pageRouter } from '@/router';
import { ORDER_CONSTANT } from '@/constants';
import { Icon } from '@/components';

interface OrderHistoryListGroupProps {
  orderId: number;
  orderSheetNo: string;
}

const { ORDER_SHEET_NO, TEXT_LINK } = ORDER_CONSTANT;

const OrderIdHeading = ({
  orderId,
  orderSheetNo,
}: OrderHistoryListGroupProps) => {
  return (
    <div className="gap-xs flex items-center text-xl">
      <strong>
        {ORDER_SHEET_NO} {orderSheetNo}
      </strong>
      <Link
        href={pageRouter.orderDetail(orderId)}
        className="text-text-info flex items-center"
      >
        {TEXT_LINK.DETAIL} <Icon iconName="right" />
      </Link>
    </div>
  );
};

export default OrderIdHeading;
