import type { FooterInfoProps } from '@/types/footerType';
import FooterInfo from './FooterInfo';

export const FooterCustomerInfo = () => {
  const customerInfoData: FooterInfoProps = {
    title: '고객센터 정보',
    rows: [
      {
        horizontal: false,
        items: [
          { label: '상담/주문 전화', value: '010-1234-6778' },
          { label: '상담/주문 이메일', value: 'xxxxx@naver.com' },
          { label: 'CS 운영시간', value: '10:00 AM - 6:00 PM' },
        ],
      },
    ],
  };

  return <FooterInfo {...customerInfoData} />;
};

export default FooterCustomerInfo;
