import { PageTitle, Breadcrumb } from '@/components';
interface MypageHeaderProps {
  linkItems: {
    label: string;
    href: string;
  }[];
  pageName: string;
}

const MypageHeader = ({ linkItems, pageName }: MypageHeaderProps) => {
  return (
    <header className="pt-lg md:py-5xl pb-0">
      <div className="gap-lg justify-cente flex flex-col">
        <Breadcrumb linkItems={linkItems} className="hidden sm:block" />
        <PageTitle className="hidden text-left sm:block md:text-left">
          {pageName}
        </PageTitle>
      </div>
    </header>
  );
};

export default MypageHeader;
