import { StepProgressBar, PageTitle } from '@/components';

const CartHeader = () => {
  const steps = ['장바구니', '주문결제', '주문완료'];

  return (
    <header className="pt-lg md:py-5xl pb-0">
      <div className="gap-lg md:gap-4xl flex flex-col justify-center">
        <PageTitle className="order-2 text-left md:order-1 md:text-center">
          장바구니
        </PageTitle>
        <div className="order-1 md:order-2">
          <StepProgressBar currentStep="장바구니" steps={steps} />
        </div>
      </div>
    </header>
  );
};

export default CartHeader;
