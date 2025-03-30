import { ExtraButton } from '@/components';

interface OrdersExtraActionsProps {
  orderId: number;
}

const OrdersExtraActions = ({ orderId }: OrdersExtraActionsProps) => {
  return (
    <article className="w-full md:flex md:justify-between">
      <div className="text-text-tertiary inline-flex items-center text-base">
        주문번호 : {orderId}
      </div>
      <div className="gap-xs flex justify-end">
        <ExtraButton>장바구니 담기</ExtraButton>
        <ExtraButton>리뷰 작성</ExtraButton>
      </div>
    </article>
  );
};

export default OrdersExtraActions;
