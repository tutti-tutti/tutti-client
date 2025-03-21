'use client';

import { cn } from '@/utils';
import Icon from './Icon';

interface OptionItem {
  value: string;
  label: string;
}

interface RadioOptionProps {
  option: OptionItem;
  isSelected: boolean;
  onClick: (option: OptionItem) => void;
}

const RadioOption = ({ option, isSelected, onClick }: RadioOptionProps) => {
  return (
    <div
      className="px-sm py-xs gap-2xs flex cursor-pointer items-start"
      onClick={() => onClick(option)}
    >
      <div
        className={cn(
          'mr-xs flex h-[var(--space-lg)] w-[var(--space-lg)] flex-shrink-0 items-center justify-center rounded-full',
          isSelected
            ? 'bg-bg-primary'
            : 'border-border-tertiaryInteraction border-2',
        )}
      >
        {isSelected && <Icon iconName="radio" />}
      </div>
      <span
        className={cn(
          'font-style-paragraph break-words',
          isSelected ? 'text-text-info' : 'text-text-secondary',
        )}
      >
        {option.label}
      </span>
    </div>
  );
};

export default RadioOption;
