import type { InputHTMLAttributes } from 'react';
import Icon from '@/components/common/Icon';
import type { IconType } from '@/types';
import { cn } from '@/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  icon?: IconType;
  error?: string;
  success?: string;
  className?: string;
  iconProps?: React.SVGProps<SVGSVGElement>;
}

const defaultInputClass =
  'px-md py-sm block w-full rounded-sm border focus:outline-none disabled:text-text-tertiary disabled:border-border-disabled disabled:bg-bg-tertiary font-style-paragraph';
const variantClass = {
  default: 'border-border-primary focus:border-border-focus',
  success:
    'border-border-success focus:border-border-success bg-bg-successSubtle',
  error: 'border-border-danger focus:border-border-danger bg-bg-dangerSubtle',
};

const Input = ({
  label,
  name,
  icon,
  error,
  success,
  className,
  iconProps,
  ...props
}: InputProps) => {
  return (
    <div>
      {label && (
        <label htmlFor={name} className="py-sm font-style-subHeading block">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={name}
          name={name}
          className={cn(
            defaultInputClass,
            {
              [variantClass.error]: error,
              [variantClass.success]: !error && success,
              [variantClass.default]: !error && !success,
            },
            icon && 'pr-10',
            className,
          )}
          {...props}
        />
        {icon && (
          <div className="pr-sm absolute inset-y-0 right-0 flex items-center">
            <Icon iconName={icon} {...iconProps} />
          </div>
        )}
      </div>
      {error && (
        <p className="text-text-danger font-style-paragraph">{error}</p>
      )}
      {success && !error && (
        <p className="text-text-success font-style-paragraph">{success}</p>
      )}
    </div>
  );
};

export default Input;
