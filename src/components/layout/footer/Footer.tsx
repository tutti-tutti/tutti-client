import { Logo } from '@/components';
import FooterLinks from './FooterLinks';
import FooterCompanyInfo from './FooterCompanyInfo';
import FooterCustomerInfo from './FooterCustomerInfo';

const Footer = () => {
  return (
    <footer className="py-6xl bg-bg-tertiary w-full">
      <div className="px-container layout-max-width mx-auto">
        <div className="gap-3xl md:pb-6xl flex flex-col">
          <section>
            <div className="mb-3xl hidden md:block">
              <Logo />
            </div>
            <FooterLinks />
          </section>

          <div className="gap-3xl flex flex-col justify-between md:flex-row">
            <FooterCompanyInfo />
            <FooterCustomerInfo />
          </div>
        </div>

        <div className="text-text-tertiaryInfo font-style-info pt-3xl border-border-tertiaryHover md:border-t-[0.5px]">
          Copyright &copy; tutti. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
