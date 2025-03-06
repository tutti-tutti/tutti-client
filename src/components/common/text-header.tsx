import { cn } from '@/utils/cn';
import { ROUTER_PATH } from '@/constants/paths';
import ClickText from './click-text';

interface TextHeaderProps {
  email: string;
  isLoggedIn: boolean;
  className?: string;
}

const TextHeader = ({ email, isLoggedIn, className = '' }: TextHeaderProps) => {
  const renderHeaderItems = (items: React.ReactNode[]) => {
    return items.map((item, index) => (
      <div key={index} className="flex items-center">
        {index > 0 && <span className="mx-4 text-[#262626]">|</span>}
        {item}
      </div>
    ));
  };

  const commonItems = [
    <ClickText key="signup" href={ROUTER_PATH.SIGNUP.PATH}>
      {ROUTER_PATH.SIGNUP.NAME}
    </ClickText>,
    <ClickText key="support" href={ROUTER_PATH.SUPPORT.PATH}>
      {ROUTER_PATH.SUPPORT.NAME}
    </ClickText>,
    <ClickText key="country" disabled>
      현재 국가(한국)
    </ClickText>,
  ];

  const firstItem = isLoggedIn ? (
    <div key="account" className="flex items-center">
      <span className="mr-2">{email}</span>
      <ClickText>로그아웃</ClickText>
    </div>
  ) : (
    <ClickText key="login" href={ROUTER_PATH.LOGIN.PATH}>
      {ROUTER_PATH.LOGIN.NAME}
    </ClickText>
  );

  const allItems = [firstItem, ...commonItems];

  return (
    <div className={cn('flex items-center', className)}>
      {renderHeaderItems(allItems)}
    </div>
  );
};

export default TextHeader;
