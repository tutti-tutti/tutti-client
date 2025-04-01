import { notFound } from 'next/navigation';

import { checkoutOrder } from '@/services';
import {
  OrderProductListGroup,
  CheckoutHeader,
  ShippingAddressForm,
  PaymentMethodSelector,
  PaymentSummary,
  SectionTitle,
  Divider,
} from '@/components';

interface OrderCheckoutPageProps {
  searchParams: Promise<{
    orderProductItems?: string;
  }>;
}

export async function generateMetadata({
  searchParams,
}: OrderCheckoutPageProps) {
  const { orderProductItems } = await searchParams;

  if (!orderProductItems) return;

  return {
    title: '주문 결제',
  };
}

/**TODO
 * 인증 인가 확인 -> 인증 안되어 있으면 로그인 페이지로 이동
 * 결제 완료 시 주문 완료 페이지로 이동 -> 주문 내역을 바로 확인
 */

const OrderCheckoutPage = async ({ searchParams }: OrderCheckoutPageProps) => {
  const { orderProductItems: productItemsJson } = await searchParams;
  const decodedProductItemsJson = decodeURIComponent(
    productItemsJson as string,
  );

  /**TODO - 쿼리 형태 타입 가드 추가 예정 */
  if (!decodedProductItemsJson) {
    notFound();
  }

  const payload = JSON.parse(decodedProductItemsJson);
  const {
    totalDiscountAmount,
    totalProductAmount,
    deliveryFee,
    totalAmount,
    orderItems,
  } = await checkoutOrder(payload);

  const addressGapStyles = 'flex flex-col gap-sm';

  return (
    <div className="gap-4xl mx-auto flex max-w-[630px] flex-col">
      <CheckoutHeader />

      <section className={addressGapStyles}>
        <SectionTitle>받는 사람 정보</SectionTitle>
        <ShippingAddressForm gapStyles={addressGapStyles} />
      </section>

      <Divider />

      <section className="gap-lg flex flex-col">
        <SectionTitle className="leading-none">결제 상품 정보</SectionTitle>
        <OrderProductListGroup orderItems={orderItems} />
      </section>

      <section>
        <SectionTitle>결제 예상 가격</SectionTitle>
        <PaymentSummary
          totalProductAmount={totalProductAmount}
          totalDiscountAmount={totalDiscountAmount}
          deliveryFee={deliveryFee}
          totalAmount={totalAmount}
        />
      </section>

      <section className="h-[610px] md:h-[680px]">
        <SectionTitle>결제 수단</SectionTitle>
        <PaymentMethodSelector
          totalDiscountAmount={totalDiscountAmount}
          totalProductAmount={totalProductAmount}
          deliveryFee={deliveryFee}
          totalAmount={totalAmount}
          orderItems={orderItems}
        />
      </section>
    </div>
  );
};

export default OrderCheckoutPage;
