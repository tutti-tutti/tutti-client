'use client';

import { PATH_NAME } from '@/constants';
import ClickTextButton from './ClickTextButton';

const LogoutButton = () => {
  const handleLogout = () => {
    console.log('logout completed'); // 추후 로그아웃 기능 추가
  };

  return (
    <ClickTextButton onClick={handleLogout}>{PATH_NAME.LOGOUT}</ClickTextButton>
  );
};

export default LogoutButton;
