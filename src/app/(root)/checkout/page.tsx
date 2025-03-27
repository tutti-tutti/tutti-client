import { redirect } from 'next/navigation';

import { checkoutOrder } from '@/services';
import {
  OrderProductItem,
  CheckoutHeader,
  DeliveryAddress,
  PaymentMethodSelector,
  PaymentSummary,
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

/**NOTE - 구현 순서
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
  console.log('decodedProductItemsJson: ', decodedProductItemsJson);

  /**TODO - 쿼리 형태 타입 가드 추가 예정 */
  if (!decodedProductItemsJson) {
    redirect('checkout/not-found');
  }

  const payload = JSON.parse(decodedProductItemsJson);
  console.log('orderProductItems: ', payload);
  const {
    totalDiscountAmount,
    totalProductAmount,
    deliveryFee,
    totalAmount,
    orderItems,
  } = await checkoutOrder(payload);

  console.log('orderProductItems: ', orderItems);

  const address = {
    recipientName: '엘리자베스',
    recipientPhone: '01012344321',
    recipientAddress: '깐따비야 안드로메다 행성',
    zipCode: '99999',
    note: '안전한 우주 배송 화이팅!!',
    recipientEmail: 'goldegg127@gmail.com',
  };

  return (
    <div className="gap-5xl flex flex-col">
      <CheckoutHeader />
      <DeliveryAddress />
      <section>
        <h2>결제 상품 정보</h2>
        <div>
          <strong>00월 00일(월)</strong> <span>도착 예정</span>
        </div>
        <ul>
          {orderItems.map(item => (
            <li key={item.productItemId}>
              <OrderProductItem {...item} />
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="">결제 수단</h2>
        <PaymentMethodSelector
          totalDiscountAmount={totalDiscountAmount}
          totalProductAmount={totalProductAmount}
          deliveryFee={deliveryFee}
          totalAmount={totalAmount}
          orderItems={orderItems}
          {...address}
        />
      </section>
      <section className="">
        <h2 className="">결제 예상 가격</h2>
        <PaymentSummary
          totalProductAmount={totalProductAmount}
          totalDiscountAmount={totalDiscountAmount}
          deliveryFee={deliveryFee}
          totalAmount={totalAmount}
        />
      </section>
    </div>
  );
};

export default OrderCheckoutPage;
