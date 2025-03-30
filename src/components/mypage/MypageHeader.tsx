import { PageTitle } from '@/components';

interface MypageHeaderProps {
  children: React.ReactNode;
}

const MypageHeader = ({ children }: MypageHeaderProps) => {
  return (
    <header className="pt-lg md:py-5xl pb-0">
      <div className="gap-lg md:gap-4xl flex flex-col justify-center">
        <PageTitle className="text-left md:text-left">{children}</PageTitle>
      </div>
    </header>
  );
};

export default MypageHeader;
