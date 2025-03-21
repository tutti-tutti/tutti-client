'use client';

import { useState } from 'react';

import { cn } from '@/utils';

interface SwitchProps {
  defaultValue?: boolean;
  onChange?: (isOn: boolean) => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Switch = ({ defaultValue = false, onChange, onClick }: SwitchProps) => {
  const [isOn, setIsOn] = useState(defaultValue);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsOn(!isOn);

    if (onChange) {
      onChange(!isOn);
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <div
      className={cn(
        'border-border-primary p-2xs flex w-[var(--space-4xl)] cursor-pointer items-center rounded-full border transition-colors duration-300',
        isOn ? 'bg-bg-primaryInteraction' : 'bg-bg-secondary',
      )}
      onClick={handleClick}
    >
      <div
        className={cn(
          'shadow-custom-effect bg-bg-primary p-xs h-[var(--space-md)] w-[var(--space-md)] rounded-full transition-transform duration-300 ease-in-out',
          isOn ? 'translate-x-3.5' : 'translate-x-0',
        )}
      />
    </div>
  );
};

export default Switch;
