import { useQuery } from '@tanstack/react-query';

import { cn } from '@/utils/cn';
import { ROUTER_PATH, PATH_NAME } from '@/constants';
import { ClickText, LogoutButton } from '@/components';
import { memberDataQueryOptions } from '@/queries';

interface TextHeaderProps {
  isLogin: boolean;
  className?: string;
  country: string;
}

const TextHeader = ({ isLogin, className = '', country }: TextHeaderProps) => {
  const renderHeaderItems = (items: React.ReactNode[]) => {
    const filteredItems = items.filter(Boolean);

    return filteredItems.map((item, index) => (
      <div key={index} className="flex items-center">
        {index > 0 && <span className="text-text-primary mx-4">|</span>}
        {item}
      </div>
    ));
  };

  const { data: memberData } = useQuery(memberDataQueryOptions(isLogin));

  const authItems = !memberData
    ? [
        <ClickText key="login" href={ROUTER_PATH.LOGIN}>
          {PATH_NAME.LOGIN}
        </ClickText>,
        <ClickText key="signup" href={ROUTER_PATH.SIGNUP}>
          {PATH_NAME.SIGNUP}
        </ClickText>,
      ]
    : [];

  const commonItems = [
    <ClickText key="support" href={ROUTER_PATH.FAQS}>
      {PATH_NAME.FAQS}
    </ClickText>,
    <ClickText key="country" disabled>
      {PATH_NAME.CURRENT_COUNTRY}({country})
    </ClickText>,
  ];

  const firstItem = memberData ? (
    <div key="account" className="flex items-center">
      <span className="mr-2">{memberData?.email}</span>
      <LogoutButton />
    </div>
  ) : null;

  const allItems = [firstItem, ...authItems, ...commonItems].filter(Boolean);

  return (
    <div className={cn('flex items-center', className)}>
      {renderHeaderItems(allItems)}
    </div>
  );
};

export default TextHeader;
