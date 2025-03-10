const NaverLogoIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="fill-current"
      {...props}
    >
      <g clipPath="url(#clip0_275_458)">
        <path
          d="M14.8382 4V12.546L8.88548 4H4V20H9.14482V11.4284L15.0975 19.9787H20V4H14.8382Z"
          fill="white"
        />
        <path
          d="M14.8382 12.546V4H20V19.9787H15.0975L9.14482 11.4284V20H4V4H8.88548L14.8382 12.546Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_275_458">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default NaverLogoIcon;
