'use client';

import { useRef, useId } from 'react';

import { Icon } from '@/components';
import { cn } from '@/utils';

interface CheckboxProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'type' | 'onChange'
  > {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  ref?: React.Ref<HTMLInputElement>;
}

const Checkbox = ({
  label,
  checked = false,
  disabled = false,
  onChange,
  className = '',
  name,
  value,
  required = false,
  ref,
  ...props
}: CheckboxProps) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  const checkboxBaseClass =
    'p-2xs flex h-[var(--space-lg)] w-[var(--space-lg)] items-center justify-center rounded-md border-[1.5px] transition-colors duration-300';

  const checkboxStateClass = {
    disabled: 'bg-bg-disabled cursor-not-allowed',
    checked:
      'bg-bg-primaryInteraction border-none hover:bg-bg-primaryHover active:bg-bg-primaryPressed',
    unchecked: 'bg-bg-primary border-border-tertiaryInteraction',
  };

  const currentCheckboxClass = disabled
    ? checkboxStateClass.disabled
    : checked
      ? checkboxStateClass.checked
      : checkboxStateClass.unchecked;

  const labelBaseClass = 'font-style-subHeading';
  const labelStateClass = disabled
    ? 'text-text-disabled'
    : 'text-text-secondary';

  const iconColors = {
    disabled: 'var(--color-icon-tertiary)',
    checked: 'var(--color-icon-inverse)',
    unchecked: 'var(--color-icon-tertiary)',
  };

  const getIconColor = () => {
    if (disabled) return iconColors.disabled;
    if (checked) return iconColors.checked;
    return iconColors.unchecked;
  };

  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(!checked);

      if (checkboxRef.current) {
        checkboxRef.current.focus();
      }
    }
  };

  const uniqueId = useId();
  const id = name || `checkbox-${uniqueId}`;

  return (
    <div
      className={cn(
        'gap-sm flex items-center',
        disabled ? 'cursor-not-allowed' : 'cursor-pointer',
      )}
    >
      <input
        id={id}
        name={name}
        value={value}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        ref={ref || checkboxRef}
        required={required}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange && onChange(e.target.checked)
        }
        className="sr-only"
        {...props}
      />

      <label
        htmlFor={id}
        className={cn(
          'gap-sm flex cursor-pointer items-center',
          disabled && 'cursor-not-allowed',
        )}
        onClick={e => {
          e.preventDefault();
          handleClick();
        }}
      >
        <div className={cn(checkboxBaseClass, currentCheckboxClass)}>
          <Icon
            iconName="check"
            iconProps={{ width: 16, height: 16 }}
            color={getIconColor()}
          />
        </div>

        {label && (
          <span className={cn(labelBaseClass, labelStateClass, className)}>
            {label}
          </span>
        )}
      </label>
    </div>
  );
};

export default Checkbox;
