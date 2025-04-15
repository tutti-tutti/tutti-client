import { notFound } from 'next/navigation';

import { PATH_NAME, CHECKOUT_CONSTANT } from '@/constants';
import { checkoutOrder } from '@/services';
import {
  CheckoutProductListGroup,
  CheckoutHeader,
  ShippingAddressForm,
  PaymentMethodSelector,
  PaymentSummary,
  SectionTitle,
  Divider,
} from '@/components';

interface CheckoutPageProps {
  searchParams: Promise<{
    checkoutRequestItems?: string;
  }>;
}

export async function generateMetadata({ searchParams }: CheckoutPageProps) {
  const { checkoutRequestItems } = await searchParams;

  if (!checkoutRequestItems) return;

  return {
    title: PATH_NAME.ORDER_CHECKOUT,
  };
}

const { SECTION_TITLE } = CHECKOUT_CONSTANT;

const ADDRESS_GAP_STYLES = 'flex flex-col gap-sm';

const CheckoutPage = async ({ searchParams }: CheckoutPageProps) => {
  const { checkoutRequestItems: checkoutRequestItemsJson } = await searchParams;
  const decodedCheckoutRequestItemsJson = decodeURIComponent(
    checkoutRequestItemsJson as string,
  );

  /**TODO - 쿼리 형태 타입 가드 추가 예정 */
  if (!decodedCheckoutRequestItemsJson) {
    notFound();
  }

  const checkoutRequestItems = JSON.parse(decodedCheckoutRequestItemsJson);
  const {
    totalDiscountAmount,
    totalProductAmount,
    deliveryFee,
    totalAmount,
    orderItems,
  } = await checkoutOrder(checkoutRequestItems);

  return (
    <div className="gap-4xl mx-auto flex max-w-[630px] flex-col">
      <CheckoutHeader />

      <section className={ADDRESS_GAP_STYLES}>
        <SectionTitle>{SECTION_TITLE.RECIPIENT_INFO}</SectionTitle>
        <ShippingAddressForm gapStyles={ADDRESS_GAP_STYLES} />
      </section>

      <Divider />

      <section className="gap-lg flex flex-col">
        <SectionTitle className="leading-none">
          {SECTION_TITLE.CHECKOUT_PRODUCT_INFO}
        </SectionTitle>
        <CheckoutProductListGroup orderItems={orderItems} />
      </section>

      <section>
        <SectionTitle>{SECTION_TITLE.EXPECTED_PAYMENT_AMOUNT}</SectionTitle>
        <PaymentSummary
          totalProductAmount={totalProductAmount}
          totalDiscountAmount={totalDiscountAmount}
          deliveryFee={deliveryFee}
          totalAmount={totalAmount}
        />
      </section>

      <section className="h-[610px] md:h-[680px]">
        <SectionTitle>{SECTION_TITLE.PAYMENT_METHOD}</SectionTitle>
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

export default CheckoutPage;
