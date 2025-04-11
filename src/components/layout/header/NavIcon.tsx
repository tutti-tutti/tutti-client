import { Icon } from '@/components';
import type { IconType } from '@/types';

interface NavIconProps {
  icon: IconType;
  label: string;
}

const NavIcon = ({ icon, label }: NavIconProps) => {
  return (
    <div className="gap-2xs transition-300 text-text-primary hover:text-text-primaryHover active:text-text-primaryPressed flex cursor-pointer flex-col items-center text-sm transition-colors duration-300">
      <Icon iconName={icon} style={{ height: '24px', width: '24px' }} />
      <span
        className="hidden text-sm whitespace-nowrap md:block"
        aria-label={label}
      >
        {label}
      </span>
    </div>
  );
};

export default NavIcon;
