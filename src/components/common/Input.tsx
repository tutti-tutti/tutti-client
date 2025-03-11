import { cn } from '@/utils';
import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  icon?: string;
  error?: string;
  success?: string;
  className?: string;
}

const defaultInputClass =
  'px-md py-sm block w-full rounded-sm border focus:outline-none disabled:text-text-tertiary disabled:border-border-disabled disabled:bg-bg-tertiary';
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
  ...props
}: InputProps) => {
  return (
    <>
      {label && (
        <div className="py-sm flex items-center font-semibold">
          <label htmlFor={name} className="text-text-secondary text-[20px]">
            {label}
          </label>
        </div>
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.9991 3.5C7.30517 3.5 3.5 7.30517 3.5 11.9991C3.5 16.693 7.30517 20.4982 11.9991 20.4982C16.693 20.4982 20.4982 16.693 20.4982 11.9991C20.4982 7.30517 16.693 3.5 11.9991 3.5ZM2 11.9991C2 6.47674 6.47674 2 11.9991 2C17.5214 2 21.9982 6.47674 21.9982 11.9991C21.9982 17.5214 17.5214 21.9982 11.9991 21.9982C6.47674 21.9982 2 17.5214 2 11.9991ZM7.76912 7.76912C8.06202 7.47623 8.53689 7.47623 8.82978 7.76912L11.9991 10.9384L15.1684 7.76912C15.4613 7.47623 15.9362 7.47623 16.2291 7.76912C16.5219 8.06202 16.5219 8.53689 16.2291 8.82978L13.0598 11.9991L16.2291 15.1684C16.5219 15.4613 16.5219 15.9362 16.2291 16.2291C15.9362 16.5219 15.4613 16.5219 15.1684 16.2291L11.9991 13.0597L8.82978 16.2291C8.53689 16.5219 8.06202 16.5219 7.76912 16.2291C7.47623 15.9362 7.47623 15.4613 7.76912 15.1684L10.9384 11.9991L7.76912 8.82978C7.47623 8.53689 7.47623 8.06202 7.76912 7.76912Z"
                fill="#171717"
              />
            </svg>
            {/* 📌 아이콘 컴포넌트로 변경 필요 */}
          </div>
        )}
      </div>
      {error && <p className="text-text-danger text-[16px]">{error}</p>}
      {success && !error && (
        <p className="text-text-success text-[16px]">{success}</p>
      )}
    </>
  );
};

export default Input;
