import { Icon } from '../common';

const MainIntroduction = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="block md:hidden">
          <Icon iconName="mainChatbotMobile" />
        </div>
        <div className="hidden md:block">
          <Icon iconName="mainChatbotDesktop" />
        </div>
      </div>

      <div className="pt-lg md:py-4xl gap-sm md:gap-md bg-bg-primary -mt-28 flex flex-col justify-center text-center md:-mt-64">
        <h1 className="font-style-title text-brand-gradient">
          <span className="md:inline">AI기반 뚜띠 쇼핑몰에</span>
          <span className="md:ml-sm block md:inline">오신 것을 환영합니다</span>
        </h1>

        <p className="text-text-secondary font-style-heading px-md md:px-lg">
          반갑습니다! <span className="text-text-info">뚜띠 챗봇</span>이
          고객님의 완벽한 쇼핑을 위해 도와드리겠습니다!
        </p>
      </div>
    </>
  );
};

export default MainIntroduction;
