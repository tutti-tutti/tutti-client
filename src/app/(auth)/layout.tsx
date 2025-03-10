import { JihyeIcon } from '@/assets';
import { ROUTER_PATH } from '@/constants';
import Link from 'next/link';
import React, { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="m-5xl p-6xl shadow-cast h-full w-[632px] rounded-2xl shadow-[0px_var(--effect-shadow-8-cast-y,_4px)_var(--effect-shadow-8-cast-blur,_8px)_0px_var(--effect-shadow-cast,_rgba(0,_0,_0,_0.16)),_0px_var(--effect-shadow-8-core-y,_0px)_var(--effect-shadow-8-core-blur,_4px)_0px_var(--effect-shadow-core,_rgba(0,_0,_0,_0.12))]">
      <div className="flex w-full flex-col">
        <Link
          className="p-sm mb-2xl flex justify-center"
          href={ROUTER_PATH.HOME}
        >
          <JihyeIcon />
        </Link>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
