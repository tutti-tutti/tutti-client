export const CART_CONSTANTS = {
  CART_TOAST_MESSAGE: {
    LOGIN: '로그인 후 이용해주세요.',
    OPTION: '주문할 상품을 선택해주세요.',
    DELETE_ERROR: '선택한 상품 삭제에 실패했습니다.',
  },
  CONFIRM_DELETE_MESSAGE: '선택한 상품을 삭제하시겠습니까?',
  FETCH_FAIL_MESSAGE: '장바구니를 불러오는 데 실패했습니다.',
  ADD_SUCCESS_MESSAGE: '장바구니에 추가되었습니다.',
  ADD_FAIL_MESSAGE: '장바구니에 추가하는 데 실패했습니다.',
  DELETE_SELECTED_SUCCESS_MESSAGE: '선택한 상품이 삭제되었습니다.',
  DELETE_SUCCESS_MESSAGE: '상품이 삭제되었습니다.',
  DELETE_FAIL_MESSAGE: '장바구니 상품 삭제에 실패했습니다.',
  EMPTY_CART_MESSAGE: '장바구니가 비어있습니다.',
  LOADING_CART_MESSAGE: '장바구니를 불러오는 중...',

  MAX_CART_ITEMS_COUNT: 10,
  NO_USER_MAX_ADD_COUNT: (count: number) =>
    `비회원은 최대 ${count}개 상품만 담을 수 있습니다.`,
  INVALID_OPTION: '유효하지 않은 상품 옵션입니다.',
  MAX_QUANTITY: (maxQuantity: number) =>
    `최대 구매 수량은 ${maxQuantity}개입니다.`,
  ADD_CART: '장바구니 담기',
  CHECKOUT: '구매하기',
  CART: '장바구니',
  ORDER_PAYMENT: '주문결제',
  ORDER_COMPLETE: '주문완료',
  ALL_CHECKED: '전체선택하기',
  REMOVE_CHECKED: '선택삭제',
  ORDER: '주문하기',
  QUANTITY: '수량',
  CUSTOMER_PER_PURCHASE: (maxQuantity: number) =>
    `고객 당 최대 ${maxQuantity}개 구매가능`,
  FINAL_PAYMENT: '최종 결제금액',
  TOTAL_PRICE: '총 주문금액',
  DISCOUNT_PRICE: '할인금액',
  ADDITIONAL_PRICE: '추가금액',
  DELIVERY_PRICE: '배송비',
  TOTAL_PAYMENT: '총 결제 예정금액',
  PAYMENT: '결제하기',
};

export const CART_API_ROUTE_MESSAGE = {
  NEED_CART_ITEMS: 'cartItems가 필요합니다.',
  NEED_PRODUCT_INFO: '모든 항목에 productItemId와 quantity가 필요합니다.',
  NEED_LOGIN: '로그인이 필요합니다.',
  NEED_CART_ITEM_ID: '장바구니 아이템 ID가 필요합니다.',
  PATCH_SUCCESS_MESSAGE: '해당 상품이 삭제되었습니다.',
  PATCH_FAIL_MESSAGE: '장바구니 상품 삭제에 실패했습니다.',
};
