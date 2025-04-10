import { Icon } from '@/components';

interface NoDataProps {
  children: React.ReactNode;
}

const NoData = ({ children }: NoDataProps) => {
  return (
    <div className="gap-lg md:gap-7xl py-5xl flex flex-col items-center justify-center md:flex-row">
      <Icon
        iconName="notFound"
        className="h-[228px] w-[228px] md:h-[346px] md:w-[346px]"
      />

      <div className="flex flex-col">
        <div className="text-text-tertiaryInfo font-style-heading mb-sm md:mb-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default NoData;
