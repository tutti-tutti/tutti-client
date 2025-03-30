'use client';

import { useState, useEffect, useMemo } from 'react';

import { useWindowVirtualizer } from '@tanstack/react-virtual';

import type { Product } from '@/types';

const useProductListVirtualizer = ({ products }: { products: Product[] }) => {
  const [columns, setColumns] = useState(5);
  const [estimatedSize, setEstimatedSize] = useState(424);
  const [gap, setGap] = useState(80);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setColumns(1);
        setEstimatedSize(170);
        setGap(24);
      } else if (width < 1024) {
        setColumns(3);
        setEstimatedSize(424);
        setGap(80);
      } else {
        setColumns(5);
        setEstimatedSize(424);
        setGap(80);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 상품 목록을 행 단위로 그룹화
  const groupedRows = useMemo(() => {
    const rowData = [];
    for (let i = 0; i < products.length; i += columns) {
      rowData.push(products.slice(i, i + columns));
    }
    return rowData;
  }, [products, columns]);

  // 가상화 설정
  const rowVirtualizer = useWindowVirtualizer({
    count: groupedRows.length,
    estimateSize: () => estimatedSize,
    overscan: 5,
    gap,
  });

  const virtualRows = rowVirtualizer.getVirtualItems();
  const totalSize = rowVirtualizer.getTotalSize();

  return { virtualRows, totalSize, groupedRows, rowVirtualizer };
};

export { useProductListVirtualizer };
