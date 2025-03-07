import Link from 'next/link';

interface NavIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const NavIcon = ({ href, icon, label }: NavIconProps) => {
  return (
    <Link href={href}>
      <div className="gap-2xs transition-300 text-text-primary hover:text-text-primaryHover active:text-text-primaryPressed flex cursor-pointer flex-col items-center text-sm transition-colors duration-300">
        <div>{icon}</div>
        <span className="text-sm whitespace-nowrap" aria-label={label}>
          {label}
        </span>
      </div>
    </Link>
  );
};

export default NavIcon;
