import { queryOptions } from '@tanstack/react-query';

import { fetchCategories, fetchCategoriesById } from '@/services';
import { CATEGORIES_ENDPOINTS, QUERY_KEYS_ENDPOINT } from '@/constants';
import { CategoryResponseAPISchema, DisplayCategory } from '@/types';

const getCategoryIconById = (id: number) => {
  const iconMap: Record<number, string> = {
    1: 'clothes',
    2: 'grocery',
    3: 'necessity',
    4: 'digital',
    5: 'cosmetic',
  };

  return iconMap[id] ?? 'clothes';
};

export const categoryQueryOptions = queryOptions({
  queryKey: [QUERY_KEYS_ENDPOINT.CATEGORIES, CATEGORIES_ENDPOINTS.LIST],
  queryFn: fetchCategories,
  select: (data: CategoryResponseAPISchema[]) => {
    return data
      .filter(category => category.parentCategory === null)
      .sort((a, b) => a.sortOrder - b.sortOrder)
      .map(category => ({
        categoryId: category.id,
        name: category.name,
        sortOrder: category.sortOrder,
        iconName: getCategoryIconById(category.id),
        isParent: true,
        parentId: null,
      })) as DisplayCategory[];
  },
});

export const categoryByIdQueryOptions = (categoryId: string) =>
  queryOptions({
    queryKey: [QUERY_KEYS_ENDPOINT.CATEGORIES, categoryId],
    queryFn: () => fetchCategoriesById(categoryId),
  });
