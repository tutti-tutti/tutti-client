'use client';

import React, { useState, useRef, useEffect } from 'react';

import { cn } from '@/utils';
import Icon from './Icon';
import RadioOption from './RadioOption';

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  options: Option[];
  placeholder?: string;
  onChange?: (option: Option) => void;
  defaultValue?: Option | null;
}

const Dropdown = ({
  options,
  placeholder = '옵션 없음',
  onChange,
  defaultValue,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    defaultValue || null,
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: Option): void => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        className="border-border-primary py-sm px-lg bg-bg-primary flex cursor-pointer items-center justify-between rounded-md border"
        onClick={toggleDropdown}
      >
        <div className="line-clamp-2 flex-1 overflow-hidden pr-2 break-words">
          <span
            className={cn(
              selectedOption ? 'text-text-info' : 'text-text-secondary',
            )}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>
        <div className="flex-shrink-0">
          <Icon
            iconName="chevronsDown"
            fill="text-icon-secondary"
            className={cn(
              'transtion-transform duration-300',
              isOpen && 'rotate-180',
            )}
          />
        </div>
      </div>

      {isOpen && (
        <div className="animate-dropdown bg-bg-tertiary gap-2xs border-border-secondary shadow-custom-effect mt-xs absolute z-1 flex max-h-60 w-full origin-top flex-col overflow-y-auto rounded-md border transition-all duration-300">
          {options.length > 0 &&
            options.map((option, index) => (
              <RadioOption
                key={index}
                option={option}
                isSelected={selectedOption?.value === option.value}
                onClick={handleOptionClick}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
