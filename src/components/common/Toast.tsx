import { cn } from '@/utils';
import Icon from './Icon';

type ToastType = 'success' | 'error' | 'warning';

interface ToastProps {
  message: string;
  type: ToastType;
}

const SuccessIcon = () => <Icon iconName="check" />;
const ErrorIcon = () => <Icon iconName="info" />;

const Toast = ({ message, type = 'success' }: ToastProps) => {
  const bgColorClass = {
    success: 'bg-bg-primaryInteraction',
    error: 'bg-bg-dangerInteraction',
    warning: 'bg-bg-warningBold',
  }[type];

  const Icon = {
    success: SuccessIcon,
    error: ErrorIcon,
    warning: ErrorIcon,
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
      <p className="font-style-paragraph flex-1">{message}</p>
    </div>
  );
};

export default Toast;
