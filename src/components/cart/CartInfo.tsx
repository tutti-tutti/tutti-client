'use client';

import {
  Checkbox,
  ExtraButton,
  CartList,
  CartPaymentInfo,
  Button,
} from '@/components';
import { cn } from '@/utils';
import { useCart } from '@/hooks';
import CartHeader from './CartHeader';

const CartInfo = () => {
  const {
    error,
    checkedCount,
    totalCount,
    isAllChecked,
    paymentInfo,
    toggleAllCheckbox,
    handleDeleteSelected,
  } = useCart();

  if (error) {
    return (
      <div className="py-xl text-center">
        <p className="font-style-heading text-text-danger">
          {error?.message || String(error)}
        </p>
      </div>
    );
  }

  const { totalPrice, discountPrice, deliveryPrice, finalPrice } = paymentInfo;

  return (
    <>
      <CartHeader />

      <div className="gap-2xl flex flex-col md:flex-row">
        <section className="-mt-4xl md:w-2/3">
          <div className="gap-sm flex items-center">
            <div className="py-md flex w-full items-center justify-between">
              <Checkbox
                label={`전체선택하기 (${checkedCount}/${totalCount})`}
                checked={isAllChecked}
                onChange={checked => toggleAllCheckbox(checked)}
                disabled={totalCount === 0}
              />
              <ExtraButton
                className={cn(
                  '!px-xs !py-2xs md:px-md md:py-xs',
                  checkedCount === 0 && 'cursor-not-allowed',
                )}
                onClick={handleDeleteSelected}
              >
                선택삭제
              </ExtraButton>
            </div>
          </div>
          <CartList />
        </section>

        <section className="gap-md flex flex-col md:w-1/3">
          <CartPaymentInfo
            totalPrice={totalPrice}
            discountPrice={discountPrice}
            deliveryPrice={deliveryPrice}
            finalPrice={finalPrice}
          />
          <Button
            className="font-style-heading"
            variant={totalCount === 0 ? 'disabled' : 'primary'}
          >
            주문하기({totalCount}개)
          </Button>
        </section>
      </div>
    </>
  );
};

export default CartInfo;
