import { FAQ_ENDPOINTS, SERVER_API_BASE_URL } from '@/constants';

export const fetchMainCategories = async () => {
  const response = await fetch(
    `${SERVER_API_BASE_URL}${FAQ_ENDPOINTS.MAIN_CATEGORIES}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'force-cache',
    },
  );

  if (!response.ok) {
    throw new Error(`메인 카테고리 페칭 실패: ${response.statusText}`);
  }

  const data = await response.json();

  return data;
};

export const fetchSubCategories = async (mainCategory: string) => {
  const response = await fetch(
    `${SERVER_API_BASE_URL}${FAQ_ENDPOINTS.SUB_CATEGORIES(mainCategory)}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'force-cache',
    },
  );

  if (!response.ok) {
    throw new Error(`서브 카테고리 페칭 실패: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};

export const fetchCategoryFaqs = async ({
  category,
  subCategory,
  size,
  page,
}: {
  category: string;
  subCategory: string;
  size: number;
  page: number;
}) => {
  const response = await fetch(
    `${SERVER_API_BASE_URL}${FAQ_ENDPOINTS.CATEGORY_FAQS({ category, subCategory, size, page })}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'force-cache',
    },
  );

  if (!response.ok) {
    throw new Error(
      `${category} 카테고리 FAQ 페칭 실패: ${response.statusText}`,
    );
  }

  const data = await response.json();
  return data.faqSearchResults.faqs;
};

export const fetchTopCategoryFaqs = async () => {
  const response = await fetch(`${SERVER_API_BASE_URL}${FAQ_ENDPOINTS.TOP}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'force-cache',
  });

  if (!response.ok) {
    throw new Error(`인기 카테고리 FAQ 페칭 실패: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};

export const fetchSearchedFaqs = async ({
  query,
  page,
  size,
}: {
  query: string;
  page: number;
  size: number;
}) => {
  const response = await fetch(
    `${SERVER_API_BASE_URL}${FAQ_ENDPOINTS.SEARCH_FAQS({ query, size, page })}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'force-cache',
    },
  );

  if (!response.ok) {
    throw new Error(`검색어와 일치하는 FAQ 페칭 실패: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};
