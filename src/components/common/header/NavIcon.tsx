interface NavIconProps {
  icon: React.ReactNode;
  label: string;
}

const NavIcon = ({ icon, label }: NavIconProps) => {
  return (
    <div className="gap-2xs transition-300 text-text-primary hover:text-text-primaryHover active:text-text-primaryPressed flex cursor-pointer flex-col items-center text-sm transition-colors duration-300">
      <div>{icon}</div>
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
