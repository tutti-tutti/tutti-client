import { Icon } from '@/components';

interface NoDataProps {
  children: React.ReactNode;
}

const NoData = ({ children }: NoDataProps) => {
  return (
    <div className="gap-sm md:gap-md py-6xl flex flex-col items-center justify-center md:flex-row">
      <Icon iconName="notFound" className="h-8 w-8 md:h-10 md:w-10" />

      <div className="flex flex-col">
        <div className="text-text-tertiaryInfo font-style-subHeading">
          {children}
        </div>
      </div>
    </div>
  );
};

export default NoData;
