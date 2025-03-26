export interface FaqItemType {
  id: number;
  categoryName: string;
  question: string;
  answer: string;
  viewCnt: number;
}

export interface CategoryFaqsRequestAPISchema {
  category: string;
  subCategory: string;
  page: number;
  size: number;
}

export interface SearchFaqsRequestAPISchema {
  query: string;
  page: number;
  size: number;
}
