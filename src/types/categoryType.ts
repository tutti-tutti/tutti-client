import type { IconType } from './iconType';

export interface ParentCategory {
  id: number;
  parentCategory: null;
}

export interface CategoryResponseAPISchema {
  id: number;
  sortOrder: number;
  name: string;
  parentCategory: null | ParentCategory;
}

export interface DisplayCategory {
  categoryId: number;
  name: string;
  sortOrder: number;
  iconName: IconType;
  isParent: boolean;
  parentId: number | null;
}
