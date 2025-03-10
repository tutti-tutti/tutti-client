const FooterPaymentInfo = () => {
  return (
    <div className="space-y-lg">
      <p className="text-xl">결제 정보</p>

      <div>
        <p>무통장 계좌정보</p>
        <span className="text-text-secondary mt-2xs block">
          은행 0000-000-00000 예금주
        </span>
      </div>
    </div>
  );
};

export default FooterPaymentInfo;
