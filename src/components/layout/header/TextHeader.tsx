import { cn } from '@/utils/cn';
import { ROUTER_PATH, PATH_NAME } from '@/constants';
import { ClickText, LogoutButton } from '@/components';

interface TextHeaderProps {
  email: string;
  isLoggedIn: boolean;
  className?: string;
  country: string;
}

const TextHeader = ({
  email,
  isLoggedIn,
  className = '',
  country,
}: TextHeaderProps) => {
  const renderHeaderItems = (items: React.ReactNode[]) => {
    return items.map((item, index) => (
      <div key={index} className="flex items-center">
        {index > 0 && <span className="text-text-primary mx-4">|</span>}
        {item}
      </div>
    ));
  };

  const commonItems = [
    <ClickText key="signup" href={ROUTER_PATH.SIGNUP}>
      {PATH_NAME.SIGNUP}
    </ClickText>,
    <ClickText key="support" href={ROUTER_PATH.SUPPORT}>
      {PATH_NAME.SUPPORT}
    </ClickText>,
    <ClickText key="country" disabled>
      {PATH_NAME.CURRENT_COUNTRY}({country})
    </ClickText>,
  ];

  const firstItem = isLoggedIn ? (
    <div key="account" className="flex items-center">
      <span className="mr-2">{email}</span>
      <LogoutButton />
    </div>
  ) : (
    <ClickText key="login" href={ROUTER_PATH.LOGIN}>
      {PATH_NAME.LOGIN}
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
