const FooterCustomerInfo = () => {
  return (
    <div className="gap-lg flex flex-col">
      <p className="text-xl">고객센터 정보</p>

      <div className="gap-sm flex flex-col">
        <div>
          <div>
            <span>상담/주문 전화</span>
            <span className="text-text-secondary ml-2xs">010-5059-6778</span>
          </div>
          <div className="mt-xs">
            <p>상담/주문 이메일</p>
            <span className="text-text-secondary block">db99136@naver.com</span>
          </div>
          <div className="mt-xs">
            <span>CS운영시간</span>
            <span className="text-text-secondary ml-2xs">추후작성예정</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCustomerInfo;
