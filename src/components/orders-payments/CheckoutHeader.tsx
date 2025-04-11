import { CART_CONSTANTS } from '@/constants';
import { StepProgressBar, PageTitle } from '@/components';

const { CART, ORDER_PAYMENT, ORDER_COMPLETE } = CART_CONSTANTS;

const CheckoutHeader = () => {
  const steps = [CART, ORDER_PAYMENT, ORDER_COMPLETE];

  return (
    <header className="pt-lg md:py-5xl pb-0">
      <div className="gap-lg md:gap-4xl flex flex-col justify-center">
        <PageTitle className="order-2 text-left md:order-1 md:text-center">
          {ORDER_PAYMENT}
        </PageTitle>
        <div className="order-1 md:order-2">
          <StepProgressBar currentStep={ORDER_PAYMENT} steps={steps} />
        </div>
      </div>
    </header>
  );
};

export default CheckoutHeader;
