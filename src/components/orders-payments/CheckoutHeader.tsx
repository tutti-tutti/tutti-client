import { StepProgressBar } from '@/components';

const CheckoutHeader = () => {
  const steps = ['장바구니', '주문결제', '주문완료'];

  return (
    <header className="pt-lg md:py-5xl pb-0">
      <div className="gap-lg md:gap-4xl flex flex-col justify-center">
        <h1 className="text-text-primary font-style-title order-2 text-left md:order-1 md:text-center">
          주문 결제
        </h1>
        <div className="order-1 md:order-2">
          <StepProgressBar currentStep="주문결제" steps={steps} />
        </div>
      </div>
    </header>
  );
};

export default CheckoutHeader;
