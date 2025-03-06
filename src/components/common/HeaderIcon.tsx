import Link from 'next/link';

interface HeaderIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const HeaderIcon = ({ href, icon, label }: HeaderIconProps) => {
  return (
    <Link href={href}>
      <div className="gap-2xs transition-300 text-primary flex cursor-pointer flex-col items-center text-sm transition-colors duration-300 hover:text-[#5D38E8] active:text-[#38228C]">
        <div>{icon}</div>
        <span className="text-sm" aria-label={label}>
          {label}
        </span>
      </div>
    </Link>
  );
};

export default HeaderIcon;
