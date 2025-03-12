import React, { type ReactNode } from 'react';
import Link from 'next/link';

import { Icon } from '@/components';
import { ROUTER_PATH } from '@/constants';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex justify-center">
      <div className="m-5xl p-6xl shadow-cast shadow-custom-effect flex h-full w-[632px] items-center justify-center rounded-2xl">
        <div className="flex w-full flex-col">
          <Link
            className="p-sm mb-2xl flex justify-center"
            href={ROUTER_PATH.HOME}
          >
            <Icon iconName="comment" />
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
