'use client';

import { useState, useEffect } from 'react';

import { SearchIcon } from '@/components';
import { useDebounce } from '@/hooks';
import { cn } from '@/utils';

interface SearchInputProps {
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: string;
  className?: string;
  debounceTime?: number;
}

const SearchInput = ({
  placeholder = '현재 찾고 싶은 상품을 검색해주세요!',
  onChange,
  value,
  className = '',
  debounceTime = 300,
}: SearchInputProps) => {
  const [inputValue, setInputValue] = useState(value || '');

  const debouncedValue = useDebounce(inputValue, debounceTime);

  useEffect(() => {
    if (onChange && debouncedValue !== value) {
      onChange(debouncedValue);
    }
  }, [debouncedValue, onChange, value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputValue('');
  };

  return (
    <div className={cn('relative w-full', className)}>
      <div className="from-bg-subBrand via-text-secondary to-text-primaryInteraction absolute inset-0 rounded-full bg-gradient-to-r p-0.5">
        <div className="h-full w-full rounded-full bg-white"></div>
      </div>

      <form
        className="px-2xl py-md relative flex items-center justify-between"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
          className="font-style-subHeading w-full font-normal focus:outline-none"
        />

        <button className="cursor-pointer" aria-label="search">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
