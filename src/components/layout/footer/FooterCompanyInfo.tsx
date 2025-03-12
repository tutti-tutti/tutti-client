const FooterCompanyInfo = () => {
  return (
    <section className="gap-lg flex flex-col">
      <h6 className="font-style-subHeading">쇼핑몰 기본정보</h6>

      <div className="gap-sm flex flex-col">
        <div className="gap-xs flex flex-col md:flex-row">
          <p>
            <strong>상호명</strong>
            <span className="text-text-secondary ml-2xs">splash</span>
          </p>
          <p>
            <strong>대표자명</strong>
            <span className="text-text-secondary ml-2xs">ooo</span>
          </p>
          <p>
            <strong>사업장주소</strong>
            <span className="text-text-secondary ml-2xs">
              병우빌딩 908호 서울특별시 마포구 서강로 133
            </span>
          </p>
        </div>

        <div className="gap-xs flex flex-col md:flex-row">
          <p>
            <strong>대표전화</strong>
            <span className="text-text-secondary ml-2xs">010-5059-6778</span>
          </p>
          <p>
            <strong>사업자 등록번호</strong>
            <span className="text-text-secondary ml-2xs">211-12-64382</span>
          </p>
          <p>
            <strong>통신판매업 신고번호</strong>
            <span className="text-text-secondary ml-2xs">추후작성예정</span>
          </p>
        </div>

        <div className="gap-xs flex flex-col md:flex-row">
          <p>
            <strong>개인정보보호책임자</strong>
            <span className="text-text-secondary ml-2xs">이규화</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterCompanyInfo;
