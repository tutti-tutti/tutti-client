import FooterLogo from './FooterLogo';
import FooterNav from './FooterNav';
import FooterCompanyInfo from './FooterCompanyInfo';
import FooterCustomerInfo from './FooterCustomerInfo';

const Footer = () => {
  return (
    <footer className="py-6xl bg-bg-tertiary w-full">
      <div className="mx-auto max-w-[1280px]">
        <div className="space-y-3xl pb-6xl border-border-tertiaryHover border-b-[0.5px]">
          <div className="space-y-4xl">
            <FooterLogo />
            <FooterNav />
          </div>

          <div className="flex justify-between">
            <FooterCompanyInfo />
            <FooterCustomerInfo />
          </div>
        </div>

        <div className="pt-2xl text-text-tertiaryInfo text-sm">
          Copyright &copy; tutti. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
