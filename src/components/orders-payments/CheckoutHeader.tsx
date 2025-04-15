import { CART_CONSTANTS } from '@/constants';
import { StepProgressBar, PageTitle, PageContentHeader } from '@/components';

const { CART, ORDER_PAYMENT, ORDER_COMPLETE } = CART_CONSTANTS;

const CheckoutHeader = () => {
  const steps = [CART, ORDER_PAYMENT, ORDER_COMPLETE];

  return (
    <PageContentHeader>
      <PageTitle className="order-2 text-left md:order-1 md:text-center">
        {ORDER_PAYMENT}
      </PageTitle>
      <div className="order-1 md:order-2">
        <StepProgressBar currentStep={ORDER_PAYMENT} steps={steps} />
      </div>
    </PageContentHeader>
  );
};

export default CheckoutHeader;
