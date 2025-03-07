import FooterCustomerInfo from './FooterCustomerInfo';
import FooterPaymentInfo from './FooterPaymentInfo';

const FooterInfoSection = () => {
  return (
    <div className="space-x-5xl flex">
      <FooterCustomerInfo />
      <FooterPaymentInfo />
    </div>
  );
};

export default FooterInfoSection;
