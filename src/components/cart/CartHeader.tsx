import { StepProgressBar, PageTitle } from '@/components';
import { CART_CONSTANTS } from '@/constants';

const { CART, ORDER_PAYMENT, ORDER_COMPLETE } = CART_CONSTANTS;

const CartHeader = () => {
  const steps = [CART, ORDER_PAYMENT, ORDER_COMPLETE];

  return (
    <header className="pt-lg md:py-5xl pb-0">
      <div className="gap-lg md:gap-4xl flex flex-col justify-center">
        <PageTitle className="order-2 text-left md:order-1 md:text-center">
          {CART}
        </PageTitle>
        <div className="order-1 md:order-2">
          <StepProgressBar currentStep={CART} steps={steps} />
        </div>
      </div>
    </header>
  );
};

export default CartHeader;
