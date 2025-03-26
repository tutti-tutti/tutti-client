'use client';

import { toast as sonnerToast } from 'sonner';

import { Toast } from '@/components';

type ToastType = 'success' | 'error' | 'warning';

interface ToastOptions {
  type?: ToastType;
  duration?: number;
}

export const toast = {
  success: (message: string, options?: Omit<ToastOptions, 'type'>) => {
    return sonnerToast.custom(
      () => <Toast message={message} type="success" />,
      { duration: options?.duration || 3000 },
    );
  },

  error: (message: string, options?: Omit<ToastOptions, 'type'>) => {
    return sonnerToast.custom(() => <Toast message={message} type="error" />, {
      duration: options?.duration || 3000,
    });
  },

  warning: (message: string, options?: Omit<ToastOptions, 'type'>) => {
    return sonnerToast.custom(
      () => <Toast message={message} type="warning" />,
      {
        duration: options?.duration || 3000,
      },
    );
  },
};
