import { type ReactNode } from 'react';

import { cn } from '@/utils';
import Icon from './Icon';

type ToastType = 'success' | 'error' | 'warning' | 'linkInfo';

interface ToastProps {
  message: string | ReactNode;
  type: ToastType;
}

const SuccessIcon = () => <Icon iconName="check" />;
const ErrorIcon = () => <Icon iconName="info" />;

const Toast = ({ message, type = 'success' }: ToastProps) => {
  const bgColorClass = {
    success: 'bg-bg-primaryInteraction',
    error: 'bg-bg-dangerInteraction',
    warning: 'bg-bg-warningBold',
    linkInfo: 'border border-border-info bg-bg-primary text-text-primary',
  }[type];

  const Icon = {
    success: SuccessIcon,
    error: ErrorIcon,
    warning: ErrorIcon,
    linkInfo: ErrorIcon,
  }[type];

  return (
    <div
      className={cn(
        'font-pretendard gap-md px-lg py-md text-text-inverse flex items-center rounded-xl shadow-lg',
        bgColorClass,
      )}
    >
      <div className="flex-shrink-0">
        <Icon />
      </div>
      <div className="font-style-paragraph flex-1">{message}</div>
    </div>
  );
};

export default Toast;
