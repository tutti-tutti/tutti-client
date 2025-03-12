const FooterCustomerInfo = () => {
  return (
    <section className="gap-lg flex flex-col">
      <h6 className="font-style-subHeading">고객센터 정보</h6>

      <div className="gap-sm flex flex-col">
        <div className="gap-sm flex flex-col">
          <p>
            <strong>상담/주문 전화</strong>
            <span className="text-text-secondary ml-2xs">010-1234-6778</span>
          </p>
          <p>
            <strong>상담/주문 이메일</strong>
            <span className="text-text-secondary ml-2xs">xxxxx@naver.com</span>
          </p>
          <p>
            <strong>CS 운영시간</strong>
            <span className="text-text-secondary ml-2xs">
              10:00 AM - 6:00 PM
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterCustomerInfo;
