const FooterCompanyInfo = () => {
  return (
    <div className="space-y-lg">
      <p className="text-xl">쇼핑몰 기본정보</p>

      <div className="space-y-sm">
        <div className="space-x-xs">
          <span>상호명</span>
          <span className="text-text-secondary">splash</span>
          <span className="ml-xs">대표자명</span>
          <span className="text-text-secondary">이규화</span>
          <span className="ml-xs">사업장주소</span>
          <span className="text-text-secondary">
            병우빌딩 908호 서울특별시 마포구 서강로 133
          </span>
        </div>

        <div className="space-x-xs">
          <span>대표전화</span>
          <span className="text-text-secondary">010-5059-6778</span>
          <span className="ml-xs">사업자 등록번호</span>
          <span className="text-text-secondary">211-12-64382</span>
          <span className="ml-xs">통신판매업 신고번호</span>
          <span className="text-text-secondary">추후작성예정</span>
        </div>

        <div>
          <span>개인정보보호책임자</span>
          <span className="text-text-secondary ml-2xs">이규화</span>
        </div>
      </div>
    </div>
  );
};

export default FooterCompanyInfo;
