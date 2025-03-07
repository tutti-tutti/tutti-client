'use client';

import { useState, useEffect } from 'react';

/**
 * @param value 디바운스할 값
 * @param delay 지연 시간 (ms 단위, 기본값 500ms)
 * @returns 디바운스된 값
 */

const useDebounce = <T>(value: T, delay: number = 500): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export { useDebounce };
