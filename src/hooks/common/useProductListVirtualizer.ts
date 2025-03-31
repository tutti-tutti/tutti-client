'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';

import { useWindowVirtualizer } from '@tanstack/react-virtual';

import { PRODUCT_LIST_LAYOUT_CONFIG } from '@/constants';
import type { Product } from '@/types';

const useProductListVirtualizer = ({ products }: { products: Product[] }) => {
  const [layoutConfig, setLayoutConfig] = useState(
    PRODUCT_LIST_LAYOUT_CONFIG.desktop,
  );

  const handleResize = useCallback(() => {
    const width = window.innerWidth;

    if (width < 768) {
      setLayoutConfig(PRODUCT_LIST_LAYOUT_CONFIG.mobile);
    } else if (width < 1024) {
      setLayoutConfig(PRODUCT_LIST_LAYOUT_CONFIG.tablet);
    } else {
      setLayoutConfig(PRODUCT_LIST_LAYOUT_CONFIG.desktop);
    }
  }, []);

  useEffect(() => {
    handleResize();

    let resizeTimer: NodeJS.Timeout;

    const debouncedResizeHandler = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(handleResize, 100);
    };

    window.addEventListener('resize', debouncedResizeHandler);
    return () => {
      window.removeEventListener('resize', debouncedResizeHandler);
      clearTimeout(resizeTimer);
    };
  }, [handleResize]);

  // 상품 목록을 행 단위로 그룹화
  const groupedRows = useMemo(() => {
    const rowData = [];
    const { columns } = layoutConfig;

    for (let i = 0; i < products.length; i += columns) {
      rowData.push(products.slice(i, i + columns));
    }
    return rowData;
  }, [products, layoutConfig]);

  // 가상화 설정
  const rowVirtualizer = useWindowVirtualizer({
    count: groupedRows.length,
    estimateSize: () => layoutConfig.estimatedSize,
    overscan: layoutConfig.overscan,
    gap: layoutConfig.gap,
  });

  const virtualRows = rowVirtualizer.getVirtualItems();
  const totalSize = rowVirtualizer.getTotalSize();

  return { virtualRows, totalSize, groupedRows, rowVirtualizer };
};

export { useProductListVirtualizer };
