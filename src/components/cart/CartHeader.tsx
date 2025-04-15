import { CART_CONSTANTS } from '@/constants';
import { StepProgressBar, PageTitle, PageContentHeader } from '@/components';

const { CART, ORDER_PAYMENT, ORDER_COMPLETE } = CART_CONSTANTS;

const CartHeader = () => {
  const steps = [CART, ORDER_PAYMENT, ORDER_COMPLETE];

  return (
    <PageContentHeader>
      <PageTitle className="order-2 text-left md:order-1 md:text-center">
        {CART}
      </PageTitle>
      <div className="order-1 md:order-2">
        <StepProgressBar currentStep={CART} steps={steps} />
      </div>
    </PageContentHeader>
  );
};

export default CartHeader;
