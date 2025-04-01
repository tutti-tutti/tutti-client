import React, { type ReactNode } from 'react';
import Link from 'next/link';

import { Icon } from '@/components';
import { ROUTER_PATH } from '@/constants';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="m-5xl md:p-6xl max-md:p-3xl max-sm:p-lg flex h-full flex-col items-center justify-center rounded-2xl max-md:w-full md:w-[632px]">
      <div className="w-full">
        <Link
          className="p-sm mb-2xl flex justify-center"
          href={ROUTER_PATH.HOME}
        >
          <Icon iconName="logo" />
        </Link>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
