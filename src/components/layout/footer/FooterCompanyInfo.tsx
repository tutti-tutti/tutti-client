import type { FooterInfoProps } from '@/types/footerType';
import FooterInfo from './FooterInfo';

export const FooterCompanyInfo = () => {
  const companyInfoData: FooterInfoProps = {
    title: '쇼핑몰 기본정보',
    rows: [
      {
        horizontal: true,
        items: [
          { label: '상호명', value: 'xxx' },
          { label: '대표자명', value: 'ooo' },
          {
            label: '사업장주소',
            value: 'XX빌딩 908호 서울특별시 마포구',
          },
        ],
      },
      {
        horizontal: true,
        items: [
          { label: '대표전화', value: '010-1234-6778' },
          { label: '사업자 등록번호', value: '211-XX-64382' },
          { label: '통신판매업 신고번호', value: '추후작성예정' },
        ],
      },
      {
        horizontal: true,
        items: [{ label: '개인정보보호책임자', value: 'ooo' }],
      },
    ],
  };

  return <FooterInfo {...companyInfoData} />;
};

export default FooterCompanyInfo;
