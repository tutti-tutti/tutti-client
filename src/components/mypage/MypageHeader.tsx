import { PageTitle, Breadcrumb, PageContentHeader } from '@/components';
interface MypageHeaderProps {
  linkItems: {
    label: string;
    href: string;
  }[];
  pageName: string;
}

const MypageHeader = ({ linkItems, pageName }: MypageHeaderProps) => {
  return (
    <PageContentHeader>
      <Breadcrumb linkItems={linkItems} className="hidden md:block" />
      <PageTitle className="text-left">{pageName}</PageTitle>
    </PageContentHeader>
  );
};

export default MypageHeader;
