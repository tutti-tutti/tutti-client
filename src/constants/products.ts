export const PRODUCTS_CONSTANTS = {
  getRecommendListTitle: (categoryName: string) => ({
    desktop: `당신의 쇼핑 데이터를 분석한 맞춤 ${categoryName} 리스트입니다.`,
    mobile: `당신의 쇼핑 데이터를 분석한\n맞춤 ${categoryName} 리스트입니다.`,
  }),
  MORE_VIEW: '더보기',
  FETCH_FAIL_MESSAGE: '상품 정보를 불러오는 데 실패했습니다.',
};

export const PRODUCT_LIST_LAYOUT_CONFIG = {
  mobile: { columns: 1, estimatedSize: 200, gap: 24, overscan: 10 },
  tablet: { columns: 3, estimatedSize: 424, gap: 80, overscan: 5 },
  desktop: { columns: 5, estimatedSize: 424, gap: 80, overscan: 5 },
};
