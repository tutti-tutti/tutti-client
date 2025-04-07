export const PRODUCTS_CONSTANTS = {
  getRecommendListTitle: (categoryName: string) => ({
    desktop: `당신의 쇼핑 데이터를 분석한 맞춤 ${categoryName} 리스트입니다.`,
    mobile: `당신의 쇼핑 데이터를 분석한\n맞춤 ${categoryName} 리스트입니다.`,
  }),
  FETCH_FAIL_MESSAGE: '상품 정보를 불러오는 데 실패했습니다.',
  FETCH_CATEGORY_FAIL_MESSAGE: '카테고리를 불러오는 중 오류가 발생했습니다.',
  FETCH_RECOMMEND_FAIL_MESSAGE: '추천 상품을 불러오는 중 오류가 발생했습니다.',
  SELECT_OPTION_MESSAGE: '옵션을 선택해주세요!',
  LIKE_RECOMMEND_MESSAGE:
    '고객님의 데이터가 아직 없어 좋아요순으로 상품을 추천한 리스트에요!',
  CATEGORY_TITLE: '뚜띠 쇼핑몰 카테고리',
  MORE_VIEW: '더보기',
  FREE_DELIVERY: '무료배송',
  ALMOST_OUT_OF_STOCK: '품절임박',
  KOREAN_CURRENCY: (price: number) => `${price.toLocaleString()}원`,
  OPTION: '옵션',
  OPTION_SELECT: '옵션 선택',
  NO_OPTION: '옵션 없음',
  QUANTITY: '수량',
  RESTOCK_NOTIFICATION: '이 상품 재입고알림',
};

export const PRODUCT_LIST_LAYOUT_CONFIG = {
  mobile: { columns: 1, estimatedSize: 200, gap: 24, overscan: 10 },
  tablet: { columns: 3, estimatedSize: 424, gap: 80, overscan: 5 },
  desktop: { columns: 5, estimatedSize: 424, gap: 80, overscan: 5 },
};
