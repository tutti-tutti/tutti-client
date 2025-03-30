import { redirect } from 'next/navigation';

import { checkoutOrder } from '@/services';
import { formatDateAfterDays } from '@/utils';
import {
  OrderProductListGroup,
  CheckoutHeader,
  DeliveryAddress,
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
 * 0. 인증 인가 확인 -> 인증 안되어 있으면 로그인 페이지로 이동
 * 1. 쿼리 파라미터로 상품 productId, 수량, 장바구니인지 즉시구매인지 확인하기
 * 2. 상품 정보 api 호출 -> 데이터 fetch
 * 3. 회원 정보 api 호출 -> 데이터 fetch
 * 4. 배송지 정보 api 호출 -> 데이터 fetch
 * 5. 결제 수단 정보 api 호출 -> 데이터 fetch
 * 6. 상품 정보, 회원 정보, 배송지 정보, 결제 수단 선택 아이프레임을 화면에 렌더링
 * 7. 배송지 정보가 없을 경우 배송지 정보 입력 후 배송지 api 호출하여 저장
 * 8. 결제하기 버튼 클릭 시 주문 생성 api 호출 -> fetch 결제 정보
 * 9. fetch한 결제 정보로 결제 요청 api 호출 -> toss payments flow
 * 10. 결제 완료 시 주문 완료 페이지로 이동 -> 주문 내역을 바로 확인
 */

const OrderCheckoutPage = async ({ searchParams }: OrderCheckoutPageProps) => {
  const { orderProductItems: productItemsJson } = await searchParams;
  const decodedProductItemsJson = decodeURIComponent(
    productItemsJson as string,
  );

  /**TODO - 쿼리 형태 타입 가드 추가 예정 */
  if (!decodedProductItemsJson) {
    redirect('checkout/not-found');
  }

  const payload = JSON.parse(decodedProductItemsJson);
  const {
    totalDiscountAmount,
    totalProductAmount,
    deliveryFee,
    totalAmount,
    orderItems,
  } = await checkoutOrder(payload);

  // 현재 날짜로 부터 3~7일 뒤 'yyyy-mm-dd'로 배송 날짜 예정
  const getExpectedArrivalAt = () =>
    formatDateAfterDays(Math.floor(Math.random() * 5) + 3);

  const updatedOrderItems = orderItems.map(item =>
    !item.expectedArrivalAt
      ? { ...item, ...{ expectedArrivalAt: getExpectedArrivalAt() } }
      : item,
  );

  const address = {
    recipientName: '엘리자베스',
    recipientPhone: '01012344321',
    recipientAddress: '깐따비야 안드로메다 행성',
    zipCode: '99999',
    note: '안전한 우주 배송 화이팅!!',
    recipientEmail: 'XXX@gmail.com',
  };

  const adressContainerStyles = 'flex flex-col gap-sm';

  return (
    <div className="gap-4xl mx-auto flex max-w-[630px] flex-col">
      <CheckoutHeader />

      <section className={adressContainerStyles}>
        <SectionTitle>받는 사람 정보</SectionTitle>
        <DeliveryAddress className={adressContainerStyles} />
      </section>

      <Divider />

      <section className="gap-lg flex flex-col">
        <SectionTitle className="leading-none">결제 상품 정보</SectionTitle>
        <OrderProductListGroup orderItems={updatedOrderItems} />
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
          orderItems={updatedOrderItems}
          {...address}
        />
      </section>
    </div>
  );
};

export default OrderCheckoutPage;
