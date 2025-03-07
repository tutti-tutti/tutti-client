import FooterLogo from './FooterLogo';
import FooterNav from './FooterNav';
import FooterCompanyInfo from './FooterCompanyInfo';
import FooterInfoSection from './FooterInfoSection';

const Footer = () => {
  return (
    <footer className="py-6xl bg-bg-tertiary w-full">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-3xl pb-5xl border-border-tertiaryHover border-b-[0.5px]">
          <div className="space-y-4xl">
            <FooterLogo />
            <FooterNav />
          </div>

          <div className="flex justify-between">
            <FooterCompanyInfo />
            <FooterInfoSection />
          </div>
        </div>

        <div className="pt-2xl text-text-tertiaryInfo text-sm">
          Copyright &copy; splash. All Rights Reserved. Hosting by Cafe24 Corp.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
