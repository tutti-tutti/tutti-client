'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { SearchIcon } from '@/components';
import { useDebounce } from '@/hooks';
import { cn } from '@/utils';
import { PRODUCTS_CONSTANTS, PRODUCTS_ENDPOINTS } from '@/constants';

interface SearchInputProps {
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: string;
  className?: string;
  debounceTime?: number;
}

const SearchInput = ({
  placeholder = PRODUCTS_CONSTANTS.SEARCH_PLACEHOLDER,
  onChange,
  value,
  className = '',
  debounceTime = 300,
}: SearchInputProps) => {
  const router = useRouter();
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

    if (inputValue.trim()) {
      router.push(PRODUCTS_ENDPOINTS.SEARCH_PAGE(inputValue.trim()));
    }
    setInputValue('');
  };

  return (
    <div className={cn('relative w-full', className)}>
      <div className="from-bg-subBrand via-text-secondaryInteraction to-text-primaryInteraction absolute inset-0 rounded-full bg-gradient-to-r p-0.5">
        <div className="h-full w-full rounded-full bg-white"></div>
      </div>

      <form
        className="px-lg md:px-2xl py-xs relative flex items-center justify-between"
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
          <SearchIcon className="h-6 w-6 md:h-auto md:w-auto" />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
