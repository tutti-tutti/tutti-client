'use client';

import { useEffect, useCallback, useState } from 'react';
import {
  loadTossPayments,
  ANONYMOUS,
  TossPaymentsWidgets,
} from '@tosspayments/tosspayments-sdk';

import { toast } from '@/utils';
import { requestPayment } from '@/services';
import { ROUTER_PATH } from '@/constants';
import { useShippingAddressStore } from '@/stores';
import type {
  OrderItem,
  PaymentsRequestAPISchema,
  ShippingAddress,
} from '@/types';
import { Button } from '@/components';

const clientKey = process.env.NEXT_PUBLIC_TOSS_PAYMENTS_CLIENT_KEY || '';
const customerKey = 'bhiy_d4GLTR_4gsaPxpvz'; // toss 에서 제공하는 테스트 key

type PaymentMethodSelectorProps = {
  orderItems: OrderItem[];
} & Omit<
  PaymentsRequestAPISchema,
  'orderItems' | 'paymentType' | keyof ShippingAddress
>;

const PaymentMethodSelector = ({
  totalDiscountAmount,
  totalProductAmount,
  deliveryFee,
  totalAmount,
  orderItems,
}: PaymentMethodSelectorProps) => {
  const { formData } = useShippingAddressStore();

  const [amount] = useState({
    currency: 'KRW',
    value: totalAmount,
  });
  const [ready, setReady] = useState(false);
  const [widgets, setWidgets] = useState<TossPaymentsWidgets | null>(null);

  // 초기화
  useEffect(() => {
    async function fetchPaymentWidgets() {
      const tossPayments = await loadTossPayments(clientKey);
      const widgets = tossPayments.widgets({
        customerKey: customerKey || ANONYMOUS,
      }); // customerKey - 회원결제, ANONYMOUS - 비회원 결제

      setWidgets(widgets);
    }

    fetchPaymentWidgets();
  }, []);

  // 주문 결제 금액
  useEffect(() => {
    async function renderPaymentWidgets() {
      if (!widgets) {
        return;
      }
      // 주문의 결제 금액 설정
      await widgets.setAmount(amount);

      await Promise.all([
        // 결제 UI 렌더링
        widgets.renderPaymentMethods({
          selector: '#payment-method',
          variantKey: 'DEFAULT',
        }),

        // 이용약관 UI 렌더링
        widgets.renderAgreement({
          selector: '#agreement',
          variantKey: 'AGREEMENT',
        }),
      ]);

      setReady(true);
    }

    renderPaymentWidgets();
  }, [widgets, amount]);

  useEffect(() => {
    if (!widgets) {
      return;
    }

    widgets.setAmount(amount);
  }, [widgets, amount]);

  // '결제하기' 버튼 누르면 결제창 띄우기
  const handlePaymentRequest = useCallback(async () => {
    const {
      recipientName,
      recipientPhone,
      recipientAddress,
      recipientAddressDetail,
      zipCode,
      note,
      recipientEmail,
    } = formData;

    const recipientAddressTotal = `${recipientAddress} ${recipientAddressDetail}`;

    if (
      !recipientName ||
      !recipientPhone ||
      !recipientAddressTotal ||
      !zipCode ||
      !note
    ) {
      toast.warning('배송지 정보를 모두 입력해주세요!');

      return;
    }

    try {
      const orderProductItems = orderItems.map(item => ({
        productItemId: item.productItemId,
        quantity: item.quantity,
      }));

      // 결제 준비 데이터를 서버에 전송
      const paymentRequestData = {
        totalDiscountAmount,
        totalProductAmount,
        deliveryFee,
        totalAmount,
        paymentType: 'CARD',
        orderItems: orderProductItems,
        recipientName,
        recipientPhone,
        recipientAddress: recipientAddressTotal,
        zipCode: zipCode,
        note: note,
      };

      // 결제를 요청하기 전에 백엔드 서버에 저장
      // 결제 과정에서 악의적으로 결제 금액이 바뀌는 것을 확인하는 용도
      const { orderNumber, orderName } =
        await requestPayment(paymentRequestData);

      await widgets?.requestPayment({
        orderId: orderNumber,
        orderName: orderName,
        successUrl: `${window.location.origin + ROUTER_PATH.CHECKOUT_SUCCESS}`,
        failUrl: `${window.location.origin + ROUTER_PATH.CHECKOUT_FAIL}`,
        customerEmail: recipientEmail,
        customerName: recipientName,
        customerMobilePhone: recipientPhone,
      });
    } catch (error) {
      console.error('Payment failed:', error);

      toast.error('예기치 못한 오류가 발생했습니다. 다시 시도해주세요!');
      alert(error);
    }
  }, [
    widgets,
    totalDiscountAmount,
    totalProductAmount,
    deliveryFee,
    totalAmount,
    orderItems,
    formData,
  ]);

  return (
    <div className="wrapper mx-[-30px]">
      <div className="box_section">
        {/* 결제 UI */}
        <div id="payment-method" />
        {/* 이용약관 UI */}
        <div id="agreement" />

        <div className="px-[30px]">
          <Button
            type="button"
            variant={!ready ? 'disabled' : 'primary'}
            onClick={handlePaymentRequest}
            className="font-style-heading w-full"
          >
            결제하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodSelector;
