import Link from 'next/link';

const FooterLinks = () => {
  return (
    <div className="font-style-paragraph gap-lg text-text-secondary flex items-center justify-center md:justify-start">
      <Link href="/">회사소개</Link>
      <Link href="/">이용약관</Link>
      <Link href="/">개인정보처리방침</Link>
      <Link href="/">이용안내</Link>
    </div>
  );
};

export default FooterLinks;
