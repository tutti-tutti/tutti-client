import type { AddressInputItem } from '@/types';

export const ADDRESS_FORM_CONSTANT = {
  MESSAGE: {
    LAODING: '주소 검색 서비스를 불러오는 중입니다. 잠시 후 다시 시도해주세요.',
  },
  ADDRESS_SEARCH_BUTTON: '주소 검색',
};

export const CHECKOUT_CONSTANT = {
  ERROR_MESSAGES: {
    CHECKOUT_REQUEST_ERROR:
      '예기치 못한 오류가 발생했습니다. 다시 시도해주세요!',
    FORM_WARNING: '배송지 정보를 모두 입력해주세요!',
  },
  MESSAGE: {},
  SECTION_TITLE: {
    RECIPIENT_INFO: '받는 사람 정보',
    CHECKOUT_PRODUCT_INFO: '결제 상품 정보',
    EXPECTED_PAYMENT_AMOUNT: '결제 예상 가격',
    PAYMENT_METHOD: '결제 수단',
  },
  PAYMENT_SUMMARY: {
    TOTAL_PRODUCT_AMOUNT: '총 상품가격',
    DISCOUNT_AMOUNT: '할인 금액',
    DELIVERY_FEE: '배송비',
    TOTAL_PAYMENT_AMOUNT: '총 결제 금액',
  },
  BUTTON: {
    CHECKOUT: '결제하기',
  },
  PAYMENT_TYPE: {
    CARD: 'CARD',
  },
};

export const SHIPPING_ADDRESS_INPUT_ITEMS: AddressInputItem[] = [
  {
    label: '이름',
    name: 'recipientName',
    type: 'text',
    placeholder: '이름',
    vaildType: 'name',
  },
  {
    label: '이메일',
    name: 'recipientEmail',
    type: 'email',
    placeholder: '이메일',
    vaildType: 'email',
  },
  {
    label: '전화번호',
    name: 'recipientPhone',
    type: 'text',
    placeholder: '전화번호',
    vaildType: 'phone',
  },
  {
    label: '우편번호',
    name: 'zipCode',
    type: 'text',
    placeholder: '우편번호',
    vaildType: 'number',
  },
  {
    label: '주소',
    name: 'recipientAddress',
    type: 'text',
    placeholder: '주소',
    vaildType: 'address',
  },
  {
    label: '상세 주소',
    name: 'recipientAddressDetail',
    type: 'text',
    placeholder: '상세 주소',
    vaildType: 'address',
  },
  {
    label: '배송 요청 사항',
    name: 'note',
    type: 'text',
    placeholder: '배송 요청 사항',
    vaildType: 'note',
  },
];
