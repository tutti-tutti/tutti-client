'use client';

import { useRouter } from 'next/navigation';

import { ROUTER_PATH } from '@/constants';
import { cn, formatPrice, toast } from '@/utils';
import { useCart } from '@/hooks';
import {
  Checkbox,
  ExtraButton,
  CartList,
  CartPaymentInfo,
  Button,
} from '@/components';
import CartHeader from './CartHeader';

const CartInfo = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const router = useRouter();
  const {
    checkedCount,
    totalCount,
    isAllChecked,
    paymentInfo,
    toggleAllCheckbox,
    handleDeleteSelected,
    payloadCheckedCartItems,
  } = useCart();

  const {
    totalPrice,
    discountPrice,
    additionalPrice,
    deliveryPrice,
    finalPrice,
  } = paymentInfo;
  const encodedOrderProductItems = encodeURIComponent(
    JSON.stringify(payloadCheckedCartItems),
  );

  const handleCheckoutClick = () => {
    if (!isLoggedIn) {
      toast.warning('로그인 후 이용해주세요!');
      router.push(ROUTER_PATH.LOGIN);
      return;
    }
    if (checkedCount === 0) {
      toast.warning('주문할 상품을 선택해주세요!');
    } else {
      router.push(ROUTER_PATH.CHECKOUT(encodedOrderProductItems));
    }
  };

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

        <section className="gap-md flex flex-col md:sticky md:top-36 md:w-1/3 md:self-start">
          <CartPaymentInfo
            totalPrice={totalPrice}
            discountPrice={discountPrice}
            additionalPrice={additionalPrice}
            deliveryPrice={deliveryPrice}
            finalPrice={finalPrice}
          />
          <Button
            className="font-style-heading"
            variant={checkedCount === 0 ? 'disabled' : 'primary'}
            onClick={handleCheckoutClick}
          >
            {formatPrice(finalPrice)} 결제하기
          </Button>
        </section>
      </div>
    </>
  );
};

export default CartInfo;
